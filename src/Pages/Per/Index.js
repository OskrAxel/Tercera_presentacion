import React from "react";
import "../Bec/bec.scss";
import { Card, Button, CardTitle, CardText, Col } from "reactstrap";

function Ini({ nombre }) {
  return (
    <div className="d-flex p-5 justify-content-center">
      <Col id="colu">
        <Card
          body
          className="text-center"
          style={{
            width: "50rem",
            background: "rgba(232, 232, 232, 0.65)",
          }}
        >
          <CardTitle tag="h4">Nota:</CardTitle>
          <CardText>
            <h2>Bienvenido: {nombre}</h2>
            En caso de que no haya registrado sus datos personales continuar con
            el registro
            <br />
            <p></p>
            <b>Por favor haga clic en el botón a continuación</b>
          </CardText>
          <Button id="but" href="./regper">
            Continuar registro
          </Button>
        </Card>
      </Col>
    </div>
    // <div id="ali">
    //   <a href="https://www.freepik.es/foto-gratis/montanas-bolivia_30806351.htm#query=paisaje%20bolivia&position=10&from_view=search&track=ais">
    //     Imagen de kamchatka
    //   </a>{" "}
    //   en Freepik;
    // </div>
  );
}

export default Ini;
