import { Project } from "@/projects";
import Image from "next/image";
import { Link } from "./ui";
import { useHover } from "react-aria";
import { AnimatePresence, motion } from "motion/react";

interface ProjectCardProps {
  project: Project;
  isFocused: boolean;
}

export const ProjectCard = ({ project, isFocused }: ProjectCardProps) => {
  const { thumbnail, website, github, title, tags } = project;

  const { hoverProps, isHovered: isHoverOverImage } = useHover({});

  const showButtonOverlay = isFocused || isHoverOverImage;

  return (
    <article className="flex flex-col gap-5">
      <div {...hoverProps} className="relative">
        <Image
          width={540}
          height={400}
          alt=""
          src={thumbnail}
          className="object-cover w-[345px] h-[253px] lg:w-[540px] lg:h-[400px]"
        />
        <ButtonOverlay
          website={website}
          github={github}
          isOpen={showButtonOverlay}
        />
      </div>
      <h3 className="text-3xl font-bold uppercase">{title}</h3>
      <ul className="flex gap-4">
        {tags.map((tag) => (
          <li key={tag} className="-mt-2">
            <span className="uppercase font-medium text-muted">{tag}</span>
          </li>
        ))}
      </ul>
      <div className="flex gap-8 lg:hidden">
        <Link intent="primary" href={website} target="_blank">
          view project
        </Link>
        <Link intent="primary" href={github} target="_blank">
          view code
        </Link>
      </div>
    </article>
  );
};

interface ButtonOverlayProps {
  website: string;
  github: string;
  isOpen: boolean;
}

const MotionLink = motion.create(Link);

const ButtonOverlay = ({ website, github, isOpen }: ButtonOverlayProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            exit={{ opacity: 0 }}
            className="lg:block absolute inset-0 bg-black hidden"
          ></motion.div>
          <div className="lg:flex absolute flex-col items-center gap-12 hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <MotionLink
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              href={website}
              target="_blank"
              intent="primary"
            >
              view project
            </MotionLink>
            <MotionLink
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              href={github}
              target="_blank"
              intent="primary"
            >
              view code
            </MotionLink>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
