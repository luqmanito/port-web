"use client";

import Navbar from "@/components/navbar";
import { webList, projectMenu, appList, portfolioList } from "@/lib/data";
import clsx from "clsx";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaBook, FaLink } from "react-icons/fa";
import { useRouter } from "next/navigation";
export default function ProjectPage() {
  const [active, setActive] = useState("web");
  const router = useRouter();
  const activeList =
    active === "web"
      ? webList
      : active === "portfolio"
      ? portfolioList
      : appList;

  return (
    <section>
      <Navbar />
      <div className="px-4 sm:px-8 md:px-16 lg:px-40 ">
        <h1 className="text-4xl font-bold ">Projects</h1>
        <div className="flex flex-row mt-16 h-16 justify-between sm:w-2/3 md:w-1/2 lg:w-2/5 ">
          {projectMenu.map((item) => {
            return (
              <div
                key={item.name}
                className={clsx(
                  "font-medium text-lg sm:text-xl md:text-2xl lg:text-2xl mb-2 sm:mb-0 hover:cursor-pointer",
                  {
                    "underline underline-offset-8": active === item.value,
                  }
                )}
                onClick={() => {
                  setActive(item.value);
                }}
              >
                {item.name}
              </div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4"
        >
          {activeList.map((item, index) => {
            return (
              <motion.div
                key={item.name}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={index % 2 === 0 ? "mb-4 pr-2" : "mb-4 pl-2"}
              >
                <Image
                  onClick={() => router.push(`/project/${item.url}`)}
                  className=" hover:brightness-90 hover:ease-in duration-200 hover:cursor-pointer"
                  src={item.imageUrl}
                  alt="Thumbnail Image"
                  quality={100}
                />
                <div>
                  <h1
                    onClick={() => router.push(`/project/${item.url}`)}
                    className="text-xl mt-4 hover:cursor-pointer  w-fit"
                  >
                    {item.name}
                  </h1>
                  <div className="flex flex-row gap-8 mt-2">
                    <div
                      onClick={() => {}}
                      className=" w-fit flex flex-row  hover:cursor-pointer"
                    >
                      <FaBook className="self-center" />
                      <h1
                        onClick={() => router.push(`/project/${item.url}`)}
                        className="pl-2"
                      >
                        Read more
                      </h1>
                    </div>
                    <div className="flex flex-row hover:cursor-pointer">
                      <FaLink className="self-center" />
                      <a
                        href={item?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pl-2"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
