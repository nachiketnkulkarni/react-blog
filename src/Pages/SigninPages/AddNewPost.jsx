import axios from "axios";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import FormInput, {
  FormTextArea,
  FormUploadFile,
} from "../../Components/FormInput";
import Loading from "../../Components/Loading";
import { initialAddNewPostValues } from "../../Healpers/FormInitialValues";
import { CheckLogin } from "../../Healpers/Functions/Functions";
import { SigninNavBarMenus } from "../../Healpers/NavBarMenu";
import Header from "../Header";

function AddNewPost(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [errorPresent, setErrorPresent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (CheckLogin()) {
      setIsLogin(true);
    }
  }, []);

  if (!isLogin) {
    <Redirect to='/' />;
  }

  // function addPost(params) {}

  const headers = {
    authorization: "Bearer " + localStorage.getItem("authToken"),
  };

  const sendData = async (val) => {
    setLoading(true);
    // console.log(val);
    try {
      const { data } = await axios.post("http://localhost:5000/post/add", val, {
        headers,
      });

      //console.log(data);
      if (!data.success) {
        setErrorPresent(data.error);
      }

      await sendAlert();
    } catch (error) {
      console.log(error.message);
    }
  };

  const sendAlert = () => {
    setLoading(false);
    alert("Post added succesfully");
    props.history.push("/home");
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header navBarMenus={SigninNavBarMenus} type='SigninHome' />

      <div className='mb-5'>
        <Container>
          {errorPresent && <h5>{errorPresent}</h5>}
          <Formik
            initialValues={initialAddNewPostValues}
            onSubmit={(val) => {
              sendData(val);
            }}>
            {({ errors, touched, isValidating, setFieldValue }) => (
              <Form
                style={{
                  backgroundColor: "#fff",
                  padding: "5vh",
                  alignSelf: "center",
                }}>
                <FormInput
                  title='Title'
                  name='title'
                  placeholder='Enter Title'
                  type='text'
                  margin
                />

                <FormInput
                  title='Location'
                  name='location'
                  placeholder='Enter Location'
                  type='text'
                  margin
                />

                <FormTextArea
                  title='Description'
                  name='description'
                  placeholder='Enter Description'
                  rows={4}
                />

                <FormInput
                  title='Video Link'
                  name='videoLink'
                  placeholder='Enter Video Link'
                  type='text'
                  margin
                />

                <FormUploadFile name='imgLink' setFieldValue={setFieldValue} />

                <Button variant='primary' type='submit' className='mt-2'>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
      </div>
    </>
  );
}

export default AddNewPost;
