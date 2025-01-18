import { data } from "@/data/data";
import ContactInfo from "./ContactInfo";

export default function Terminal() {
  return (
    <div className="terminal">
      <div className="terminal-header bg-[#e4e3e5]  h-7 flex justify-start items-center rounded-t-lg ">
        <div className="header-button red bg-[#f96256] w-3 h-3 rounded-full ml-3 border-1 border-solid border-[#f65549]"></div>
        <div className="header-button red border-[#fdbc3d] w-3 h-3 rounded-full ml-2 border-1 border-solid broder-1 bg-[#ffb524]"></div>
        <div className="header-button red bg-[#33c948] w-3 h-3 rounded-full ml-2 border-1 border-solid border-[#2dbb41]"></div>
      </div>
      <div className="terminal-window bg-[#1b1d30] rounded-b-md  p-9">
        <div>
          <div className=" text-white">&gt; {data.first_name}.contactInfo</div>
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}
