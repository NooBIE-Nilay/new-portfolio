import { data } from "@/data/data";

export default function Interests() {
  return (
    <div className="text-terminal-key">
      &#91;
      {data.interests.map((interest, index) => {
        return (
          <span key={index}>
            {" "}
            &quot;{interest}&quot;{index !== data.interests.length - 1 && ","}
          </span>
        );
      })}{" "}
      &#93;
      <br />
    </div>
  );
}
