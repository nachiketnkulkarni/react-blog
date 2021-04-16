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
              <CardImage img={blog.imageLink} />
              <CardBody
                title={blog.title}
                description={blog.description}
                id={blog._id}
              />
            </>
          )}
        </Row>
      </Card>
    </Col>
  );
}

export default CardComponent;

/* <Col md={props.Home && 4}>
  <Card className={props.Blog ? "m-4" : "m-2"}>
    <Row>
      <Col md={4}>
        <Card.Img
          variant='top'
          src={blog.imageLink}
          className={props.Blog && "blog-card-image"}
        />
      </Col>
      <Col md={7}>
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Text className='lineClamp'>{blog.description}</Card.Text>
          <Link to={`/blog/${blog.id}`} className='ml-auto'>
            <span className='float-right'>View</span>
          </Link>
        </Card.Body>
      </Col>
    </Row>
  </Card>
</Col>; */
