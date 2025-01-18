// "use client";
import { data } from "@/lib/data";
import ContactInfo from "./TerminalCommands/ContactInfo";
import Location from "./TerminalCommands/Location";
import Resume from "./TerminalCommands/Resume";
import Education from "./TerminalCommands/Education";
import Skills from "./TerminalCommands/Skills";
import Interests from "./TerminalCommands/Interests";
import { useEffect, useRef, useState } from "react";

export default function Terminal() {
  function handleCommand() {
    setCommand(command.trim());
    let RegEx = /^[a-z0-9.]+$/i;
    if (!RegEx.test(command) && command !== "Enter") {
      console.log("Error Parsing Command");
      return;
    }
    console.log("Command", command);

    setCommand("");
  }
  const [isFocused, setIsFocused] = useState(true);
  const [command, setCommand] = useState("");
  const inputRef = useRef(null);

  return (
    //@ts-ignore
    <div className="terminal" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-header bg-terminal-header h-7 flex justify-start items-center rounded-t-lg ">
        <div className="header-button red bg-[#f96256] w-3 h-3 rounded-full ml-3 border-1 border-solid border-[#f65549]"></div>
        <div className="header-button red border-[#fdbc3d] w-3 h-3 rounded-full ml-2 border-1 border-solid broder-1 bg-[#ffb524]"></div>
        <div className="header-button red bg-[#33c948] w-3 h-3 rounded-full ml-2 border-1 border-solid border-[#2dbb41]"></div>
      </div>
      <div className="terminal-window bg-terminal rounded-b-md  p-9 text-white">
        <div>
          &gt; {data.first_name}.skills
          <Skills />
          <br />
          &gt; {data.first_name}.contactInfo
          <ContactInfo />
          <br />
          &gt; {data.first_name}.currentLocation
          <Location />
          <br />
          &gt; {data.first_name}.resume
          <Resume />
          <br />
          &gt; {data.first_name}.education
          <Education />
          <br />
          &gt; {data.first_name}.interests
          <Interests />
        </div>
        <br />
        <div className="flex w-auto">
          &gt;
          <input
            ref={inputRef}
            className={`bg-terminal text-white  caret-terminal  outline-none border-none focus:outline-none focus:ring-0 ml-2`}
            style={{ width: `${command.length * 9.8}px` }}
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleCommand();
              }
            }}
            onFocus={(e) => setIsFocused(true)}
            onBlur={(e) => setIsFocused(false)}
          />
          <i className={`bg-white/80 ${isFocused && "animate-blink"} w-3 `}></i>
        </div>
      </div>
    </div>
  );
}
