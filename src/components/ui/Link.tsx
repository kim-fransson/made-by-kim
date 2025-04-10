"use client";

import { focusRing } from "@/utils/styles";
import {
  Link as RACLink,
  LinkProps as RACLinkProps,
} from "react-aria-components";
import { tv, VariantProps } from "tailwind-variants";

const link = tv({
  extend: focusRing,
  base: "cursor-pointer text-center -outline-offset-2 inline-block",
  variants: {
    intent: {
      primary: [
        "uppercase inline-block tracking-widest font-bold pointer-coarse:pb-2.5 pointer-coarse:px-0 pointer-coarse:pt-0 py-4 border-b-2 border-primary",
        "hover:text-primary transition-colors",
      ],
      cta: [
        "bg-primary text-foreground-primary px-5 py-2 text-center uppercase font-bold tracking-widest",
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

export const Link = ({ children, className, intent, ...props }: LinkProps) => {
  return (
    <RACLink
      {...props}
      className={(renderProps) => link({ intent, className, ...renderProps })}
    >
      {children}
    </RACLink>
  );
};
