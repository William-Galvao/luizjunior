export default function PriceCard(props) {
  return (
    <div className="col-4">
      <div
        className={`card text-${props.textcolor} bg-${props.backgroundcolor} mb-3 border-0`}
      >
        <img
          src={props.image}
          className="card-img-top p-2"
          alt={`${props.alt}`}
          style={{
            objectFit: "cover",
            height: "350px",
          }}
        />
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <h4 className="card-text">{props.subtitle}</h4>
        </div>
        <ul className="list-group list-group-flush">
          {props.lines.map((currentLine) => (
            <li className="list-group-item">{currentLine}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
//PriceCard model
//<PriceCard textcolor="" backgroundcolor="" image={} alt="" title="" subtitle="" lines={[""]} />;
