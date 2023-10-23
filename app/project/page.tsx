"use client";

import Navbar from "@/components/navbar";
import { webList, projectMenu, appList } from "@/lib/data";
import clsx from "clsx";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsArrowRight, BsBook } from "react-icons/bs";
import { FaBook, FaLink } from "react-icons/fa";
export default function ProjectPage() {
  const [active, setActive] = useState("web");
  const activeList = active === "web" ? webList : appList;

  return (
    <section>
      <Navbar />
      <div className="px-40">
        <h1 className="text-4xl font-bold ">Projects</h1>
        <div className="flex flex-row mt-16 h-16 justify-between w-2/5 ">
          {projectMenu.map((item) => {
            return (
              <div
                key={item.name}
                className={clsx(
                  "font-medium text-2xl self-center hover:cursor-pointer",
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
          className="mt-8 grid lg:grid-cols-2 sm:grid-cols-2 gap-4"
        >
          {activeList.map((item, index) => {
            return (
              // <div className={index % 2 === 0 ? "mb-4 pr-2" : "mb-4 pl-2"}>
              <motion.div
                key={item.name}
                initial={{ x: -50, opacity: 0 }} // Start from the left and be initially invisible
                animate={{ x: 0, opacity: 1 }} // Move to the center and become visible
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={index % 2 === 0 ? "mb-4 pr-2" : "mb-4 pl-2"}
              >
                <Image
                  className=" hover:brightness-90 hover:ease-in duration-200 hover:cursor-pointer"
                  src={item.imageUrl}
                  alt="E-Sim Records"
                  quality={95}
                />
                <div>
                  <h1 className="text-xl mt-4">{item.name}</h1>
                  <div className="flex flex-row gap-8 mt-2">
                    <div
                      onClick={() => {}}
                      className=" w-fit flex flex-row  hover:cursor-pointer"
                    >
                      <FaBook className="self-center" />
                      <h1 className="pl-2">Read more</h1>
                    </div>
                    <div
                      onClick={() => {}}
                      className=" flex flex-row hover:cursor-pointer"
                    >
                      <FaLink className="self-center" />
                      <h1 className="pl-2">Visit Website</h1>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
