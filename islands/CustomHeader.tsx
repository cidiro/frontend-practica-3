import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";

type link = {
  href: string;
  text: string;
};

const CustomHeader: FunctionComponent<{ links: link[] }> = ({ links }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 500);
  }, []);
  return (
    <div class={mounted ? "headerSection" : "headerSection beginHeader"}>
      {links.map((link) => (
        <div
          class="headerOption"
          onClick={() => {
            window.location.assign(link.href);
          }}
        >
          <p>{link.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomHeader;
