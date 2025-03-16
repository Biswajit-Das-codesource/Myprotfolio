import React from "react";
import Intro from "./Intro";
import ProjectsSection from "./Projects";
import UpcomingProjects from "./UpcomingProjects";
import { useSelector } from "react-redux";

function All() {
  const theme = useSelector((store) => store.app.theme);
  return (
    <div>
      <div className={`${theme ? "bg-zinc-950" : "bg-white"} min-h-screen`}>
        <div className="h-full flex  flex-col items-center">
          <Intro />
          <ProjectsSection />
          <UpcomingProjects />
        </div>
      </div>
    </div>
  );
}

export default All;
