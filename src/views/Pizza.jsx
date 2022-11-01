import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import MyContext from "../MyContext";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

export const Pizza = () => {
  const { pizzas, yourOrder, agregar } = useContext(MyContext);
  const { id } = useParams();
  const pizza = yourOrder(id);
  console.log(pizza);

  return (
    <div className="contenedor m-5">
      <Container>
        <Row>
          <Col>
            <img src={pizza.img} alt={pizza.name} />
          </Col>
          <Col>
            <h3>{pizza.name.toUpperCase()}</h3>
            <p className="descrip">{pizza.desc}</p>
            <p className="fw-bold">Ingredientes</p>
            <ul>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index.toString()}>🍕{ingredient}</li>
              ))}
            </ul>
            <div>
              <p className="fw-bold fs-2">Precio ${pizza.price}</p>
              <Button
                variant="danger"
                onClick={() => {
                  agregar(pizza.id);
                }}
              >
                Añadir 🛒
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
