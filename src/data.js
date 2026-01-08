export const profile = {
  name: "Firas Al Haddad",
  title: "Software Engineering Student at Concordia University",
  tagline:
    "Eager to learn and excited to explore new concepts. ",
  location: "Montreal, QC",
  email: "Firas.haddad.h@gmail.com",
  links: {
    github: "https://github.com/Lemonada10",
    linkedin: "https://www.linkedin.com/in/firas-al-haddad-207a26280/",
    website: "https://lemon.dev"
  }
};


export const projects = [
  {
    name: "Peer Review Web Application",
    oneLiner:
      "A full-stack platform for student peer evaluation with team management and role-based access.",
    stack: ["React", "Java", "Spring Boot", "REST APIs"],
    role: "Full-stack project",
    highlights: [
      "Built a full-stack web application for student peer evaluation",
      "Implemented authentication and role-based access for students and teachers",
      "Designed a team management system allowing teachers to assign students to teams",
      "Developed RESTful APIs for data persistence and frontend–backend communication"
    ],
    links: {
      caseStudy: "#projects",
      code: "https://github.com/Anthony4044/MakeSoft-SOEN341_Project_F24"
    }
  },
  {
    name: "Mindfulness & Focus Tracker AI",
    oneLiner:
      "A real-time attention monitoring system using webcam-based gaze and head-pose tracking.",
    stack: ["React", "TensorFlow.js", "WebGL"],
    role: "School project",
    highlights: [
      "Built a real-time attention detector tracking gaze, blink, and head pose",
      "Implemented AI feedback cues triggered by attention-drop thresholds",
      "Designed a modular detection pipeline with adaptive calibration",
      "Optimized performance using WebGL-accelerated models for smooth tracking"
    ],
    links: {
      caseStudy: "#projects",
      code: "https://github.com/Anthony4044/Focus-Tracker-AI"
    }
  }
];


export const experience = [
  {
    company: "Pratt & Whitney Canada",
    role: "Data Analyst Intern",
    dates: "2025",
    location: "Longueuil, QC",
    bullets: [
      "Refactored legacy Databricks pipelines into a single modular PySpark codebase",
      "Created reusable functions and automated test cases for cleaner workflows",
      "Unified 20+ data sources into analytics-ready DataFrames for Power BI",
      "Redesigned Power BI dashboards to provide clear week-over-week performance insights"
    ]
  },
  {
    company: "Fonex Data Systems",
    role: "Software Engineering Intern",
    dates: "2025",
    location: "Montreal, QC",
    bullets: [
      "Developed a Python BLE backend using bleak and asyncio for optical transceivers",
      "Implemented a GATT communication layer for SFP/QSFP EEPROM read/write operations",
      "Designed a connection manager coordinating BLE backend with a Tkinter GUI using threads"
    ]
  }
];


export const skills = {
  "Programming Languages": ["Java", "JavaScript", "Python", "C++", "SQL"],
  "Frameworks & Libraries": [
    "React",
    "Node.js",
    "Spring Boot",
    "PySpark",
    "Pandas",
    "TensorFlow",
    "Tailwind CSS"
  ],
  Tools: [
    "GitHub",
    "Databricks",
    "Power BI",
    "Jira",
    "Azure DevOps",
    "SAP",
    "VS Code"
  ],
  Concepts: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Databases",
    "System Hardware",
    "REST APIs",
    "Agile Development"
  ],
  Languages: ["English", "French"]
};

export const education = [
  {
    degree: "B.Eng. Software Engineering (Co-op)",
    institution: "Concordia University",
    years: "2023 – 2027",
    gpa: "3.35",
    location: "Montreal, QC"
  },
  {
    degree: "DEC in Pure and Applied Natural Sciences",
    institution: "Vanier College",
    years: "2020 – 2023",
    location: "Montreal, QC"
  }
];


