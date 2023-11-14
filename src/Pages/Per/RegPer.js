import React, { useState, useEffect } from "react";
import { FormGroup, Input, Row, Form, Col, Label, Button } from "reactstrap";
import "../Bec/bec.scss";
import axios from "axios";

const RegPer = (props) => {
  const baseUrl = "http://localhost:80/api/bec/";
  const [data, setData] = useState([]);
  const [usuarioSeleccionado, setusuarioSeleccionado] = useState({
    id: "",
    nombre: "",
    apellido: "",
    email: "",
    contrasena: "",
    celular: "",
  });
  //
  const handleChange = (e) => {
    const { name, value } = e.target;
    setusuarioSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(usuarioSeleccionado);
  };
  const peticionGet = async () => {
    await axios
      .get(baseUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    peticionGet();
  }, []);
  return (
    <div id="main_content">
      <div className="tra">
        <div className="tra title-form">
          <h2 className>Datos Personales</h2>
          {data.user}
        </div>
        <Form className="frm">
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="nom">Nombre:</Label>
                <Input
                  id="nom"
                  name="nom"
                  placeholder="Nombres completos"
                  type="text"
                  onChange={handleChange}
                  value={usuarioSeleccionado && usuarioSeleccionado.nombre}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="ape">Apellido:</Label>
                <Input
                  id="ape"
                  name="ape"
                  placeholder="Apellidos completos"
                  type="text"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="id_usu">ID Usuario:</Label>
                <Input
                  id="id_usu"
                  name="id_usu"
                  placeholder="Inicial nombre y primer apellido"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="carr">Carrera:</Label>
                <Input id="carr" name="carr" placeholder="" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="Uni_ins">Universidad/Institución:</Label>
                <Input id="Uni_ins" name="Uni_ins" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="year">Año Inicio:</Label>
                <Input id="year" name="year" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="tur">Turno:</Label>
                <Input id="tur" name="tur" />
              </FormGroup>
            </Col>
          </Row>
          <Button className="btn btn-success">Guardar</Button>
          {data.map((user) => (
            <tr className="text-center" key={user.id}>
              <td>{user.id}</td>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.email}</td>
              <td>{user.carrera}</td>
              <td>{user.anio}</td>
              <td>{user.celular}</td>
              <td>{user.ciudad}</td>
              <td>{user.direc}</td>
              <td>{user.nompad}</td>
              <td>{user.nommad}</td>
            </tr>
          ))}
        </Form>
      </div>
    </div>
  );
};

export default RegPer;
