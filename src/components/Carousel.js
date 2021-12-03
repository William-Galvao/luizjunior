import together from "../assets/together.jpg";
import anywhere from "../assets/anywhere.jpg";
import ages from "../assets/ages.jpg";


export default function Carousel () {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner display-4">
    <div className="carousel-item active">
      <img src={together} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <p className="display-1 carousel-title">Treinamento personalizado</p>
        <p className="carousel-subtitle">Basta de métodos genéricos. Seu corpo: suas necessidades.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={anywhere} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <p className="display-1 carousel-title">Onde e quando você puder</p>
        <p className="carousel-subtitle">Na academia, na sua casa ou no trabalho, eu vou até você.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={ages} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <p className="display-1 carousel-title">Saúde em primeiro lugar</p>
        <p className="carousel-subtitle">Atividades que irão melhorar a sua vida, não importa a idade.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Anterior</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Próximo</span>
  </button>
</div>
    )
}