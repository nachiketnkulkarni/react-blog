import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CardComponent from "../../Components/CardComponent";
import Loading from "../../Components/Loading";

function SigninHome(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const headers = await {
        authorization: "Bearer " + localStorage.getItem("authToken"),
      };

      try {
        //console.log(headers);
        const posts = await axios.post(
          "http://localhost:5000/post/getUserPost",
          {},
          { headers }
        );

        setData(posts.data.data);
      } catch (error) {
        setData(null);
      }
    })();
  }, []);
  if (data === null) {
    return (
      <>
        <Loading />
      </>
    );
  } else if (data.length === 0) {
    return (
      <div style={{ height: "100vh", margin: "auto", textAlign: "center" }}>
        <h1>No posts available. To view add posts.</h1>
      </div>
    );
  } else
    return (
      <div style={{ height: "100vh" }}>
        <Container>
          <Row>
            {data &&
              data.map((blog) => {
                //console.log(blog);
                return <CardComponent key={blog._id} blog={blog} Home Edit />;
              })}
          </Row>
        </Container>
      </div>
    );
}

export default SigninHome;
