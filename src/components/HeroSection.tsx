import { data } from "@/data/data";

export default function Hero() {
  return (
    <div className="hero-container py-10">
      <div className="hero-title text-accent text-6xl pb-16">
        <span className="mx-4">&gt;</span>
        {data.name}
        <span className="mx-4 bg-accent animate-blink">&nbsp;</span>
      </div>
      <div className="hero-description  text-justify text-pretify text-lg">
        {data.description}
        <br />
        <br />
        Hire Me, Check out my
        <a className="text-accent font-semibold" href="#resume">
          {" "}
          Resume
        </a>
        .
      </div>
    </div>
  );
}
