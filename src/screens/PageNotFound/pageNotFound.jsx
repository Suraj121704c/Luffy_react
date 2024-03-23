import React, { useCallback } from "react";

// user defined imports
import style from "./pageNotFound.module.css";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { particlesOptions } from "../../Components/tsparticles/particlesConfig";
import { cloud } from "../../utils/images";

export default function PageNotFound() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />
      <main className="mt-5">
        <h1>Error 404. The page does not exist</h1>
        <p>
          Sorry! The page you are looking for can not be found. Perhaps the page
          you requested was moved or deleted. It is also possible that you made
          a small typo when entering the address. Go to the main page.
        </p>
        <div className={style.bl_page404__wrapper}>
          <img src={cloud} alt="cloud_warmcasino.png" />
          <div className={style.bl_page404__el1}></div>
          <div className={style.bl_page404__el2}></div>
          <div className={style.bl_page404__el3}></div>
          <Link className={style.bl_page404__link} to={"/"}>
            go home
          </Link>
        </div>
      </main>
    </>
  );
}
