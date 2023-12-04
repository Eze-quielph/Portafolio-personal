import React, { MouseEventHandler } from "react";

const TabButton = ({
  active,
  selectTab,
  children,
}: {
  active: boolean;
  selectTab: (id: any) => MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}) => {
  const buttonClasses = active
    ? "text-white border-b border-purple-500"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab} className={buttonClasses}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
