import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/homepage";
import AuthPage from "./Authentication/AuthPage";
import ContactPage from "./Pages/contactpage";
import LibraryPage from "./Pages/library-management/LibraryPage";
import AdminLibrary from "./Pages/library-management/admin-library";
import AcademicCalendar from "./Pages/AcademicCalendarPage";
import Admissions from "./Pages/AdmissionsPage";
import Academics from "./Pages/academics/AcademicsPage";
import QuestionPapers from "./Pages/academics/QuestionPapersPage";
import ClassTestResults from "./Pages/academics/ClassTestResultsPage";
import PrivateRoute from "./Authentication/PrivateRoute";
import { AuthProvider } from "./Authentication/AuthProvider";
// import FacultyDashboard from "./Pages/FacultyDashboard"; // New Faculty Page

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin-library" element={<AdminLibrary />} />
          </Route>

          <Route element={<PrivateRoute allowedRoles={["student", "admin"]} />}>
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/academics" element={<Academics />} />
            <Route
              path="/academics/question-papers"
              element={<QuestionPapers />}
            />
            <Route
              path="/academics/class-test-results"
              element={<ClassTestResults />}
            />
          </Route>

          <Route element={<PrivateRoute allowedRoles={["faculty"]} />}>
            {/* <Route path="/faculty-dashboard" element={<FacultyDashboard />} /> */}
          </Route>

          <Route
            element={
              <PrivateRoute allowedRoles={["student", "admin", "faculty"]} />
            }
          >
            
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
