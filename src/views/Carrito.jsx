import { React, useContext } from "react";
import MyContext from "../MyContext";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Carrito() {
  const { carro, yourOrder, totalPizzas } = useContext(MyContext);

  return (
    <div>
      <h3 className="mt-3">Detalles del pedido:</h3>
      {carro.map((elecarrito) => {
        const ele = yourOrder(elecarrito.id);
        return (
          <Container className="mt-4" key={elecarrito.id}>
            <Row className="m-3">
              <Col sm={2} style={{ textAlign: "left" }}>
                <img
                  className="picture"
                  src={ele.img}
                  alt="pizza seleccionada"
                />
              </Col>
              <Col>
                <p className="fw-bold">{ele.name.toUpperCase()}</p>
              </Col>
              <Col className="preciopizza">
                <p>${ele.price * elecarrito.quantity}</p>
              </Col>
              <Col className="colleft">
                <p>
                  <Button>+</Button>
                  <p className="botones fw-bold">{elecarrito.quantity} </p>
                  <Button variant="danger">-</Button>
                </p>
              </Col>
            </Row>
          </Container>
        );
      })}
      <div className="posiboton">
        <p className="fw-bold fs-4">Total: ${totalPizzas(carro)}</p>
        <div>
          <Button variant="success">Ir a pagar</Button>
        </div>
      </div>
    </div>
  );
}
