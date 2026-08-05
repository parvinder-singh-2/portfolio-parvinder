import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaBrain,
} from "react-icons/fa";

import {
  FaProjectDiagram,
  FaPuzzlePiece,
  FaShieldAlt,
  FaCodeBranch,
  FaCubes,
} from "react-icons/fa";

import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiFramer,
  SiVite,

  SiPython,
  SiFastapi,
  SiJsonwebtokens,
  SiPydantic,

  SiPostgresql,
  SiSqlite,
  SiSupabase,
  SiSqlalchemy,

  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiRender,

} from "react-icons/si";

export const techCategories = [
  {
    id: 1,
    title: "Frontend",
    icon: FaLaptopCode,
    description: "Modern responsive interfaces and interactive user experiences.",

    technologies: [
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "HTML5",
        icon: SiHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: SiCss,
        color: "#1572B6",
      },
      {
        name: "Tailwind",
        icon: SiTailwindcss,
        color: "#38BDF8",
      },
      {
        name: "Framer",
        icon: SiFramer,
        color: "#ffffff",
      },
      {
        name: "Vite",
        icon: SiVite,
        color: "#646CFF",
      },
    ],
  },

  {
    id: 2,
    title: "Backend",
    icon: FaServer,
    description: "Building secure, scalable APIs and backend systems.",

    technologies: [
      {
        name: "Python",
        icon: SiPython,
        color: "#3776AB",
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
        color: "#009688",
      },
      {
        name: "REST API",
        icon: FaServer,
        color: "#A855F7",
      },
      {
        name: "JWT",
        icon: SiJsonwebtokens,
        color: "#ffffff",
      },
      {
        name: "Pydantic",
        icon: SiPydantic,
        color: "#E92063",
      },
    ],
  },

  {
    id: 3,
    title: "Database",
    icon: FaDatabase,
    description: "Reliable data storage and efficient database management.",

    technologies: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791",
      },
      {
        name: "SQLAlchemy",
        icon: SiSqlalchemy,
        color: "#D71F00",
      },
      {
        name: "SQLite",
        icon: SiSqlite,
        color: "#003B57",
      },
      {
        name: "Supabase",
        icon: SiSupabase,
        color: "#3ECF8E",
      },
    ],
  },

  {
    id: 4,
    title: "Tools",
    icon: FaTools,
    description: "Development, deployment and collaboration workflow.",

    technologies: [
      {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "#ffffff",
      },
      {
        name: "Docker",
        icon: SiDocker,
        color: "#2496ED",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        color: "#ffffff",
      },
      {
        name: "Render",
        icon: SiRender,
        color: "#46E3B7",
      },
    ],
  },

  {
  id: 5,
  title: "Core Skills",
  icon: FaBrain,
  description:
    "Engineering principles and software development fundamentals.",

  technologies: [
    {
      name: "DSA",
      icon: FaProjectDiagram,
      color: "#3B82F6",
    },
    {
      name: "OOP",
      icon: FaCubes,
      color: "#8B5CF6",
    },
    {
      name: "System Design",
      icon: FaCodeBranch,
      color: "#F59E0B",
    },
    {
      name: "Problem Solving",
      icon: FaPuzzlePiece,
      color: "#10B981",
    },
    {
      name: "REST Architecture",
      icon: FaProjectDiagram,
      color: "#EF4444",
    },
    {
      name: "Authentication",
      icon: FaShieldAlt,
      color: "#06B6D4",
    },
  ],
},
];