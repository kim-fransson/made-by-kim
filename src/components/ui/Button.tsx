"use client";

import {
  ButtonProps as RACButtonProps,
  Button as RACButton,
} from "react-aria-components";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "h-9 uppercase tracking-widest font-bold cursor-pointer text-lg",
  variants: {
    intent: {
      primary: ["pb-4 border-b-2 border-primary"],
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
