import { data } from "@/data/data";

export default function ContactInfo() {
  return (
    <div className="text-yellow-300">
      &#123;
      <br />
      <div className="pl-5">
        <span>
          Email:
          <a href="mailto:nilay.dev@icloud.com" className="text-accent">
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
            <a href="tel:+918167588098" className="text-accent">
              &quot;{data.contact_info.phone}&quot;
            </a>
            ,
            <br />
          </span>
        )}
        {data.contact_info.linkedin && (
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
        {data.contact_info.github && (
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
      </div>
    </div>
  );
}
