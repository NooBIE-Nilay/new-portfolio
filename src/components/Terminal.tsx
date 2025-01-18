// "use client";
import { data } from "@/lib/data";
import ContactInfo from "./TerminalCommands/ContactInfo";
import Location from "./TerminalCommands/Location";
import Resume from "./TerminalCommands/Resume";
import Education from "./TerminalCommands/Education";
import Skills from "./TerminalCommands/Skills";
import Interests from "./TerminalCommands/Interests";
import { useState } from "react";

export default function Terminal() {
  function executeCommand(command: string) {}
  // function checkCommand(command: string) {
  //   let val = command.trim();
  //   let RegEx = /^[a-z0-9]+$/i;
  //   if (RegEx.test(val)) return <div>{command}</div>;
  //   return "";
  // }
  function validateInput(key: string) {
    let val = key.trim();
    let RegEx = /^[a-z0-9]+$/i;
    if (!RegEx.test(val) && key !== "Enter") {
      console.log("Error!");
      return;
    }
    if (key !== "Enter") executeCommand(command);
    else setCommand((command) => command + key);
  }
  const [command, setCommand] = useState("");
  return (
    <div className="terminal">
      <div className="terminal-header bg-terminal-header h-7 flex justify-start items-center rounded-t-lg ">
        <div className="header-button red bg-[#f96256] w-3 h-3 rounded-full ml-3 border-1 border-solid border-[#f65549]"></div>
        <div className="header-button red border-[#fdbc3d] w-3 h-3 rounded-full ml-2 border-1 border-solid broder-1 bg-[#ffb524]"></div>
        <div className="header-button red bg-[#33c948] w-3 h-3 rounded-full ml-2 border-1 border-solid border-[#2dbb41]"></div>
      </div>
      <div className="terminal-window bg-terminal rounded-b-md  p-9 text-white">
        <div>
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
          &gt; {data.first_name}.skills
          <Skills />
          <br />
          &gt; {data.first_name}.interests
          <Interests />
        </div>
        <br />
        {/* <input
          className="w-auto bg-terminal text-white"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          autoFocus
          placeholder=""
          /> */}
        <div className="relative ">
          &gt;
          <div></div>
        </div>
      </div>
    </div>
  );
}
