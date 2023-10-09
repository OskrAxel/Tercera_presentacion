import axios from "axios";
import * as FaIcons from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "reactstrap";
import "../Bec/bec.scss";
export default function ListUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get("http://localhost:80/api/users/").then(function (response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:80/api/user/${id}/delete`)
      .then(function (response) {
        console.log(response.data);
        getUsers();
      });
  };
  return (
    <div id="main_content">
      <div className="tra">
        <div className="tra title-form">
          <h2 className>Listado Usuarios</h2>
        </div>
        <div id="subt">
          <Link to="user/create">
            <Button color="success" size="lg">
              <FaIcons.FaPlus /> Añadir
            </Button>
          </Link>
        </div>
        <Table responsive="sm" id="tabl">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Correo</th>
              <th>Clave</th>
              <th>Celular</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <tr key={key}>
                <td>{user.id}</td>
                <td>{user.nombre}</td>
                <td>{user.apellido}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.celular}</td>
                <td>
                  <Link
                    to={`user/${user.id}/edit`}
                    style={{ marginRight: "10px" }}>
                    <Button color="warning">Editar</Button>
                  </Link>
                  <Link onClick={() => deleteUser(user.id)}>
                    <Button color="danger">Eliminar</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
