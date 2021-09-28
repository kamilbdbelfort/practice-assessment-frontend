// src/components/SpaceCard.js
import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

// import css

export default function Spaces(props) {
  return (
    <Container>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
      <Button variant="primary" type="submit">
        Sign up
      </Button>
    </Container>
  );
}
