import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaLinux,
} from "react-icons/fa";

import {
  SiJavascript,
  SiVite,
  SiMysql,
  SiStrapi,
  SiFigma,
  SiTrello,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "#1572B6",
      },
      {
        name: "Vite",
        icon: SiVite,
        color: "#646CFF",
      },
      {
        name: "Responsive",
        icon: FaReact,
        color: "#38BDF8",
      },
    ],
  },

  {
    category: "Backend",
    items: [
      {
        name: "PHP",
        icon: FaPhp,
        color: "#777BB4",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#339933",
      },
      {
        name: "Strapi",
        icon: SiStrapi,
        color: "#4945FF",
      },
      {
        name: "REST API",
        icon: FaNodeJs,
        color: "#10B981",
      },
      {
        name: "Authentication",
        icon: FaNodeJs,
        color: "#F59E0B",
      },
    ],
  },

  {
    category: "Tools",
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "#FFFFFF",
      },
      {
        name: "VS Code",
        icon: VscVscode,
        color: "#007ACC",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "#F24E1E",
      },
      {
        name: "Trello",
        icon: SiTrello,
        color: "#0052CC",
      },
      {
        name: "Linux",
        icon: FaLinux,
        color: "#FCC624",
      },
    ],
  },
];