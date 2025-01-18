import { data } from "@/data/data";
import { ModeToggle } from "./ModeToggle";

export default function Appbar() {
  return (
    <header className="appbar-container flex justify-between  items-center py-10 ">
      <div>
        <h1 className="text-3xl font-semibold">
          {data.alias}
          <span className="text-accent text-4xl ">.</span>
        </h1>
      </div>
      <div className="flex justify-between gap-14 items-center">
        <div className=" font-semibold hover:text-accent">Projects</div>
        <div className=" font-semibold hover:text-accent">Contact</div>
        <ModeToggle />
      </div>
    </header>
  );
}
