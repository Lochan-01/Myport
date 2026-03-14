import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  Java,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  PizzaHub,
  EnHanz,
  Earvan,
  ResumeNest,
  IBM,
  vit,
  pes,
  mit,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full stack Developer",
    icon: web,
  },
  {
    title: "AI Developer",
    icon: mobile,
  },
  {
    title: "DSA Problem Solver",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Earvan",
    role: "Full Stack & AI Developer",
    icon: Earvan,
    iconBg: "#E6DEDD",
    date: "Jan 2026",
    points: [
    "Built an AI-based application to assist individuals with hearing impairments.",
    "Implemented adaptive noise cancellation and speech enhancement features.",
    "Integrated AirPods connectivity for personalized hearing profiles.",
    "Developed real-time audio processing for improved sound clarity.",
    "Achieved Top 3 position at the VIT Chennai Hackathon.",
  ],
  },
  {
    title: "En-HanZ - Dysgraphia Detection System",
    role: "Mobile App & AI Developer",
    icon: EnHanz,
    iconBg: "#383E56",
    date: "November 2025",
    points: [
  "Developed a Flutter application to detect and manage dysgraphia in children using handwriting analysis and IQ testing.",
  "Personally trained the machine learning model for dysgraphia detection using handwriting datasets and deep learning techniques.",
  "Integrated Firebase services including Authentication, Firestore database, and Storage for secure data management.",
  "Implemented an AI-powered handwriting analysis system using a FastAPI backend with Python.",
  "Built interactive learning features such as letter tracing, dot joining, and word copying practice games.",
  "Designed an AI chatbot (HandyBot) to guide users and provide support within the application.",
  ],
  },
  
  {
    title: "ResumeNest",
    role: "Full Stack Developer",
    icon: ResumeNest,
    iconBg: "#383E56",
    date: "2025",
    points: [
     "Developed an AI-powered resume builder that helps users create professional and ATS-friendly resumes.",
    "Implemented multiple customizable templates with real-time resume preview using React and Tailwind CSS.",
    "Built a secure backend with Node.js, Express, MongoDB, and JWT authentication for managing user accounts and resumes.",
    "Integrated Google Gemini AI to enhance resume content and improve professional wording.",
    "Enabled resume storage and PDF export functionality for easy download and sharing.",
    ],
  },
  {
    title: "Pizza-Hub (FoodieHub)",
    role: "Frontend Developer",
    icon: PizzaHub,
    iconBg: "#1d1818",
    date: "Jan 2024",
    points: [
     "Developed a responsive food ordering website for a fast-food or pizza delivery service using HTML5 and CSS3.",
    "Designed multiple pages including About, Cart, and Checkout to simulate a real online food ordering experience.",
    "Implemented a clean and user-friendly UI with responsive layouts that work across desktop, tablet, and mobile devices.",
    "Structured the project with organized assets and product images to enhance visual appeal and usability.",
    "Built the project as a frontend prototype that can later be extended with backend integration and payment gateway support."
  ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    role: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    role: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    role: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "GLYTCH'25 Hackathon",
    description:
      `GLYTCH'25 Hackathon – Top 3

Secured a Top 3 position in the Software Track at GLYTCH'25 held at VIT Chennai as part of team "Ctrl + Z Life". 
This project demonstrated strong teamwork, innovation, and problem-solving under competitive hackathon conditions.`,
    tags: [
      {
        name: "hackathon",
        color: "blue-text-gradient",
      },
      {
        name: "innovation",
        color: "green-text-gradient",
      },
      {
        name: "teamwork",
        color: "pink-text-gradient",
      },
    ],
    image: vit,
    sourceCodeLink: "https://github.com/Lochan-01/Earvan",
  },
  {
    name: "Horcrux 2.0 Hackathon",
    description:
      `Horcrux 2.0 Hackathon – Winner. Among the winners of the Horcrux 2.0 Hackathon organized by PES University. Collaborated with a team to develop an innovative solution, showcasing strong problem-solving, teamwork, and technical skills in a competitive environment.`,
    tags: [
      {
        name: "hackathon",
        color: "blue-text-gradient",
      },
      {
        name: "winner",
        color: "green-text-gradient",
      },
      {
        name: "teamwork",
        color: "pink-text-gradient",
      },
    ],
    image: pes,
    sourceCodeLink: "https://github.com/Lochan-01/Enhanz",
  },
  {
    name: "Hack Fusion 1.0 Hackathon",
    description:
      `Hack Fusion 1.0 Hackathon. Received a Certificate of Participation for Hack Fusion 1.0 organized by Maharaja Institute of Technology, Mysore via Unstop. Collaborated with my team to develop innovative ideas and solutions during the hackathon.`,
    tags: [
      {
        name: "hackathon",
        color: "blue-text-gradient",
      },
      {
        name: "participation",
        color: "green-text-gradient",
      },
      {
        name: "teamwork",
        color: "pink-text-gradient",
      },
    ],
    image: mit,
    sourceCodeLink: "https://github.com/Lochan-01/WoundKiller-AI",
  },

{
  name: "IBM SkillsBuild AI Internship",
  description:
    `Successfully completed the IBM SkillsBuild Summer Internship Program on Artificial Intelligence, hosted in collaboration with CSRBOX®. 
    The internship (July 15 – August 5, 2024) provided hands-on learning in AI concepts, tools, and real-world applications, 
.`,
  tags: [
    {
      name: "artificial-intelligence",
      color: "blue-text-gradient",
    },
    {
      name: "ibm-skillsbuild",
      color: "green-text-gradient",
    },
    {
      name: "internship",
      color: "pink-text-gradient",
    },
  ],
  image: IBM,
  sourceCodeLink: "https://skillsbuild.org",
},
];

export { services, technologies, experiences, testimonials, projects };
