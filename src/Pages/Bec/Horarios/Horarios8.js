import React from "react";
import {
  Table,
  FormGroup,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import "../bec.scss";

const Horarios8 = (props) => {
  return (
    <div id="main_content">
      <div className="tra">
        <div className="tra title-form">
          <h2 className>Horario</h2>
        </div>
        <div id="subt">
          <span>
            <b>Instrucciones:</b> - Llena el formulario con tu horario de clases
            actual y sus debidos horarios.
            <br />- Tomar en cuenta el formato de la hora (AM/PM).
          </span>
        </div>

        <Table responsive="sm" id="tabl">
          <thead>
            <tr className="tr1">
              <th>Seleccionar Semestre, Gestión y Año Correspondiente:</th>
              <th>
                <FormGroup>
                  {/* <Label for="exampleSelect">Select</Label> */}
                  <Input id="exampleSelect" name="semestre" type="select">
                    <option>Primero</option>
                    <option>Segundo</option>
                    <option>Tercero</option>
                    <option>Cuarto</option>
                    <option>Quinto</option>
                    <option>Sexto</option>
                    <option>Septimo</option>
                    <option>Octavo</option>
                    <option>Noveno</option>
                    <option>Decimo</option>
                  </Input>
                </FormGroup>
              </th>
              <th>
                <FormGroup>
                  {/* <Label for="exampleSelect">Select</Label> */}
                  <Input id="exampleSelect" name="gestion" type="select">
                    <option>I-Semestre</option>
                    <option>II-Semestre</option>
                  </Input>
                </FormGroup>
              </th>
              <th colSpan={3}>
                <Input placeholder="Año" />
              </th>
            </tr>
            <tr className="text-center">
              <th>Materias</th>
              <th></th>
              <th>Días</th>
              <th colSpan={3}>Horas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Input placeholder="Materia: 1" />
              </td>
              <td></td>
              <td>
                <Input
                  size={1}
                  placeholder="Lunes, Martes, Miércoles, Jueves, Viernes"
                />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
            </tr>
            <tr>
              <td>
                <Input placeholder="Materia: 2" />
              </td>
              <td></td>
              <td>
                <Input
                  size={1}
                  placeholder="Lunes, Martes, Miércoles, Jueves, Viernes"
                />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
            </tr>
            <tr>
              <td>
                <Input placeholder="Materia: 3" />
              </td>
              <td></td>
              <td>
                <Input
                  size={1}
                  placeholder="Lunes, Martes, Miércoles, Jueves, Viernes"
                />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
            </tr>
            <tr>
              <td>
                <Input placeholder="Materia: 4" />
              </td>
              <td></td>
              <td>
                <Input
                  size={1}
                  placeholder="Lunes, Martes, Miércoles, Jueves, Viernes"
                />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
            </tr>
            <tr>
              <td>
                <Input placeholder="Materia: 5" />
              </td>
              <td></td>
              <td>
                <Input
                  size={1}
                  placeholder="Lunes, Martes, Miércoles, Jueves, Viernes"
                />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
            </tr>
            <tr>
              <td>
                <Input placeholder="Materia: 6" />
              </td>
              <td></td>
              <td>
                <Input
                  size={1}
                  placeholder="Lunes, Martes, Miércoles, Jueves, Viernes"
                />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
            </tr>
            <tr>
              <td>
                <Input placeholder="Materia: 7" />
              </td>
              <td></td>
              <td>
                <Input placeholder="Lunes, Martes, Miércoles, Jueves, Viernes" />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
              <td>
                <Input type="time" />
              </td>
            </tr>
          </tbody>
        </Table>
        <Pagination
          aria-label="Page navigation example"
          className="pagination justify-content-center"
        >
          <PaginationItem>
            <PaginationLink first href="/horarios1" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/horarios7" previous />
          </PaginationItem>
          <PaginationItem>
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
          <PaginationItem active>
            <PaginationLink href="/horarios8">8</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/horarios9">9</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/horarios10">10</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/horarios9" next />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/horarios10" last />
          </PaginationItem>
        </Pagination>
      </div>
    </div>
  );
};

export default Horarios8;
