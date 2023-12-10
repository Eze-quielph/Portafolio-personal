"use client";
import React, { useState, useRef } from "react";
import { ProjectCard, PropsCard } from "../ProjectCard/ProjectCard";
import ProjectTag from "../ProjectTag/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData: PropsCard[] = [
  {
    id: 1,
    title: "Spootchat | Fullstack | Team Developer",
    description: "Copy of Spotify with integrated chat for fans. Technologies: Express, React, Postgres and Sequelize",
    imgUrl: "images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Eze-quielph/SpootChat_Frontend",
    liveUrl: "https://spoot-chat-frontend-ljhqdpj5h-eze-quielph.vercel.app/",
  },
  {
    id: 2,
    title: "Evento X | Fullstack | Team Developer",
    description: "Marketplace for the sale of tickets to your event, Technologies: NestJs, NextJs, Sequelize and Postgres",
    imgUrl: "images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Eze-quielph/SpootChat_Frontend",
    liveUrl: "https://eventox-client-dun.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef(null);
  let isInView = useInView(ref, { once: true });

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
    <section id="projects" className="px-16 mb-6">
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
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
  />*/}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        {filteredProjectsTag.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              gitUrl={project.gitUrl}
              liveUrl={project.liveUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
