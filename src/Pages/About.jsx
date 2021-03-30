import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../Healpers/images/01.png";

function About(props) {
  return (
    <div id='about' className='aboutSection sectionHeight'>
      <Container>
        <div className='sectionHeading'>
          <h3 className='sectionHeader'>About</h3>
        </div>
        <Row>
          <Col md={3}>
            <img src={image} alt='' className='img-fluid m-2 aboutImage' />
          </Col>
          <Col md={9} className='mt-2 mb-2'>
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
              a ornare odio. This is Photoshop's version of Lorem Ipsum. Proin
              gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
              quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
              nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
              amet mauris.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
