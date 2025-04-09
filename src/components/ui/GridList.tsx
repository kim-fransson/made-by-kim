"use client";

import { focusRing } from "@/utils/styles";
import {
  GridList as RACGridList,
  GridListProps,
  GridListItemProps,
  GridListItem,
} from "react-aria-components";
import { tv } from "tailwind-variants";

export function GridList<T extends object>({
  children,
  ...props
}: GridListProps<T>) {
  return <RACGridList {...props}>{children}</RACGridList>;
}

const gridItem = tv({
  extend: focusRing,
  base: ["outline-offset-4"],
});

export function GridItem({ children, ...props }: GridListItemProps) {
  const textValue = typeof children === "string" ? children : undefined;
  return (
    <GridListItem
      textValue={textValue}
      {...props}
      className={(renderProps) => gridItem({ ...renderProps })}
    >
      {children}
    </GridListItem>
  );
}
