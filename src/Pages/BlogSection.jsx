import React from "react";
import { Container, Row } from "react-bootstrap";
import CardComponent from "../Components/CardComponent";
import TempData from "../Data/TempData";

function BlogSection(props) {
  return (
    <div id='blog' className='sectionHeight oddSection'>
      <Container>
        <div className='sectionHeading'>
          <h3 className='sectionHeader'>Posts</h3>
        </div>
        <div className='sectionData'>
          <Row>
            <a href='#' className='ml-auto see-all'>
              <span style={{ color: "#fff" }}>View all </span>
            </a>
          </Row>
          <Row>
            {TempData.slice(0, 3).map((blog, idex) => {
              //   console.log(item);
              return <CardComponent key={blog.id} blog={blog} />;
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default BlogSection;
