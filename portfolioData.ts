export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  category: 'productivity' | 'web' | 'programming';
  categoryLabel: string;
  status: string;
  shortDescription: string;
  fullNote: string;
  technologies: string[];
  githubStatus: string;
  liveDemoStatus?: string;
  hasLiveDemoPlaceholder: boolean;
  codePreview: {
    filename: string;
    language: string;
    snippet: string;
  };
}

export interface EducationItem {
  id: string;
  index: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  stage: string;
  streamOrBoard: string;
  description: string;
}

export interface CertificationItem {
  id: string;
  index: string;
  title: string;
  category: string;
  status: string;
  description: string;
}

export const STUDENT_INFO = {
  name: 'Sachin Doodhwal',
  roleSubtitle: 'B.Tech CSE Student | Aspiring Software Developer',
  collegeTagline: '1st Year B.Tech CSE Student at JECRC University, Jaipur',
  shortIntro:
    'I am a first-year Computer Science and Engineering student interested in programming, software development, Artificial Intelligence and emerging technologies.',
  course: 'B.Tech Computer Science & Engineering',
  year: '1st Year',
  semester: '1st Semester',
  college: 'JECRC University, Jaipur, Rajasthan',
  location: 'Jaipur, Rajasthan, India',
  emailPlaceholder: 'your-email@example.com',
  githubPlaceholder: 'https://github.com/your-username (URL to be updated)',
  linkedinPlaceholder: 'https://linkedin.com/in/your-profile (URL to be updated)',
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'btech',
    index: '01',
    degree: 'B.Tech Computer Science & Engineering',
    institution: 'JECRC University, Jaipur',
    location: 'Jaipur, Rajasthan',
    period: '2026 – Present',
    stage: '1st Year · 1st Semester',
    streamOrBoard: 'Undergraduate Degree Program',
    description:
      'Currently pursuing first-year undergraduate coursework in Computer Science & Engineering with a focus on core programming fundamentals, logical problem-solving, and digital & AI literacy.',
  },
  {
    id: 'class12',
    index: '02',
    degree: 'Class 12 (Senior Secondary)',
    institution: 'RBSE (Board of Secondary Education, Rajasthan)',
    period: 'Completed',
    stage: 'Senior Secondary Education',
    streamOrBoard: 'PCM · Physics, Chemistry, Mathematics',
    description:
      'Completed senior secondary schooling in the Science and Mathematics stream (Physics, Chemistry, Mathematics) under the Rajasthan Board of Secondary Education.',
  },
  {
    id: 'class10',
    index: '03',
    degree: 'Class 10 (Secondary)',
    institution: 'CBSE (Central Board of Secondary Education)',
    period: 'Completed',
    stage: 'Secondary Education',
    streamOrBoard: 'CBSE Curriculum',
    description:
      'Completed secondary school foundation across core academic subjects under the Central Board of Secondary Education.',
  },
];

export const SKILLS_DATA = {
  programming: {
    title: 'Programming Foundations',
    levelNote: 'Beginner Level · Active Practice',
    description:
      'Building a solid foundation in structured programming, syntax discipline, control flow, and step-by-step problem decomposition.',
    items: [
      {
        name: 'C Programming',
        stage: 'Beginner',
        detail: 'Variables, data types, loops, conditional logic, functions, and basic arrays',
      },
      {
        name: 'Programming Fundamentals',
        stage: 'Foundation',
        detail: 'Flowcharts, dry-run tracing, algorithmic thinking, and console I/O programs',
      },
    ],
  },
  currentlyLearning: {
    title: 'Currently Learning',
    levelNote: 'In Progress · Semester 1 & Self-Study',
    description:
      'Expanding beyond core C syntax into object-oriented concepts, scripting, version control, and modern web structure.',
    items: [
      {
        name: 'C++',
        stage: 'Currently Learning',
        detail: 'Transitioning from C to standard input/output streams and basic OOP concepts',
      },
      {
        name: 'Python',
        stage: 'Currently Learning',
        detail: 'Learning clean scripting syntax, basic data types, and beginner automation logic',
      },
      {
        name: 'Data Structures & Algorithms',
        stage: 'Beginner',
        detail: 'Understanding arrays, searching, basic sorting, and time complexity concepts',
      },
      {
        name: 'Web Development',
        stage: 'Beginner',
        detail: 'Semantic HTML5, responsive CSS layouts, and foundational frontend structure',
      },
      {
        name: 'Git & GitHub',
        stage: 'Beginner',
        detail: 'Repository initialization, commits, branches, and pushing academic code online',
      },
    ],
  },
  areasOfInterest: {
    title: 'Areas of Interest',
    levelNote: 'Exploration & Future Focus',
    description:
      'Domains in computer science that motivate my coursework, reading, and upcoming student projects.',
    items: [
      {
        name: 'Artificial Intelligence',
        stage: 'Core Interest',
        detail: 'Exploring how intelligent systems reason, learn, and assist human workflows',
      },
      {
        name: 'Machine Learning',
        stage: 'Core Interest',
        detail: 'Interested in foundational math and data-driven pattern recognition',
      },
      {
        name: 'Software Development',
        stage: 'Core Interest',
        detail: 'Designing clean, reliable applications that solve practical everyday problems',
      },
      {
        name: 'Generative AI',
        stage: 'Core Interest',
        detail: 'Understanding modern foundation models, prompt engineering, and AI literacy',
      },
    ],
  },
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'student-day-planner',
    index: '01',
    title: 'Student Productivity / Day Planner',
    category: 'productivity',
    categoryLabel: 'Student Productivity',
    status: 'Project details coming soon',
    shortDescription:
      'Project details coming soon. A planned student workflow utility designed to organize daily lecture schedules, assignment deadlines, and study blocks for first-year coursework.',
    fullNote:
      'This project slot is reserved for an upcoming student productivity and daily schedule organizer. Detailed technical specifications, screenshots, and source code repository links will be updated once the initial prototype is completed.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
    githubStatus: 'GitHub Repository — Placeholder (Link coming soon)',
    liveDemoStatus: 'Live Demo — Placeholder (Link coming soon)',
    hasLiveDemoPlaceholder: true,
    codePreview: {
      filename: 'planner_roadmap.txt',
      language: 'plaintext',
      snippet: `Project: Student Productivity / Day Planner
Status : Project details coming soon
Scope  : Daily academic timetable & task tracking
Tech   : HTML · CSS · Web Development Fundamentals`,
    },
  },
  {
    id: 'smart-student-website',
    index: '02',
    title: 'Smart Student Website',
    category: 'web',
    categoryLabel: 'Web Development',
    status: 'Project details coming soon',
    shortDescription:
      'Project details coming soon. A responsive student web portal concept focused on clean navigation, accessible academic resources, and modern frontend layout practices.',
    fullNote:
      'This project slot represents a foundational web development build focusing on semantic HTML, responsive layout design, and clean typography. Exact feature implementation details and live deployment links will be published as development progresses.',
    technologies: ['HTML5', 'CSS3', 'Responsive Design', 'Git & GitHub'],
    githubStatus: 'GitHub Repository — Placeholder (Link coming soon)',
    liveDemoStatus: 'Live Demo — Placeholder (Link coming soon)',
    hasLiveDemoPlaceholder: true,
    codePreview: {
      filename: 'site_structure.html',
      language: 'html',
      snippet: `<!-- Smart Student Website — Structure Placeholder -->
<main class="student-portal">
  <header>Academic Resource Hub</header>
  <!-- Project details coming soon -->
</main>`,
    },
  },
  {
    id: 'beginner-programming-projects',
    index: '03',
    title: 'Beginner Programming Projects',
    category: 'programming',
    categoryLabel: 'C / C++ / Python',
    status: 'Project details coming soon',
    shortDescription:
      'Project details coming soon. A curated collection of first-semester console programs, logic exercises, and foundational problem-solving scripts written while learning C, C++, and Python.',
    fullNote:
      'A growing repository of beginner-level programming exercises from 1st Year B.Tech CSE lab work and self-study. Includes foundational programs in C, C++, and Python. Full source files will be uploaded to GitHub soon.',
    technologies: ['C', 'C++', 'Python', 'Programming Fundamentals'],
    githubStatus: 'GitHub Repository — Placeholder (Link coming soon)',
    hasLiveDemoPlaceholder: false,
    codePreview: {
      filename: 'fundamentals.c',
      language: 'c',
      snippet: `#include <stdio.h>

int main(void) {
    printf("Sachin Doodhwal - B.Tech CSE 1st Year\\n");
    printf("Project details coming soon.\\n");
    return 0;
}`,
    },
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'tech-cert',
    index: '01',
    title: 'Technical Certifications',
    category: 'Core Computer Science & Web',
    status: 'Coming Soon',
    description:
      'Placeholder for upcoming verified course completions and technical foundation certificates earned during B.Tech CSE coursework.',
  },
  {
    id: 'coding-ai-cert',
    index: '02',
    title: 'Coding & AI/ML Certifications',
    category: 'Programming & Artificial Intelligence',
    status: 'Coming Soon',
    description:
      'Placeholder for future certifications in C/C++, Python programming, Data Structures, Artificial Intelligence, and Machine Learning.',
  },
  {
    id: 'college-achievements',
    index: '03',
    title: 'College Activities & Achievements',
    category: 'JECRC University, Jaipur',
    status: 'Coming Soon',
    description:
      'Placeholder for future hackathons, coding club workshops, technical seminars, and academic milestones at JECRC University.',
  },
];
