import {
  FiUser,
  FiMap,
  FiSend,
} from "react-icons/fi";
import {
  FaRocket,
  FaBookOpen,
  FaLightbulb,
  FaMapMarkerAlt,
  FaGraduationCap,
} from "react-icons/fa";

import { MdWork } from "react-icons/md";
import { GiLightBulb } from "react-icons/gi";
import { BiMapPin } from "react-icons/bi";
import { LuBriefcaseBusiness } from "react-icons/lu";

export const currentFocus = [
  {
    id: 1,
    icon: FaRocket,
    title: "Currently Building",
    subtitle: "Mess Manager SaaS",
  },
  {
    id: 2,
    icon: FaBookOpen,
    title: "Currently Learning",
    subtitle: "System Design • Docker • AWS",
  },
  {
    id: 3,
    icon: GiLightBulb,
    title: "Research Focus",
    subtitle: "Smart Urban Flood Detection",
  },
];

export const profileStats = [
  {
    id: 1,
    icon: BiMapPin,
    title: "Location",
    value: "Indore, India",
  },
  {
    id: 2,
    icon: LuBriefcaseBusiness,
    title: "Experience",
    value: "3.5+ Years",
  },
  {
    id: 3,
    icon: FaGraduationCap,
    title: "Education",
    value: "B.Tech ECE",
  },
];

export const aboutHighlights = [
  {
    id: 1,
    title: "Who I Am",
    icon: FiUser,
    description:
      "I'm a Full Stack Developer passionate about building scalable applications with React, FastAPI and PostgreSQL. I enjoy transforming complex ideas into intuitive digital products that create real-world impact.",
  },
  {
    id: 2,
    title: "My Journey",
    icon: FiMap,
    description:
      "My career began in customer support, where I developed strong communication and problem-solving skills. Today, I combine software engineering with research, focusing on building innovative solutions that solve practical challenges.",
  },
  {
    id: 3,
    title: "Beyond Code",
    icon: FiSend,
    description:
      "Alongside web development, I actively work on research and innovation. My published patents and award-winning IoT projects reflect my interest in combining technology, engineering and real-world problem solving.",
  },
];