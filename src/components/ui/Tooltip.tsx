"use client";

import {
  TooltipProps as RACTooltipProps,
  Tooltip as RACTooltip,
  TooltipTrigger as RACTooltipTrigger,
  TooltipTriggerComponentProps,
} from "react-aria-components";

interface TooltipProps extends Omit<RACTooltipProps, "children"> {
  children: React.ReactNode;
}

const Tooltip = ({ children, ...props }: TooltipProps) => {
  return (
    <RACTooltip
      {...props}
      className="bg-background px-4 py-2 border-b-2 border-primary font-medium"
    >
      {children}
    </RACTooltip>
  );
};

interface TooltipTriggerProps extends TooltipTriggerComponentProps {
  tooltip: string;
}
export const TooltipTrigger = ({
  children,
  tooltip,
  ...props
}: TooltipTriggerProps) => {
  return (
    <RACTooltipTrigger {...props}>
      {children}
      <Tooltip>{tooltip}</Tooltip>
    </RACTooltipTrigger>
  );
};
