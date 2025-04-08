"use client";

import { projects } from "@/projects";
import { GridItem, GridList, Link } from "./ui";
import Image from "next/image";

export const ProjectList = () => {
  return (
    <GridList
      aria-label="My projects"
      selectionMode="none"
      items={projects}
      className="grid gap-12"
    >
      {({ title, thumbnail, tags, website, github }) => (
        <GridItem id={title} textValue={title}>
          <article className="flex flex-col gap-5">
            <Image width={345} height={253} alt="" src={thumbnail} />
            <h3 className="text-3xl font-bold uppercase">{title}</h3>
            <ul className="flex gap-4">
              {tags.map((tag) => (
                <span
                  className="uppercase font-medium text-muted -mt-2"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </ul>
            <div className="flex gap-8">
              <Link href={website} target="_blank">
                view project
              </Link>
              <Link href={github} target="_blank">
                view code
              </Link>
            </div>
          </article>
        </GridItem>
      )}
    </GridList>
  );
};
