"use client";

import { focusRing } from "@/utils/styles";
import {
  Link as RACLink,
  LinkProps as RACLinkProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const link = tv({
  extend: focusRing,
  base: "cursor-pointer text-center outline-offset-2 inline-block",
});

export interface LinkProps extends Omit<RACLinkProps, "children"> {
  className?: string;
  children: React.ReactNode;
}

export const Link = ({ children, className, ...props }: LinkProps) => {
  return (
    <RACLink
      {...props}
      className={(renderProps) => link({ className, ...renderProps })}
    >
      {children}
    </RACLink>
  );
};
