import { data } from "@/data/data";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import Contact from "./Contact";
import { Button } from "./ui/button";

import { RefObject } from "react";

interface AppbarProps {
  projectRef: RefObject<HTMLElement | null>;
}

export default function Appbar({ projectRef }: AppbarProps) {
  return (
    <header className="appbar-container flex justify-between  items-center py-10 ">
      <div>
        <h1 className="text-3xl font-semibold">
          {data.alias}
          <span className="text-accent text-4xl ">.</span>
        </h1>
      </div>
      <div className="flex justify-between gap-10 items-center">
        <Link
          className=" text-base hover:text-accent "
          href={data.contact_info.github.link}
          target="_blank"
        >
          GitHub
        </Link>
        <Button
          className=" hover:bg-transparent hover:text-accent"
          variant={"ghost"}
          onClick={() => projectRef.current?.scrollIntoView()}
        >
          Projects
        </Button>
        <Contact />
        <ModeToggle />
      </div>
    </header>
  );
}
