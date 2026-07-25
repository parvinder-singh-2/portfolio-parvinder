import {
  Headphones,
  ShieldCheck,
  BadgeCheck,
  Clock3,
  TrendingUp,
  Users,
  Star,
} from "lucide-react";

export const experienceData = [
  {
    id: 1,
    period: "2025 - Present",
    duration: "May 2025 - Present",

    title: "Customer Interaction Specialist",
    company: "TaskUs",
    icon: Headphones,

    description:
      "Handling customer support for a global food delivery platform, resolving issues and ensuring excellent customer experience.",

    points: [
      "Resolved complex customer issues",
      "Maintained high customer satisfaction",
      "Consistently met performance targets",
      "Strong communication and problem-solving",
    ],
  },

  {
    id: 2,
    period: "2023 - 2025",
    duration: "Nov 2023 - Jun 2025",

    title: "Content Moderator",
    company: "Teleperformance",
    icon: ShieldCheck,

    description:
      "Reviewed and moderated user-generated content to ensure compliance with community guidelines and platform policies.",

    points: [
      "Ensured safe and trusted user experience",
      "Analyzed policy violations",
      "Strong attention to detail",
      "Worked in a fast-paced environment",
    ],
  },

  {
    id: 3,
    period: "2021 - 2023",
    duration: "Nov 2021 - Apr 2023",

    title: "KYC Expert",
    company: "Teleperformance",
    icon: BadgeCheck,

    description:
      "Verified customer identities and documentation to prevent fraud and ensure regulatory compliance.",

    points: [
      "Reviewed KYC documents",
      "Prevented fraudulent activities",
      "Maintained quality standards",
      "Developed analytical skills",
    ],
  },
];

export const experienceStats = [
  {
    value: "3.5+",
    label: "Years of Experience",
    icon: Clock3,
  },
  {
    value: "3",
    label: "Roles",
    icon: TrendingUp,
  },
  {
    value: "Global",
    label: "Work Environment",
    icon: Users,
  },
  {
    value: "Consistent",
    label: "Performance",
    icon: Star,
  },
];