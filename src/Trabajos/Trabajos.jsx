import './Trabajos.css'
export function Trabajos() {
  return (
    <>
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-3 ">
          <div className="col text-center">
            <div className="card  h-100 p-3 shadow-lg colorfondo">
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
            <div className="card  h-100 p-3 shadow-lg colorfondo">
              <img
                src="../../src/assets/img/escritorio.png"
                alt="web"
                className="img-fluid w-100 border rounded-circle border-5 mt-5"
              />
            </div>
          </div>
          <div className="col text-center">
            <div className="card  h-100 p-3 shadow-lg colorfondo">
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
    </>
  );
}
