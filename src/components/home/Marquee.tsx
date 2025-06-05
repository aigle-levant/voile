// components
import ScrollVelocity from "../imported/ScrollVelocity";

export default function Marquee() {
  return (
    <ScrollVelocity
      texts={[
        "AESTHETIC",
        "FASHION",
        "EN VOGUE",
        "GAUCHE",
        "GALA",
        "STYLE",
        "ROMANTICISM",
      ]}
      className="custom-scroll-text"
    />
  );
}
