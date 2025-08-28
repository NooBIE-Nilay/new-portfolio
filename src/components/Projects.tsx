import { ProjectDetails } from "@/data/projectData";
import { Card, Carousel } from "./ui/apple-cards-carousel";

export default function Projects() {
  const cards = ProjectDetails.map((card, index) => (
    <Card key={card.src.toString().substring(1, 4)} card={card} index={index} />
  ));
  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Some Of My Recent Works.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
