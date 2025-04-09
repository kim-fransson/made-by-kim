"use client";

import { focusRing } from "@/utils/styles";
import { motion } from "motion/react";
import { useHover } from "react-aria";
import {
  Link as RACLink,
  LinkProps as RACLinkProps,
} from "react-aria-components";
import { tv, VariantProps } from "tailwind-variants";

const link = tv({
  extend: focusRing,
  base: "cursor-pointer text-center -outline-offset-2 relative",
  variants: {
    intent: {
      primary: "h-9 uppercase tracking-widest font-bold p-4",
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

export const Link = (props: LinkProps) => {
  return props.intent === "primary" ? (
    <LinkWithBorder {...props} />
  ) : (
    <RACLink
      {...props}
      className={(renderProps) =>
        link({ intent: props.intent, ...renderProps })
      }
    />
  );
};

const LinkWithBorder = ({ intent, children, ...props }: LinkProps) => {
  const { isHovered, hoverProps } = useHover({});
  return (
    <span {...hoverProps}>
      <RACLink
        {...props}
        className={(renderProps) => link({ intent, ...renderProps })}
      >
        <>
          <motion.div
            animate={{ height: isHovered ? "100%" : "2px" }}
            className="w-full bg-primary absolute bottom-0"
          ></motion.div>
          <motion.span
            animate={{
              color: isHovered
                ? "var(--color-foreground-primary)"
                : "var(--color-foreground)",
            }}
            className="relative z-10"
          >
            {children}
          </motion.span>
        </>
      </RACLink>
    </span>
  );
};
