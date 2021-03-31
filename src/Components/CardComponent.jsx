import React from "react";
import { Button, Card, Col } from "react-bootstrap";

function CardComponent(props) {
  const { blog } = props;
  return (
    <Col md={4}>
      <Card>
        <Card.Img variant='top' src={blog.imageLink} />
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Text className='lineClamp'>{blog.description}</Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardComponent;
