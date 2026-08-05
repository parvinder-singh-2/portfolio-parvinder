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
    "MessManager is a full-stack business management platform designed to digitize and automate the complete workflow of a mess and tiffin service. It centralizes customer records, meal tracking, billing, deliveries, and analytics into a single modern dashboard, reducing manual work while improving operational efficiency.",

  image: messManagerImg,

  github: "https://github.com/parvinder-singh-2/mess-manager-frontend",
  live: "https://mess-manager.vercel.app/",
  caseStudy: "/projects/mess-manager",

  // --------------------
  // Detailed Information
  // --------------------

  overview: {
    title: "Project Overview",
    content:
      "MessManager was developed to solve the everyday operational challenges faced by tiffin and mess businesses. Instead of maintaining customer records, meal balances, payments, and deliveries manually, the platform provides a centralized web application that automates the complete workflow while giving business owners real-time insights into their operations."
  },

  problemStatement:
    "Small and medium-sized mess businesses often rely on notebooks or spreadsheets to manage customers, meal balances, payments, and deliveries. This leads to calculation errors, delayed updates, inefficient tracking, and limited business insights.",

  solution:
    "MessManager replaces manual processes with a centralized management platform that automates meal accounting, customer management, payment tracking, delivery monitoring, and business analytics while maintaining an intuitive interface for administrators.",

  keyHighlights: [
    "Centralized customer management",
    "Automatic meal balance calculations",
    "Payment history and outstanding balance tracking",
    "Daily delivery management",
    "Interactive business analytics dashboard",
    "Secure JWT authentication system",
    "Responsive UI for desktop and mobile",
    "Containerized backend using Docker"
  ],

  features: [
    "Customer Management",
    "Meal Tracking",
    "Payment Management",
    "Delivery Management",
    "Analytics Dashboard",
    "Role Based Authentication",
  ],

  workflow: [
    "Register customer",
    "Assign meal plan",
    "Track daily meals",
    "Record customer payments",
    "Monitor pending deliveries",
    "View business analytics"
  ],

  architecture: {
    frontend: "React + Tailwind CSS",
    backend: "FastAPI",
    database: "PostgreSQL",
    authentication: "JWT Authentication",
    deployment: "Vercel + Docker + Railway/Supabase"
  },

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

  challenges: [
    "Designing a flexible database for different customer types.",
    "Implementing automatic meal balance calculations.",
    "Building scalable REST APIs with FastAPI.",
    "Managing authentication and protected routes.",
    "Creating reusable React components for faster development."
  ],

  learnings: [
    "Scalable backend architecture with FastAPI.",
    "Database schema design using PostgreSQL.",
    "REST API design and integration.",
    "Docker containerization and deployment.",
    "Building reusable React components and state management."
  ],

  futureScope: [
    "Online payment gateway integration",
    "Customer mobile application",
    "WhatsApp notification system",
    "Inventory management",
    "Subscription and recurring billing",
    "AI-powered sales and demand forecasting"
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
  ]
},

  {
  id: 2,
  slug: "drainx-drain-monitoring",

  title: "DrainX - Smart Drain Monitoring System",
  category: "IoT + AI Research Project",

  shortDescription:
    "Award-winning smart drainage monitoring system for early flood detection and predictive urban flood management.",

  description:
    "DrainX is an AI-powered IoT drainage monitoring system designed to continuously monitor underground drainage networks and identify blockages before they cause urban flooding. By combining multiple environmental sensors, edge computing, and machine learning, the system enables municipalities to shift from reactive maintenance to predictive infrastructure management.",

  image: drainMonitoringImg,

  github: "",
  live: "",
  caseStudy: "/projects/drainx",

  // --------------------
  // Detailed Information
  // --------------------

  overview: {
    title: "Project Overview",
    content:
      "DrainX is a research-driven smart drainage monitoring platform that utilizes distributed IoT sensor nodes to monitor underground drainage conditions in real time. The system captures vibration, acoustic, water level, and flow-related parameters, processes them using machine learning models, and predicts blockage levels before drainage failure occurs. The project was developed as a Proof of Concept under the Jal Shakti Hackathon and received national recognition for its innovation."
  },

  problemStatement:
    "Urban flooding is often caused by unnoticed drain blockages and delayed maintenance. Current inspection methods rely heavily on manual surveys, making them expensive, inefficient, and incapable of providing continuous monitoring or early warnings.",

  solution:
    "DrainX introduces a network of intelligent battery-powered sensor nodes installed inside drainage systems. These nodes continuously collect environmental data and use AI models to classify blockage levels, allowing authorities to identify critical drains and perform preventive maintenance before flooding occurs.",

  keyHighlights: [
    "₹1,00,000 Proof of Concept Grant Winner",
    "Selected under Jal Shakti Hackathon",
    "AI-powered blockage prediction",
    "IoT sensor fusion architecture",
    "Battery-optimized autonomous sensor nodes",
    "Real-time monitoring dashboard",
    "Scalable smart city infrastructure solution",
    "Designed for government and municipal deployment"
  ],

  features: [
    "IoT Sensor Network",
    "Real-Time Monitoring",
    "AI Based Blockage Detection",
    "Cloud Dashboard",
    "Battery Optimized Nodes",
    "Government Research Project",
  ],

  workflow: [
    "Deploy IoT sensor node inside drain",
    "Collect acoustic, vibration and environmental data",
    "Transmit sensor readings wirelessly",
    "Analyze blockage level using AI models",
    "Visualize drain health on monitoring dashboard",
    "Generate alerts for preventive maintenance"
  ],

  architecture: {
    frontend: "Web Monitoring Dashboard",
    backend: "Python Data Processing",
    edgeDevice: "ESP32",
    ai: "TensorFlow",
    communication: "Wi-Fi / MQTT"
  },

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

  challenges: [
    "Designing a waterproof and rugged sensor enclosure.",
    "Collecting reliable datasets from underground drains.",
    "Optimizing battery life for long-term deployment.",
    "Reducing false positives in AI blockage prediction.",
    "Synchronizing multiple sensor inputs for accurate classification."
  ],

  learnings: [
    "Practical IoT hardware development.",
    "Embedded systems programming using ESP32.",
    "Sensor fusion techniques for environmental monitoring.",
    "Machine learning model training using real-world datasets.",
    "Research methodology and prototype validation."
  ],

  futureScope: [
    "LoRaWAN-based long-range communication.",
    "TinyML deployment directly on ESP32.",
    "Integration with municipal smart city platforms.",
    "Predictive maintenance scheduling using AI.",
    "GIS mapping of drainage infrastructure.",
    "Large-scale deployment across urban drainage networks."
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
  category: "Personal Branding & Frontend Development",

  shortDescription:
    "A premium interactive portfolio showcasing projects, research, achievements, and technical expertise through modern UI and immersive user experience.",

  description:
    "A fully responsive portfolio platform designed to showcase my software engineering projects, AI research, and innovation journey. Built using modern frontend technologies, the application emphasizes smooth animations, reusable architecture, and an engaging user experience while maintaining excellent performance across all devices.",

  image: portfolioImg,

  github: "https://github.com/parvinder-singh-2/portfolio-parvinder",
  live: "https://portfolio-parvinder.vercel.app/",
  caseStudy: "/projects/portfolio",

  // --------------------
  // Detailed Information
  // --------------------

  overview: {
    title: "Project Overview",
    content:
      "This portfolio serves as my personal digital identity, bringing together software projects, research work, hackathon achievements, patents, and technical skills into a single interactive platform. Rather than being a static website, it was designed as a premium user experience that reflects my engineering mindset through clean architecture, reusable components, modern animations, and responsive design."
  },

  problemStatement:
    "Traditional developer portfolios often present information as static pages with minimal interaction, making it difficult to effectively showcase technical depth, research projects, and engineering capabilities while maintaining an engaging user experience.",

  solution:
    "The portfolio combines modern UI/UX principles with component-based architecture to create an immersive platform where visitors can explore projects, technical skills, achievements, and research through interactive animations, responsive layouts, and reusable design systems.",

  keyHighlights: [
    "Premium glassmorphism-inspired UI",
    "Fully responsive across desktop, tablet, and mobile",
    "Smooth animations using Framer Motion",
    "Reusable and scalable React component architecture",
    "Dynamic project data rendering",
    "Interactive project showcase",
    "Performance optimized with Vite",
    "Modern developer branding platform"
  ],

  features: [
    "Modern UI",
    "Responsive Design",
    "Reusable Components",
    "Smooth Animations",
    "Dark Theme",
    "Performance Optimized",
  ],

  workflow: [
    "Landing hero with interactive introduction",
    "Explore technical skills and technology stack",
    "Browse featured projects",
    "View detailed project information",
    "Discover achievements and research",
    "Download resume or connect through contact links"
  ],

  architecture: {
    frontend: "React + Vite",
    styling: "Tailwind CSS",
    animations: "Framer Motion",
    icons: "Lucide React + React Icons",
    deployment: "Vercel"
  },

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

  challenges: [
    "Creating a unique portfolio without relying on templates.",
    "Designing layouts that scale seamlessly across screen sizes.",
    "Balancing rich animations with high performance.",
    "Building reusable UI components for maintainability.",
    "Creating a visual identity that reflects engineering and innovation."
  ],

  learnings: [
    "Advanced component composition in React.",
    "Responsive UI development with Tailwind CSS.",
    "Animation design using Framer Motion.",
    "Building scalable frontend architecture.",
    "Performance optimization and code organization."
  ],

  futureScope: [
    "Interactive project case study pages.",
    "3D visualizations using Three.js.",
    "Integrated technical blog.",
    "Project filtering and search functionality.",
    "Dark and light theme switching.",
    "CMS-powered content management.",
    "Multilingual support."
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
    "SPIDERS (Swarm Platform for Intelligent Detection, Exploration & Reconnaissance Systems) is a next-generation autonomous swarm robotics research project focused on collaborative battlefield reconnaissance and hazardous terrain exploration. The platform consists of multiple intelligent quadruped robots capable of coordinating missions through swarm intelligence, distributed decision-making, autonomous navigation, and real-time data sharing. By combining robotics, artificial intelligence, embedded systems, computer vision, and mesh communication, SPIDERS aims to reduce human exposure in high-risk environments while improving situational awareness during reconnaissance operations.",

  image: spidersImg,

  github: "",
  live: "",
  caseStudy: "/projects/spiders",

  // --------------------
  // Detailed Information
  // --------------------

  overview: {
    title: "Project Overview",
    content:
      "SPIDERS is a defence-oriented swarm robotics research initiative exploring how multiple autonomous quadruped robots can collaborate to map unknown environments, coordinate exploration, share information, and assist reconnaissance missions. Rather than relying on a single robot, the system distributes intelligence across the swarm, enabling faster exploration, improved redundancy, and greater resilience in hazardous environments."
  },

  problemStatement:
    "Reconnaissance missions in hazardous environments often expose personnel to significant risks such as landmines, unstable terrain, and limited visibility. Conventional robotic systems typically operate independently, limiting area coverage, redundancy, and collaborative decision-making.",

  solution:
    "SPIDERS introduces a decentralized swarm of autonomous quadruped robots capable of coordinating exploration tasks, sharing environmental information through mesh communication, and assisting operators by generating real-time situational awareness while reducing direct human exposure to hazardous areas.",

  keyHighlights: [
    "Multi-robot swarm architecture",
    "Autonomous quadruped locomotion",
    "Distributed swarm intelligence",
    "Collaborative terrain exploration",
    "Mesh-based robot-to-robot communication",
    "Modular hardware and software architecture",
    "AI-assisted navigation and perception",
    "Designed for defence and disaster-response research"
  ],

  features: [
    "Autonomous Quadruped Navigation",
    "AI Swarm Intelligence",
    "Collaborative Terrain Exploration",
    "Dynamic Task Allocation",
    "12-DOF Walking Gait",
    "Terrain Adaptive Locomotion",
  ],

  workflow: [
    "Deploy multiple autonomous robots",
    "Generate decentralized exploration tasks",
    "Navigate unknown terrain autonomously",
    "Share mapping and navigation data through mesh communication",
    "Identify points of interest using onboard sensors",
    "Transmit mission intelligence to the command dashboard"
  ],

  architecture: {
    hardware: "12-DOF Quadruped Robot",
    controller: "ESP32",
    communication: "LoRa Mesh Network",
    software: "Python-based AI Modules",
    navigation: "GPS + Sensor Fusion"
  },

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

  challenges: [
    "Developing stable 12-DOF quadruped locomotion.",
    "Designing decentralized swarm coordination algorithms.",
    "Maintaining reliable long-range mesh communication.",
    "Balancing onboard computation with power efficiency.",
    "Integrating navigation, sensing, and AI into a lightweight robotic platform."
  ],

  learnings: [
    "Swarm robotics principles and distributed systems.",
    "Embedded systems development using ESP32.",
    "Robot locomotion and gait generation.",
    "Wireless mesh communication using LoRa.",
    "Systems engineering for multi-robot platforms.",
    "AI integration for autonomous robotics."
  ],

  futureScope: [
    "Computer vision-based object detection.",
    "Collaborative SLAM for swarm mapping.",
    "Edge AI deployment using NVIDIA Jetson.",
    "Autonomous path planning and obstacle avoidance.",
    "Drone-assisted swarm coordination.",
    "Digital twin simulation environment.",
    "Human-swarm mission planning dashboard.",
    "Disaster response and search-and-rescue applications."
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