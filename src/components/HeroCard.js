import cardimg from "../assets/cardimg.jpg"

export default function HeroCard () {
    return (
        <div className="card bg-dark text-white">
  <img src={cardimg} className="card-img" alt="..." />
  <div className="card-img-overlay d-flex">
    <h1 className="card-title align-self-center mx-auto">Treinamento e consultoria para uma vida mais saudável</h1>
  </div>
</div>

    )
}