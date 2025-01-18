import { data } from "@/lib/data";

export default function Skills() {
  return (
    <div className="text-terminal-key">
      &#91;
      {data.skills.map((skill, index) => {
        return (
          <span key={index}>
            {" "}
            &quot;{skill}&quot;{index !== data.skills.length - 1 && ","}
          </span>
        );
      })}{" "}
      &#93;
      <br />
    </div>
  );
}
