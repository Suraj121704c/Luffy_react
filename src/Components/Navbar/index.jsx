import React from "react";
import styles from "./Navbar.module.css";

function NavBar() {
  return (
    <>
      <nav className="navbar bg-gradient bg-danger fixed-top">
        <div className="container-fluid">
          <div>
            <button
              className="navbar-toggler m-1"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars text-light"></i>
            </button>
            <a
              className="navbar-brand text-light m-1"
              href=""
              style={{ fontFamily: "Lucida Handwriting, cursive" }}
            >
              Luffy TV
            </a>
          </div>

          <div className={`${styles.container2}`}>
            <div
              className={`d-flex justify-content-between ${styles.container2}`}
            >
              <a
                class="navbar-brand text-light m-2"
                href="Movies.html"
                style={{ fontFamily: "Lucida Handwriting, cursive" }}
              >
                Anime
              </a>
              <a
                className="navbar-brand text-light m-2"
                href="Movies.html"
                style={{ fontFamily: "Lucida Handwriting, cursive" }}
              >
                Music
              </a>
              <a
                className="navbar-brand text-light m-2"
                href="Movies.html"
                style={{ fontFamily: "Lucida Handwriting, cursive" }}
              >
                K-Drama
              </a>
              <a
                className="navbar-brand text-light m-2"
                href="Movies.html"
                style={{ fontFamily: "Lucida Handwriting, cursive" }}
              >
                BollyWood
              </a>
              <a
                className="navbar-brand text-light m-2"
                href="Movies.html"
                style={{ fontFamily: "Lucida Handwriting, cursive" }}
              >
                Hollywood
              </a>
            </div>
          </div>

          <div
            className="offcanvas offcanvas-start text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title text-light"
                id="offcanvasDarkNavbarLabel"
                style={{ fontFamily: "Lucida Handwriting, cursive" }}
              >
                Luffy TV
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link active text-danger"
                    aria-current="page"
                    href="#"
                    style={{ fontFamily: "Lucida Handwriting, cursive" }}
                  >
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#"
                    style={{ fontFamily: "Lucida Handwriting, cursive" }}
                  >
                    Login
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#"
                    style={{ fontFamily: "Lucida Handwriting, cursive" }}
                  >
                    Anime
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#"
                    style={{ fontFamily: "Lucida Handwriting, cursive" }}
                  >
                    Music
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#"
                    style={{ fontFamily: "Lucida Handwriting, cursive" }}
                  >
                    K-Drama
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#"
                    style={{ fontFamily: "Lucida Handwriting, cursive" }}
                  >
                    Bollywood
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#"
                    style={{ fontFamily: "Lucida Handwriting, cursive" }}
                  >
                    Hollywood
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#"
                    style={{ fontFamily: "Lucida Handwriting, cursive" }}
                  >
                    Bhakti
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#"
                    style={{ fontFamily: "Lucida Handwriting, cursive" }}
                  >
                    History
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#"
                    style={{ fontFamily: "Lucida Handwriting, cursive" }}
                  >
                    privacy
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#"
                    style={{ fontFamily: "Lucida Handwriting, cursive" }}
                  >
                    Terms & Conditions
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#"
                    style={{ fontFamily: "Lucida Handwriting, cursive" }}
                  >
                    Subsciption
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#"
                    style={{ fontFamily: "Lucida Handwriting, cursive" }}
                  >
                    Refer and Earn
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#"
                    style={{ fontFamily: "Lucida Handwriting, cursive" }}
                  >
                    Contact Us
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#"
                    style={{ fontFamily: "Lucida Handwriting, cursive" }}
                  >
                    Moblie App
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#"
                    style={{ fontFamily: "Lucida Handwriting, cursive" }}
                  >
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link active text-light"
                    aria-current="page"
                    href="#"
                    style={{ fontFamily: "Lucida Handwriting, cursive" }}
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
