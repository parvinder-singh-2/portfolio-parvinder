import {
  FaReact,
  FaPython,
  FaDatabase,
  FaTools,
  FaCode,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiFastapi,
  SiPostgresql,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiGithubactions,
  SiVercel,
  SiRender,
  SiSqlalchemy,
  SiPostman,
} from "react-icons/si";

import {
  MdOutlineDesktopWindows,
  MdOutlineMenuBook,
} from "react-icons/md";

import {
  TbBinaryTree2,
  TbTopologyStar3,
  TbCloudComputing,
  TbBrain,
} from "react-icons/tb";

export const techCategories = [
  {
    id: 1,
    title: "Frontend",
    icon: MdOutlineDesktopWindows,
    skills: [
      "React",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },

  {
    id: 2,
    title: "Backend",
    icon: FaPython,
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "Pydantic",
      "JWT Authentication",
    ],
  },

  {
    id: 3,
    title: "Database",
    icon: FaDatabase,
    skills: [
      "PostgreSQL",
      "SQL",
      "SQLAlchemy",
      "Database Design",
      "Migrations",
    ],
  },

  {
    id: 4,
    title: "Tools & DevOps",
    icon: FaTools,
    skills: [
      "Git & GitHub",
      "Docker",
      "GitHub Actions",
      "Vercel",
      "Render",
      "Postman",
    ],
  },

  {
    id: 5,
    title: "Others",
    icon: FaCode,
    skills: [
      "Problem Solving",
      "Data Structures & Algorithms",
      "System Design",
      "OOP Concepts",
    ],
  },
];

export const learningStack = {
  title: "Currently Learning",

  icon: MdOutlineMenuBook,

  topics: [
    {
      id: 1,
      icon: FaPython,
      title: "Advanced Python",
      description: "Deepening core concepts",
    },

    {
      id: 2,
      icon: TbBinaryTree2,
      title: "Data Structures & Algorithms",
      description: "Preparing for SDE interviews",
    },

    {
      id: 3,
      icon: TbTopologyStar3,
      title: "System Design",
      description: "Scalable architecture patterns",
    },

    {
      id: 4,
      icon: TbCloudComputing,
      title: "Cloud Technologies",
      description: "AWS fundamentals & deployment",
    },

    {
      id: 5,
      icon: TbBrain,
      title: "Machine Learning Foundations",
      description: "Exploring ML basics",
    },
  ],
};