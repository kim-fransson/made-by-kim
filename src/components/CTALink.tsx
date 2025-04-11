"use client";

import { motion } from "motion/react";
import { Link, LinkProps } from "./ui";
import { mergeProps, useFocusRing, useHover } from "react-aria";
import { twJoin } from "tailwind-merge";

export const CTALink = ({ children, ...props }: LinkProps) => {
  const { isHovered, hoverProps } = useHover({});
  const { isFocusVisible, focusProps } = useFocusRing();
  return (
    <div {...hoverProps} className="relative">
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 size-12 bg-white rounded-full origin-left pointer-coarse:hidden block"
        initial={{ width: "48px" }}
        animate={{ width: isHovered || isFocusVisible ? "100%" : "48px" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      ></motion.div>
      <Link
        {...mergeProps(hoverProps, focusProps, props)}
        className={twJoin(
          "text-center uppercase font-bold tracking-widest py-3 px-5 relative flex items-center gap-2 outline-offset-4",
          "pointer-coarse:bg-primary pointer-coarse:text-foreground-primary mix-blend-difference"
        )}
      >
        {children}
      </Link>
    </div>
  );
};
