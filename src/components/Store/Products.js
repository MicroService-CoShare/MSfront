import React from "react";
import { useHistory, useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { DeleteProduct } from "../../Service/products";

export default function Store(props) {
  const history = useNavigate();
  const handleClick = (userId) => {
    history(`/user/${userId}`);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          //add space between cards
          gap: "1rem",
          alignItems: "center",
          alignContent: "center",
          marginTop: "5vh",
        }}
      >
        {props.products.map((product) => (
          <Card
            key={product.id}
            style={{ width: "16rem", boxShadow: "0 0 10px rgba(0,0,0,0.5)" }}
          >
            <Card.Img
              variant="top"
              src={product.image}
              style={{
                boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              }}
            />
            <Card.Body>
              <Card.Title>{product.label}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>${product.id}</Card.Text>
              <Button
                variant="danger"
                onClick={() => DeleteProduct(product.id)}
              >
                Delete
              </Button>
              <Button variant="primary" onClick={()=>handleClick(product.id)}>
                Update
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}
