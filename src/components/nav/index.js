"use client";

import React from "react";
import { NavList } from "../../utils/config";
import Icon from "../icons/icon";

const Navs = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const handleOpenMenu = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <div className="hidden h-16 md:flex justify-between items-center bg-menu px-24">
        <a href="/">
          <div className="text-2xl text-primary font-semibold">N</div>
        </a>

        <div>
          {NavList.map((nav) => (
            <a
              key={nav?.id}
              className="text-sm mx-4 hover:text-primary cursor-pointer"
              rel="noopener noreferer"
              href={nav?.link}
            >
              <span className="text-primary mr-1">0{nav?.id}.</span>{" "}
              {nav?.title}
            </a>
          ))}

          {/* <a className="big-button resume-link">Resume</a> */}
        </div>
      </div>

      <div className="flex justify-between items-center h-16 md:hidden bg-menu px-4">
        <a href="/">
          <div className="text-2xl text-primary font-semibold">N</div>
        </a>

        <div onClick={handleOpenMenu}>
          <Icon name="Menu" width={24} height={24} className="text-primary" />
        </div>
      </div>

      {showMenu && (
        <div className="block md:hidden min-h-screen w-[220px] fixed top-0 bottom-0 right-0 p-12 bg-menu z-10">
          <div onClick={handleCloseMenu} className="absolute top-12 right-8">
            <Icon
              name="Close"
              width={24}
              height={24}
              className="text-primary"
            />
          </div>

          <div className="flex flex-col justify-center items-center h-full">
            {NavList.map((nav) => (
              <a
                key={nav?.id}
                className="text-sm my-4 hover:text-primary cursor-pointer text-center"
                rel="noopener noreferer"
                href={nav?.link}
                onClick={handleCloseMenu}
              >
                <div className="text-primary mb-1">0{nav?.id}.</div>
                <div>{nav?.title}</div>
              </a>
            ))}

            {/* <a className="big-button resume-link mt-4">Resume</a> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navs;
