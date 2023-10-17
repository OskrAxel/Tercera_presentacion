import React, { useState, useEffect } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Table, Button } from "reactstrap";
import * as FaIcons from "react-icons/fa";
import axios from "axios";
import "../Bec/bec.scss";

function Informe2() {
  const [lista, setLista] = useState([]);
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState(null);

  useEffect(() => {
    getImagenes();
  }, []);

  async function getImagenes() {
    const res = await axios.get("http://localhost:80/api/inf/");
    setLista(res.data);
    console.log(res.data);
  }

  async function addImagen(e) {
    e.preventDefault();
    let fd = new FormData();
    fd.append("archivo", imagen);
    fd.append("nom_usu", descripcion);
    const res = await axios.post("http://localhost:80/api/inf/", fd);
    console.log(res.data);
    getImagenes();
  }

  async function deleteImagen(id_doc) {
    if (window.confirm("Quieres eliminar?")) {
      const res = await axios.delete(
        "http://localhost:80/api/inf/?id_doc=" + id_doc
      );
      getImagenes();
      console.log(res.data);
    }
  }

  return (
    <div id="main_content">
      <div className="tra">
        <div className="tra title-form">
          <h2 className>Listado Patrocinadores</h2>
        </div>
        <div id="subt">
          {/* <Link to="user/create"> */}
          <Button
            color="success"
            size="lg"
            // onClick={() => abrirCerrarModalInsertar()}
          >
            <FaIcons.FaPlus /> Añadir
          </Button>
          {/* </Link> */}
        </div>
        <br />
        <br />
        <Table responsive="sm" id="tabl">
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Nombre documento</th>
              <th>Usuario</th>
              <th>Fecha cargado</th>
              <th>Archivo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((item) => (
              <tr className="text-center" key={item.id_doc}>
                <td>{item.id_doc}</td>
                <td>{item.nom_doc}</td>
                <td>{item.nom_usu}</td>
                <td>{item.f_cargado}</td>
                <td>
                  <img
                    src={"data:archivo/png;base64," + item.archivo}
                    className="img-fluid"
                    alt="archivo"
                  />
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    // onClick={() => seleccionarUsuario(item, "Editar")}
                  >
                    Editar
                  </button>{" "}
                  {"  "}
                  <button
                    className="btn btn-danger"
                    // onClick={() => seleccionarUsuario(item, "Eliminar")}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal /* isOpen={modalInsertar} */>
          <ModalHeader>Cargar documento</ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>Nombre documento: </label>
              <br />
              <input
                type="text"
                className="form-control"
                name="nom_doc"
                // onChange={handleChange}
              />
              <br />
              <label>Usuario: </label>
              <br />
              <input
                type="text"
                className="form-control"
                name="nom_usu"
                // onChange={handleChange}
              />
              <br />
              <label>Fecha cargado: </label>
              <br />
              <input
                type="datetime-local"
                className="form-control"
                name="f_cargado"
                // onChange={handleChange}
              />
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="success"
              size="lg" /*  onClick={() => peticionPost()} */
            >
              Guardar
            </Button>
            <Button
              color="danger"
              size="lg"
              // onClick={() => abrirCerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal /* isOpen={modalEditar} */>
          <ModalHeader>Editar Usuario</ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>Nombre documento:</label>
              <br />
              <input
                type="text"
                className="form-control"
                name="nom_doc"
                // onChange={handleChange}
                // value={usuarioSeleccionado && usuarioSeleccionado.nom_doc}
              />
              <br />
              <label>Usuario: </label>
              <br />
              <input
                type="text"
                className="form-control"
                name="nom_usu"
                // onChange={handleChange}
                // value={usuarioSeleccionado && usuarioSeleccionado.nom_usu}
              />
              <br />
              <label>Fecha cargado: </label>
              <br />
              <input
                type="datetime-local"
                className="form-control"
                name="f_cargado"
                // onChange={handleChange}
                // value={usuarioSeleccionado && usuarioSeleccionado.f_cargado}
              />
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <button
              className="btn btn-primary" /* onClick={() => peticionPut()} */
            >
              Editar
            </button>
            {"   "}
            <button
              className="btn btn-danger"
              // onClick={() => abrirCerrarModalEditar()}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>

        <Modal /* isOpen={modalEliminar} */>
          <ModalBody>
            ¿Estás seguro que deseas eliminar el documento{" "}
            {/* {usuarioSeleccionado && usuarioSeleccionado.nom_doc}? */}
          </ModalBody>
          <ModalFooter>
            <button
              className="btn btn-danger" /* onClick={() => peticionDelete()} */
            >
              Sí
            </button>
            <button
              className="btn btn-secondary"
              // onClick={() => abrirCerrarModalEliminar()}
            >
              No
            </button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

export default Informe2;
