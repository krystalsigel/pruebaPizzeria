import React from "react";
import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import MyContext from "../MyContext";
import Card from "../components/Card";

const Home = () => {
  const { pizzas, setPizzas } = useContext(MyContext);
  return (
    <>
      <div className="fondopizza">
        <h2>¡Pizzería Mamma Mía!</h2>
        <h5>¡Tenemos las mejores pizzas que podrás encontrar!</h5>
      </div>
      <Container>
        <Row sm={3} md={3} lg={3}>
          {pizzas.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
