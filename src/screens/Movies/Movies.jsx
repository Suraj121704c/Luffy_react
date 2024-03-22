import React, { useCallback, useState } from "react";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import Particles from "react-tsparticles";
import { particlesOptions } from "../../Components/tsparticles/particlesConfig";
import { loadSlim } from "tsparticles-slim";
import {
  dark,
  fastandfurious,
  jjk,
  naruto,
  onepiece,
  pathan,
  saitan,
} from "../../utils/images";
import style from "./movies.module.css";

const Movies = () => {
  const [one, setOne] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      <Navbar2 />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />

      <div className={`container ${style.container3}`}>
        <section>
          <marquee behavior="alternate">
            <img src={naruto} style={{ marginLeft: "20px" }} />
            <img src={onepiece} style={{ marginLeft: "20px" }} />
            <img src={jjk} style={{ marginLeft: "20px" }} />
            <img src={saitan} style={{ marginLeft: "20px" }} />
            <img src={fastandfurious} style={{ marginLeft: "20px" }} />
            <img src={dark} style={{ marginLeft: "20px" }} />
            <img src={pathan} style={{ marginLeft: "20px" }} />
          </marquee>
        </section>
      </div>

      <div className="container">
        <div className="d-flex justify-content-between flex-wrap align-items-center">
          <div className={`p-3 d-flex ${style.trendingbox} m-1`}>
            <h6 className="text-light">Anime</h6>
          </div>
          <div className={`p-3 d-flex ${style.trendingbox} m-1`}>
            <h6 className="text-light">Hollywood</h6>
          </div>
          <div className={`p-3 d-flex ${style.trendingbox} m-1`}>
            <h6 className="text-light">Bollywood</h6>
          </div>
          <div className={`p-3 d-flex ${style.trendingbox} m-1`}>
            <h6 className="text-light">Music</h6>
          </div>
          <div className={`p-3 d-flex ${style.trendingbox} m-1`}>
            <h6 className="text-light">K-Drama</h6>
          </div>
        </div>
      </div>

      <div className="container mt-3 mb-3">
        <div className="d-flex text-danger" style={{ cursor: "pointer" }}>
          <i
            class="fa-solid fa-box m-1"
            id="one"
            style={{ fontSize: "20px" }}
            onClick={() => setOne(true)}
          ></i>
          <i
            className="fa-solid fa-table-cells-large m-1"
            id="two"
            style={{ fontSize: "20px" }}
            onClick={() => setOne(false)}
          ></i>
        </div>
        <div className="row">
          <div className="col-md-3">
            <form className="d-flex mt-4" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-danger" type="submit">
                Search
              </button>
            </form>
            <div className="d-flex justify-content-between flex-wrap">
              <div className={`p-3 d-flex ${style.trendbox} mt-4`}>
                <h6 className="text-light">ALL</h6>
              </div>
              <div className={`p-3 d-flex ${style.trendbox} mt-4`}>
                <h6 className="text-light">Comedy</h6>
              </div>
              <div className={`p-3 d-flex ${style.trendbox} mt-4`}>
                <h6 className="text-light">Action</h6>
              </div>
              <div className={`p-3 d-flex ${style.trendbox} mt-4`}>
                <h6 className="text-light">Comedy</h6>
              </div>
              <div className={`p-3 d-flex ${style.trendbox} mt-4`}>
                <h6 className="text-light">Love</h6>
              </div>
              <div className={`p-3 d-flex ${style.trendbox} mt-4`}>
                <h6 className="text-light">Romance</h6>
              </div>
              <div className={`p-3 d-flex ${style.trendbox} mt-4`}>
                <h6 className="text-light">Creepy</h6>
              </div>
              <div className={`p-3 d-flex ${style.trendbox} mt-4`}>
                <h6 className="text-light">War</h6>
              </div>
              <div className={`p-3 d-flex ${style.trendbox} mt-4`}>
                <h6 className="text-light">Motivation</h6>
              </div>
            </div>
            <h3 className="text-danger mt-4">Most Watched</h3>
            <div className="container">
              <div
                className="card bg-black bg-gradient mt-4 border-light border-1"
                id={`${style.carring}`}
              >
                <img
                  src={jjk}
                  className={`card-img-top ${style.zoomin}`}
                  alt="..."
                />
                <div className={`${style.carringbody} card-body`}>
                  <div className={`${style.textsection} card-title`}>
                    <p>
                      <a href="movie_detail.html" className="text-light">
                        The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                        720p & 480p HD Online Stream | Full Movie
                      </a>
                    </p>
                  </div>
                  <div class={`${style.ctasection}`}></div>
                </div>
              </div>

              <div
                className="card bg-black bg-gradient mt-4 border-light border-1"
                id={`${style.carring}`}
              >
                <img
                  src={jjk}
                  className={`card-img-top ${style.zoomin}`}
                  alt="..."
                />
                <div className={`${style.carringbody} card-body`}>
                  <div className={`${style.textsection} card-title`}>
                    <p>
                      <a href="movie_detail.html" className="text-light">
                        The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                        720p & 480p HD Online Stream | Full Movie
                      </a>
                    </p>
                  </div>
                  <div class={`${style.ctasection}`}></div>
                </div>
              </div>

              <div
                className="card bg-black bg-gradient mt-4 border-light border-1"
                id={`${style.carring}`}
              >
                <img
                  src={jjk}
                  className={`card-img-top ${style.zoomin}`}
                  alt="..."
                />
                <div className={`${style.carringbody} card-body`}>
                  <div className={`${style.textsection} card-title`}>
                    <p>
                      <a href="movie_detail.html" className="text-light">
                        The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                        720p & 480p HD Online Stream | Full Movie
                      </a>
                    </p>
                  </div>
                  <div class={`${style.ctasection}`}></div>
                </div>
              </div>

              <div
                className="card bg-black bg-gradient mt-4 border-light border-1"
                id={`${style.carring}`}
              >
                <img
                  src={jjk}
                  className={`card-img-top ${style.zoomin}`}
                  alt="..."
                />
                <div className={`${style.carringbody} card-body`}>
                  <div className={`${style.textsection} card-title`}>
                    <p>
                      <a href="movie_detail.html" className="text-light">
                        The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                        720p & 480p HD Online Stream | Full Movie
                      </a>
                    </p>
                  </div>
                  <div class={`${style.ctasection}`}></div>
                </div>
              </div>

              <div
                className="card bg-black bg-gradient mt-4 border-light border-1"
                id={`${style.carring}`}
              >
                <img
                  src={jjk}
                  className={`card-img-top ${style.zoomin}`}
                  alt="..."
                />
                <div className={`${style.carringbody} card-body`}>
                  <div className={`${style.textsection} card-title`}>
                    <p>
                      <a href="movie_detail.html" className="text-light">
                        The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                        720p & 480p HD Online Stream | Full Movie
                      </a>
                    </p>
                  </div>
                  <div class={`${style.ctasection}`}></div>
                </div>
              </div>

              <div
                className="card bg-black bg-gradient mt-4 border-light border-1"
                id={`${style.carring}`}
              >
                <img
                  src={jjk}
                  className={`card-img-top ${style.zoomin}`}
                  alt="..."
                />
                <div className={`${style.carringbody} card-body`}>
                  <div className={`${style.textsection} card-title`}>
                    <p>
                      <a href="movie_detail.html" className="text-light">
                        The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                        720p & 480p HD Online Stream | Full Movie
                      </a>
                    </p>
                  </div>
                  <div class={`${style.ctasection}`}></div>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-danger">
                  More...
                </button>
              </div>
            </div>
          </div>

          <div class="col-md-7 offset-md-1">
            {one ? (
              <div id="first" className="d-flex flex-wrap">
                <div class="card m-1" style={{ width: "14rem" }}>
                  <img
                    src={naruto}
                    class="card-img-top zoom-effect"
                    alt="..."
                    style={{ height: "10rem" }}
                  />
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      <a href="movie_detail.html" class="text-dark">
                        The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                        720p & 480p HD Online Stream | Full Movie
                      </a>
                    </p>
                  </div>
                </div>
                <div class="card m-1" style={{ width: "14rem" }}>
                  <img
                    src={naruto}
                    class="card-img-top zoom-effect"
                    alt="..."
                    style={{ height: "10rem" }}
                  />
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      <a href="movie_detail.html" class="text-dark">
                        The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                        720p & 480p HD Online Stream | Full Movie
                      </a>
                    </p>
                  </div>
                </div>
                <div class="card m-1" style={{ width: "14rem" }}>
                  <img
                    src={naruto}
                    class="card-img-top zoom-effect"
                    alt="..."
                    style={{ height: "10rem" }}
                  />
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      <a href="movie_detail.html" class="text-dark">
                        The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                        720p & 480p HD Online Stream | Full Movie
                      </a>
                    </p>
                  </div>
                </div>
                <div class="card m-1" style={{ width: "14rem" }}>
                  <img
                    src={naruto}
                    class="card-img-top zoom-effect"
                    alt="..."
                    style={{ height: "10rem" }}
                  />
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      <a href="movie_detail.html" class="text-dark">
                        The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                        720p & 480p HD Online Stream | Full Movie
                      </a>
                    </p>
                  </div>
                </div>
                <div class="card m-1" style={{ width: "14rem" }}>
                  <img
                    src={naruto}
                    class="card-img-top zoom-effect"
                    alt="..."
                    style={{ height: "10rem" }}
                  />
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      <a href="movie_detail.html" class="text-dark">
                        The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                        720p & 480p HD Online Stream | Full Movie
                      </a>
                    </p>
                  </div>
                </div>
                <div class="card m-1" style={{ width: "14rem" }}>
                  <img
                    src={naruto}
                    class="card-img-top zoom-effect"
                    alt="..."
                    style={{ height: "10rem" }}
                  />
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      <a href="movie_detail.html" class="text-dark">
                        The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                        720p & 480p HD Online Stream | Full Movie
                      </a>
                    </p>
                  </div>
                </div>

                <div class="card m-1" style={{ width: "14rem" }}>
                  <img
                    src={naruto}
                    class="card-img-top zoom-effect"
                    alt="..."
                    style={{ height: "10rem" }}
                  />
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      <a href="movie_detail.html" class="text-dark">
                        The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                        720p & 480p HD Online Stream | Full Movie
                      </a>
                    </p>
                  </div>
                </div>
                <div class="card m-1" style={{ width: "14rem" }}>
                  <img
                    src={naruto}
                    class="card-img-top zoom-effect"
                    alt="..."
                    style={{ height: "10rem" }}
                  />
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      <a href="movie_detail.html" class="text-dark">
                        The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                        720p & 480p HD Online Stream | Full Movie
                      </a>
                    </p>
                  </div>
                </div>
                <div class="card m-1" style={{ width: "14rem" }}>
                  <img
                    src={naruto}
                    class="card-img-top zoom-effect"
                    alt="..."
                    style={{ height: "10rem" }}
                  />
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      <a href="movie_detail.html" class="text-dark">
                        The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                        720p & 480p HD Online Stream | Full Movie
                      </a>
                    </p>
                  </div>
                </div>

                <div class="card m-1" style={{ width: "14rem" }}>
                  <img
                    src={naruto}
                    class="card-img-top zoom-effect"
                    alt="..."
                    style={{ height: "10rem" }}
                  />
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      <a href="movie_detail.html" class="text-dark">
                        The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                        720p & 480p HD Online Stream | Full Movie
                      </a>
                    </p>
                  </div>
                </div>
                <div class="card m-1" style={{ width: "14rem" }}>
                  <img
                    src={naruto}
                    class="card-img-top zoom-effect"
                    alt="..."
                    style={{ height: "10rem" }}
                  />
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      <a href="movie_detail.html" class="text-dark">
                        The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                        720p & 480p HD Online Stream | Full Movie
                      </a>
                    </p>
                  </div>
                </div>
                <div class="card m-1" style={{ width: "14rem" }}>
                  <img
                    src={naruto}
                    class="card-img-top zoom-effect"
                    alt="..."
                    style={{ height: "10rem" }}
                  />
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      <a href="movie_detail.html" class="text-dark">
                        The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                        720p & 480p HD Online Stream | Full Movie
                      </a>
                    </p>
                  </div>
                </div>
                <div class="card m-1" style={{ width: "14rem" }}>
                  <img
                    src={naruto}
                    class="card-img-top zoom-effect"
                    alt="..."
                    style={{ height: "10rem" }}
                  />
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      <a href="movie_detail.html" class="text-dark">
                        The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                        720p & 480p HD Online Stream | Full Movie
                      </a>
                    </p>
                  </div>
                </div>
                <div class="card m-1" style={{ width: "14rem" }}>
                  <img
                    src={naruto}
                    class="card-img-top zoom-effect"
                    alt="..."
                    style={{ height: "10rem" }}
                  />
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      <a href="movie_detail.html" class="text-dark">
                        The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                        720p & 480p HD Online Stream | Full Movie
                      </a>
                    </p>
                  </div>
                </div>
                <div class="card m-1" style={{ width: "14rem" }}>
                  <img
                    src={naruto}
                    class="card-img-top zoom-effect"
                    alt="..."
                    style={{ height: "10rem" }}
                  />
                  <div class="card-body">
                    <p class="card-text fw-bold">
                      <a href="movie_detail.html" class="text-dark">
                        The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                        720p & 480p HD Online Stream | Full Movie
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div class="container" id="second">
                <div class="container">
                  <div
                    class="card bg-danger bg-transparent mt-4 border-1 border-black"
                    id={`${style.car}`}
                  >
                    <img src={dark} class="card-img-top" alt="..." />
                    <div class="car-body card-body">
                      <div class={`${style.textsection} card-title`}>
                        <p class="text-light">
                          <a href="movie_detail.html" class="text-light">
                            The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                            720p & 480p HD Online Stream | Full Movie
                          </a>
                        </p>
                      </div>
                      <div class={style.ctasection}></div>
                    </div>
                  </div>

                  <div
                    class="card bg-danger bg-transparent mt-4 border-1 border-black"
                    id={`${style.car}`}
                  >
                    <img src={dark} class="card-img-top" alt="..." />
                    <div class="car-body card-body">
                      <div class={`${style.textsection} card-title`}>
                        <p class="text-light">
                          <a href="movie_detail.html" class="text-light">
                            The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                            720p & 480p HD Online Stream | Full Movie
                          </a>
                        </p>
                      </div>
                      <div class={style.ctasection}></div>
                    </div>
                  </div>

                  <div
                    class="card bg-danger bg-transparent mt-4 border-1 border-black"
                    id={`${style.car}`}
                  >
                    <img src={dark} class="card-img-top" alt="..." />
                    <div class="car-body card-body">
                      <div class={`${style.textsection} card-title`}>
                        <p class="text-light">
                          <a href="movie_detail.html" class="text-light">
                            The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                            720p & 480p HD Online Stream | Full Movie
                          </a>
                        </p>
                      </div>
                      <div class={style.ctasection}></div>
                    </div>
                  </div>

                  <div
                    class="card bg-danger bg-transparent mt-4 border-1 border-black"
                    id={`${style.car}`}
                  >
                    <img src={dark} class="card-img-top" alt="..." />
                    <div class="car-body card-body">
                      <div class={`${style.textsection} card-title`}>
                        <p class="text-light">
                          <a href="movie_detail.html" class="text-light">
                            The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                            720p & 480p HD Online Stream | Full Movie
                          </a>
                        </p>
                      </div>
                      <div class={style.ctasection}></div>
                    </div>
                  </div>

                  <div
                    class="card bg-danger bg-transparent mt-4 border-1 border-black"
                    id={`${style.car}`}
                  >
                    <img src={dark} class="card-img-top" alt="..." />
                    <div class="car-body card-body">
                      <div class={`${style.textsection} card-title`}>
                        <p class="text-light">
                          <a href="movie_detail.html" class="text-light">
                            The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                            720p & 480p HD Online Stream | Full Movie
                          </a>
                        </p>
                      </div>
                      <div class={style.ctasection}></div>
                    </div>
                  </div>

                  <div
                    class="card bg-danger bg-transparent mt-4 border-1 border-black"
                    id={`${style.car}`}
                  >
                    <img src={dark} class="card-img-top" alt="..." />
                    <div class="car-body card-body">
                      <div class={`${style.textsection} card-title`}>
                        <p class="text-light">
                          <a href="movie_detail.html" class="text-light">
                            The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                            720p & 480p HD Online Stream | Full Movie
                          </a>
                        </p>
                      </div>
                      <div class={style.ctasection}></div>
                    </div>
                  </div>

                  <div
                    class="card bg-danger bg-transparent mt-4 border-1 border-black"
                    id={`${style.car}`}
                  >
                    <img src={dark} class="card-img-top" alt="..." />
                    <div class="car-body card-body">
                      <div class={`${style.textsection} card-title`}>
                        <p class="text-light">
                          <a href="movie_detail.html" class="text-light">
                            The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                            720p & 480p HD Online Stream | Full Movie
                          </a>
                        </p>
                      </div>
                      <div class={style.ctasection}></div>
                    </div>
                  </div>

                  <div
                    class="card bg-danger bg-transparent mt-4 border-1 border-black"
                    id={`${style.car}`}
                  >
                    <img src={dark} class="card-img-top" alt="..." />
                    <div class="car-body card-body">
                      <div class={`${style.textsection} card-title`}>
                        <p class="text-light">
                          <a href="movie_detail.html" class="text-light">
                            The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                            720p & 480p HD Online Stream | Full Movie
                          </a>
                        </p>
                      </div>
                      <div class={style.ctasection}></div>
                    </div>
                  </div>

                  <div
                    class="card bg-danger bg-transparent mt-4 border-1 border-black"
                    id={`${style.car}`}
                  >
                    <img src={dark} class="card-img-top" alt="..." />
                    <div class="car-body card-body">
                      <div class={`${style.textsection} card-title`}>
                        <p class="text-light">
                          <a href="movie_detail.html" class="text-light">
                            The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                            720p & 480p HD Online Stream | Full Movie
                          </a>
                        </p>
                      </div>
                      <div class={style.ctasection}></div>
                    </div>
                  </div>

                  <div
                    class="card bg-danger bg-transparent mt-4 border-1 border-black"
                    id={`${style.car}`}
                  >
                    <img src={dark} class="card-img-top" alt="..." />
                    <div class="car-body card-body">
                      <div class={`${style.textsection} card-title`}>
                        <p class="text-light">
                          <a href="movie_detail.html" class="text-light">
                            The Mummy Murders (2024) WEB-HD [Hindi (Voice Over)]
                            720p & 480p HD Online Stream | Full Movie
                          </a>
                        </p>
                      </div>
                      <div class={style.ctasection}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <nav aria-label="Page navigation" class="mt-5">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a class="page-link text-danger">Previous</a>
                </li>
                <li class="page-item">
                  <a class="page-link text-black" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link text-black" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link text-black" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link text-success" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
