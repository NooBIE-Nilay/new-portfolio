import { data } from "@/data/data";

export default function Location() {
  return (
    <div className="text-terminal-key">
      &quot;
      {data.location}
      &quot;
      <br />
    </div>
  );
}
