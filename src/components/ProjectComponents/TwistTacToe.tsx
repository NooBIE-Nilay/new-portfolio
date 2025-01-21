import Image from "next/image";
import BoxReveal from "../ui/box-reveal";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import x_o from "@/assets/o_x.gif";
import { data } from "@/data/data";
export default function TwistTacToe() {
  return (
    <div>
      <TooltipProvider>
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <div
            className="size-full max-w-[36rem] items-center justify-center overflow-hidden pt-8"
            id="play-now"
          >
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <div className="text-[2.5rem] font-semibold">
                Twist Tac Toe
                <div className="text-accent">Outsmart, Adapt & Win!</div>
              </div>
            </BoxReveal>

            <Tooltip>
              <BoxReveal boxColor={"#3b82f6"} duration={0.6}>
                <h2 className="mt-[.5rem] text-[1rem]">
                  Classical Tic Tac Toe with a{" "}
                  <TooltipTrigger asChild>
                    <div className="inline font-semibold text-accent">
                      Twist
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className=" bg-[#d2d2d8] dark:bg-neutral-700">
                    <p>
                      After three moves per player, Old moves vanish, forcing a
                      fresh strategy every few turns.
                    </p>
                  </TooltipContent>
                </h2>
              </BoxReveal>
            </Tooltip>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <div className="h-[1px] w-full bg-foreground mt-1"></div>
              <div className="text-white text-xl md:text-2xl font-semibold  flex-wrap flex gap-2 justify-center my-2 md:hidden ">
                {data.project_links.twist_tac_toe.stack.map((skill, index) => {
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
            <BoxReveal boxColor={"#3b82f6"} duration={0.7}>
              <div className="mt-6 flex flex-col gap-3">
                <p>
                  -&gt; A fun and strategic multiplayer game where you can
                  challenge your friends.
                </p>
                <p>
                  -&gt; Play online anytime, anywhere with friends or random
                  opponents.
                </p>
                <p>
                  -&gt; Unlike traditional Tic Tac Toe, older moves disappear
                  after three turns, making every game dynamic.
                </p>
                <p>
                  -&gt; No more repetitive games, every match is unpredictable!
                  <br />
                </p>
                <p>
                  -&gt; Play anywhere, on mobile, tablet, or desktop.
                  <br />
                </p>
                <p>
                  -&gt; Built using
                  <span className="font-semibold text-accent"> React</span>,
                  <span className="font-semibold text-accent"> Typescript</span>
                  ,
                  <span className="font-semibold text-accent">
                    {" "}
                    Tailwind CSS
                  </span>
                  , and
                  <span className="font-semibold text-accent"> Socket.io</span>.
                </p>
                <p>
                  -&gt; 100%{" "}
                  <a
                    className="font-semibold text-accent"
                    href={data.project_links.twist_tac_toe.github}
                    target="_blank"
                  >
                    open-source
                  </a>
                  , and customizable. <br />
                </p>
              </div>
            </BoxReveal>

            <BoxReveal boxColor={"#3b82f6"} duration={0.4}>
              <Button
                variant={"custom"}
                className="mt-[1.6rem] bg-[#3b82f6]"
                onClick={() => {
                  window.open(data.project_links.twist_tac_toe.live, "_target");
                }}
              >
                Play Now
              </Button>
            </BoxReveal>
          </div>
          <Image
            unoptimized
            src={x_o}
            alt="Twist Tac Toe"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-xl mt-6"
          />
          <div className="">
            <div className="size-full max-w-[36rem] items-center justify-center overflow-hidden pt-8">
              <p className="text-[2.5rem] font-semibold">How to Play?</p>
              <div className="mt-6 flex flex-col gap-3">
                <p>
                  -&gt; Click the above{" "}
                  <a className="text-semibold text-accent" href="#play-now">
                    Play Now
                  </a>{" "}
                  Button, or go to
                  <a
                    className="text-accent"
                    href={data.project_links.twist_tac_toe.live}
                    target="_blank"
                  >
                    {" "}
                    {data.project_links.twist_tac_toe.live}{" "}
                  </a>
                </p>
                <p>
                  -&gt; Want to Start a Game With Random Players, Click Quick
                  Start
                </p>
                <p>
                  -&gt; Want to Create a Game Room for Playing with friends,
                  Click Create Game
                </p>
                <p>
                  -&gt; Want to join a Game Room, Click Join Game
                  <br />
                </p>
                <p>
                  =&gt; No more repetitive games{" "}
                  <span className="text-accent block ms-7">
                    Every match is unpredictable!
                  </span>
                </p>
                <p>
                  =&gt; Designed to be Fast, Fun, and Competitive{" "}
                  <span className="text-accent block ms-7">
                    No more Stale & Boring matches!
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="footer flex flex-col justify-center items-center p-10">
            <div className="h-[1px] w-full bg-foreground "></div>
            <div className="text-white text-xl md:text-2xl font-semibold m-2 flex-wrap md:flex gap-3 justify-center mt-8 hidden">
              {data.project_links.twist_tac_toe.stack.map((skill, index) => {
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
              This Page is made with <a href="https://nextjs.org/">Next.js</a> &
              &#128153; by{" "}
              <a href="https://www.nilaycodes.in">Nilay Banerjee.</a>
            </div>
          </div>
        </div>
      </TooltipProvider>
    </div>
  );
}
