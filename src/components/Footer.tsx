import { socialIcons } from "@/social";
import { Link, TooltipTrigger } from "./ui";

export const Footer = () => {
  return (
    <footer className="bg-background-200">
      <div className="flex flex-col px-4 py-12 items-center gap-2 md:flex-row md:justify-between max-w-5xl mx-auto">
        <span className="font-bold">Made_By_Kim</span>
        <ul className="flex gap-4">
          {socialIcons.map((item) => (
            <li className="flex" key={item.href}>
              <TooltipTrigger
                delay={300}
                closeDelay={1000}
                tooltip={item.tooltip}
              >
                <Link intent="icon" href={item.href} target="_blank">
                  {item.icon}
                  <span className="sr-only">{item.srLabel}</span>
                </Link>
              </TooltipTrigger>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
