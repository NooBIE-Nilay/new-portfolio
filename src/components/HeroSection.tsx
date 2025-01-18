import { data } from "@/lib/data";
import TypingAnimation from "./ui/typing-animation";

export default function Hero() {
  return (
    <div className="hero-container py-10">
      <div className="hero-title text-accent text-6xl pb-16 flex items-center">
        <span className="mx-4 flex ">&gt;</span>
        <TypingAnimation duration={75} className="text-6xl ">
          {data.name}
        </TypingAnimation>
        <span className=" bg-accent animate-blink">&nbsp;</span>
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
