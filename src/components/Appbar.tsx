import { data } from "@/data/data";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import Contact from "./Contact";
import { Dock, DockIcon } from "./ui/dock";
import { IconBrandGithub } from "@tabler/icons-react";
import { ContactIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
export type IconProps = React.HTMLAttributes<SVGElement>;

export default function Appbar() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <Contact
        dialogTriggger={{
          isOpen: isDialogOpen,
          setIsOpen: setIsDialogOpen,
        }}
      />
      <header className="appbar-container-web hidden md:flex justify-between  items-center py-10">
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
          >
            GitHub
          </Link>

          <a
            className=" hover:bg-transparent hover:text-accent"
            href="#projects"
          >
            Projects
          </a>

          <Button
            className="bg-background hover:bg-background text-base hover:text-accent"
            variant={"ghost"}
            onClick={() => setIsDialogOpen(true)}
          >
            Contact
          </Button>
          <ModeToggle />
        </div>
      </header>
      <header className="appbar-container-web  md:hidden flex items-center justify-center">
        <h1 className="  text-3xl font-semibold pt-8">
          {data.alias}
          <span className="text-accent text-4xl ">.</span>
        </h1>
        <div className="fixed bottom-10 z-[100] text-accent">
          <Dock
            direction="middle"
            iconDistance={100}
            iconSize={50}
            iconMagnification={100}
          >
            <DockIcon
              onClick={() =>
                window.open(data.contact_info.github.link, "_blank")
              }
            >
              <IconBrandGithub />
            </DockIcon>
            <DockIcon>
              <a className="" href="#projects">
                Projects
              </a>
            </DockIcon>
            <DockIcon onClick={() => setIsDialogOpen(true)}>
              <ContactIcon />
            </DockIcon>
            <DockIcon>
              <ModeToggle />
            </DockIcon>
          </Dock>
        </div>
      </header>
    </>
  );
}
