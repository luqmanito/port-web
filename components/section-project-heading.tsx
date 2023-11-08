import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionProjectHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium basis-3/4  mr-8 capitalize mb-8 text-right">
      {children}
    </h2>
  );
}
