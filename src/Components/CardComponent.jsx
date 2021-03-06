import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import CardBody from "./CardBody";
import CardImage from "./CardImage";

function CardComponent(props) {
  const { blog } = props;
  // console.log(blog);
  return (
    <Col md={props.Home && 4}>
      <Card className={props.Blog ? "m-4" : "m-2"}>
        <Row>
          {/* <Card.Img
            variant='top'
            src={blog.imageLink}
            className={props.Blog && "blog-card-image"}
          /> */}
          {props.Blog ? (
            <>
              <CardImage Blog img={blog.imageLink} />
              <CardBody
                title={blog.title}
                description={blog.description}
                id={blog._id}
                Blog
              />
            </>
          ) : (
            <>
              <CardImage img={blog.imageLink} {...props} />
              <CardBody
                title={blog.title}
                description={blog.description}
                id={blog._id}
                date={blog.date}
              />
              <Card.Footer style={{ width: "100%" }}>{blog.date}</Card.Footer>
            </>
          )}
        </Row>
      </Card>
    </Col>
  );
}

export default CardComponent;
