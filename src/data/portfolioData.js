import nourishloopImg from '../assets/nourishloop.png';
import cybernautixImg from '../assets/cybernautix.jpg';
import tetrinoxImg from '../assets/tetrinox.jpg';

export const PORTFOLIO_DATA = {
  name: "HARIPRASATH G",
  role: "Software Developer",
  
  about: {
    description: "I am Hariprasath G, a final-year Computer Science and Business Systems student at Sri Sairam Engineering College. I am interested in software development, programming, problem solving and building practical web applications.",
    currentFocus: "Strengthening Java and software development fundamentals while building responsive web experiences with modern frontend technologies.",
    location: "Chennai, India"
  },

  skills: [
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Firebase"
  ],

  projects: [
    {
      id: "01",
      title: "NourishLoop — Food Rescue Platform",
      category: "Web",
      description: "A full-stack platform connecting surplus food donors with nearby NGOs to streamline donation claims and pickups, reduce food waste, and support local communities.",
      image: nourishloopImg,
      technologies: ["React", "Node.js", "MongoDB Atlas", "Firebase", "Socket.IO", "MapLibre GL JS"],
      githubUrl: "https://github.com/hariprasathgopinathan/nourishloop",
      liveUrl: "https://nourishloop.web.app/"
    }
  ],

  achievements: [
    {
      id: "04",
      title: "First Prize – CYBERNAUTIX 2K26",
      category: "Awards",
      date: "2026",
      result: "Prize Winner",
      organization: "RMK Engineering College",
      description: "Secured First Prize for presenting FarmSure, contributing to solution structuring, user flow, workflow design, and technical presentation. Worked collaboratively to transform the concept into a structured and practical solution for the agricultural domain.",
      image: cybernautixImg,
      gallery: [],
      tags: ["FarmSure", "Solution Design", "First Prize"],
      certificateUrl: ""
    },
    {
      id: "05",
      title: "GEN-AI Domain Prize",
      category: "Awards",
      date: "2026",
      result: "Prize Winner",
      organization: "Field 2 Future – Sri Sairam Engineering College",
      description: "Secured a prize in the GEN-AI domain with Team Tetrinox for developing a Personalized Study Plan Generator. Contributed to the solution workflow, Generative AI concept, personalization logic, and technical presentation.",
      image: tetrinoxImg,
      gallery: [],
      tags: ["Generative AI", "Study Planner", "Team Tetrinox"],
      certificateUrl: ""
    },
  ],

  education: [
    {
      id: "01",
      type: "school",
      institution: "Saradha Vidhyala Matriculation Hr. Sec. School",
      period: "2022–2023",
      degree: "Higher Secondary Education",
      percentage: 88.0,
    },
    {
      id: "02",
      type: "college",
      institution: "Sri Sairam Engineering College",
      period: "2023–2027",
      degree: "B.Tech — Computer Science and Business Systems",
      cgpa: 8.18,
      semesters: [
        { sem: 1, gpa: 8.021 },
        { sem: 2, gpa: 8.186 },
        { sem: 3, gpa: 8.431 },
        { sem: 4, gpa: 7.745 },
        { sem: 5, gpa: 8.229 },
        { sem: 6, gpa: 8.408 },
        { sem: 7, gpa: null },
        { sem: 8, gpa: null },
      ],
    }
  ],

  contact: {
    email: "sec23cb114@sairamtap.edu.in",
    github: "https://github.com/HARIPRASATH2985",
    linkedin: "https://www.linkedin.com/in/hariprasath2985"
  }
};
