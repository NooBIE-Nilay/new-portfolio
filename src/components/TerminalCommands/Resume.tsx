import { data } from "@/lib/data";

export default function Resume() {
  return (
    <div className="text-terminal-key">
      &quot;
      <a href={data.resume.link} className="text-accent">
        {data.resume.title}
      </a>
      &quot;
      <br />
    </div>
  );
}
