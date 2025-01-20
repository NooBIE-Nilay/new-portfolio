"use client";
import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Hero from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Terminal from "@/components/Terminal";

export default function Home() {
  //TODO: Make the Page Responsive
  return (
    <div className="max-w-[1000px] my-0 mx-auto py-0 px-[40px] ">
      <section id="body">
        <Appbar />
        <Hero />
        <Terminal />
        <section id="projects">
          <Projects />
        </section>
        <Footer />
        <a href="#home"></a>
      </section>
    </div>
  );
}
