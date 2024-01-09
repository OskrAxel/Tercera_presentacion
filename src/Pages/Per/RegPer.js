import React, { useState, useEffect } from "react";
import { FormGroup, Input, Row, Form, Col, Label, Button } from "reactstrap";
import "../Bec/bec.scss";
import axios from "axios";

function Regper() {
  const [data, setData] = useState({
    id: "",
    nombre: "",
    apellido: "",
    email: "",
    id_per: "",
    carrera: "",
    celular: "",
    institucion: "",
    anio_inicio: "",
  });
  const id = localStorage.getItem("user");
  ///
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(data);
  };
  ///
  const peticionGet = async () => {
    await axios
      .get(`http://localhost:80/api/per/per.php?id=${id}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const peticionPut = async () => {
    var f = new FormData();
    f.append("nombre", data.nombre);
    f.append("apellido", data.apellido);
    f.append("METHOD", "PUT");
    await axios
      .post(`http://localhost:80/api/per/per.php`, f, {
        params: { id: data.id },
      })
      .then((response) => {
        setData(response);
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
                <Label>Nombre:</Label>
                <Input
                  name="nombre"
                  type="text"
                  onChange={handleChange}
                  value={data.nombre}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Apellido:</Label>
                <Input
                  name="apellido"
                  type="text"
                  onChange={handleChange}
                  value={data.apellido}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="id_per">ID Usuario:</Label>
                <Input
                  id="id_per"
                  name="id_per"
                  type="text"
                  onChange={handleChange}
                  value={data.id_per}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="carrera">Carrera:</Label>
                <Input
                  id="carrera"
                  name="carrera"
                  type="text"
                  onChange={handleChange}
                  value={data.carrera}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="celular">Celular:</Label>
                <Input
                  id="celular"
                  name="celular"
                  type="text"
                  onChange={handleChange}
                  value={data.celular}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="institucion">Universidad/Institución:</Label>
                <Input
                  id="institucion"
                  name="institucion"
                  type="text"
                  onChange={handleChange}
                  value={data.institucion}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="anio_inicio">Año Inicio:</Label>
                <Input
                  id="anio_inicio"
                  name="anio_inicio"
                  type="text"
                  onChange={handleChange}
                  value={data.anio_inicio}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="email">Correo:</Label>
                <Input
                  id="email"
                  name="email"
                  type="text"
                  onChange={handleChange}
                  value={data.email}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button className="btn btn-success" onClick={() => peticionPut()}>
            Modificar
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Regper;
