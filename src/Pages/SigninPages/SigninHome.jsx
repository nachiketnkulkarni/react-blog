import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CardComponent from "../../Components/CardComponent";
import Loading from "../../Components/Loading";
import { FetchData } from "../../Healpers/Functions/Functions";

function SigninHome(props) {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const { responseData } = await FetchData("http://localhost:5000/post");
      setData(responseData.data);
    })();
  }, []);
  if (!data) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <div>
      <Container>
        <Row>
          {data &&
            data.map((blog) => {
              //console.log(blog);
              return <CardComponent key={blog._id} blog={blog} Home />;
            })}
        </Row>
      </Container>
    </div>
  );
}

export default SigninHome;
