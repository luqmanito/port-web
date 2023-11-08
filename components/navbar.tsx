"use client";

import Image from "next/image";
import me from "@/public/me3.png";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { navMenu } from "@/lib/data";
import Link from "next/link";

export default function Navbar() {
  const { setActiveTitleSection, activeTitleSection } =
    useActiveSectionContext();
  return (
    <section className="fixed bg top-0 px-20 py-4 w-full grid grid-cols-3 gap-4">
      <div>
        <a className="flex flex-row w-fit " href="/">
          <div>
            <Image
              src={me}
              alt="Luqman portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-10 w-10 rounded-full object-cover shadow-xl hover:scale-105 transition-transform"
            />
          </div>
          <div className="self-center ml-4">
            <h1 className="font-bold">Luqmanito</h1>
          </div>
        </a>
      </div>
      <div className="invisible ...">02</div>
      <div className={"flex flex-row self-center justify-evenly"}>
        {navMenu.map((item) => {
          return (
            <Link
              key={item.name}
              className={clsx(
                "hover:text-yellow-400 transition dark:text-white dark:hover:text-yellow-400",
                {
                  "text-yellow-400 dark:text-yellow-400":
                    activeTitleSection === item.name,
                }
              )}
              href={item.url}
              onClick={() => {
                setActiveTitleSection(item.name);
              }}
            >
              {item?.name}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
