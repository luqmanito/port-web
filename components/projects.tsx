"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import ViewAll from "./view-all";
import SectionProjectHeading from "./section-project-heading";
import { BsArrowRight } from "react-icons/bs";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <div className="flex flex-row items-center ">
        <SectionProjectHeading>Selected projects</SectionProjectHeading>
        <ViewAll>View All -{">"} </ViewAll>
      </div>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
