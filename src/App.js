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
import Dashboard from "./Student/Dashboard";
import DepartmentsPage from "./Pages/DepartmentsPage";
import StudentLibraryPage from "./Student/LibraryPage";
import ProfilePage from "./Student/Profile";
import AttendancePage from "./Student/Attendance";
import ExamPortalPage from "./Student/Exams";
import CertificatesPage from "./Student/Certificates";
import Assignments from "./Student/Assignments";
import Schedules from "./Student/Schedule";
import SamplePage from "./Pages/Sample";
import CoursePage from "./Pages/CoursePage";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/sample" element={<SamplePage />} />
          <Route path="/courses/:courseId" element={<CoursePage />} />

          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin-library" element={<AdminLibrary />} />
          </Route>

          <Route element={<PrivateRoute allowedRoles={["student"]} />}>
            <Route path="/student-portal" element={<Dashboard />} />
            <Route path="/student-portal/schedule" element={<Schedules />} />
            <Route
              path="/student-portal/library"
              element={<StudentLibraryPage />}
            />
            <Route path="/student-portal/profile" element={<ProfilePage />} />
            <Route
              path="/student-portal/attendance"
              element={<AttendancePage />}
            />
            <Route path="/student-portal/exams" element={<ExamPortalPage />} />
            <Route
              path="/student-portal/certificates"
              element={<CertificatesPage />}
            />
            <Route
              path="/student-portal/assignments"
              element={<Assignments />}
            />
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
            <Route path="/departments" element={<DepartmentsPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
