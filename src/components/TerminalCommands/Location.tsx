import { data } from "@/lib/data";

export default function Location() {
  return (
    <div className="text-terminal-key">
      &quot;
      <a href="mailto:nilay.dev@icloud.com" className="text-accent">
        {data.contact_info.email}
      </a>
      &quot;
      <br />
    </div>
  );
}
