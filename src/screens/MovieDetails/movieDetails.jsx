import React, { useCallback, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import Fotter from "../../Components/fotter/fotter";
import { loadSlim } from "tsparticles-slim";
import { particlesOptions } from "../../Components/tsparticles/particlesConfig";
import Particles from "react-tsparticles";
import Courseal from "../../Components/courosel/courseal";
import { movieDetial, screenshots } from "../../utils/images";
import style from "./movieDetails.module.css";

export default function MovieDetails() {
  let { id } = useParams();
  const location = useLocation();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // url of the page
  const url = window.location.href;

  useEffect(() => {
    const loadDisqusScript = () => {
      window.disqus_config = function () {
        this.page.url = url;
        this.page.identifier = url;
      };
      const script = document.createElement("script");
      script.src = "https://demo-rwbytrkrcl.disqus.com/embed.js";
      script.setAttribute("data-timestamp", +new Date());
      document.head.appendChild(script);
    };
    loadDisqusScript();
  }, []);

  return (
    <>
      <Navbar2 />

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />

      <Courseal />

      <div className="container">
        <div className="row">
          <div className="col-md-9 mt-4 mb-4">
            <h3 className="text-light">
              Murderer (2014) WEB-DL [Hindi (ORG 2.0) + Korean] 1080p 720p &
              480p Dual Audio [x264/10Bit-HEVC] | Full Movie
            </h3>
            <div className="d-flex justify-content-center align-items-center mt-4 mb-4 flex-column text-light">
              <img src={movieDetial} alt="" className="mt-4" />
              <h3 className="mt-4">Damsel (Hindi Dubbed)</h3>
              <h6 className="mt-2">
                iMDB Rating : <span className="text-success">6.7</span> / 10
              </h6>
              <h6 className="mt-2">Genre: Fantasy | Action | Adventure</h6>
              <h6 className="mt-2">
                Stars: Millie Bobby Brown, Ray Winstone, Angela Bassett
              </h6>
              <h6 className="mt-2">Director: Juan Carlos Fresnadillo</h6>
              <h6 className="mt-2">
                Language: Hindi (ORG 5.1) + English 5.1 / ESubs Quality: WEB-DL
              </h6>
              <h6 className="mt-4">1080p | 720p | 480p</h6>
            </div>

            <h3 className="text-danger">About</h3>
            <hr className="text-light" />
            <h6 className="text-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
              porro atque dicta dignissimos, aliquam possimus quisquam explicabo
              temporibus placeat maxime odio sit quia veritatis cupiditate
              voluptate iusto omnis blanditiis similique? Delectus labore odio
              voluptates hic reiciendis nostrum repellendus ratione quae
              accusantium nihil quod fuga ipsum sapiente nulla, error vel
              beatae. <br />
              <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              dicta officia temporibus nam nihil, culpa eius? Aliquam molestiae
              suscipit sequi quo nostrum aut magnam dolores similique dolore ab
              commodi a pariatur, provident distinctio sint officiis cupiditate
              maiores reprehenderit ipsum molestias beatae praesentium dicta
              repudiandae debitis! Quidem nisi excepturi deserunt et totam
              soluta voluptatem sapiente esse ipsum amet ullam unde corrupti,
              repudiandae tempore veniam exercitationem, consequuntur nobis!
              Quidem saepe nostrum sequi ex, minus reprehenderit totam hic
              perferendis voluptatum doloribus quaerat ipsum.{" "}
            </h6>
            <br />
            <br />

            <h3 className="text-danger">Trailer</h3>
            <hr className="text-light" />

            <div className="d-flex justify-content-center align-items-center mt-4 mb-4">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Yxe-mIVIwM4?si=PT_T_Q6oZ2M-hYT9"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>

            <h3 className="text-danger">Screen Shots</h3>
            <hr className="text-light" />
            <div className="d-flex justify-content-between align-items-center mt-4 mb-4 flex-wrap">
              <img
                src={screenshots}
                alt=""
                srcset=""
                style={{ maxWidth: "20rem", maxHeight: "10rem" }}
                className="m-1 "
              />
              <img
                src={screenshots}
                alt=""
                srcset=""
                style={{ maxWidth: "20rem", maxHeight: "10rem" }}
                className="m-1 "
              />
              <img
                src={screenshots}
                alt=""
                srcset=""
                style={{ maxWidth: "20rem", maxHeight: "10rem" }}
                className="m-1 "
              />
              <img
                src={screenshots}
                alt=""
                srcset=""
                style={{ maxWidth: "20rem", maxHeight: "10rem" }}
                className="m-1 "
              />
              <img
                src={screenshots}
                alt=""
                srcset=""
                style={{ maxWidth: "20rem", maxHeight: "10rem" }}
                className="m-1 "
              />
              <img
                src={screenshots}
                alt=""
                srcset=""
                style={{ maxWidth: "20rem", maxHeight: "10rem" }}
                className="m-1 "
              />
            </div>

            <h3 className="text-danger">Download Links</h3>
            <hr className="text-light" />
            <div className="d-flex justify-content-center align-items-center">
              <ul>
                <li className="list-group-item">
                  <h3 className={`text-light ${style.download}`}>
                    480P(380mb)
                  </h3>
                </li>
                <li className="list-group-item">
                  <h3 className={`text-light ${style.download}`}>720P(1gb)</h3>
                </li>
                <li className="list-group-item download">
                  <h3 className={`text-light ${style.download}`}>
                    1080P(2.3gb)
                  </h3>
                </li>
                <li className="list-group-item">
                  <h3 className={`text-light ${style.download}`}>HQ(6gb)</h3>
                </li>
              </ul>
            </div>

            <h3 className="text-danger">Comment Section</h3>
            <hr className="text-light" />

            <div className="container bg-black">
              <div id="disqus_thread"></div>
              <noscript>
                Please enable JavaScript to view the
                <a href="https://disqus.com/?ref_noscript">
                  comments powered by Disqus.
                </a>
              </noscript>
            </div>
          </div>
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
                <h6 className="text-light">Action</h6>
              </div>
              <div className={`p-3 d-flex ${style.trendbox} mt-4`}>
                <h6 className="text-light">Music</h6>
              </div>
              <div className={`p-3 d-flex ${style.trendbox} mt-4`}>
                <h6 className="text-light">18+</h6>
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
          </div>
        </div>
      </div>

      <Fotter />
    </>
  );
}
