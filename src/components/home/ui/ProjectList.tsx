"use client";

import { createRef } from "react";
import { IProjectItem } from "@/types";
import Row from "@/components/core/Row";
import ProjectItem from "./ProjectItem";
import Column from "@/components/core/Column";

const ProjectList = ({ projects }: Readonly<{ projects: IProjectItem[] }>) => {
  const carouselRef = createRef<HTMLDivElement| null>();

  const _handleOnClickPrev = () => {
    if (!carouselRef || carouselRef.current === null) return;

    let offset = 400;
    if (window.innerWidth < 480) offset = 280;

    carouselRef.current.scrollLeft -= offset;
  };

  const _handleOnClickNext = () => {
    if (!carouselRef || carouselRef.current === null) return;

    let offset = 400;
    if (window.innerWidth < 480) offset = 280;

    carouselRef.current.scrollLeft += offset;
  };

  return (
    <div className="w-full mt-16 flex flex-col">
      <div
  className="w-full flex flex-wrap gap-4 overflow-x-auto no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-4"
  ref={carouselRef}
>
  {projects.map((item, index) => (
    <ProjectItem key={`project-item-${index}`} project={item} />
  ))}
</div>


      <div className="w-full flex items-center justify-center gap-4 mt-16">
        <button
          type="button"
          className="app__filled_btn !px-4 !py-2 !text-base/6 !font-normal"
          onClick={_handleOnClickPrev}
        >
          Prev
        </button>

        <button
          type="button"
          className="app__filled_btn !px-4 !py-2 !text-base/6 !font-normal"
          onClick={_handleOnClickNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectList;
