import { Project } from "@/projects";
import Image from "next/image";
import { Link } from "./ui";
import { useHover } from "react-aria";

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
        {showButtonOverlay && (
          <ButtonOverlay website={website} github={github} />
        )}
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
        <Link href={website} target="_blank">
          view project
        </Link>
        <Link href={github} target="_blank">
          view code
        </Link>
      </div>
    </article>
  );
};

interface ButtonOverlayProps {
  website: string;
  github: string;
}
const ButtonOverlay = ({ website, github }: ButtonOverlayProps) => {
  return (
    <>
      <div className="lg:block absolute inset-0 backdrop-blur-sm bg-black/50"></div>
      <div className="lg:flex absolute flex-col gap-12 hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Link href={website} target="_blank">
          view project
        </Link>
        <Link href={github} target="_blank">
          view code
        </Link>
      </div>
    </>
  );
};
