"use client";

import {
  ButtonProps as RACButtonProps,
  Button as RACButton,
} from "react-aria-components";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "",
  variants: {
    intent: {
      primary: [""],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

type ButtonVariants = VariantProps<typeof button>;

interface ButtonProps extends RACButtonProps, ButtonVariants {
  className?: string;
}

export const Button = ({ intent, className, ...props }: ButtonProps) => {
  return <RACButton {...props} className={button({ intent, className })} />;
};
