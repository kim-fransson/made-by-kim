"use client";

import {
  GridList as RACGridList,
  GridListProps,
  GridListItemProps,
  GridListItem,
} from "react-aria-components";

export function GridList<T extends object>({
  children,
  ...props
}: GridListProps<T>) {
  return <RACGridList {...props}>{children}</RACGridList>;
}

export function GridItem({ children, ...props }: GridListItemProps) {
  const textValue = typeof children === "string" ? children : undefined;
  return (
    <GridListItem textValue={textValue} {...props}>
      {children}
    </GridListItem>
  );
}
