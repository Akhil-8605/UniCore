import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/homepage";
import AuthPage from "./Components/AuthPage";
import ContactPage from "./Pages/contactpage";
import LibraryPage from "./Pages/library-management/LibraryPage";
import AdminLibrary from "./Pages/library-management/admin-library";
import AcademicCalendar from "./Pages/AcademicCalendarPage";

function App() {
  return (
    <>
      {/* Updated Router with correct basename */}
      <Router basename="/unicore-demo">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin-library" element={<AdminLibrary />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/academic-calendar" element={<AcademicCalendar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
