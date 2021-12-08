import iniciante from "../assets/iniciante.jpg";

export default function Planos(props) {
  return (
    <div>
      <div className="m-5 p-5">
        <h1>Planos</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id ante
          eget tellus tristique tristique. Curabitur sed pulvinar ante. Mauris
          egestas quam in tristique vestibulum.
        </h3>
      </div>
      <div className="row m-1">
        <div className="col-4">
          <div className="card text-dark bg-info mb-3">
            <img
              src={iniciante}
              className="card-img-top p-2"
              alt="Aluna se alongando"
            />
            <div className="card-body">
              <h5 className="card-title">Iniciante</h5>
              <p className="card-text">
                Ideal para quem está começando a se exercitar
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">2x/semana</li>
              <li className="list-group-item">
                Em qualquer lugar da sua preferência
              </li>
              <li className="list-group-item">
                Acesso completo ao Evolution Tracker
              </li>
            </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="card text-white bg-success mb-3">
            <img
              src={iniciante}
              className="card-img-top p-2"
              alt="Aluna se alongando"
            />
            <div className="card-body">
              <h5 className="card-title">Co-op</h5>
              <p className="card-text">Para até duas pessoas</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">2x/semana</li>
              <li className="list-group-item">
                Em qualquer lugar da sua preferência
              </li>
              <li className="list-group-item">
                Acesso completo ao Evolution Tracker
              </li>
            </ul>
          </div>
        </div>
        <div className="col-4">
          <div className="card text-white bg-danger mb-3">
            <img
              src={iniciante}
              className="card-img-top p-2"
              alt="Aluna se alongando"
            />
            <div className="card-body">
              <h5 className="card-title">Extreme</h5>
              <p className="card-text">Treino de alta intensidade</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">3x/semana</li>
              <li className="list-group-item">
                Nas melhores academias da cidade
              </li>
              <li className="list-group-item">
                Acesso completo ao Evolution Tracker
              </li>
              <li className="list-group-item">Acompanhamento nutricional</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
