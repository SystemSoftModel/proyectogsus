import "./Home.css";
import "animate.css";
import { useEffect } from "react";
import { Trabajos } from "../Trabajos/Trabajos";
import { Formulario } from "../Formulario/formulario";
import { Sobremi } from "../sobre mi/sobremi";

import URL_IDLE from "../../src/assets/animations/idle.gif";
import URL_SWORD from "../../src/assets/animations/sword.gif";
import URL_RUN from "../../src/assets/animations/run.gif"

export function Home() {
  let textEffect = false;
  const initializeAnimations = () => {
    var sprite = document.querySelector('.sprite');
    sprite.typeAnimation = 'idle';

    document.addEventListener('click', () => {
      sprite.style.background = "url('" + URL_SWORD +"') no-repeat";
      sprite.typeAnimation = 'sword';
    });
    document.addEventListener('scroll', () => {
      sprite.style.background = "url('" + URL_RUN +"') no-repeat";
      sprite.typeAnimation = 'sword';
    });

    sprite.addEventListener('animationiteration', () => {
      if (sprite.typeAnimation !== 'idle') {
        sprite.style.background = "url('" + URL_IDLE +"') no-repeat";
        sprite.typeAnimation = 'idle';
      }
    })
  }

  useEffect(() => {
    if (window.jQuery && !textEffect) {
      $(".rotate").textrotator();
      textEffect = true;
    }

    initializeAnimations();
  }, []);

  return (
    <>
    <div class="sprite"></div>

      <header>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img
                src="../../src/assets/img/espadaAmarrilla.png"
                alt="Logo"
                className="navbar-logo img-fluid "
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/trabajos">
                    Trabajos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/sobre-mi">
                    Sobre Mí
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contactame">
                    Contáctame
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <body>
        <div className="home">
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>
              <div
                className="title-section col-md-8 wow fadeIn animated"
                data-wow-delay="0.9s"
              >
                <br />
                <img
                  className="img-fluid mt-5"
                  src="../../src/assets/img/logo.png"
                  alt="Logo"
                />
                <h2 className="rotate">GAME DEVELOPER, FRONTEND, BACKEND</h2>
                <p>
                  Hola soy <strong>Jesús Barraza.</strong>
                  <br /> Welcome to my portfolio.
                </p>
                <a
                  href="./files/GsusCV.pdf"
                  target="_blank"
                  className="btn btn-outline-warning"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <Trabajos></Trabajos>
        <Sobremi></Sobremi>
        <Formulario></Formulario>

      </body>
    </>
  );
}
