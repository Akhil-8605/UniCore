import React, { useEffect, useState } from "react";
import "./App.js"
import axios from "axios";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    // Fetch students from the backend when the component mounts
    axios
      .get("http://localhost:5000/students")
      .then((response) => {
        setStudents(response.data.students);
      })
      .catch((error) => {
        console.error("There was an error fetching the students!", error);
      });
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send POST request to the backend to add new student
    axios
      .post("http://localhost:5000/students", { id, name, age })
      .then((response) => {
        // After successful insertion, update the student list
        setStudents((prevStudents) => [...prevStudents, { id, name, age }]);

        // Reset input fields
        setId("");
        setName("");
        setAge("");
      })
      .catch((error) => {
        console.error("There was an error adding the student!", error);
      });
  };

  return (
    <div>
      <h1>Students List</h1>

      {/* Form to add a new student */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Student ID:</label>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Student Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Student</button>
      </form>

      {/* Display list of students */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <main className="maindiv">
        <h1>Color pallets Used For uniCore</h1>
        <div className="div1">Color 1</div>
        <div className="div2">Color 2</div>
        <div className="div3">Color 3</div>
        <div className="div4">Color 4</div>
        <div className="div5">Color 5</div>
        <div className="div6">Color 6</div>
        <div className="div7">Color 7</div>
      </main>
    </div>
  );
};

export default Students;
