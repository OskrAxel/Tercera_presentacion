import React, { useState } from "react";
import { Table, Button } from "reactstrap";
import * as FaIcons from "react-icons/fa";

const Evalua = () => {
  const abrirCerrarModalInsertar = () => {
    setModalInsertar(!modalInsertar);
  };
  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  return (
    <div id="main_content">
      <div className="tra">
        <div className="tra title-form">
          <h2 className>Evaluar</h2>
        </div>
        <div id="subt">
          {/* <Link to="user/create"> */}
          <Button
            color="primary"
            size="lg"
            onClick={() => abrirCerrarModalInsertar()}
          >
            <FaIcons.FaFileDownload /> Reporte
          </Button>
          {/* </Link> */}
        </div>
        <br />
        <br />
        <Table responsive="sm" id="tabl">
          <thead>
            <tr className="text-center tra title-form">
              <th>#</th>
              <th>Nombre Institución</th>
              <th>País</th>
              <th>Correo</th>
              <th>Dirección</th>
              <th>Celular</th>
              <th>Institución</th>
            </tr>
          </thead>
          <tbody>
            {data.map((Usuario) => (
              <tr className="text-center" key={Usuario.id}>
                <td>{Usuario.id}</td>
                <td>{Usuario.nombre}</td>
                <td>{Usuario.pais}</td>
                <td>{Usuario.email}</td>
                <td>{Usuario.direccion}</td>
                <td>{Usuario.celular}</td>
                <td>{Usuario.institucion}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Evalua;
