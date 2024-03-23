import React, { useCallback } from "react";
import NavBar from "../../Components/Navbar/index";
import TypeWriter from "../../Components/typwriter";
import styles from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import { particlesOptions } from "../../Components/tsparticles/particlesConfig";

const typewrite = [
  " Hollywood ...",
  " Bollywood ...",
  " Anime ...",
  " K-Drama ...",
  " k-Pop ...",
  " Music ...",
];

function Homepage() {
  const navigate = useNavigate();
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);


  return (
    <>
      <NavBar />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />
      <div className={`container m-xxl-5 ${styles.container1}`}>
        <div className={`${styles.pyramid}`}>
          <div className={`${styles.glow}`}></div>
          <div>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
        </div>
        <div className="p-xxl-5">
          <div className="p-xxl-5">
            <div className="p-xxl-5 justify-content-center d-flex flex-column align-items-center">
              <h1 className="text-light mt-5">Luffy TV</h1>
              <h3 className="text-light mt-5" style={{ fontSize: "55px" }}>
                The Best
                <span className="wrap typewrite text-danger">
                  <TypeWriter data={typewrite} />
                </span>
              </h3>
              <p className="text-light mt-2">
                for <span className="text-danger">you</span> in one place
              </p>
              <div
                className="input-group mt-4 d-flex justify-content-center"
                style={{ height: "4rem" }}
              >
                <div className="input-group-prepend mb-xxl-5">
                  <button
                    id="button-addon8"
                    type="submit"
                    className={`btn btn-danger ${styles.buttonWidth}`}
                    style={{ fontFamily: "Lucida Handwriting, cursive" }}
                    onClick={() => navigate("/movies")}
                  >
                    Go To Homepage
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
