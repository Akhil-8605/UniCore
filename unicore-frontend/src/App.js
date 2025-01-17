import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/homepage";
import AuthPage from "./Components/AuthPage";
import ContactPage from "./Pages/contactpage";

import LibraryPage from "./Pages/library-management/LibraryPage"
import AdminLibrary from "./Pages/library-management/admin-library";
import AcademicCalendar from "./Pages/AcademicCalendarPage";
import Admissions from "./Pages/AdmissionsPage";
import Academics from "./Pages/academics/AcademicsPage";
import QuestionPapers from "./Pages/academics/QuestionPapersPage";
import ClassTestResults from './Pages/academics/ClassTestResultsPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/contact" element={<ContactPage/>}></Route>
          
          <Route path="/admin-library" element={<AdminLibrary/>}></Route>
          <Route path="/library" element={<LibraryPage/>}></Route>

          <Route path="/academic-calendar" element={<AcademicCalendar/>}></Route>
          <Route path="/admissions" element={<Admissions/>}></Route>

          <Route path="/academics" element={<Academics/>}></Route>
          <Route path="/academics/question-papers" element={<QuestionPapers/>}></Route>
          <Route path="/academics/class-test-results" element={<ClassTestResults />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
