import { useRef } from "react";
import RenderCommands from "./RenderCommands";
import { data } from "@/data/data";
import { IconTerminal2 } from "@tabler/icons-react";
export default function Terminal() {
  const inputRef = useRef(null);
  const terminalRef = useRef(null);
  const handleTerminalClick = () => {
    if (inputRef.current) {
      //@ts-ignore
      inputRef.current.focus();
      scrollToBottom();
    }
  };
  const scrollToBottom = () => {
    if (terminalRef.current) {
      //@ts-ignore
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };
  return (
    //@ts-ignore
    <div className="terminal" onClick={handleTerminalClick} ref={terminalRef}>
      <div className="terminal-header bg-terminal-header h-7 flex rounded-t-lg">
        <div className="terminal-controls flex justify-start items-center">
          <div className="header-button red bg-[#f96256] w-3 h-3 rounded-full ml-3 border-1 border-solid border-[#f65549]"></div>
          <div className="header-button red border-[#fdbc3d] w-3 h-3 rounded-full ml-2 border-1 border-solid broder-1 bg-[#ffb524]"></div>
          <div className="header-button red bg-[#33c948] w-3 h-3 rounded-full ml-2 border-1 border-solid border-[#2dbb41]"></div>
        </div>
        <div className="text-black/90 text-sm flex justify-center items-center font-bold text-center ">
          &nbsp;
          <IconTerminal2 />
          &nbsp;
          <span>{data.alias}.terminal</span>
        </div>
      </div>
      <RenderCommands inputRef={inputRef} />
    </div>
  );
}
