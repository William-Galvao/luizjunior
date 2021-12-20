import iniciante from "../assets/images/iniciante.jpg";
import coop from "../assets/images/coop.jpg";
import extreme from "../assets/images/extreme.jpg";
import PriceCard from "../components/PriceCard";

export default function Planos() {
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
        <PriceCard
          textcolor="dark"
          backgroundcolor="light"
          image={iniciante}
          alt="iniciante"
          title="Iniciante"
          subtitle="Lorem ipsum dolor sit."
          lines={[
            "Duis ipsum massa, bibendum non diam.",
            "Pellentesque placerat erat eget lacus pulvinar.",
            "Etiam sit amet sagittis nunc. Sed.",
          ]}
        />
        <PriceCard
          textcolor="white"
          backgroundcolor="secondary"
          image={coop}
          alt="co-op"
          title="Co-op"
          subtitle="Curabitur convallis auctor enim."
          lines={[
            "Duis ipsum massa, bibendum non diam.",
            "Pellentesque placerat erat eget lacus pulvinar",
            "Etiam sit amet sagittis nunc. Sed.",
            "Aenean facilisis metus et turpis dictum.",
            "Donec velit purus, molestie ornare pulvinar.",
          ]}
        />
        <PriceCard
          textcolor="white"
          backgroundcolor="dark"
          image={extreme}
          alt="extreme"
          title="Extreme"
          subtitle="Nulla tristique, eros non."
          lines={[
            "Duis ipsum massa, bibendum non diam.",
            "Pellentesque placerat erat eget lacus pulvinar",
            "Etiam sit amet sagittis nunc. Sed.",
            "Aenean facilisis metus et turpis dictum.",
            "Donec velit purus, molestie ornare pulvinar.",
            "Vivamus orci metus, imperdiet at pulvinar.",
            "Nam posuere molestie odio, nec dictum.",
          ]}
        />
      </div>
    </div>
  );
}
