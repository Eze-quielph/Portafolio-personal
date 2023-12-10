"use client";
import React from "react";
import dynamic from "next/dynamic";

interface AnimatedNumbersProps {
  includeComma: boolean;
  animateToNumber: number;
  locale: string;
  className: string;
  configs: (_: any, index: any) => {
    mass: number;
    friction: number;
    tensions: number;
  };
}

const AnimatedNumbers = dynamic<AnimatedNumbersProps>(
  () => {
    return import("react-animated-numbers").then((module):any => module.default);
  },
  { ssr: false }
);

const achievementsList: any[] = [
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Clients",
    value: "15",
  },
  {
    metric: "Certified",
    value: "3",
  },
  {
    metric: "Months",
    value: "12",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 mb-6 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_:any, index:any) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
