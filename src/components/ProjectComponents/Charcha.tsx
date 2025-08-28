import Image from "next/image";
import BoxReveal from "../ui/box-reveal";
import { Button } from "../ui/button";
import wip from "@/assets/wip.jpeg";
import { data } from "@/data/data";
export default function Charcha() {
  return (
    <div>
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <div
          className="size-full max-w-[36rem] items-center justify-center overflow-hidden pt-8"
          id="play-now"
        >
          <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
            <div className="text-[2.5rem] font-semibold">
              Charcha
              <div className="text-accent text-[2rem]">
                Video Conference For Content Creators
              </div>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem]">
              A webRTC based Video Conferencing Application that record
              participant feed at
              <span className=" font-semibold text-accent ">
                {" "}
                Source Quality{" "}
              </span>
            </h2>
          </BoxReveal>
          <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
            <div className="h-[1px] w-full bg-foreground mt-1"></div>
            <div className="text-white text-xl md:text-2xl font-semibold  flex-wrap flex gap-2 justify-center my-2 md:hidden ">
              {data.project_links.charcha.stack.map((skill, index) => {
                return (
                  <div
                    key={`skill${index}`}
                    className="bg-accent rounded-lg px-2 text-sm h-9 flex justify-center items-center "
                  >
                    {skill}
                  </div>
                );
              })}
              <div className="h-[1px] w-full bg-foreground "></div>
            </div>
          </BoxReveal>
          <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
            <div className="mt-6 flex flex-col gap-3">
              <p>
                🚀 Built with Next.js & TypeScript – Ensures fast performance,
                scalability, and type safety.
              </p>
              <p>
                💡 TailwindCSS for Styling – Utility-first CSS framework for a
                sleek and responsive design.
              </p>
              <p>
                ⚡ SEO Optimized & Fast Loading – Improves visibility and
                enhances user experience.
              </p>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
            <Button
              variant={"custom"}
              className="mt-[1.6rem] bg-[#3b82f6]"
              onClick={() => {
                window.open(data.project_links.charcha.github, "_target");
              }}
            >
              Check It Out!
            </Button>
          </BoxReveal>
        </div>
        <Image
          unoptimized
          src={wip}
          alt="charcha"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-2xl mt-6"
        />
      </div>
      <div className="footer flex flex-col justify-center items-center p-10">
        <div className="h-[1px] w-full bg-foreground "></div>
        <div className="text-white text-xl md:text-2xl font-semibold m-2 flex-wrap md:flex gap-3 justify-center mt-8 hidden">
          {data.project_links.charcha.stack.map((skill, index) => {
            return (
              <div
                key={`skill${index}`}
                className="bg-accent rounded-lg px-2 text-sm h-9 flex justify-center items-center "
              >
                {skill}
              </div>
            );
          })}
        </div>

        <div className="pt-8 text-sm text-center">
          Made with <a href="https://nextjs.org/">Next.js</a> & &#128153; by
          Nilay Banerjee.
        </div>
      </div>
    </div>
  );
}
