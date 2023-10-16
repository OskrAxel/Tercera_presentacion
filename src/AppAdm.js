import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import NavbarNav from "../src/components/NavbarNav";
import CreateUser from "./Pages/Admin/CrearUsu";
import EditUser from "./Pages/Admin/EditarUsu";
import ListUser from "./Pages/Admin/Crud";
import Dashboard from "./Pages/Admin/dashboard";
import ListUserAdm from "./Pages/Admin/Crud-Adm";
import ListUserPat from "./Pages/Admin/Crud-Pat";
import Informe from "./Pages/Admin/informe";

function AppAdm() {
  return (
    <BrowserRouter>
      <div className="flex">
        <div className="content w-100">
          <NavbarNav />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="usuarios" element={<ListUser />} />
            <Route path="personal" element={<ListUserAdm />} />
            <Route path="patrocinador" element={<ListUserPat />} />
            <Route path="informe" element={<Informe />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default AppAdm;
