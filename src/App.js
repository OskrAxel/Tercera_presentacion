import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarNav from "../src/components/NavbarNav";
import Horarios from "./Pages/Bec/Horarios";
import Registro from "./Pages/Bec/Index";
import Sales from "./Pages/Sales";
import Clients from "./Pages/Clients";
import { Button } from "reactstrap";

import "./App.scss";

function App({ user, setUser }) {
  const handlelogout = () => {
    setUser([]);
  };
  return (
    <Router>
      <div className="flex">
        {/* <Sidebar nombre={user} /> */}
        <div className="content w-100">
          <NavbarNav />
          <Routes>
            <Route
              path="/"
              element={<Registro nombre={user} setUser={setUser} />}
            />
            <Route path="/horarios" element={<Horarios />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/clients" element={<Clients />} />
          </Routes>
          <Button onClick={handlelogout}>Salir Sesion</Button>
        </div>
      </div>
    </Router>
  );
}

export default App;
