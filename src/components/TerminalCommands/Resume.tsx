import { data } from "@/data/data";

export default function Resume() {
  return (
    <div className="text-terminal-key">
      &quot;
      <a href={data.resume.link} target="_blank" className="text-accent">
        {data.resume.title}
      </a>
      &quot;
      <br />
    </div>
  );
}
