import React from "react";
import { Card } from "react-bootstrap";

function CardImage(props) {
  return (
    <>
      <div className={props.Blog && "col-md-4 no-padding"}>
        <Card.Img
          variant='top'
          src={props.img}
          className={props.Blog && "blog-card-image"}
        />
        {/* <Card.Img src='http://res.cloudinary.com/nachiketkulkarni/image/upload/v1618530107/blog_website/wub4spr3do3r7ouvcfwv.jpg' /> */}
      </div>
    </>
  );
}

export default CardImage;
