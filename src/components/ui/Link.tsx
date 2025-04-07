"use client";

import {
  Link as RACLink,
  LinkProps as RACLinkProps,
} from "react-aria-components";
import { tv, VariantProps } from "tailwind-variants";

const link = tv({
  base: "",
  variants: {
    intent: {
      icon: ["p-2.5 rounded-full"],
    },
  },
});

type LinkVariants = VariantProps<typeof link>;

interface LinkProps extends RACLinkProps, LinkVariants {
  className?: string;
}

export const Link = ({ children, intent, ...props }: LinkProps) => {
  return (
    <RACLink {...props} className={link({ intent })}>
      {children}
    </RACLink>
  );
};
