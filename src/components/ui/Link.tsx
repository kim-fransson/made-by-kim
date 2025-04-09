"use client";

import { focusRing } from "@/utils/styles";
import {
  Link as RACLink,
  LinkProps as RACLinkProps,
} from "react-aria-components";
import { tv, VariantProps } from "tailwind-variants";

const link = tv({
  extend: focusRing,
  base: "cursor-pointer text-center -outline-offset-2",
  variants: {
    intent: {
      primary:
        "h-9 uppercase tracking-widest font-bold pb-4 border-b-2 border-primary",
      icon: ["p-2.5 rounded-full"],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

type LinkVariants = VariantProps<typeof link>;

interface LinkProps extends RACLinkProps, LinkVariants {
  className?: string;
}

export const Link = ({ children, intent, ...props }: LinkProps) => {
  return (
    <RACLink
      {...props}
      className={(renderProps) => link({ intent, ...renderProps })}
    >
      {children}
    </RACLink>
  );
};
