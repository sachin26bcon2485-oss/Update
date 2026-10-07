// data/portfolioData.ts

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  category: 'productivity' | 'web' | 'programming';
  categoryLabel: string;
  status: string;
  shortDescription: string;
  fullDescription?: string;
  technologies: string[];
  hasLiveDemoPlaceholder: boolean;
}

export const STUDENT_INFO = {
  name: "Sachin Doodhwal",
  location: "Jaipur, Rajasthan, India",
  emailPlaceholder: "sachin.doodhwal@example.com",
};

export const EDUCATION_DATA = [
  {
    id: "1",
    index: "01",
    stage: "1st Year · 1st Semester",
    period: "2026 – Present",
    degree: "B.Tech Computer Science & Engineering",
    institution: "JECRC University, Jaipur",
    streamOrBoard: "Undergraduate Degree Program",
    description: "Currently pursuing first-year undergraduate coursework in Computer Science & Engineering with a focus on core programming fundamentals, logical problem-solving, and AI literacy."
  },
  {
    id: "2",
    index: "02",
    stage: "Senior Secondary",
    period: "Completed",
    degree: "Class 12",
    institution: "RBSE (Board of Secondary Education, Rajasthan)",
    streamOrBoard: "PCM · Physics, Chemistry, Mathematics",
    description: "Completed senior secondary schooling in Science and Mathematics under the Rajasthan Board of Secondary Education."
  },
  {
    id: "3",
    index: "03",
    stage: "Secondary",
    period: "Completed",
    degree: "Class 10",
    institution: "CBSE (Central Board of Secondary Education)",
    streamOrBoard: "CBSE Curriculum",
    description: "Completed secondary school foundation across core academic subjects under CBSE."
  }
];

export const SKILLS_DATA = {
  programming: {
    title: "Programming Foundations",
    levelNote: "Beginner Level",
    description: "Building a solid foundation in structured programming, syntax discipline, and step-by-step problem decomposition.",
    items: [
      { name: "C", stage: "Beginner", detail: "Variables, data types, loops, conditional logic, functions, and basic arrays" },
      { name: "Programming Fundamentals", stage: "Foundation", detail: "Flowcharts, dry-run tracing, algorithmic thinking, and console I/O programs" }
    ]
  },
  currentlyLearning: {
    title: "Currently Learning",
    levelNote: "In Progress",
    description: "Expanding beyond core C syntax into object-oriented concepts, scripting, version control, and modern web structure.",
    items: [
      { name: "C++", stage: "Learning", detail: "Object-oriented programming concepts and syntax" },
      { name: "Python", stage: "Learning", detail: "Scripting basics and data processing libraries" },
      { name: "Data Structures & Algorithms", stage: "Beginner", detail: "Arrays, linked lists, stacks, queues, and basic sorting" },
      { name: "Web Development", stage: "Beginner", detail: "HTML5, CSS3, Tailwind CSS, and React basics" },
      { name: "Git & GitHub", stage: "Beginner", detail: "Version control, repositories, commits, and workflow automation" }
    ]
  },
  areasOfInterest: {
    title: "Areas of Interest",
    levelNote: "Exploration",
    description: "Domains in computer science that motivate my coursework, reading, and upcoming student projects.",
    items: [
      { name: "Artificial Intelligence", stage: "Interest", detail: "AI applications, prompt engineering, and intelligent systems" },
      { name: "Machine Learning", stage: "Interest", detail: "Model evaluation, predictive logic, and data analysis" },
      { name: "Software Development", stage: "Interest", detail: "Building robust software applications and workflow tools" },
      { name: "Generative AI", stage: "Interest", detail: "LLMs, generative models, and AI agent integration" }
    ]
  }
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "1",
    index: "01",
    title: "Student Productivity / Day Planner",
    category: "productivity",
    categoryLabel: "Student Productivity",
    status: "Project details coming soon",
    shortDescription: "A planned student workflow utility designed to organize daily lecture schedules, assignment deadlines, and study blocks for first-year coursework.",
    technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
    hasLiveDemoPlaceholder: true
  },
  {
    id: "2",
    index: "02",
    title: "Smart Student Website",
    category: "web",
    categoryLabel: "Web Development",
    status: "Project details coming soon",
    shortDescription: "A responsive student web portal concept focused on clean navigation, accessible academic resources, and modern frontend layout practices.",
    technologies: ["HTML5", "CSS3", "Responsive Design", "Git & GitHub"],
    hasLiveDemoPlaceholder: true
  },
  {
    id: "3",
    index: "03",
    title: "Beginner Programming Projects",
    category: "programming",
    categoryLabel: "C / C++ / Python",
    status: "Project details coming soon",
    shortDescription: "A curated collection of first-semester console programs, logic exercises, and foundational problem-solving scripts written while learning C, C++, and Python.",
    technologies: ["C", "C++", "Python", "Programming Fundamentals"],
    hasLiveDemoPlaceholder: false
  }
];

export const CERTIFICATIONS_DATA = [
  {
    id: "1",
    index: "01",
    title: "Technical Certifications",
    status: "Coming Soon",
    category: "Core Computer Science & Web",
    description: "Placeholder for upcoming verified course completions and technical foundation certificates earned during B.Tech CSE coursework."
  },
  {
    id: "2",
    index: "02",
    title: "Coding & AI/ML Certifications",
    status: "Coming Soon",
    category: "Programming & Artificial Intelligence",
    description: "Placeholder for future certifications in C/C++, Python programming, Data Structures, Artificial Intelligence, and Machine Learning."
  },
  {
    id: "3",
    index: "03",
    title: "College Activities & Achievements",
    status: "Coming Soon",
    category: "JECRC University, Jaipur",
    description: "Placeholder for future hackathons, coding club workshops, technical seminars, and academic milestones at JECRC University."
  }
];
