import { socialIcons } from "@/social";
import { TooltipTrigger } from "./ui";
import { IconLink } from "./IconLink";

export const Footer = () => {
  return (
    <footer className="z-10 relative bg-background-200">
      <div className="flex flex-col px-4 py-12 items-center gap-2 md:flex-row md:justify-between max-w-5xl mx-auto">
        <span className="font-bold tracking-wider">Made_By_Kim</span>
        <ul className="flex gap-4">
          {socialIcons.map((item) => (
            <li className="flex" key={item.href}>
              <TooltipTrigger
                delay={300}
                closeDelay={1000}
                tooltip={item.tooltip}
              >
                <IconLink href={item.href} target="_blank">
                  {item.icon}
                  <span className="sr-only">{item.srLabel}</span>
                </IconLink>
              </TooltipTrigger>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
