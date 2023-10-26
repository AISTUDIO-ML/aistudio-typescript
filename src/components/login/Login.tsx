import React, { useEffect } from "react";
import login from "../assets/images/splash.png";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import { useFormik } from "formik";
import { LoginFormSchema } from "./LoginFormSchema";
import $ from "jquery";
import { logIn } from "../service";
// import axios from 'axios';
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import { BsMicrosoft, BsFillShieldLockFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import lock from "../assets/images/2fa.png";
import honeypotz1 from "../assets/images/honeypotz1.png";
import HoneyPotz from "../HoneyPotz";

const Login = () => {
  //   Removing white space through jquery
  useEffect(() => {
    $("input#space").on({
      keydown: function (e: any) {
        if (e.which === 32) return false;
      },
      change: function (e: any) {
        const inputElement = e.target as HTMLInputElement;
        inputElement.value = inputElement.value.replace(/\s/g, "");
        // this.value = this.value.replace(/\s/g, "");
      },
    });
  }, []);

  // using formik
  const formInitialValues = {
    email: "",
    password: "",
  };
  // using formik
  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: formInitialValues,
      validationSchema: LoginFormSchema,

      // If we hit the Login Button, the value provided by user will be stored in "values"
      onSubmit: (values) => {
        logIn(values);
      },
    });

  return (
    <>
      <Header />
      <section className="main">
        <div className="row">
          <div className="col">
            <div className="login">
              <h1>
                {" "}
                Log in to
                <br /> your account
              </h1>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type Here"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="space"
                  />
                  {errors.email && touched.email ? (
                    <span className="err_msg"> {errors.email} </span>
                  ) : null}
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Type Here"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="space"
                  />

                  {errors.password && touched.password ? (
                    <span className="err_msg"> {errors.password} </span>
                  ) : null}
                </div>
                <div className="row remember">
                  <div className="col">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <a href="#" className="forgot">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary tpspc">
                  Log In
                </button>
                <div className="my-4">
                  <div>
                    <AiFillGoogleCircle size={30} className="social-icons" />
                    <AiFillGithub size={30} className="social-icons" />
                    <BsMicrosoft size={23} className="social-icons" />
                    <FaUserTie size={23} className="social-icons" />
                    <BsFillShieldLockFill size={23} className="social-icons" />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col">
            <div className="splash">
              <img src={login} alt="" />
            </div>
          </div>
        </div>

        {/* <div className="row">
        <div className="col-md-12" style={{ paddingTop: "15px" }}>
          <Link
            to="/signup"
            className="col-md-12 btn-block"
            // routerLinkActive="activebutton"
          >
            <button
              className="btn btn-primary mx-auto"
              style={{ width: "100%", maxWidth: "1280px" }}
            >
              Next Page of Product Demo
            </button>
          </Link>
        </div>
      </div> */}
      </section>
      <HoneyPotz />
    </>
  );
};

export default Login;
