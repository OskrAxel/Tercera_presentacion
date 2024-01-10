import React, { useState, useEffect } from "react";
import {
  Input,
  Button,
  Pagination,
  PaginationItem,
  PaginationLink,
  Form,
  Row,
  Col,
} from "reactstrap";
import "../bec.scss";
import axios from "axios";

function Nota1() {
  const [data, setData] = useState({
    id: "",
    idBec: "",
    mat_a1: "",
    nota_a1: "",
    hor_a1: "",
    hor_a2: "",
    hor_a3: "",
    dias_a1: "",
    mat_b1: "",
    nota_b1: "",
    hor_b1: "",
    hor_b2: "",
    hor_b3: "",
    dias_b1: "",
    mat_c1: "",
    nota_c1: "",
    hor_c1: "",
    hor_c2: "",
    hor_c3: "",
    dias_c1: "",
    mat_d1: "",
    nota_d1: "",
    hor_d1: "",
    hor_d2: "",
    hor_d3: "",
    dias_d1: "",
    mat_e1: "",
    nota_e1: "",
    hor_e1: "",
    hor_e2: "",
    hor_e3: "",
    dias_e1: "",
    mat_f1: "",
    nota_f1: "",
    hor_f1: "",
    hor_f2: "",
    hor_f3: "",
    dias_f1: "",
    mat_g1: "",
    nota_g1: "",
    hor_g1: "",
    hor_g2: "",
    hor_g3: "",
    dias_g1: "",
    semestre: "",
    anio: "",
    anio_carr: "",
  });
  const iduser = localStorage.getItem("iduser");
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
      .get(`http://localhost:80/api/bec/nota1.php`, {
        params: {
          id: localStorage.getItem("iduser"),
        },
      })
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
    ///)
    f.append("semestre", data.semestre);
    f.append("anio", data.anio);
    f.append("anio_carr", data.anio_carr);
    f.append("mat_a1", data.mat_a1);
    f.append("hor_a1", data.hor_a1);
    f.append("hor_a2", data.hor_a2);
    f.append("hor_a3", data.hor_a3);
    f.append("dias_a1", data.dias_a1);
    f.append("mat_b1", data.mat_b1);
    f.append("hor_b1", data.hor_b1);
    f.append("hor_b2", data.hor_b2);
    f.append("hor_b3", data.hor_b3);
    f.append("dias_b1", data.dias_b1);
    f.append("mat_c1", data.mat_c1);
    f.append("hor_c1", data.hor_c1);
    f.append("hor_c2", data.hor_c2);
    f.append("hor_c3", data.hor_c3);
    f.append("dias_c1", data.dias_c1);
    f.append("mat_d1", data.mat_d1);
    f.append("hor_d1", data.hor_d1);
    f.append("hor_d2", data.hor_d2);
    f.append("hor_d3", data.hor_d3);
    f.append("dias_d1", data.dias_d1);
    f.append("mat_e1", data.mat_e1);
    f.append("hor_e1", data.hor_e1);
    f.append("hor_e2", data.hor_e2);
    f.append("hor_e3", data.hor_e3);
    f.append("dias_e1", data.dias_e1);
    f.append("mat_f1", data.mat_f1);
    f.append("hor_f1", data.hor_f1);
    f.append("hor_f2", data.hor_f2);
    f.append("hor_f3", data.hor_f3);
    f.append("dias_f1", data.dias_f1);
    f.append("mat_g1", data.mat_g1);
    f.append("hor_g1", data.hor_g1);
    f.append("hor_g2", data.hor_g2);
    f.append("hor_g3", data.hor_g3);
    f.append("dias_g1", data.dias_g1);
    ///
    f.append("METHOD", "PUT");
    await axios
      .post(`http://localhost:80/api/bec/nota1.php`, f, {
        params: { id: data.idBec },
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
          <h2 className>Notas: {iduser}</h2>
        </div>

        <hr></hr>
        <Form id="subt">
          <Row
            className="text-center"
            style={{
              background: "rgba(18, 80, 61, .60)",
            }}>
            <Col
              md={6}
              style={{
                border: "1.5px solid #1a5a41",
              }}>
              <h5>Materia</h5>
            </Col>
            <Col
              md={2}
              style={{
                border: "1.5px solid #1a5a41",
              }}>
              <h5>Nota</h5>
            </Col>
            <Col
              md={2}
              style={{
                border: "1.5px solid #1a5a41",
              }}>
              <h5>Semestre</h5>
            </Col>
            <Col
              md={2}
              style={{
                border: "1.5px solid #1a5a41",
              }}>
              <h5>Año</h5>
            </Col>
          </Row>
          <Row>
            <Col
              md={6}
              style={{
                border: "1.5px solid #1a5a41",
              }}>
              {data.mat_a1}
            </Col>
            <Col
              md={2}
              style={{
                border: "1.5px solid #1a5a41",
              }}>
              <Input
                name="dias_a1"
                type="text"
                onChange={handleChange}
                value={data.nota_a1}
              />
            </Col>
            <Col
              md={2}
              style={{
                textAlign: "center",
                border: "1.5px solid #1a5a41",
              }}>
              {data.semestre}
            </Col>
            <Col
              md={2}
              style={{
                textAlign: "center",
                border: "1.5px solid #1a5a41",
              }}>
              {data.anio}
            </Col>
          </Row>
          <Row>
            <Col
              md={6}
              style={{
                border: "1.5px solid #1a5a41",
              }}>
              {data.mat_b1}
            </Col>
            <Col
              md={2}
              style={{
                border: "1.5px solid #1a5a41",
              }}>
              <Input
                name="dias_b1"
                type="text"
                onChange={handleChange}
                value={data.nota_b1}
              />
            </Col>
            <Col
              md={2}
              style={{
                textAlign: "center",
                border: "1.5px solid #1a5a41",
              }}>
              {data.semestre}
            </Col>
            <Col
              md={2}
              style={{
                textAlign: "center",
                border: "1.5px solid #1a5a41",
              }}>
              {data.anio}
            </Col>
          </Row>
          <Row>
            <Col
              md={6}
              style={{
                border: "1.5px solid #1a5a41",
              }}>
              {data.mat_c1}
            </Col>
            <Col
              md={2}
              style={{
                border: "1.5px solid #1a5a41",
              }}>
              <Input
                name="dias_c1"
                type="text"
                onChange={handleChange}
                value={data.nota_c1}
              />
            </Col>
            <Col
              md={2}
              style={{
                textAlign: "center",
                border: "1.5px solid #1a5a41",
              }}>
              {data.semestre}
            </Col>
            <Col
              md={2}
              style={{
                textAlign: "center",
                border: "1.5px solid #1a5a41",
              }}>
              {data.anio}
            </Col>
          </Row>
          <Row>
            <Col
              md={6}
              style={{
                border: "1.5px solid #1a5a41",
              }}>
              {data.mat_d1}
            </Col>
            <Col
              md={2}
              style={{
                border: "1.5px solid #1a5a41",
              }}>
              <Input
                name="dias_d1"
                type="text"
                onChange={handleChange}
                value={data.nota_d1}
              />
            </Col>
            <Col
              md={2}
              style={{
                textAlign: "center",
                border: "1.5px solid #1a5a41",
              }}>
              {data.semestre}
            </Col>
            <Col
              md={2}
              style={{
                textAlign: "center",
                border: "1.5px solid #1a5a41",
              }}>
              {data.anio}
            </Col>
          </Row>
          <Row>
            <Col
              md={6}
              style={{
                border: "1.5px solid #1a5a41",
              }}>
              {data.mat_e1}
            </Col>
            <Col
              md={2}
              style={{
                border: "1.5px solid #1a5a41",
              }}>
              <Input
                name="dias_e1"
                type="text"
                onChange={handleChange}
                value={data.nota_e1}
              />
            </Col>
            <Col
              md={2}
              style={{
                textAlign: "center",
                border: "1.5px solid #1a5a41",
              }}>
              {data.semestre}
            </Col>
            <Col
              md={2}
              style={{
                textAlign: "center",
                border: "1.5px solid #1a5a41",
              }}>
              {data.anio}
            </Col>
          </Row>
          <Row>
            <Col
              md={6}
              style={{
                border: "1.5px solid #1a5a41",
              }}>
              {data.mat_f1}
            </Col>
            <Col
              md={2}
              style={{
                border: "1.5px solid #1a5a41",
              }}>
              <Input
                name="dias_f1"
                type="text"
                onChange={handleChange}
                value={data.nota_f1}
              />
            </Col>
            <Col
              md={2}
              style={{
                textAlign: "center",
                border: "1.5px solid #1a5a41",
              }}>
              {data.semestre}
            </Col>
            <Col
              md={2}
              style={{
                textAlign: "center",
                border: "1.5px solid #1a5a41",
              }}>
              {data.anio}
            </Col>
          </Row>
          <Row>
            <Col
              md={6}
              style={{
                border: "1.5px solid #1a5a41",
              }}>
              {data.mat_g1}
            </Col>
            <Col
              md={2}
              style={{
                border: "1.5px solid #1a5a41",
              }}>
              <Input
                name="dias_g1"
                type="text"
                onChange={handleChange}
                value={data.nota_g1}
              />
            </Col>
            <Col
              md={2}
              style={{
                textAlign: "center",
                border: "1.5px solid #1a5a41",
              }}>
              {data.semestre}
            </Col>
            <Col
              md={2}
              style={{
                textAlign: "center",
                border: "1.5px solid #1a5a41",
              }}>
              {data.anio}
            </Col>
          </Row>
          <div id="fotb">
            <Button color="success" size="lg" onClick={() => peticionPut()}>
              Guardar
            </Button>
          </div>
        </Form>
        <Pagination
          aria-label="Page navigation example"
          className="pagination justify-content-center">
          <PaginationItem disabled>
            <PaginationLink first href="#" />
          </PaginationItem>
          <PaginationItem disabled>
            <PaginationLink href="#" previous />
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="/horarios1">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/horarios2">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/horarios3">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/horarios4">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/horarios5">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/horarios6">6</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/horarios7">7</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/horarios8">8</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/horarios9">9</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/horarios10">10</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/horarios2" next />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/horarios10" last />
          </PaginationItem>
        </Pagination>
      </div>
    </div>
  );
}

export default Nota1;
