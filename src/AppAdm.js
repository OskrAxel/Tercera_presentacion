import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import NavbarNav from "../src/components/NavbarNav";
import SidebarAdm from "../src/components/SidebarAdm";
import CreateUser from "./Pages/Admin/CrearUsu";
import EditUser from "./Pages/Admin/EditarUsu";
import ListUser from "./Pages/Admin/Crud";

function AppAdm() {
  return (
    <BrowserRouter>
      {/* <nav>
          <ul>
            <li>
              <Link to="/">Listado Usuarios</Link>
            </li>
            <li>
              <Link to="user/create">Crear Usuario</Link>
            </li>
          </ul>
        </nav> */}
      <div className="flex">
        <SidebarAdm />
        <div className="content w-100">
          <NavbarNav />
          <Routes>
            <Route index element={<ListUser />} />
            <Route path="user/create" element={<CreateUser />} />
            <Route path="user/:id/edit" element={<EditUser />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default AppAdm;
