"use client";

import { Link, LinkProps } from "./ui";

export const IconLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link {...props} className="p-2.5 rounded-full -outline-offset-2">
      {children}
    </Link>
  );
};
