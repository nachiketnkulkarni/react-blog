import React from "react";
import { Card } from "react-bootstrap";

function CardImage(props) {
  return (
    <>
      <div className={props.Blog && "col-md-4 no-padding"}>
        {/* {props.Edit && (
          <div className='wrapper'>
            <div className='mynav' style={{ height: "20px" }}>
              <a href='#'>
                <span className='lnr lnr-cog glyphicon glyphicon-option-vertical'></span>
              </a>
            </div>
          </div>
        )} */}

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
