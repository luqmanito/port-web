"use client";

import { webList, appList, portfolioList, ItemProject } from "@/lib/data";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function DetailProjectPage() {
  const params = useParams();
  const [active, setActive] = useState<string>("web");
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
    <section className="px-64 pb-20">
      <article className="px-36">
        <h1 className="flex text-4xl font-bold justify-center">
          {project?.name}
        </h1>
        <div className=" flex mt-8 justify-center  ">
          <Image
            src={project?.images ? project.images[0] : ""}
            loading="lazy"
            style={{
              width: "100%",
              height: "auto",
            }}
            alt="Picture of the author"
          />
        </div>
        <h1 className=" flex text-3xl font-bold mt-4 hover:cursor-pointer  w-fit">
          Introduction
        </h1>
        <p className="text-lg mt-4">{project?.description}</p>
        <p className="text-lg mt-10">{project?.techstack}</p>
        <h1 className=" flex text-3xl font-bold mt-16 hover:cursor-pointer  w-fit">
          Short Feature Explanation
        </h1>
        {project?.images.slice(1).map((image, index) => {
          return (
            <React.Fragment key={index}>
              <div className=" flex mt-8 justify-center  ">
                <Image
                  loading="lazy"
                  src={image}
                  alt={`Image ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <p className="text-lg mt-10">
                {project.brief[0][`brief_${index + 1}`]}
              </p>
            </React.Fragment>
          );
        })}
      </article>
    </section>
  );
}
