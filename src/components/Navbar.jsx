import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import MyContext from "../MyContext";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  const { carro, totalPizzas } = useContext(MyContext);
  return (
    <Navbar bg="info" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex w-100 justify-content-between">
            <Link to="/" className="text-light">
              🍕 Pizzería Mamma Mia!
            </Link>
            <Link to="/carrito" className="text-light">
              🛒{totalPizzas(carro)}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
