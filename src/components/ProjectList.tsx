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
      className="grid gap-12 md:grid-cols-2 "
    >
      {({ title, thumbnail, tags, website, github }) => (
        <GridItem id={title} textValue={title}>
          <article className="flex flex-col gap-5">
            <div className="relative group">
              <Image
                width={540}
                height={400}
                alt=""
                src={thumbnail}
                className="object-cover w-[345px] h-[253px] lg:w-[540px] lg:h-[400px]"
              />
              <div className="lg:block absolute inset-0 group-hover:backdrop-blur-sm group-hover:bg-black/50"></div>
              <div className="lg:group-hover:flex absolute flex-col gap-12 hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Link href={website} target="_blank">
                  view project
                </Link>
                <Link href={github} target="_blank">
                  view code
                </Link>
              </div>
            </div>
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
            <div className="flex gap-8 lg:hidden">
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
