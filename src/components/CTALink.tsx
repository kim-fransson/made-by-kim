"use client";

import { Link, LinkProps } from "./ui";

export const CTALink = ({ children, ...props }: LinkProps) => {
  return (
    <Link
      {...props}
      className="text-center uppercase font-bold tracking-widest py-3 px-5 bg-primary text-foreground-primary"
    >
      {children}
    </Link>
  );
};
