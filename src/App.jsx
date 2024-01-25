import Login from "./components/login/Login";
import Signup from "./components/signUp/Signup";
import { Routes, Route } from "react-router-dom";
import UserAdmin from "./components/userAdmin/UserAdmin";
import Header from "./components/header/Header";
import Topiwala from "./components/topiwala/Topiwala";
import Regulation from "./components/regulation/Regulation";
import Database from "./components/database/Database";
import Templates from "./components/template/Templates";
import PreparationPhase from "./components/preparation/PreparationPhase";
import EngineeringPractices from "./components/EngineeringPractices/EngineeringPractices";
import ProjectManagement from './components/ProjectManagement/ProjectManagement'
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/useradmin" element={<UserAdmin />} />
        <Route path="/topiwala" element={<Topiwala />} />
        <Route path="/reg" element={<Regulation />} />
        <Route path="/database" element={<Database />} />
        <Route path="/ep" element={<EngineeringPractices />} />
        <Route path="/projectManagement" element={<ProjectManagement />} />
        <Route path="/template" element={<Templates />} />
        <Route path="/preparation" element={<PreparationPhase />} />
      </Routes>
    </div>
  );
}

export default App;
