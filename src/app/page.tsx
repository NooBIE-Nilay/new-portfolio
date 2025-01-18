import Appbar from "@/components/Appbar";
import Hero from "@/components/HeroSection";
import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <div className="max-w-[1000px] my-0 mx-auto py-0 px-[40px]">
      <Appbar />
      <Hero />
      <Terminal />
    </div>
  );
}
