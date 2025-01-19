import { data } from "@/lib/data";

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
