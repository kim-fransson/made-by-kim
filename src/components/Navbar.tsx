"use client";

import { socialIcons } from "@/social";
import { TooltipTrigger } from "./ui";
import { twJoin } from "tailwind-merge";
import { IconLink } from "./IconLink";

export const Navbar = () => {
  return (
    <nav
      className={twJoin([
        "absolute left-1/2 -translate-x-1/2 p-5 inline-flex min-w-40 flex-col items-center gap-5",
        "md:left-0 md:-translate-0 md:min-w-auto md:w-full md:flex-row md:justify-between",
        "lg:max-w-5xl lg:left-1/2 lg:-translate-x-1/2",
      ])}
    >
      <h1 className="text-2xl">Made_By_Kim</h1>
      <ul className="flex justify-between items-center w-full md:justify-end gap-4">
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
    </nav>
  );
};
