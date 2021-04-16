import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { initialSignInValues } from "../Healpers/FormInitialValues";
import { signInSchema } from "../Healpers/FormSchemas";
import { CheckLogin } from "../Healpers/Functions/Functions";

function LoginPage(props) {
  const [errorPresent, setErrorPresent] = useState(null);

  useEffect(() => {
    if (CheckLogin()) {
      props.history.push("/home");
    }
  }, [props.history]);

  const login = async (val) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        val
      );
      if (!data.success) {
        setErrorPresent(data.error);
      }

      // console.log(data);

      // const token = EncryptString(data.token, "encrypt");

      // console.log("token enc:--", token);
      // await localStorage.setItem("authTokenEnc", token);
      await localStorage.setItem("authToken", data.token);
      await props.history.push("/home");
    } catch (error) {
      setErrorPresent(error.response.data.error);
    }
  };

  return (
    <>
      <div id='login' style={{ height: "100vh" }}>
        <div className='container'>
          <div
            id='login-row'
            className='row justify-content-center align-items-center'>
            <div id='login-column' className='col-md-6'>
              <div id='login-box' className='col-md-12'>
                <Formik
                  initialValues={initialSignInValues}
                  validationSchema={signInSchema}
                  onSubmit={(val) => {
                    login(val);
                  }}>
                  {({ errors, touched }) => (
                    <Form id='login-form' className='form'>
                      <h3 className='text-center text-info'>Login</h3>
                      {errorPresent && <h2>{errorPresent}</h2>}

                      <div className='form-group'>
                        <Field
                          name='email'
                          className='form-control'
                          placeholder='Enter email'
                        />
                        {errors.email && touched.email ? (
                          <div className='error-text'>{errors.email}</div>
                        ) : null}
                      </div>
                      <div className='form-group'>
                        <Field
                          name='password'
                          type='password'
                          className='form-control'
                          placeholder='Enter password.'
                        />
                        {errors.password && touched.password ? (
                          <div className='error-text'>{errors.password}</div>
                        ) : null}
                      </div>
                      <div className='form-group'>
                        <br />
                        <input
                          type='submit'
                          name='submit'
                          className='btn btn-info btn-md'
                          value='submit'
                        />
                      </div>
                      <div id='register-link' className='text-right'>
                        <a href='/' className='text-info'>
                          Register here
                        </a>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
