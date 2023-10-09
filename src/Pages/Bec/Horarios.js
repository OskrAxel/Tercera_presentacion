import React from "react";
import {
  Table,
  FormGroup,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import "./bec.scss";

const Horarios = (props) => {
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
                    <option>I</option>
                    <option>II</option>
                  </Input>
                </FormGroup>
              </th>
              <th>
                <Input size={1} />
              </th>
            </tr>
            <tr className="text-center">
              <th>Materias</th>
              <th></th>
              <th>Días</th>
              <th>Horas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Input size={1} />
              </td>
              <td></td>
              <td>
                <Input size={1} />
              </td>
              <td>
                <Input size={1} />
              </td>
            </tr>
            <tr>
              <td>
                <Input size={1} />
              </td>
              <td></td>
              <td>
                <Input size={1} />
              </td>
              <td>
                <Input size={1} />
              </td>
            </tr>
            <tr>
              <td>
                <Input size={1} />
              </td>
              <td></td>
              <td>
                <Input size={1} />
              </td>
              <td>
                <Input size={1} />
              </td>
            </tr>
            <tr>
              <td>
                <Input size={1} />
              </td>
              <td></td>
              <td>
                <Input size={1} />
              </td>
              <td>
                <Input size={1} />
              </td>
            </tr>
            <tr>
              <td>
                <Input size={1} />
              </td>
              <td></td>
              <td>
                <Input size={1} />
              </td>
              <td>
                <Input size={1} />
              </td>
            </tr>
            <tr>
              <td>
                <Input size={1} />
              </td>
              <td></td>
              <td>
                <Input size={1} />
              </td>
              <td>
                <Input size={1} />
              </td>
            </tr>
            <tr>
              <td>
                <Input size={1} />
              </td>
              <td></td>
              <td>
                <Input size={1} />
              </td>
              <td>
                <Input size={1} />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <div>
              <Pagination aria-label="Page navigation example">
                <PaginationItem disabled>
                  <PaginationLink first href="#" />
                </PaginationItem>
                <PaginationItem disabled>
                  <PaginationLink href="#" previous />
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem disabled>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" next />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" last />
                </PaginationItem>
              </Pagination>
            </div>
          </tfoot>
        </Table>
      </div>
    </div>
  );
};

export default Horarios;
