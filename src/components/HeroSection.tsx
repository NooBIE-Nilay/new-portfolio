import { data } from "@/data/data";
import TypingAnimation from "./ui/typing-animation";

export default function Hero() {
  return (
    <div className="hero-container py-10">
      <div className="hero-title text-accent  pb-8  md:pb-16 flex items-start md:items-center">
        <span className="mx-4 flex font-semibold text-5xl">&gt;</span>
        <TypingAnimation duration={75} className="text-5xl md:text-7xl ">
          {data.name}
        </TypingAnimation>
      </div>
      <div className="hero-description  text-justify text-pretify text-lg">
        {data.description}
        <br />
        <br />
        Hire Me, Check out my
        <a
          className="text-accent font-semibold"
          href={data.resume.link}
          target="_blank"
        >
          {" "}
          Resume
        </a>
        .
        <br />
        Or Check Out My
        <a className="text-accent font-semibold" href="#projects">
          {" "}
          Projects
        </a>{" "}
        below.
      </div>
    </div>
  );
}
