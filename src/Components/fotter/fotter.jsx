import React from "react";
import style from "./fotter.module.css";
import { logo } from "../../utils/images";

export default function Fotter() {
  return (
    <footer className={`${style.footersection} ${style.container3}`}>
      <div className="container">
        <div className={`${style.footercontent} pt-5 pb-5"`}>
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className={style.footerwidget}>
                <div className={style.footerlogo}>
                  <a href="/">
                    <img src={logo} className="img-fluid" alt="logo" />
                  </a>
                </div>
                <div className={style.footertext}>
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                    sed do eiusmod tempor incididuntut consec tetur adipisicing
                    elit,Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className={`${style.footersocialicon} mb-5`}>
                  <span>Follow us</span>
                  <a href="#">
                    <i className={`fab fa-facebook-f ${style.facebookbg}`}></i>
                  </a>
                  <a href="#">
                    <i className={`fab fa-twitter ${style.twitterbg}`}></i>
                  </a>
                  <a href="#">
                    <i className={`fab fa-google-plus-g ${style.googlebg}`}></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className={style.footerwidget}>
                <div className={style.footerwidgetheading}>
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Anime</a>
                  </li>
                  <li>
                    <a href="#">Movie</a>
                  </li>
                  <li>
                    <a href="#">Music</a>
                  </li>
                  <li>
                    <a href="#">K-Drama</a>
                  </li>
                  <li>
                    <a href="#">Hollywood</a>
                  </li>
                  <li>
                    <a href="#">Bollywood</a>
                  </li>
                  <li>
                    <a href="#">18+</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Latest News</a>
                  </li>

                  <li>
                    <a href="#">Bhakti</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Suscription</a>
                  </li>
                  <li>
                    <a href="#">Refer & Earn</a>
                  </li>
                  <li>
                    <a href="#">Carrers</a>
                  </li>
                  <li>
                    <a href="#">History</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50 mb-5">
              <div className={style.footerwidget}>
                <div className={style.footerwidgetheading}>
                  <h3>Subscribe</h3>
                </div>
                <div className={`${style.footertext} mb-25`}>
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div className={style.subscribeform}>
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <i className="fab fa-telegram-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
