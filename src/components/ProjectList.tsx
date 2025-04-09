"use client";

import { projects } from "@/projects";
import { GridItem, GridList } from "./ui";
import { ProjectCard } from "./ProjectCard";

export const ProjectList = () => {
  return (
    <GridList
      aria-label="My projects"
      selectionMode="none"
      items={projects}
      className="grid gap-12 md:grid-cols-2"
    >
      {(item) => (
        <GridItem id={item.title} textValue={item.title}>
          {({ isFocused }) => (
            <ProjectCard project={item} isFocused={isFocused} />
          )}
        </GridItem>
      )}
    </GridList>
  );
};
