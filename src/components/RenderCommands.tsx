import { data } from "@/lib/data";
import ContactInfo from "./TerminalCommands/ContactInfo";
import Education from "./TerminalCommands/Education";
import Interests from "./TerminalCommands/Interests";
import Location from "./TerminalCommands/Location";
import Resume from "./TerminalCommands/Resume";
import Skills from "./TerminalCommands/Skills";
import { useState, RefObject } from "react";

interface RenderCommandsProps {
  inputRef: RefObject<null>;
}

export default function RenderCommands({ inputRef }: RenderCommandsProps) {
  function handleCommand() {
    setCurrentCommands((currentCommands) => [
      ...currentCommands.slice(1),
      command,
    ]);
    console.log(currentCommands);
    setCommand("");
  }

  const TerminalCommands = {
    skills: <Skills />,
    contactInfo: <ContactInfo />,
    currentLocation: <Location />,
    resume: <Resume />,
    education: <Education />,
    interests: <Interests />,
    help: <div></div>,
  };
  const [currentCommands, setCurrentCommands] = useState([
    "skills",
    "resume",
    "currentLocation",
    "interests",
  ]);
  const [isFocused, setIsFocused] = useState(true);
  const [command, setCommand] = useState("");
  return (
    <div>
      {currentCommands.map((cmd, index) => {
        return (
          <div key={index}>
            {
              <div>
                &gt; {data.first_name}.{cmd}
                {
                  //@ts-ignore
                  TerminalCommands[cmd]
                }
                <br />
              </div>
            }
          </div>
        );
      })}

      <div className="input-field flex w-auto">
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
  );
}
