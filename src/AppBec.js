import Formulario from "./Loginbec";
import App from "./App";
import { useState } from "react";
import "./App.scss";

function AppBec() {
  const [user, setUser] = useState([]);

  return (
    <div>
      {!user.length > 0 ? (
        <Formulario setUser={setUser} />
      ) : (
        <App user={user} setUser={setUser} />
      )}
    </div>
  );
}

export default AppBec;
