import React from "react";
import { FormGroup, Input, Row, Form, Col, Label, Button } from "reactstrap";
import "./bec.scss";

const RegComp = (props) => {
  return (
    <div id="main_content">
      <div className="tra">
        <div className="tra title-form">
          <h2 className>Registro Becario</h2>
        </div>
        <Form className="frm">
          <Row>
            <Col md={2}>
              <FormGroup>
                <Input
                  id="num_cod"
                  name="num_cod"
                  placeholder="Número Código"
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Button className="btn btn-success">Validar</Button>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="nom">Nombre</Label>
                <Input
                  id="nom"
                  name="nom"
                  placeholder="Nombres completos"
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="ape">Apellido</Label>
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
                <Label for="id_usu">ID Usuario</Label>
                <Input
                  id="id_usu"
                  name="id_usu"
                  placeholder="Inicial nombre y primer apellido"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="carr">Carrera</Label>
                <Input id="carr" name="carr" placeholder="" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="Uni_ins">Universidad/Institución</Label>
                <Input id="Uni_ins" name="Uni_ins" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="year">Año Inicio</Label>
                <Input id="year" name="year" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="tur">Turno</Label>
                <Input id="tur" name="tur" />
              </FormGroup>
            </Col>
          </Row>
          <Button className="btn btn-success">Guardar</Button>
        </Form>
      </div>
    </div>
  );
};

export default RegComp;
