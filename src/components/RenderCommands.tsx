"use client ";
import { useState, RefObject, useRef, useEffect } from "react";
import { data } from "@/data/data";
import ContactInfo from "./TerminalCommands/ContactInfo";
import Education from "./TerminalCommands/Education";
import Interests from "./TerminalCommands/Interests";
import Location from "./TerminalCommands/Location";
import Resume from "./TerminalCommands/Resume";
import Skills from "./TerminalCommands/Skills";
import Help from "./TerminalCommands/Help";

interface RenderCommandsProps {
  inputRef: RefObject<null>;
}

export default function RenderCommands({ inputRef }: RenderCommandsProps) {
  const terminalWindowRef = useRef<HTMLDivElement>(null);
  const [currentCommands, setCurrentCommands] = useState([
    "help",
    "skills",
    "resume",
  ]);
  const [isFocused, setIsFocused] = useState(false);
  const [command, setCommand] = useState("");
  function handleCommand(cmd: string) {
    setCurrentCommands((currentCommands) => {
      return [...currentCommands, cmd];
    });
    setCommand("");
  }
  useEffect(() => {
    if (terminalWindowRef.current) {
      //@ts-ignore
      terminalWindowRef.current.scrollTop =
        terminalWindowRef.current.scrollHeight;
    }
  }, [currentCommands]);
  const TerminalCommands = {
    skills: <Skills />,
    contact: <ContactInfo />,
    location: <Location />,
    resume: <Resume />,
    education: <Education />,
    interests: <Interests />,
    help: <Help />,
  };
  const terminalCommandKeys = Object.keys(TerminalCommands).filter(
    (key) => key !== "help"
  );

  return (
    <div
      className="terminal-window bg-terminal rounded-b-md  px-9 py-4  text-white h-[550px] overflow-auto "
      ref={terminalWindowRef}
      id="terminal-window"
    >
      {currentCommands.map((cmd, index) => {
        return (
          <div key={index}>
            &gt;{" "}
            {terminalCommandKeys.includes(cmd)
              ? data.first_name + "." + cmd
              : cmd}
            {Object.keys(TerminalCommands).includes(cmd) ? (
              //@ts-ignore
              TerminalCommands[cmd]
            ) : cmd === "clear" ? (
              <></>
            ) : (
              <div className="text-red-500">
                Command Not Valid
                <br /> Use Any Of The Below Commands
                <br />
                {TerminalCommands["help"]}
              </div>
            )}
            <br />
          </div>
        );
      })}

      <div className="input-field flex w-auto items-center">
        &gt;
        <input
          ref={inputRef}
          className={`bg-terminal text-white  caret-terminal  outline-none border-none focus:outline-none focus:ring-0 ml-2`}
          style={{
            width: `${Math.max(command.length * 9.8, 10)}px`,
            direction: "ltr",
            textAlign: "left",
            unicodeBidi: "plaintext",
          }}
          value={command}
          onChange={(e) => setCommand(e.target.value.trim())}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              let temp = command;
              if (command.startsWith("Nilay.")) temp = command.substring(6);
              if (command === "clear") {
                setCurrentCommands(["clear"]);
                setCommand("");
              } else if (command === "noob") {
                setCurrentCommands(["help", "resume", "skills"]);
                setCommand("");
              } else handleCommand(temp);
            }
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          inputMode="text"
          autoCapitalize="none"
          dir="ltr"
        />
        <span
          className={`bg-white/80 ${isFocused && "animate-blink"}  w-3 h-5`}
        ></span>
      </div>
    </div>
  );
}
