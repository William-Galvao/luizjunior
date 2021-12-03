import perfil from "../assets/perfil.jpg"
import signature from "../assets/signature.jpg"

export default function Perfil () {
    return (
        <div className="row mt-5 mb-5 pr-3">
            <div className="col-6">
            <img src={perfil} alt="Luiz Junior"/>
            </div>
            <div className="col-6">
                <h1>Luiz Junior</h1>
                <h4>Personal Trainer & Healthy Life Consultor</h4>
                <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo laoreet sapien ut commodo. In.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere sem in euismod placerat. Morbi mollis nisl diam, a euismod sapien condimentum vitae. Sed rutrum, magna nec euismod tristique, nunc ex convallis neque, commodo tristique.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat lorem, molestie sit amet volutpat sit amet, efficitur quis felis. Curabitur sed dictum dolor. Cras et varius diam. Morbi dignissim volutpat ante, ac egestas ante.</p>
                <img src={signature} alt="Assinatura" style={{float: "right"}}/>
            </div>

        </div>
    )
}