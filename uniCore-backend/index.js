const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const WebSocket = require("ws");

const app = express();
const wss = new WebSocket.Server({ noServer: true });

app.use(cors());
app.use(express.json());

// Create an in-memory SQLite database
const db = new sqlite3.Database(":memory:");

// Create a table
db.serialize(() => {
  db.run("CREATE TABLE students (id INT, name TEXT, age INT)");
  const stmt = db.prepare("INSERT INTO students VALUES (?, ?, ?)");
  stmt.run(202, "Akhilesh", 17);
  stmt.run(251, "Onkar Saka", 19);
  stmt.run(224, "Sanju Kanki", 17);
  stmt.run(209, "Santosh Mateti", 18);
  stmt.finalize();
});

// Endpoint to fetch students
app.get("/students", (req, res) => {
  db.all("SELECT * FROM students", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    }
    res.json({ students: rows });
  });
});

// WebSocket connection handling
app.server = app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});

wss.on("connection", (ws) => {
  console.log("Client connected");
  ws.on("message", (message) => {
    console.log("received: %s", message);
  });
});

// WebSocket upgrade handling
app.server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit("connection", ws, request);
  });
});

// Endpoint to add a new student (to trigger real-time update)
app.post("/students", (req, res) => {
  const { id, name, age } = req.body;
  const stmt = db.prepare("INSERT INTO students VALUES (?, ?, ?)");
  stmt.run(id, name, age, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(
          JSON.stringify({ type: "UPDATE", message: "Data updated" })
        );
      }
    });
    res.status(201).json({ id, name, age });
  });
});

// POST endpoint to insert new student data into the database
app.post("/students", (req, res) => {
  const { id, name, age } = req.body;
  const stmt = db.prepare(
    "INSERT INTO students (id, name, age) VALUES (?, ?, ?)"
  );
  stmt.run(id, name, age, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    // Notify WebSocket clients about data change
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(
          JSON.stringify({ type: "UPDATE", message: "Data updated" })
        );
      }
    });

    res.status(201).json({ id, name, age });
  });
});

app.post("/students", (req, res) => {
  const { id, name, age } = req.body;
  const stmt = db.prepare("DELETE FROM students WHERE id = (?)");
  stmt.run(id, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(
          JSON.stringify({ type: "UPDATE", message: "Data updated" })
        );
      }
    });
    res.status(201).json({ id, name, age });
  });
});
