import React from "react";

// user defined imports
import {
  dark,
  fastandfurious,
  jjk,
  naruto,
  onepiece,
  pathan,
  saitan,
} from "../../utils/images";
import style from "./courosel.module.css";

export default function Courseal() {
  return (
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
  );
}
