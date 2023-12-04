"use client";
import React, { useState } from "react";
import { ProjectCard, PropsCard } from "../ProjectCard/ProjectCard";
import ProjectTag from "../ProjectTag/ProjectTag";

const projectsData: PropsCard[] = [
  {
    id: 1,
    title: "Project 1",
    description: "This is a description of project 1",
    imgUrl: "images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "",
    liveUrl: "",
  },
  {
    id: 2,
    title: "Project 1",
    description: "This is a description of project 1",
    imgUrl: "images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "",
    liveUrl: "",
  },
  {
    id: 3,
    title: "Project 1",
    description: "This is a description of project 1",
    imgUrl: "images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "",
    liveUrl: "",
  },
  {
    id: 4,
    title: "Project 1",
    description: "This is a description of project 1",
    imgUrl: "images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "",
    liveUrl: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState<string>("All");

  const handleTagChange = (newTag: string): any => {
    setTag(newTag);
  };

  const filteredProjectsTag = projectsData.filter((project) =>
    project.tag?.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="section">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects 
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2  py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjectsTag.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            gitUrl={project.gitUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
