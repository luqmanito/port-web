import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaWolfPackBattalion } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ssjiep from "@/public/ssjip.jpg";
import ssjiep10 from "@/public/ssjiep10.jpg";
import ssjiep1 from "@/public/ssjiep1.jpg";
import ssjiep2 from "@/public/ssjiep2.jpg";
import ssjiep3 from "@/public/ssjiep3.jpg";
import ssjiep6 from "@/public/ssjiep6.jpg";
import ssjiep9 from "@/public/ssjiep9.jpg";
import ssezpos1 from "@/public/ssezpos0.png";
import ssezpos0 from "@/public/sscoverpos.png";
import ssezpos2 from "@/public/ssezpos1.png";
import ssezpos3 from "@/public/ssezpos2.png";
import ssezpos4 from "@/public/ssezpos3.png";
import ssezpos5 from "@/public/ssezpos4.png";
import ssezpos6 from "@/public/ssezpos5.png";
import ssezpos7 from "@/public/ssezpos6.png";
import ssezpos8 from "@/public/ssezpos7.png";
import ssbaim1 from "@/public/ssbaim-1.png";
import ssbaim2 from "@/public/ssbaim-2.png";
import ssbaim3 from "@/public/ssbaim-3.png";
import sspayment from "@/public/sspayment.png";
import ssproducts from "@/public/ssproducts.png";
import ssbusiness from "@/public/ssbusiness.png";
import sscategories from "@/public/sscategories.png";
import ssezposweb from "@/public/ssezposweb.png";
import ssmainjiep from "@/public/ssmainjiep.png";
import ssbaim from "@/public/ssbaim1.png";
import sspos from "@/public/sspos.png";
import ssposapp from "@/public/supala-pos.png";
import ssmarlion from "@/public/ssmarlion.png";
import sdbv1 from "@/public/ss-sdbv1.jpg";
import sdbv2 from "@/public/ss-sdbv2.jpg";
import sdbv3 from "@/public/ss-sdbv3.jpg";
import sdbv4 from "@/public/ss-sdbv4.jpg";
import sdbv5 from "@/public/ss-sdbv5.jpg";
import sssgp from "@/public/sgp-web.png";
import baimkumis from "@/public/baimkumis.jpg";
import ssposweb from "@/public/ssposweb.png";
import { StaticImageData } from "next/image";

export type ItemProject = {
  name: string;
  imageUrl: StaticImageData;
  images: StaticImageData[];
  link: string;
  url: string;
  css: string;
  techstack: string;
  description: string;
  brief: Brief[];
};
type Brief = {
  [key: string]: string;
};

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
    hash: "/project",
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

export const navMenu = [
  {
    name: "Project",
    hash: "#project",
    url: "/project",
  },
  {
    name: "Youtube",
    hash: "#youtube",
    url: "https://www.youtube.com/@outsmartcode",
  },
  {
    name: "Contact",
    hash: "#contact",
    url: "mailto:luqmangrahito@gmail.com",
  },
] as const;

export const projectMenu = [
  {
    name: "Web Apps",
    value: "web",
    url: "a",
  },
  {
    name: "Mobile Apps",
    value: "app",
    url: "a",
  },
  {
    name: "Portfolios",
    value: "portfolio",
    url: "a",
  },
] as const;

export const webList = [
  {
    name: "E-Sim Records",
    imageUrl: ssmainjiep,
    images: [ssjiep10, ssjiep1, ssjiep2, ssjiep3, ssjiep6, ssjiep9],
    link: "https://recordcenter.jiep.co.id/",
    url: "e-sim-pos",
    css: "Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template",
    techstack:
      "The site is built using Vue.js 2.7 and employs the Vuex state management pattern and library. Additionally, it utilizes the ApexCharts library for displaying charts on the dashboard page. Firebase integration is in place to manage push notifications, and Axios is employed to handle API requests. This site runs on the Vite library and is deployed using Docker.",
    description:
      "E-Sim Records is a platform designed for users to store their items in a client warehouse. All warehouse activities are recorded within the application, encompassing various tasks such as user requests, item withdrawals, lending, returns, digitalization, and item disposal. The app logs the entire process timeline, status changes, and locations. Additionally, it accommodates several roles with varying authorities to modify the item statuses.",
    brief: [
      {
        brief_1:
          "On the dashboard page, it shows the overall status of all users' items stored in the warehouse. Additionally, there are incoming notifications indicating a shuttle request for an item that requires user confirmation.",
        brief_2:
          "In this 'ruangan' feature, it contains the capacity of boxes in a specific warehouse. It shows the status of available storage and which boxes are already occupied.",
        brief_3:
          "This 'Hak Akses' page includes settings for specific roles to manage their authorities on the web. You can simply check a tick mark on the right to modify it.",
        brief_4:
          "This is one of the complex features on this website. It involves many steps when a user wants to store their items in the client warehouse. This is where state management becomes highly beneficial.",
        brief_5:
          "The last feature is the visualization status availability of boxes in a warehouse. Some other features require complex logic and need state management to be implemented.",
      },
    ],
  },
  {
    name: "EzPos",
    imageUrl: ssezposweb,
    url: "ezpos-web",
    images: [
      ssezposweb,
      ssezposweb,
      ssbusiness,
      ssposweb,
      sscategories,
      ssproducts,
      sspayment,
    ],
    link: "https://ezpos.id/cms",
    css: "Vuetify",
    techstack:
      "The site is built by Vue.js 3.3.4 with typescript and uses the Pinia state management pattern, Axios for handling API requests, and runs on the Vite library. In addition to frontend work, I also assist in building or designing the database schema and implementing it in backend work using the PHP framework Laravel and Eloquent ORM",
    description:
      "EzPos is the web version of the EzPos mobile app, primarily used for online food ordering. Kitchen and cashier staff using the mobile app receive incoming order notifications. The kitchen staff can then begin preparing the food, and once the order is ready, the cashier is notified to confirm the order and complete the transaction with the customer. In addition to the food ordering feature, this web application offers settings for the super admin user to view a list of businesses registered and subscribed to some modules. The super admin can activate or deactivate certain paid modules based on the business owner's preferences. Some of these modules include limitations on products, category features, online ordering capabilities, and various payment methods.",
    brief: [
      {
        brief_1:
          "A display for ordering food via the web allows users to choose by selecting a business/restaurant and browse all the available products on the website.",
        brief_2:
          "This is in a super admin user role. They are able to see a list of running businesses, each with its own settings, and can edit or delete business settings.",
        brief_3:
          "From here, we can observe the super admin's features or authority to modify business settings like the payment method module and other modules. All these settings can be adjusted from this page, depending on the business owner's subscription.",
        brief_4:
          "This is a list of some categories owned or created by business owners.",
        brief_5:
          "This is a list of all products created by all business owners..",
        brief_6:
          "Lastly here is the list of available payment methods that can be activated or deactivated by business owners if they subscribe to our service.",
      },
    ],
  },
];

export const appList = [
  {
    name: "EzPos",
    imageUrl: ssposapp,
    url: "ezpos-app",
    images: [
      ssezpos0,
      ssezpos1,
      ssezpos2,
      ssezpos3,
      ssezpos4,
      ssezpos5,
      ssezpos6,
      ssezpos7,
      ssezpos8,
    ],
    link: "https://play.google.com/store/apps/details?id=id.ezpos&hl=id&gl=US",
    css: "Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template",
    techstack:
      "This mobile app is built using Typescript and React Native with Firebase integration to send push notifications to employees. Redux Toolkit is utilized to handle global state management in this app. As for the user interface, I chose NativeBase to streamline the development process. I've made an effort to implement clean code architecture in this project, making the code much easier to read and scalable. You can check my repository to see it.",
    description:
      "EzPos is a POS mobile app currently designed for Android, primarily used in tab view, but it can also run on the normal mobile Android view. Essentially, it's a food SAAS app where a business owner can register their business. After registration, they can proceed to create a list of their food products. The business owner has the ability to manage their employees by adding and editing their roles, such as kitchen staff, regular users, administrators, and cashiers. Each role comes with different feature authorities within the app.",
    brief: [
      {
        brief_1:
          "On the dashboard page, it will display the overall sum status of all transactions made each day. There's also user identification showing the name, role, and business profile picture. This app features five tab screens, which I'll explain later.",
        brief_2:
          "The setting page offers multiple settings that we can manage, such as payment methods, employee settings, offline data synchronization, printer settings, and a customer feedback input field. At the top of the screen, it shows the business name and logo, while at the bottom, there's a logout button.",
        brief_3:
          "On the cashier tab, you can view the various products available in the store. You can tap the add or subtract icon to adjust the quantity of the product you want to buy. At the bottom, there's a button displaying the total quantity and price of your cart.",
        brief_4:
          "When a customer orders a product from the web, it notifies the kitchen staff. After they've prepared the food, it's time for the cashier staff to complete the order. The cashier's display shows the list of products the customer purchased, the quantity of each product, and a total summary of the amount the customer has to pay. Clicking the 'complete order' button at the bottom screen navigates to the payment method. After successful payment, a receipt is generated which can be printed out.",
        brief_5:
          "As an admin, you can manage your employees. This screen allows you to add new employees and define their roles within the app.",
        brief_6:
          "The 'Order' tab displays our order list, categorized as online orders if they come from the web and offline orders if they're made within this app. In the 'online order' tab, you can edit your transactions, change the products you want to buy, correct quantities, or simply click the 'confirmed' button if the order is correct.",
        brief_7:
          "The 'Report' screen tab provides a recap of your order list, allowing you to select specific times such as today, the last 7 days, or the last 30 days.",
        brief_8:
          "Finally, there's the configuration for the receipt printer with your app device. Here, you can add a new device and pair it with the app using bluetooth. This allows you to seamlessly print receipts after each transaction.",
      },
    ],
  },
  {
    name: "Baim Kumis",
    imageUrl: baimkumis,
    url: "baim-kumis-app",
    images: [baimkumis, ssbaim1, ssbaim2, ssbaim3],
    link: "https://github.com/luqmanito/baim-kumis-mobile",
    css: "Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template",
    techstack:
      "The app is developed using React Native with NativeBase for the UI/UX, and for seamless state management, I have implemented Redux Toolkit within the application.",
    description: `"Baim Kumis" is an abbreviation of "Bantosan Imah Keur Urang Ciamis." It is an application designed to monitor slum areas and track the history of updates within them. The government utilizes this app to monitor communities eligible for assistance and determine individuals in need of housing repairs. For instance, if a household's toilet is deemed unfeasible, the government initiates the necessary repairs, and all activities, both before and after each intervention, are documented within the app.`,
    brief: [
      {
        brief_1:
          "Here is an example view of the dashboard, featuring an overall list of detailed total slum areas and a list of proposals indicating people with inadequate housing facilities.",
        brief_2:
          "In this picture, you can observe a display for the user profile that is logged into the app. Additionally, there are details presented before and after house fixing, along with a filtering option for regions.",
        brief_3:
          "In this last picture, there is information to add proposals and its corresponding details screen.",
      },
    ],
  },
];

export const portfolioList = [
  {
    name: "Sedekah Bersama",
    imageUrl: sdbv1,
    url: "coffee-shop",
    images: [sdbv1, sdbv2, sdbv3, sdbv4, sdbv5],
    link: "https://sedekahbersama.luqmanito.com/",
    css: "shadcn ui, tailwind",
    techstack: "Stack used : Shadcn UI, React, Tailwind",
    description:
      "As a Frontend Developer, I contributed to the creation of SedekahBersama, a charity foundation website. I focused on replicating the user-friendly layout and design aesthetics of the UNFPA site to provide an intuitive and engaging user experience. My responsibilities included developing responsive web pages, ensuring cross-browser compatibility, and optimizing performance. The tech stack utilized in this project included React, Next.js, TypeScript, and Tailwind CSS.",
    brief: [
      {
        // brief_1:
        //   "Dashboard Page",
        // brief_2:
        //   "in this ruangan feature, it contains how many box capacity in a spesific warehouse, theres status of which is available for storing and which one is already taken.",
        // brief_3:
        //   "this hak akses page it has a setting for specific role to manage what authority he can do in the web, you can simply by check a tick mark on the right to change it.",
        // brief_4:
        //   "this is one of the complex one feature in this web, it contain many step when a user want to store his item in the client warehouse, this is where the state management became so helpful. ",
        // brief_5:
        //   "and last pic is feature of status availability of box in a warehouse, some of another feature that require complex logic and need state management when make it.",
      },
    ],
  },

  {
    name: "Singapore Holiday Guide",
    imageUrl: sssgp,
    url: "sgp-holiday-map",
    images: [sssgp, ssmarlion],
    link: "https://holidaymap-sgp-googlemap.vercel.app/",
    css: "Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template",
    techstack: "Tech Stack : Next.js, Redux, Googlemap Api",
    description:
      "I successfully integrated the Google Maps API for my top-rated tourist map in Singapore. It's a simple website where users can click on one of the places, and the map next to it will display the location marked with a red marker, along with a full description of the place.",
    brief: [
      {
        // brief_1:
        //   "on the dashboard page it show overall status of all users item that stored on the warehouse, theres also some request incoming notification that tells theres a shuttle request for an item that need user confirmation",
        // brief_2:
        //   "in this ruangan feature, it contains how many box capacity in a spesific warehouse, theres status of which is available for storing and which one is already taken.",
        // brief_3:
        //   "this hak akses page it has a setting for specific role to manage what authority he can do in the web, you can simply by check a tick mark on the right to change it.",
        // brief_4:
        //   "this is one of the complex one feature in this web, it contain many step when a user want to store his item in the client warehouse, this is where the state management became so helpful. ",
        // brief_5:
        //   "and last pic is feature of status availability of box in a warehouse, some of another feature that require complex logic and need state management when make it.",
      },
    ],
  },
];

export const experiencesData = [
  {
    title: "Backend Developer",
    location: "Bandung, Indonesia",
    description:
      "I'm now a backend developer working at Ganesha Operation. My stack includes Node.js, Nest.js, TypeScript, and Go. I'm open to full-time opportunities.",
    icon: React.createElement(FaWolfPackBattalion),
    date: "2024 - present",
  },
  {
    title: "Frontend Developer",
    location: "Remote",
    description:
      "As a Frontend Developer at Supala and Millenia Solusi Informatika, I specialize in building dynamic and responsive web applications. My tech stack includes React, Next.js, Vue.js, TypeScript, Tailwind, Node.js, and Laravel.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "Fullstack Developer Bootcamp Program",
    location: "Bandung, Indonesia",
    description:
      "I enroll a fullstack javascript program by Fazztrack, and just within 3 months i succesfully made 4 app site which is coffee shop, movie, e-wallet, furniture, and one mobile apps for coffee shop. ",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Mechanical Bachelor Graduate Degree",
    location: "Bandung, Indonesia",
    description:
      "I graduated after 3 years of studying, while still doing job as an IT consultant supervisor.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "IT Consultant Supervisor",
    location: "Jakarta, Indonesia",
    description:
      "I worked as a consultant for 3 years and led the team responsible for supervising the installation of the Jabodetabek-West Java toll road equipment.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2020",
  },
  {
    title: "Mechanical Diplome Graduate Degree",
    location: "Bandung, Indonesia",
    description:
      "I graduated after 3 years of studying. I immediately found a job as a IT Consultant.",
    icon: React.createElement(LuGraduationCap),
    date: "2015",
  },
] as const;

export const projectsData = [
  {
    title: "E-SIM Records",
    description:
      "I developed an application that enables users to store their goods in a warehouse. All warehouse activities and user requests for storing goods are recorded within the application.",
    tags: ["Vue.js", "PostgreDb", "Bootstrap", "Mat UI Vuexy"],
    imageUrl: ssjiep,
    url: "/project/e-sim-pos",
  },
  {
    title: "Baim Kumis",
    description:
      "I developed an app that serves as a comprehensive solution for house repairment tracking and improvement proposals. Users can seamlessly monitor house data, identify repair needs, evaluate slum areas, etc.",
    tags: ["React Native", "Native Base", "Redux"],
    imageUrl: ssbaim,
    url: "/project/baim-kumis-app",
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
    url: "/project/ezpos-app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Express",
  "Microservices",
  "Nest",
  "Websocket",
  "GRPC",
  "AWS",
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
  "Go",
  "Laravel",
  "Eloquent",
  "Framer Motion",
] as const;
