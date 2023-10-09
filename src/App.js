import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarNav from "../src/components/NavbarNav";
import Sidebar from "../src/components/Sidebar";
import Horarios from "./Pages/Bec/Horarios";
import Registro from "./Pages/Bec/Index";
import Sales from "./Pages/Sales";
import Clients from "./Pages/Clients";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="content w-100">
          <NavbarNav />
          <Routes>
            <Route path="/" element={<Registro />} />
            <Route path="/horarios" element={<Horarios />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/clients" element={<Clients />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
