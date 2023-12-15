import React, { useState, useEffect } from "react";
import {
  FormGroup,
  Input,
  Button,
  Pagination,
  PaginationItem,
  PaginationLink,
  Form,
  Row,
  Col,
  Label,
} from "reactstrap";
import "../bec.scss";
import axios from "axios";

function Horarios1() {
  const [data, setData] = useState({
    id: "",
    mat_1: "",
    apellido: "",
    email: "",
    id_bec: "",
    carrera: "",
    celular: "",
    institucion: "",
    anio: "",
    ciudad: "",
    direccion: "",
    nom_pad: "",
    nom_mad: "",
  });
  // const iduser = localStorage.getItem("iduser");
  // let id = "ocusi"; //////aqui se configura el usuiario
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
      .get(`http://localhost:80/api/bec/horario.php`, {
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
    f.append("nombre", data.nombre);
    f.append("apellido", data.apellido);
    f.append("email", data.email);
    f.append("id_bec", data.id_bec);
    f.append("carrera", data.carrera);
    f.append("celular", data.celular);
    f.append("institucion", data.institucion);
    f.append("anio", data.anio);
    f.append("ciudad", data.ciudad);
    f.append("direccion", data.direccion);
    f.append("nom_pad", data.nom_pad);
    f.append("nom_mad", data.nom_mad);
    f.append("METHOD", "PUT");
    await axios
      .post(`http://localhost:80/api/bec/bec.php`, f, {
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
          <h2 className>Horario 1</h2>
        </div>
        <div id="subt">
          <span>
            <b>Instrucciones:</b> - Llena el formulario con tu horario de clases
            actual y sus debidos horarios.
            <br />- Tomar en cuenta el formato de la hora (AM/PM).
          </span>
        </div>

        <Form id="subt">
          <Row>
            <Col md={3}>
              <Label>Seleccionar Año o Semestre Correspondiente:</Label>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input name="anio" type="select">
                  <option>Primer</option>
                  <option>Segundo</option>
                  <option>Tercer</option>
                  <option>Cuarto</option>
                  <option>Quinto</option>
                </Input>
                <Input
                  placeholder="Año"
                  disabled
                  onChange={handleChange}
                  value={data.anio_carr}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                {/* <Label for="exampleSelect">Select</Label> */}
                <Input id="exampleSelect" name="semestre" type="select">
                  <option>I-Semestre</option>
                  <option>II-Semestre</option>
                </Input>
                <Input
                  placeholder="Semestre"
                  disabled
                  onChange={handleChange}
                  value={data.semestre}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Input type="text" onChange={handleChange} value={data.anio} />
              </FormGroup>
            </Col>
          </Row>
          <Row className="text-center">
            <Col md={3}>
              <h5>Materias</h5>
            </Col>
            <Col md={3}>
              <h5>Días</h5>
            </Col>
            <Col colSpan={3}>
              <h5>Horas</h5>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Input
                placeholder="Materia: 1"
                onChange={handleChange}
                value={data.mat_a1}
              />
            </Col>
            <Col md={3}>
              <Input
                placeholder="Lunes, Martes, Miércoles, Jueves, Viernes"
                onChange={handleChange}
                value={data.dias_a1}
              />
            </Col>
            <Col>
              <Input type="text" onChange={handleChange} value={data.hor_a1} />
            </Col>
            <Col>
              <Input type="text" onChange={handleChange} value={data.hor_a2} />
            </Col>
            <Col>
              <Input type="text" onChange={handleChange} value={data.hor_a3} />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Input placeholder="Materia: 2" />
            </Col>
            <Col md={3}>
              <Input placeholder="Lunes, Martes, Miércoles, Jueves, Viernes" />
            </Col>
            <Col>
              <Input type="time" />
            </Col>
            <Col>
              <Input type="time" />
            </Col>
            <Col>
              <Input type="time" />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Input placeholder="Materia: 3" />
            </Col>
            <Col md={3}>
              <Input placeholder="Lunes, Martes, Miércoles, Jueves, Viernes" />
            </Col>
            <Col>
              <Input type="time" />
            </Col>
            <Col>
              <Input type="time" />
            </Col>
            <Col>
              <Input type="time" />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Input placeholder="Materia: 4" />
            </Col>
            <Col md={3}>
              <Input placeholder="Lunes, Martes, Miércoles, Jueves, Viernes" />
            </Col>
            <Col>
              <Input type="time" />
            </Col>
            <Col>
              <Input type="time" />
            </Col>
            <Col>
              <Input type="time" />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Input placeholder="Materia: 5" />
            </Col>
            <Col md={3}>
              <Input placeholder="Lunes, Martes, Miércoles, Jueves, Viernes" />
            </Col>
            <Col>
              <Input type="time" />
            </Col>
            <Col>
              <Input type="time" />
            </Col>
            <Col>
              <Input type="time" />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Input placeholder="Materia: 6" />
            </Col>
            <Col md={3}>
              <Input placeholder="Lunes, Martes, Miércoles, Jueves, Viernes" />
            </Col>
            <Col>
              <Input type="time" />
            </Col>
            <Col>
              <Input type="time" />
            </Col>
            <Col>
              <Input type="time" />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Input placeholder="Materia: 7" />
            </Col>
            <Col md={3}>
              <Input placeholder="Lunes, Martes, Miércoles, Jueves, Viernes" />
            </Col>
            <Col>
              <Input type="time" />
            </Col>
            <Col>
              <Input type="time" />
            </Col>
            <Col>
              <Input type="time" />
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

export default Horarios1;
