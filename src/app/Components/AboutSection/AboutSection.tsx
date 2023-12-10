"use client";
import React, { useTransition, useState, MouseEventHandler } from "react";
import Image from "next/image";
import TabButton from "../TabButton/TabButton";

const TAB_DATA = [
  {
    title: "Skill",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>NodeJs</li>
        <li>NestJs</li>
        <li>Express</li>
        <li>Sequelize</li>
        <li>Postgres</li>
        <li>Mysql</li>
        <li>React</li>
        <li>NextJs</li>
        <li>Typescript</li>
        <li>Tailwind</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <span>FullStack Web Developer.</span> Henry Bootcamp 2023
        </li>
        <li>
          <span>System engineering.</span> Buenos Aires&apos; University. 2023-2031
        </li>
        <li>
          <span>High school economic sciences</span> Secondary 2015-2022
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <span>FullStack Web Developer.</span> Freelance 2022 - 2023 | 8 Months
        </li>
        <li>
          <span>Backend Developer</span> PrismaDev 2023 | 4 Months
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string): any => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mt-4 mb-6"  id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="about-image-desktop"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me </h2>
          <p className="text-base md:text-lg">
            I&apos;m a FullStack Developer with 1 year in TypeScript for backend
            development. Focused on robust, scalable solutions, knowledgeable in
            software architecture, and cloud (AWS). Collaborated on team
            projects, honing communication and teamwork. Engineering student,
            always ready for new challenges. Passionate about learning and
            staying updated on the latest technologies.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
