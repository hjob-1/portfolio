import html from "../assets/svg/skills/html.svg";

import css from "../assets/svg/skills/css.svg";

import javascript from "../assets/svg/skills/javascript.svg";
import nextJS from "../assets/svg/skills/nextJS.svg";

import react from "../assets/svg/skills/react.svg";

import typescript from "../assets/svg/skills/typescript.svg";

import mongoDB from "../assets/svg/skills/mongoDB.svg";
import mysql from "../assets/svg/skills/mysql.svg";

import tailwind from "../assets/svg/skills/tailwind.svg";

import firebase from "../assets/svg/skills/firebase.svg";

import git from "../assets/svg/skills/git.svg";

import materialui from "../assets/svg/skills/materialui.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;

    case "css":
      return css;

    case "javascript":
      return javascript;
    case "next js":
      return nextJS;

    case "react":
      return react;

    case "typescript":
      return typescript;

    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;

    case "tailwind":
      return tailwind;

    case "firebase":
      return firebase;

    case "git":
      return git;
    case "materialui":
      return materialui;
    default:
      break;
  }
};
