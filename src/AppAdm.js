import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import NavbarNav from "../src/components/NavbarNav";
import ListUser from "./Pages/Admin/Crud";
import Dashboard from "./Pages/Admin/dashboard";
import ListUserAdm from "./Pages/Admin/Crud-Adm";
import ListUserPat from "./Pages/Admin/Crud-Pat";
import Informe from "./Pages/Admin/informe";
import Informe2 from "./Pages/Admin/informe2";
import CardPdf from "./Pages/Admin/inf3";

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
            <Route path="informe2" element={<Informe2 />} />
            <Route path="pdf" element={<CardPdf />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default AppAdm;
