import { useRef } from "react";
import RenderCommands from "./RenderCommands";
export default function Terminal() {
  const inputRef = useRef(null);

  return (
    //@ts-ignore
    <div className="terminal" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-header bg-terminal-header h-7 flex justify-start items-center rounded-t-lg ">
        <div className="header-button red bg-[#f96256] w-3 h-3 rounded-full ml-3 border-1 border-solid border-[#f65549]"></div>
        <div className="header-button red border-[#fdbc3d] w-3 h-3 rounded-full ml-2 border-1 border-solid broder-1 bg-[#ffb524]"></div>
        <div className="header-button red bg-[#33c948] w-3 h-3 rounded-full ml-2 border-1 border-solid border-[#2dbb41]"></div>
      </div>

      <RenderCommands inputRef={inputRef} />
    </div>
  );
}
