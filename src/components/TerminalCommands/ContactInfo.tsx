import { data } from "@/data/data";

export default function ContactInfo() {
  return (
    <div className="text-terminal-key">
      &#123;
      <br />
      <div className="pl-5">
        <span>
          Email:
          <a href={"mailto:" + data.contact_info.email} className="text-accent">
            &quot;
            {data.contact_info.email}
            &quot;
          </a>
          ,
          <br />
        </span>
        {data.contact_info.phone && (
          <span>
            Phone:{" "}
            <a href={"tel:" + data.contact_info.phone} className="text-accent">
              &quot;{data.contact_info.phone}&quot;
            </a>
            ,
            <br />
          </span>
        )}
        {data.contact_info.linkedin.username && (
          <span>
            LinkedIn :
            <a
              href={data.contact_info.linkedin.link}
              target="_blank"
              className="text-accent"
            >
              &quot;
              {data.contact_info.linkedin.username}&quot;
            </a>
            ,
            <br />
          </span>
        )}
        {data.contact_info.github.username && (
          <span>
            GitHub :
            <a
              href={data.contact_info.github.link}
              target="_blank"
              className="text-accent"
            >
              &quot;
              {data.contact_info.github.username}&quot;
            </a>
            ,
            <br />
          </span>
        )}
        {data.contact_info.x_twitter.username && (
          <span>
            X :
            <a
              href={data.contact_info.x_twitter.link}
              target="_blank"
              className="text-accent"
            >
              &quot;
              {data.contact_info.x_twitter.username}&quot;
            </a>
            ,
            <br />
          </span>
        )}
      </div>
      &#125;
    </div>
  );
}
