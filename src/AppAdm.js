import { Routes, Route } from "react-router-dom";
// import "./App.scss";
import ListUser from "./Pages/Admin/Crud";
import Dashboard from "./Pages/Admin/dashboard";
import ListUserAdm from "./Pages/Admin/Crud-Adm";
import ListUserPat from "./Pages/Admin/Crud-Pat";
import Informe from "./Pages/Admin/informe";
import Informe2 from "./Pages/Admin/informe2";
import CardPdf from "./Pages/Admin/inf3";
import Protected from "./utils/Protected";
import LoginBec from "./utils/loginBec";
import LoginPer from "./utils/loginPer";
import LoginAdm from "./utils/loginAdm";
import Registro from "./Pages/Bec/Index";
import Horarios from "./Pages/Bec/Horarios";
import Sales from "./Pages/Sales";
import Clients from "./Pages/Clients";
import NavbarBec from "./components/NavbarBec";
import NavbarAdm from "./components/NavbarAdm";
import NavbarLogin from "./components/NavbarLogin";

function AppAdm() {
  return (
    <div className="flex">
      <div className="content w-100">
        <Routes>
          <Route path="/" element={<NavbarLogin />}>
            <Route exact path="/" element={<LoginBec />} />
            <Route exact path="/LoginAdm" element={<LoginAdm />} />
            <Route exact path="/LoginPer" element={<LoginPer />} />
          </Route>
          <Route path="/" element={<NavbarAdm />}>
            <Route
              path="/dashboard"
              element={<Protected Component={Dashboard} />}
            />
            <Route
              path="/usuarios"
              element={<Protected Component={ListUser} />}
            />
            <Route
              path="/personal"
              element={<Protected Component={ListUserAdm} />}
            />
            <Route
              path="/patrocinador"
              element={<Protected Component={ListUserPat} />}
            />
            <Route
              path="/informe"
              element={<Protected Component={Informe} />}
            />
            <Route
              path="/informe2"
              element={<Protected Component={Informe2} />}
            />
            <Route path="/pdf" element={<Protected Component={CardPdf} />} />
          </Route>
          <Route path="/" element={<NavbarBec />}>
            {/* //Becario */}
            <Route
              path="/registro"
              element={<Protected Component={Registro} />}
            />
            <Route
              path="/horarios"
              element={<Protected Component={Horarios} />}
            />
            <Route path="/sales" element={<Protected Component={Sales} />} />
            <Route
              path="/clients"
              element={<Protected Component={Clients} />}
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default AppAdm;
