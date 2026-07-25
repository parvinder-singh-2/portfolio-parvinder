import {
  RiFilePaper2Line,
  RiShieldCheckLine,
  RiMoneyDollarCircleLine,
  RiCalendarEventLine,
  RiGroupLine,
} from "react-icons/ri";

import awardImage from "../assets/achivements.png";

export const patents = [
  {
    id: 1,
    year: "2024",
    title:
      "IoT based Smart Drain Cover Monitoring and Alert System for Early Flood Detection",
    status: "Published & Granted",
    icon: RiFilePaper2Line,
  },

  {
    id: 2,
    year: "2024",
    title:
      "Swarm IoT System for Urban Flood and Drainage Failure Detection",
    status: "Published & Granted",
    icon: RiFilePaper2Line,
  },

  {
    id: 3,
    year: "2025",
    title:
      "AI based Blockage Prediction System using Acoustic and Vibration Analysis",
    status: "Published & Granted",
    icon: RiFilePaper2Line,
  },

  {
    id: 4,
    year: "2025",
    title:
      "Low Power IoT Sensor Node for Real-time Environmental Monitoring",
    status: "Published & Granted",
    icon: RiFilePaper2Line,
  },
];

export const award = {
  title: "Jal Shakti Hackathon 2025",

  subtitle: "Bharat WIN",

  description:
    "Our Urban Flood Detection System was selected among India's top innovations and awarded a Proof of Concept grant for creating measurable real-world impact.",

  image: awardImage,

  stats: [
    {
      icon: RiMoneyDollarCircleLine,
      value: "₹1,00,000",
      label: "PoC Grant Awarded",
    },

    {
      icon: RiCalendarEventLine,
      value: "23 Mar 2026",
      label: "Award Ceremony",
    },

    {
      icon: RiGroupLine,
      value: "01 Jun 2026",
      label: "National Workshop Invitation",
    },
  ],
};