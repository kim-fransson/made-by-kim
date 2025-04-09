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
      primary: [
        "uppercase tracking-widest font-bold pointer-coarse:pb-2.5 pointer-coarse:px-0 pointer-coarse:pt-0 p-4 border-b-2 border-primary",
        "hover:text-primary transition-colors",
      ],
      icon: ["p-2.5 rounded-full"],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

type LinkVariants = VariantProps<typeof link>;

interface LinkProps extends Omit<RACLinkProps, "children">, LinkVariants {
  className?: string;
  children: React.ReactNode;
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
