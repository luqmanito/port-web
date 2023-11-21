"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      {/* <p className="mb-3">
        After completing my <span className="font-medium">mechanical</span>{" "}
        degree, I found myself at a crossroads. While I had a formal education
        in mechanical engineering, I realized that my true passion lay in the
        world of programming and software development. Determined to turn my
        passion into a profession, I made the bold decision to transition into
        the realm of programming. I enrolled in a comprehensive coding bootcamp,
        where I embarked on an immersive journey to become a
        <span className="font-medium"> full-stack developer. </span>{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">React, Next.js, Node.js, and Vue.js</span>
        . I am also familiar with TypeScript and other programming language such
        as <span className="font-medium">PHP together using Laravel</span>. I am
        always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p> */}
      <p>
        I’m from Indonesia and I have been working as a Fullstack Developer for
        over 1 years. Currently I work for Supala as front-end developer. I’ve
        been freelancing since 2022, and right now I am looking forward to
        collaborate with you!
      </p>
    </motion.section>
  );
}
