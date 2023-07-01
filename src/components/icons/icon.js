import React from "react";
import IconGitHub from "./github";
import IconLinkedin from "./linkedin";
import IconMail from "./mail";

const Icon = (props) => {
  switch (props?.name) {
    case "GitHub":
      return <IconGitHub {...props} />;
    case "LinkedIn":
      return <IconLinkedin {...props} />;
    case "Mail":
      return <IconMail {...props} />;
    default:
      return null;
  }
};

export default Icon;
