import React from "react";
import NavBar from "../../Components/Navbar/index";
import TypeWriter from "../../Components/typwriter";
import styles from "./HomePage.module.css";

const typewrite = [
  " Hollywood ...",
  " Bollywood ...",
  " Anime ...",
  " K-Drama ...",
  " k-Pop ...",
  " Music ...",
];

function Homepage() {
  return (
    <>
      <NavBar />
      <div className={`container m-xxl-5 ${styles.container1}`}>
        <div className="p-xxl-5">
          <div className="p-xxl-5">
            <div className="p-xxl-5 justify-content-center d-flex flex-column align-items-center">
              <h1 className="text-light">Luffy TV</h1>
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
