import { useRouter } from "next/navigation";
import React from "react";

type ViewAllProps = {
  children: React.ReactNode;
};

export default function ViewAll({ children }: ViewAllProps) {
  const router = useRouter();
  return (
    <div className="basis-1/4 mb-8 text-right">
      <span
        onClick={() => router.push("/project")}
        className="hover:cursor-pointer text-xl font-medium  basis-1/4 capitalize text-right"
      >
        {children}
      </span>
    </div>
  );
}
