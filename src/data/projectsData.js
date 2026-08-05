// src/data/projectsData.js

import {
  RiLayoutGridLine,
  RiDatabase2Line,
  RiShieldCheckLine,
  RiCalendarScheduleLine,
  RiToolsLine,
  RiRouteLine,
  RiRadarLine,
  RiWalkLine,
  RiRobot2Line,
  RiMapPin2Line,
  RiCpuLine,
  RiCameraLensLine,
  RiShareForwardLine,
} from "react-icons/ri";

import { TbAntenna, TbApi, TbBrain, TbBrandDocker } from "react-icons/tb";
import { FaReact, FaPython, FaGithub } from "react-icons/fa";
import {
  SiFastapi,
  SiPostgresql,
  SiTailwindcss,
  SiTensorflow,
  SiEspressif,
  SiArduino,
  SiVite,
} from "react-icons/si";

import messManagerImg from "../assets/projects/messmanager.png";
import drainMonitoringImg from "../assets/projects/DrainX.png";
import portfolioImg from "../assets/projects/portfolio.png";
import spidersImg from "../assets/projects/spiders.png";

export const projects = [
  {
    id: 1,
    slug: "mess-manager",

    title: "MessManager",
    category: "Full Stack Web Application",

    shortDescription:
      "A complete mess and tiffin management platform built for daily business operations.",

    description:
      "MessManager streamlines customer management, meal tracking, payments, delivery operations, and business analytics into one centralized dashboard. Built with a scalable React + FastAPI architecture and PostgreSQL database.",

    image: messManagerImg,

    github: "aaaaaaaaaa",
    live: "aaaaaaaaaaaaaaa",
    caseStudy: "aaaaaaaaaaa",

    features: [
      "Customer Management",
      "Meal Tracking",
      "Payment Management",
      "Delivery Management",
      "Analytics Dashboard",
      "Role Based Authentication",
    ],

    techStack: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "Docker",
        icon: TbBrandDocker,
      },
    ],

    stats: [
      {
        label: "Screens",
        value: "8+",
        icon: RiLayoutGridLine,
      },
      {
        label: "API Endpoints",
        value: "15+",
        icon: TbApi,
      },
      {
        label: "Database Tables",
        value: "5",
        icon: RiDatabase2Line,
      },
      {
        label: "Authentication",
        value: "JWT",
        icon: RiShieldCheckLine,
      },
      {
        label: "Containerized",
        value: "Docker",
        icon: TbBrandDocker,
      },
      {
        label: "Development",
        value: "2 Months",
        icon: RiCalendarScheduleLine,
      },
    ],
  },

  {
    id: 2,
    slug: "jal-shakti-drain-monitoring",

    title: "Jal Shakti Drain Monitoring System",
    category: "IoT + AI Research Project",

    shortDescription:
      "Award-winning smart drainage monitoring system for early flood detection.",

    description:
      "A smart IoT-enabled drainage monitoring solution that combines sensor fusion, machine learning, and edge computing to detect drain blockages and predict urban flooding before failure occurs.",

    image: drainMonitoringImg,

    github: "aaaaaaa",
    live: "aaaaaaaaaa",
    caseStudy: "aaaaaaaaa",

    features: [
      "IoT Sensor Network",
      "Real-Time Monitoring",
      "AI Based Blockage Detection",
      "Cloud Dashboard",
      "Battery Optimized Nodes",
      "Government Research Project",
    ],

    techStack: [
      {
        name: "Python",
        icon: FaPython,
      },
      {
        name: "TensorFlow",
        icon: SiTensorflow,
      },
      {
        name: "ESP32",
        icon: SiEspressif,
      },
      {
        name: "Arduino",
        icon: SiArduino,
      },
    ],

    stats: [
      {
        label: "Sensors",
        value: "4+",
        icon: RiLayoutGridLine,
      },
      {
        label: "Prototype",
        value: "PoC",
        icon: RiDatabase2Line,
      },
      {
        label: "Research",
        value: "AI + IoT",
        icon: RiShieldCheckLine,
      },
      {
        label: "Award",
        value: "₹1L",
        icon: RiCalendarScheduleLine,
      },
      {
        label: "Published",
        value: "National",
        icon: TbApi,
      },
      {
        label: "Status",
        value: "Completed",
        icon: RiLayoutGridLine,
      },
    ],
  },

  {
    id: 3,
    slug: "developer-portfolio",

    title: "Developer Portfolio",
    category: "Frontend Portfolio",

    shortDescription:
      "A premium interactive portfolio showcasing projects, experience, and achievements.",

    description:
      "Designed with modern UI principles, smooth animations, reusable React components, and responsive layouts to create an engaging developer portfolio experience.",

    image: portfolioImg,

    github: "",
    live: "",
    caseStudy: "",

    features: [
      "Modern UI",
      "Responsive Design",
      "Reusable Components",
      "Smooth Animations",
      "Dark Theme",
      "Performance Optimized",
    ],

    techStack: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "Vite",
        icon: SiVite,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],

    stats: [
      {
        label: "Sections",
        value: "6+",
        icon: RiLayoutGridLine,
      },
      {
        label: "Components",
        value: "25+",
        icon: TbApi,
      },
      {
        label: "Responsive",
        value: "100%",
        icon: RiShieldCheckLine,
      },
      {
        label: "Animations",
        value: "Framer",
        icon: RiCalendarScheduleLine,
      },
      {
        label: "Theme",
        value: "Dark",
        icon: RiDatabase2Line,
      },
      {
        label: "Performance",
        value: "Optimized",
        icon: RiLayoutGridLine,
      },
    ],
  },

  {
  id: 4,
  slug: "spiders",

  title: "SPIDERS",
  category: "AI Swarm Robotics & Defence Technology",

  shortDescription:
    "An AI-powered autonomous swarm of quadruped robots designed for battlefield reconnaissance, terrain exploration, and intelligent mine detection.",

  description:
    "SPIDERS (Swarm Platform for Intelligent Detection, Exploration & Reconnaissance Systems) is an advanced defence research project currently under development. The platform consists of multiple lightweight autonomous quadruped robots capable of navigating challenging terrains while collaboratively exploring unknown environments. Through AI-driven swarm intelligence, each robot dynamically shares explored regions, distributes search tasks, detects potential threats, and transmits real-time battlefield intelligence to a centralized command system. The project integrates robotics, computer vision, embedded systems, machine learning, mesh communication, and modern web technologies to reduce human exposure in hazardous pre-war and post-war environments.",

  image: spidersImg,

  github: "aaaaaaaaaa",
  live: "aaaaaaaaaaaaaaa",
  caseStudy: "aaaaaaaaaaa",

  features: [
    "Autonomous Quadruped Navigation",
    "AI Swarm Intelligence",
    "Collaborative Terrain Exploration",
    "Dynamic Task Allocation",
    "12-DOF Walking Gait",
    "Terrain Adaptive Locomotion",
  ],

  techStack: [
    {
      name: "Python",
      icon: FaPython,
    },
    {
      name: "ESP32",
      icon: SiEspressif,
    },
    {
      name: "LoRa",
      icon: TbAntenna,
    },
    {
      name: "Embedded Systems",
      icon: RiCpuLine,
    },
    {
      name: "GPS Navigation",
      icon: RiMapPin2Line,
    }
  ],

  stats: [
    {
      label: "Robots",
      value: "4",
      icon: RiRobot2Line,
    },
    {
      label: "Degrees of Freedom",
      value: "12 DOF",
      icon: RiWalkLine,
    },
    {
      label: "Communication",
      value: "LoRa Mesh",
      icon: RiRadarLine,
    },
    {
      label: "Navigation",
      value: "Autonomous",
      icon: RiRouteLine,
    },
    {
      label: "Mission",
      value: "Reconnaissance",
      icon: RiShieldCheckLine,
    },
    {
      label: "Status",
      value: "In Development",
      icon: RiToolsLine,
    },
  ],
},
];