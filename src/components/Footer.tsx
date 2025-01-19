import { data } from "@/data/data";
import Contact from "./Contact";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer flex flex-col justify-center items-center">
      <div className="h-[1px] w-full bg-foreground"></div>
      <div className="flex justify-center items-center gap-5 p-12 text-lg">
        <Contact />
        <div>||</div>
        <div>
          <Link
            className=" text-base hover:text-accent "
            href={data.contact_info.linkedin.link}
            target="_blank"
          >
            LinkedIn
          </Link>
        </div>
        <div>||</div>
        <div>
          <Link
            className=" text-base hover:text-accent "
            href={data.contact_info.github.link}
            target="_blank"
          >
            GitHub
          </Link>
        </div>
      </div>
      <div className="py-10 text-sm text-center">
        Made with <a href="https://nextjs.org/">Next.js</a> & &#128153; by Nilay
        Banerjee.
        <br />
        Inspired from{" "}
        <a
          href="https://www.justinchi.me/"
          target="_blank"
          className="hover:text-accent"
        >
          Justin Chi
        </a>
      </div>
    </div>
  );
}
