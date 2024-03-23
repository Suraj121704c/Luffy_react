import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

// user defined imports
import style from "./Login.module.css";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import { particlesOptions } from "../../Components/tsparticles/particlesConfig";

export default function Login() {
  const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [isSignupButtonClicked, setIsSignupButtonClicked] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const toggleLogin = () => {
    setShowLoginForm(true);
    setIsSignupButtonClicked(false);
  };

  const toggleSignup = () => {
    setShowLoginForm(false);
    setIsSignupButtonClicked(true);
  };

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid justify-content-start">
          <button
            className="btn btn-outline-danger me-2"
            type="button"
            onClick={() => navigate("/")}
          >
            <span className="text-light">Go Back</span>
          </button>
        </div>
      </nav>

      <div className={style.formmodal}>
        <div className={style.formtoggle}>
          <button
            onClick={toggleLogin}
            style={{
              backgroundColor: !isSignupButtonClicked ? "#57b846" : "",
              color: !isSignupButtonClicked ? "#fff" : "#000",
            }}
          >
            log in
          </button>
          <button
            onClick={toggleSignup}
            style={{
              backgroundColor: isSignupButtonClicked ? "#57b846" : "",
              color: isSignupButtonClicked ? "#fff" : "",
            }}
          >
            sign up
          </button>
        </div>

        <div
          id={style.loginform}
          style={{ display: showLoginForm ? "block" : "none" }}
        >
          <form>
            <input type="text" placeholder="Enter email or username" />
            <input type="password" placeholder="Enter password" />
            <button type="button" className={`btn ${style.login}`}>
              login
            </button>
            <p>
              <a href="javascript:void(0)">Forgotten account</a>
            </p>
            <hr />
            <button type="button" className={`btn ${style.boxsdeffect}`}>
              <i className={`fa-brands fa-google ${style.fagoogle}`}></i> sign
              in with google
            </button>
          </form>
        </div>

        <div
          id={style.signupform}
          style={{
            display: showLoginForm ? "none" : "block",
          }}
        >
          <form>
            <input type="email" placeholder="Enter your email" />
            <input type="text" placeholder="Choose username" />
            <input type="password" placeholder="Create password" />
            <button type="button" className={`btn ${style.signup}`}>
              create account
            </button>
            <p style={{ color: "red" }}>
              Clicking create account means that you are agree to our<a href="">terms of services</a>.
            </p>
            <hr />
            <button type="button" className={`btn ${style.boxsdeffect}`}>
              <i className={`fa-brands fa-google ${style.fagoogle}`}></i>sign up
              with google
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
