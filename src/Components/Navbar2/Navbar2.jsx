import React from "react";
import style from "./Navbar2.module.css";

export default function Navbar2() {
  return (
    <>
      <nav className="navbar navbar-dark bg-danger bg-gradient fixed-top py-2 px-2">
        <div className="container-fluid container d-flex justify-content-between">
          <div className={`${style.nava}`}>
            <button
              className="navbar-toggler border-light"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a
              href="/"
              className="navbar-brand m-2 text-light"
              style={{ fontFamily: "Lucida Handwriting, cursive" }}
            >
              Luffy TV
            </a>
          </div>
          <div className={`${style.navSearch}`}>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="What would you like to watch today ?"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
          <button
            className={`navbar-toggler ${style.navbartoggle}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <div className={`${style.navb}`}>
            <a
              className="navbar-brand"
              href="#"
              style={{ fontFamily: "Lucida Handwriting, cursive" }}
            >
              Anime
            </a>
            <a
              className="navbar-brand"
              href="#"
              style={{ fontFamily: "Lucida Handwriting, cursive" }}
            >
              Music
            </a>
            <a
              className="navbar-brand"
              href="#"
              style={{ fontFamily: "Lucida Handwriting, cursive" }}
            >
              K-Drama
            </a>
          </div>
          <div
            className="offcanvas offcanvas-start text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title text-ligth"
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
                    href="/"
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

      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-danger bg-gradient p-4 mt-5 d-flex justify-content-center">
          <input
            className="form-control me-2 w-50"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </div>
      </div>
    </>
  );
}
