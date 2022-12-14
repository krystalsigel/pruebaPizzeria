import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import MyContext from "../MyContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Cards({ product }) {
  const { pizzas, carro, setCarro, agregar } = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <div>
      <Card className="m-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{product.name.toUpperCase()}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush ">
          <Card.Text className="m-3 fw-bold">Ingredientes:</Card.Text>
          <ul>
            <li>๐{product.ingredients[0]}</li>
            <li>๐{product.ingredients[1]}</li>
            <li>๐{product.ingredients[2]}</li>
            <li>๐{product.ingredients[3]}</li>
          </ul>
        </ListGroup>
        <Card.Body>
          <Card.Text className="text-center fs-2 fw-normal">
            ${product.price}
          </Card.Text>
          <Button
            variant="info"
            className="m-3 text-light"
            onClick={() => {
              navigate(`/pizza/${product.id}`);
            }}
          >
            Ver Mรกs ๐
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              agregar(product.id);
            }}
          >
            Aรฑadir ๐
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
