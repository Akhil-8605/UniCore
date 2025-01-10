import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/homepage";
import AuthPage from "./Components/AuthPage";
import ContactPage from "./Pages/contactpage";

import LibraryPage from "./Pages/library-management/LibraryPage"
import AdminLibrary from "./Pages/library-management/admin-library";
import AcademicCalendar from "./Pages/AcademicCalendarPage";

function App() {
  return (
    <>
      <Router basename="/unicore-demo">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/contact" element={<ContactPage/>}></Route>
          
          <Route path="/admin-library" element={<AdminLibrary/>}></Route>
          <Route path="/library" element={<LibraryPage/>}></Route>

          <Route path="/acedamic-calendar" element={<AcademicCalendar/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
