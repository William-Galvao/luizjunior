import routine from "../assets/routine.jpg";

export default function Galeria() {
  return (
    <div>
      <div className="m-5 p-5">
        <h1>Galeria</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id ante
          eget tellus tristique tristique. Curabitur sed pulvinar ante. Mauris
          egestas quam in tristique vestibulum.
        </h3>
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={routine}
              className="d-block w-100"
              alt="Pessoas treinando"
            />
          </div>
          <div className="carousel-item">
            <img
              src={routine}
              className="d-block w-100"
              alt="Pessoas treinando"
            />
          </div>
          <div className="carousel-item">
            <img
              src={routine}
              className="d-block w-100"
              alt="Pessoas treinando"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
