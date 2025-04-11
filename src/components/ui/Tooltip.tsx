"use client";

import {
  AnimatePresence,
  easeOut,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { Ref, useEffect, useRef, useState } from "react";
import {
  TooltipProps as RACTooltipProps,
  Tooltip as RACTooltip,
  TooltipTrigger as RACTooltipTrigger,
  TooltipTriggerComponentProps,
} from "react-aria-components";

interface TooltipProps extends Omit<RACTooltipProps, "children"> {
  children: React.ReactNode;
  ref?: Ref<HTMLDivElement>;
}

const Tooltip = ({ children, ref, ...props }: TooltipProps) => {
  return (
    <RACTooltip
      {...props}
      ref={ref}
      className="bg-background-100 px-4 py-2 font-medium select-none border-b-2 border-primary grayscale-[1%]"
    >
      {children}
    </RACTooltip>
  );
};

interface TooltipTriggerProps extends TooltipTriggerComponentProps {
  tooltip: string;
}

const MotionTooltip = motion.create(Tooltip);

export const TooltipTrigger = ({
  children,
  tooltip,
  ...props
}: TooltipTriggerProps) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseXSpring = useSpring(mouseX, {
    stiffness: 150,
    damping: 20,
    mass: 0.5,
  });
  const rotate = useTransform(mouseXSpring, [0, 0.5, 1], [-5, 0, 5], {
    ease: easeOut,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const bounds = tooltipRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const relativeX = (e.clientX - bounds.left) / bounds.width;
    mouseX.set(relativeX); // from 0 to 1
  };

  useEffect(() => {
    if (!isTooltipOpen) {
      mouseX.set(0.5);
    }
  }, [isTooltipOpen, mouseX]);

  return (
    <RACTooltipTrigger {...props} onOpenChange={setIsTooltipOpen}>
      <div ref={tooltipRef} onMouseMove={handleMouseMove} className="flex">
        {children}
      </div>
      <AnimatePresence>
        {isTooltipOpen && (
          <MotionTooltip
            isOpen
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              rotate,
              willChange: "transform",
              transformStyle: "preserve-3d",
            }}
          >
            {tooltip}
          </MotionTooltip>
        )}
      </AnimatePresence>
    </RACTooltipTrigger>
  );
};
