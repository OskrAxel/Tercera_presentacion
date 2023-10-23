import "./formulario.scss";
import { useState } from "react";

function Formulario({ setUser }) {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setcontraseña] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario == "" || contraseña == "") {
      setError(true);
      console.log(usuario);
      console.log(contraseña);
      return;
    }
    setError(false);

    setUser([usuario]);
  };

  return (
    <section className="formulario">
      <h1>Login</h1>

      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          value={contraseña}
          onChange={(e) => setcontraseña(e.target.value)}
        />
        <button>Iniciar Sesión</button>
      </form>
      {error && <p>Todos los campos son obligatorios</p>}
    </section>
  );
}
export default Formulario;
