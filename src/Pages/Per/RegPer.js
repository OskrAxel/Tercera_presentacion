import React, { useState, useEffect } from "react";
import { FormGroup, Input, Row, Form, Col, Label, Button } from "reactstrap";
import "../Bec/bec.scss";
import axios from "axios";

function Regper() {
  const [data, setData] = useState("");
  const user = localStorage.getItem("user");
  let id = 1; //////aqui se configura el usuiario

  const peticionGet = () => {
    axios
      .get(`http://localhost:80/api/per/per.php?id=${id}`)
      .then((response) => {
        console.log(response.data);
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
    // <>
    //   <td>{data.id}</td>
    //   <td>{data.nombre}</td>
    //   <td>{data.apellido}</td>
    //   <td>{data.email}</td>
    //   <td>{data.contrasena}</td>
    //   <td>{data.celular}</td>
    // </>
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
                  type="text"
                  // onChange={handleChange}
                  value={data.nombre}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="ape">Apellido:</Label>
                <Input id="ape" name="ape" type="text" value={data.apellido} />
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
                  type="text"
                  value={data.id_per}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="carr">Carrera:</Label>
                <Input id="carr" name="carr" type="text" value={data.carrera} />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="id_usu">Celular:</Label>
                <Input id="cel" name="cel" type="text" value={data.celular} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="Uni_ins">Universidad/Institución:</Label>
                <Input
                  id="Uni_ins"
                  name="Uni_ins"
                  type="text"
                  value={data.institucion}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="year">Año Inicio:</Label>
                <Input
                  id="year"
                  name="year"
                  type="text"
                  value={data.anio_inicio}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="ema">Correo:</Label>
                <Input id="ema" name="ema" type="text" value={data.email} />
              </FormGroup>
            </Col>
          </Row>
          <Button className="btn btn-success">Guardar</Button>
        </Form>
      </div>
    </div>
  );
}

export default Regper;
