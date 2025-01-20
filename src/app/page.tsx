"use client";
import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Hero from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Terminal from "@/components/Terminal";
import { useRef } from "react";

export default function Home() {
  const projectRef = useRef<HTMLDivElement | null>(null);
  //TODO: Make the Page Responsive
  return (
    <div className="max-w-[1000px] my-0 mx-auto py-0 px-[40px] ">
      <Appbar />
      <Hero />
      <Terminal />
      <section id="projects">
        <Projects />
      </section>
      <Footer />
    </div>
  );
}
