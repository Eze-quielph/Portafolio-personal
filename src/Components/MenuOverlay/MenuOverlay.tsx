import React from "react";
import { NavLink, Props } from "../NavLink/NavLink";

const MenuOverlay = ({Links}: any) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {Links.map((link: Props, index: any) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title}></NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
