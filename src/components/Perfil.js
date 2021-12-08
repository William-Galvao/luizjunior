import perfil from "../assets/perfil.jpg"
import signature from "../assets/signature.jpg"

export default function Perfil () {
    return (
       <div className="card mb-3 mt-5 border-0">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={perfil} className="img-fluid rounded-start" alt="Luiz Junior"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Luiz Junior</h5>
        <p className="card-text"><small className="text-muted">Personal Trainer &amp; Healthy Life Consultor</small></p>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales rutrum nulla et ultrices. </p>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum erat non aliquet convallis. Vivamus eleifend diam nec varius placerat. Quisque porttitor felis vel justo semper tincidunt. Nulla et tempus sem, sit amet scelerisque urna. Integer venenatis felis a augue sodales, ut egestas nunc scelerisque. Vivamus tempus, elit a ultricies vestibulum, urna nunc fermentum nulla, ac volutpat quam neque ac urna. Phasellus fringilla, magna sed volutpat sagittis, nunc purus sollicitudin diam, ac imperdiet eros dolor eget ex. Cras vel dapibus lacus, ut malesuada ipsum. Morbi in tristique nulla, at convallis ipsum. Curabitur cursus lectus augue, ut viverra justo euismod at. </p>
        <img className="float-end" src={signature} alt="assinatura"/>
      </div>
    </div>
  </div>
</div>

    )
}