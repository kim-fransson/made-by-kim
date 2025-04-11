"use client";

import { Link, LinkProps } from "./ui";

export const PrimaryLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link
      {...props}
      className="uppercase inline-block tracking-widest font-bold pointer-coarse:pb-2.5 pointer-coarse:px-0 pointer-coarse:pt-0 py-1 lg:py-4 border-b-2 border-primary hover:text-primary transition-colors"
    >
      {children}
    </Link>
  );
};
