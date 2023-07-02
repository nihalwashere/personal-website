import React from "react";
import IconGitHub from "./github";
import IconLinkedin from "./linkedin";
import IconMail from "./mail";
import IconExternal from "./external";
import IconMenu from "./menu";
import IconClose from "./close";

const Icon = (props) => {
  switch (props?.name) {
    case "GitHub":
      return <IconGitHub {...props} />;
    case "LinkedIn":
      return <IconLinkedin {...props} />;
    case "Mail":
      return <IconMail {...props} />;
    case "External":
      return <IconExternal {...props} />;
    case "Menu":
      return <IconMenu {...props} />;
    case "Close":
      return <IconClose {...props} />;
    default:
      return null;
  }
};

export default Icon;
