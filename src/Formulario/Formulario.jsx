import "./Formulario.css"
export function Formulario() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
      />
      <title>Formulario</title>
      <div className="container-fluid text-white">
        <div className="row bg-black">

          <div className="col-md-5 text-center my-5">
            <h4>Contáctame</h4>
            <br />
            <div className="row">
              <div className="col-6 text-end">
                <i className="bi bi-telephone-fill border rounded-circle p-3 text-warning" />
              </div>
              <div className="col-6 text-start">
                <h2 className="fs-6 ">+57 3192913024</h2>
              </div>
              <br />
              <br />
              <br />

              <div className="col-6 text-end">
                <i className="bi bi-envelope border rounded-circle p-3 text-warning" />
              </div>
              <div className="col-6 text-start">
                <h2 className="fs-6 ">barrazajesusarmando@gmail.com</h2>
              </div>
            </div>
          </div>

          {/* Columna derecha para el formulario */}
          <div className="col-md-7 text-white">
            <div className="col-7">
              <div className="mb-3 ">
                <form
                  action="https://formspree.io/f/xeqwanaz"
                  method="POST"
                  role="form"
                  className="text-white"
                >
                  <input
                    type="nombre"
                    className="text-white form-control bg-black mt-2"
                    id="exampleFormControlInput1"
                    placeholder="Ingrese su nombre"
                  />
                  <input
                    type="email"
                    className="text-white form-control bg-black mt-2"
                    id="exampleFormControlInput1"
                    placeholder="Ingrese su correo electrónico"
                  />
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  ></label>
                  <textarea
                    className="text-white form-control bg-black text-white"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    placeholder="Ingrese su mensaje"
                    defaultValue={""}
                  />
                  <br />
                  <div className="mb-2 d-grid">
                    <button type="submit" className="btn btn-outline-warning">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
