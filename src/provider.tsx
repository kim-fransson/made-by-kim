"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRouter } from "next/navigation";
import { ReactNode, useRef } from "react";
import { RouterProvider } from "react-aria-components";

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function ClientProviders({ children }: { children: ReactNode }) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseXSpring = useSpring(mouseX, {
    stiffness: 150,
    damping: 20,
    mass: 0.5,
  });
  const mouseYSpring = useSpring(mouseY, {
    stiffness: 150,
    damping: 20,
    mass: 0.5,
  });

  const background = useTransform(
    [mouseXSpring, mouseYSpring],
    ([x, y]) =>
      `radial-gradient(700px at ${x}px ${y}px, var(--color-cursor-shadow), transparent 80%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;

    mouseX.set(e.clientX - bounds.left);
    mouseY.set(e.clientY - bounds.top);
  };

  return (
    <RouterProvider navigate={router.push}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className="relative w-full min-h-svh"
      >
        <motion.div
          className="pointer-events-none fixed inset-0 z-0 lg:absolute"
          style={{ background }}
        />
        {children}
      </div>
    </RouterProvider>
  );
}
