import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ssjiep from "@/public/ssjip.jpg";
import ssbaim from "@/public/ssbaim1.png";
import sspos from "@/public/sspos.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Mechanical Diplome Graduate Degree",
    location: "Bandung, Indonesia",
    description:
      "I graduated after 3 years of studying. I immediately found a job as a Hardware Engineer.",
    icon: React.createElement(LuGraduationCap),
    date: "2015",
  },
  {
    title: "Hardware Engineer",
    location: "Jakarta, Indonesia",
    description:
      "I worked as a Hardware Engineer for 3 years and led the team responsible for supervising the installation of the Jabodetabek-West Java toll road equipment.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2020",
  },
  {
    title: "Mechanical Bachelor Graduate Degree",
    location: "Bandung, Indonesia",
    description:
      "I graduated after 3 years of studying, while still doing job as a hardware engineer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Fullstack Developer Bootcamp Program",
    location: "Bandung, Indonesia",
    description:
      "I enroll a fullstack javascript program, and succesfully made 4 app site which is coffee shop, movie, e-wallet, furniture, and one mobile apps for coffee shop. ",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Bandung, Indonesia",
    description:
      "I'm now a full-stack developer working at Supala Web Company. My stack includes React, Next.js, Vue.js, TypeScript, Tailwind, Node and Laravel. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "E-SIM Records",
    description:
      "I developed an application that enables users to store their goods in a warehouse. All warehouse activities and user requests for storing goods are recorded within the application.",
    tags: ["Vue.js", "PostgreDb", "Bootstrap", "Mat UI Vuexy"],
    imageUrl: ssjiep,
  },
  {
    title: "Baim Kumis",
    description:
      "I developed an app that serves as a comprehensive solution for house repairment tracking and improvement proposals. Users can seamlessly monitor house data, identify repair needs, evaluate slum areas, etc.",
    tags: ["React Native", "Native Base", "Redux"],
    imageUrl: ssbaim,
  },
  {
    title: "Pos-mobile",
    description:
      "I created a mobile Point of Sale (POS) app that streamlines transactions, inventory management, sales tracking for businesses , and enhance overall business efficiency",
    tags: [
      "React Native",
      "Typescript",
      "PHP",
      "MYSQL",
      "PHP",
      "Laravel",
      "Eloquent",
    ],
    imageUrl: sspos,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Express",
  "React Native",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Git",
  "Bootstrap",
  "Tailwind",
  "Redux",
  "Vuex",
  "Express",
  "PostgreSQL",
  "Php",
  "Laravel",
  "Eloquent",
  "Framer Motion",
] as const;
