import React, { MouseEventHandler } from "react";

interface PropsTag {
  name: string;
  onClick: (newTag: any) => any;
  isSelected: boolean;
}

const ProjectTag = ({ name, onClick, isSelected }: PropsTag) => {
  const buttonStyle = isSelected
    ? "text-white bg-purple-500 "
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyle} rounded-full border-2 px-8 py-2 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
