import "./Home.css";
import "animate.css";
import { useEffect } from "react";

export function Home() {
  let textEffect = false;
  useEffect(() => {
    // Ensure that jQuery is available and the component is mounted
    if (window.jQuery && !textEffect) {
      // Use the .textrotator method from the plugin
      $(".rotate").textrotator();
      textEffect = true;
    }
  }, []);

  return (
    <>
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
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 my-5">
            <div className="col text-center">
              <div className="card h-100 p-3 shadow-lg colorfondo">
                <img
                  src="../../src/assets/img/www.png"
                  alt="web"
                  className="img-fluid w-100 border rounded-circle border-5"
                />
                <button className="btn btn-outline-warning my-4">
                  Conoce Más
                </button>
              </div>
            </div>
            <div className="col text-center">
              <div className="card h-100 p-3 shadow-lg colorfondo">
                <img
                  src="../../src/assets/img/escritorio.png"
                  alt="web"
                  className="img-fluid w-100 border rounded-circle border-5"
                />
              </div>
            </div>
            <div className="col text-center">
              <div className="card h-100 p-3 shadow-lg colorfondo">
                <img
                  src="../../src/assets/img/mando.png"
                  alt="web"
                  className="img-fluid w-100 border rounded-circle border-5"
                />
                <button className="btn btn-outline-warning my-4">
                  Conoce Más
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
