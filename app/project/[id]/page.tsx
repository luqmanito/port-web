"use client";

import { webList, appList, portfolioList, ItemProject } from "@/lib/data";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function DetailProjectPage() {
  const params = useParams();
  const [project, setProject] = useState<ItemProject | null>(null);

  const findItemInList = (lists: ItemProject[][], id: string) => {
    for (const list of lists) {
      const foundItem = list.find((item) => item.url === id);
      if (foundItem) {
        setProject(foundItem);
      }
    }
    return null;
  };
  useEffect(() => {
    findItemInList([webList], params.id);
    findItemInList([appList], params.id);
    findItemInList([portfolioList], params.id);
  }, [params.id]);

  return (
    <section className="px-4 md:px-8 lg:px-16 xl:px-32 pb-20">
      <article className="md:px-16 lg:px-32">
        <h1 className="flex text-2xl md:text-4xl font-bold justify-center">
          {project?.name}
        </h1>
        <div className="flex mt-4 md:mt-8 justify-center">
          <Image
            src={project?.images ? project.images[0] : ""}
            loading="lazy"
            className="w-full md:w-auto"
            alt="Project Image"
          />
        </div>
        <h1 className="flex text-xl md:text-3xl font-bold mt-4 md:mt-8  w-fit">
          Introduction
        </h1>
        <p className="text-base md:text-lg mt-4">{project?.description}</p>
        <p className="text-base md:text-lg mt-8">{project?.techstack}</p>
        <h1 className="flex text-xl md:text-3xl font-bold mt-8 md:mt-16  w-fit">
          Short Feature Explanation
        </h1>
        {project?.images.slice(1).map((image, index) => (
          <React.Fragment key={index}>
            <div className="flex mt-4 md:mt-8 justify-center">
              <Image
                loading="lazy"
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full md:w-auto"
              />
            </div>
            <p className="text-base md:text-lg mt-4">
              {project.brief[0][`brief_${index + 1}`]}
            </p>
          </React.Fragment>
        ))}
      </article>
    </section>
  );
}
