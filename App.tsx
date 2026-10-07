/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Copy,
  Check,
  Info,
  BookOpen,
  Code2,
  FolderGit2,
  Award,
  ExternalLink,
  Download,
} from 'lucide-react';
import {
  STUDENT_INFO,
  EDUCATION_DATA,
  SKILLS_DATA,
  PROJECTS_DATA,
  CERTIFICATIONS_DATA,
  ProjectItem,
} from './data/portfolioData';
import { DeveloperVisual } from './components/DeveloperVisual';
import { ProjectModal } from './components/ProjectModal';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [projectFilter, setProjectFilter] = useState<
    'all' | 'productivity' | 'web' | 'programming'
  >('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [activeSkillCategory, setActiveSkillCategory] = useState<
    'all' | 'programming' | 'learning' | 'interests'
  >('all');
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [placeholderNotice, setPlaceholderNotice] = useState<string | null>(
    null
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const showNotice = (msg: string) => {
    setPlaceholderNotice(msg);
    setTimeout(() => {
      setPlaceholderNotice((prev) => (prev === msg ? null : prev));
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(STUDENT_INFO.emailPlaceholder);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const filteredProjects =
    projectFilter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === projectFilter);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-200 selection:bg-blue-600 selection:text-white ${
        isDark
          ? 'bg-[#0B0F19] text-[#F8FAFC] tracking-[0.005em]'
          : 'bg-[#F8FAFC] text-[#0F172A]'
      }`}
    >
      {/* Floating notification toast for placeholder links */}
      {placeholderNotice && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed bottom-5 right-5 z-50 max-w-md rounded-xl border px-4 py-3 shadow-lg flex items-start gap-3 text-xs sm:text-sm transition-all ${
            isDark
              ? 'bg-[#111726] border-blue-500/40 text-slate-100 shadow-black/50'
              : 'bg-white border-blue-300 text-slate-800 shadow-slate-200/80'
          }`}
        >
          <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-medium">{placeholderNotice}</p>
          </div>
          <button
            type="button"
            onClick={() => setPlaceholderNotice(null)}
            aria-label="Dismiss notification"
            className="text-slate-400 hover:text-slate-200 p-0.5"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* TOP NAVIGATION BAR — Strict 3-Zone Contract */}
      <header
        className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-200 ${
          isDark
            ? 'bg-[#0B0F19]/85 border-slate-800/80'
            : 'bg-[#F8FAFC]/85 border-slate-200/80'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="text-lg font-bold font-display tracking-tight whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
          >
            Sachin Doodhwal
          </a>

          {/* Zone 2: 5 clean text navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`py-1 transition-colors underline-offset-4 hover:underline whitespace-nowrap ${
                  isDark
                    ? 'text-slate-300 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions (Theme toggle + Contact button / Mobile menu) */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setIsDark(!isDark)}
              aria-label={
                isDark ? 'Switch to light mode' : 'Switch to dark mode'
              }
              className={`p-2.5 rounded-lg border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isDark
                  ? 'border-slate-800 bg-[#111726] text-slate-300 hover:text-white hover:border-slate-700'
                  : 'border-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg transition-all whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Contact Me
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className={`md:hidden p-2.5 rounded-lg border transition-colors ${
                isDark
                  ? 'border-slate-800 bg-[#111726] text-slate-200'
                  : 'border-slate-200 bg-white text-slate-800'
              }`}
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile Navigation"
            className={`md:hidden border-b px-4 pt-2 pb-4 space-y-1 ${
              isDark
                ? 'bg-[#0B0F19] border-slate-800'
                : 'bg-[#F8FAFC] border-slate-200'
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-slate-200 hover:bg-slate-800/70'
                    : 'text-slate-700 hover:bg-slate-200/60'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* 1. HOME / HERO SECTION */}
        <section
          id="home"
          className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-200/70 dark:border-slate-800/70"
        >
          {/* Subtle Ambient Blue/Purple Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[680px] h-[340px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-purple-600/15 blur-3xl rounded-full"
          />

          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Core Typography & CTAs */}
              <div className="lg:col-span-7 space-y-6">
                {/* Quiet Unboxed Academic Metadata Line */}
                <div
                  className={`flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium ${
                    isDark ? 'text-blue-400' : 'text-blue-700'
                  }`}
                >
                  <span>1st Year B.Tech CSE Student at JECRC University, Jaipur</span>
                  <span aria-hidden="true" className="text-slate-400">
                    ·
                  </span>
                  <span
                    className={
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }
                  >
                    1st Semester
                  </span>
                </div>

                {/* Main Display Heading */}
                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold font-display tracking-tight leading-[1.12] text-balance">
                    Hi, I&apos;m{' '}
                    <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                      Sachin Doodhwal
                    </span>
                  </h1>

                  <p
                    className={`text-lg sm:text-xl font-semibold tracking-tight ${
                      isDark ? 'text-slate-200' : 'text-slate-800'
                    }`}
                  >
                    B.Tech CSE Student | Aspiring Software Developer
                  </p>
                </div>

                {/* Short Introduction */}
                <p
                  className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  I am a first-year Computer Science and Engineering student
                  interested in programming, software development, Artificial
                  Intelligence and emerging technologies.
                </p>

                {/* Primary & Secondary Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-md shadow-blue-600/20 transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <span>View My Projects</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#contact"
                    className={`inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold border transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                      isDark
                        ? 'border-slate-700 bg-[#111726] text-slate-200 hover:bg-slate-800 hover:border-slate-600'
                        : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    Contact Me
                  </a>

                  <a
                    href="/sachin-doodhwal-portfolio.zip"
                    download="sachin-doodhwal-portfolio.zip"
                    className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs sm:text-sm font-mono border transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                      isDark
                        ? 'border-blue-500/40 bg-blue-950/30 text-blue-300 hover:bg-blue-950/50'
                        : 'border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100'
                    }`}
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Full Project (.zip)</span>
                  </a>
                </div>

                {/* Unboxed Key Student Highlights */}
                <div
                  className={`pt-4 border-t flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm ${
                    isDark
                      ? 'border-slate-800/80 text-slate-400'
                      : 'border-slate-200 text-slate-600'
                  }`}
                >
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-200">
                      Course:
                    </span>{' '}
                    B.Tech CSE (1st Year)
                  </div>
                  <span aria-hidden="true">·</span>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-200">
                      University:
                    </span>{' '}
                    JECRC University, Jaipur
                  </div>
                  <span aria-hidden="true">·</span>
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-slate-200">
                      Focus:
                    </span>{' '}
                    C, C++, Python &amp; AI/ML
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Developer-Style Visual */}
              <div className="lg:col-span-5">
                <DeveloperVisual isDark={isDark} />
              </div>
            </div>
          </div>
        </section>

        {/* 2. ABOUT ME SECTION */}
        <section
          id="about"
          className="py-16 md:py-24 border-b border-slate-200/70 dark:border-slate-800/70"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Section Heading */}
              <div className="lg:col-span-4 space-y-3">
                <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
                  01. Introduction
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-balance">
                  About Me
                </h2>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  A genuine look at my academic background, current learning
                  focus, and interest in software engineering.
                </p>
              </div>

              {/* Right Column: Natural & Simple Narrative + Academic Profile Summary */}
              <div className="lg:col-span-8 space-y-8">
                <div
                  className={`space-y-4 text-base leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  <p>
                    Hello! I am{' '}
                    <strong className="font-semibold text-slate-900 dark:text-white">
                      Sachin Doodhwal
                    </strong>
                    , a first-year B.Tech Computer Science &amp; Engineering
                    student (1st Semester) studying at{' '}
                    <strong className="font-semibold text-slate-900 dark:text-white">
                      JECRC University, Jaipur, Rajasthan
                    </strong>
                    .
                  </p>
                  <p>
                    My journey in computer science began with a strong curiosity
                    about how software applications and modern digital tools are
                    built. Right now, I am focused on building strong
                    programming fundamentals—starting with C programming and
                    structured problem-solving—while gradually exploring C++,
                    Python, Data Structures &amp; Algorithms, and Web
                    Development.
                  </p>
                  <p>
                    Beyond core programming, I am deeply interested in
                    Artificial Intelligence, Machine Learning, software
                    development, and emerging future technologies. As a
                    first-year student, I am eager to learn step by step, build
                    practical student projects, and continuously improve my
                    technical skills through coursework and hands-on practice.
                  </p>
                </div>

                {/* Structured Student Snapshot Card */}
                <div
                  className={`rounded-2xl border p-6 sm:p-8 ${
                    isDark
                      ? 'bg-[#111726] border-slate-800'
                      : 'bg-white border-slate-200/90 shadow-xs'
                  }`}
                >
                  <h3 className="text-base font-bold font-display mb-5">
                    Academic Profile Snapshot
                  </h3>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 text-sm">
                    <div className="pb-4 border-b border-slate-200/70 dark:border-slate-800">
                      <dt
                        className={`text-xs mb-1 ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        Full Name
                      </dt>
                      <dd className="font-semibold">Sachin Doodhwal</dd>
                    </div>

                    <div className="pb-4 border-b border-slate-200/70 dark:border-slate-800">
                      <dt
                        className={`text-xs mb-1 ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        Degree &amp; Branch
                      </dt>
                      <dd className="font-semibold">
                        B.Tech Computer Science &amp; Engineering
                      </dd>
                    </div>

                    <div className="pb-4 border-b border-slate-200/70 dark:border-slate-800">
                      <dt
                        className={`text-xs mb-1 ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        Current Standing
                      </dt>
                      <dd className="font-semibold font-mono text-blue-600 dark:text-blue-400">
                        1st Year · 1st Semester
                      </dd>
                    </div>

                    <div className="pb-4 border-b border-slate-200/70 dark:border-slate-800">
                      <dt
                        className={`text-xs mb-1 ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        University
                      </dt>
                      <dd className="font-semibold">
                        JECRC University, Jaipur, Rajasthan
                      </dd>
                    </div>

                    <div>
                      <dt
                        className={`text-xs mb-1 ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        Current Focus
                      </dt>
                      <dd className="font-medium">
                        Building Programming Fundamentals &amp; Web Basics
                      </dd>
                    </div>

                    <div>
                      <dt
                        className={`text-xs mb-1 ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        Future Interests
                      </dt>
                      <dd className="font-medium">
                        AI/ML, Software Development &amp; Emerging Tech
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. EDUCATION SECTION */}
        <section
          id="education"
          className="py-16 md:py-24 border-b border-slate-200/70 dark:border-slate-800/70"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12 space-y-2">
              <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
                02. Academic Timeline
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-balance">
                Education
              </h2>
              <p
                className={`text-sm sm:text-base ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                My academic pathway from secondary school foundations to
                undergraduate engineering studies at JECRC University.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {EDUCATION_DATA.map((edu, index) => (
                <article
                  key={edu.id}
                  className={`rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                    isDark
                      ? 'bg-[#111726] border-slate-800 hover:border-blue-500/50'
                      : 'bg-white border-slate-200/90 hover:border-blue-400 shadow-xs'
                  }`}
                >
                  <div>
                    {/* Quiet Unboxed Kicker */}
                    <div
                      className={`flex items-center justify-between gap-2 text-xs font-mono mb-4 pb-3 border-b ${
                        isDark
                          ? 'border-slate-800 text-slate-400'
                          : 'border-slate-100 text-slate-500'
                      }`}
                    >
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {edu.index}. {edu.stage}
                      </span>
                      <span>{edu.period}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-display tracking-tight mb-2">
                      {edu.degree}
                    </h3>

                    <p
                      className={`text-sm font-semibold mb-1 ${
                        isDark ? 'text-slate-200' : 'text-slate-800'
                      }`}
                    >
                      {edu.institution}
                    </p>

                    <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-4">
                      {edu.streamOrBoard}
                    </p>

                    <p
                      className={`text-sm leading-relaxed ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {edu.description}
                    </p>
                  </div>

                  {index === 0 && (
                    <div
                      className={`mt-6 pt-4 border-t text-xs font-mono flex items-center justify-between ${
                        isDark
                          ? 'border-slate-800/80 text-slate-400'
                          : 'border-slate-100 text-slate-500'
                      }`}
                    >
                      <span>Status: Currently Enrolled</span>
                      <span>1st Year</span>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SKILLS SECTION */}
        <section
          id="skills"
          className="py-16 md:py-24 border-b border-slate-200/70 dark:border-slate-800/70"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div className="max-w-2xl space-y-2">
                <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
                  03. Honest Learning Progression
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-balance">
                  Skills &amp; Areas of Interest
                </h2>
                <p
                  className={`text-sm sm:text-base ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  As a first-year B.Tech CSE student, these represent my
                  beginner-level programming foundations, technologies I am
                  currently learning, and areas of future interest.
                </p>
              </div>

              {/* Interactive Filter Control (Allowed per Design Constitution) */}
              <div
                role="tablist"
                aria-label="Filter skill categories"
                className={`inline-flex items-center gap-1 p-1 rounded-xl border self-start ${
                  isDark
                    ? 'bg-[#111726] border-slate-800'
                    : 'bg-slate-100 border-slate-200'
                }`}
              >
                {[
                  { id: 'all', label: 'All Categories' },
                  { id: 'programming', label: 'Programming' },
                  { id: 'learning', label: 'Currently Learning' },
                  { id: 'interests', label: 'Interests' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeSkillCategory === tab.id}
                    onClick={() =>
                      setActiveSkillCategory(
                        tab.id as
                          | 'all'
                          | 'programming'
                          | 'learning'
                          | 'interests'
                      )
                    }
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                      activeSkillCategory === tab.id
                        ? isDark
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-white text-slate-900 shadow-xs'
                        : isDark
                        ? 'text-slate-400 hover:text-slate-200'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Group 1: Programming Foundations */}
              {(activeSkillCategory === 'all' ||
                activeSkillCategory === 'programming') && (
                <div
                  className={`rounded-2xl border p-6 sm:p-7 flex flex-col justify-between ${
                    isDark
                      ? 'bg-[#111726] border-slate-800'
                      : 'bg-white border-slate-200/90 shadow-xs'
                  } ${
                    activeSkillCategory === 'programming' ? 'lg:col-span-3' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 mb-2">
                      <span>01. Programming</span>
                      <span>{SKILLS_DATA.programming.levelNote}</span>
                    </div>
                    <h3 className="text-xl font-bold font-display mb-2">
                      {SKILLS_DATA.programming.title}
                    </h3>
                    <p
                      className={`text-sm mb-6 ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {SKILLS_DATA.programming.description}
                    </p>

                    <div className="divide-y divide-slate-200/70 dark:divide-slate-800">
                      {SKILLS_DATA.programming.items.map((skill) => (
                        <div key={skill.name} className="py-3.5 first:pt-0 last:pb-0">
                          <div className="flex items-baseline justify-between gap-2 mb-1">
                            <span className="font-semibold text-sm sm:text-base">
                              {skill.name}
                            </span>
                            <span
                              className={`text-xs font-mono ${
                                isDark ? 'text-blue-400' : 'text-blue-700'
                              }`}
                            >
                              {skill.stage}
                            </span>
                          </div>
                          <p
                            className={`text-xs sm:text-sm ${
                              isDark ? 'text-slate-400' : 'text-slate-600'
                            }`}
                          >
                            {skill.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Group 2: Currently Learning */}
              {(activeSkillCategory === 'all' ||
                activeSkillCategory === 'learning') && (
                <div
                  className={`rounded-2xl border p-6 sm:p-7 flex flex-col justify-between ${
                    isDark
                      ? 'bg-[#111726] border-slate-800'
                      : 'bg-white border-slate-200/90 shadow-xs'
                  } ${
                    activeSkillCategory === 'learning' ? 'lg:col-span-3' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-2">
                      <span>02. Currently Learning</span>
                      <span>{SKILLS_DATA.currentlyLearning.levelNote}</span>
                    </div>
                    <h3 className="text-xl font-bold font-display mb-2">
                      {SKILLS_DATA.currentlyLearning.title}
                    </h3>
                    <p
                      className={`text-sm mb-6 ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {SKILLS_DATA.currentlyLearning.description}
                    </p>

                    <div className="divide-y divide-slate-200/70 dark:divide-slate-800">
                      {SKILLS_DATA.currentlyLearning.items.map((skill) => (
                        <div key={skill.name} className="py-3 first:pt-0 last:pb-0">
                          <div className="flex items-baseline justify-between gap-2 mb-0.5">
                            <span className="font-semibold text-sm sm:text-base">
                              {skill.name}
                            </span>
                            <span
                              className={`text-xs font-mono ${
                                isDark ? 'text-indigo-400' : 'text-indigo-700'
                              }`}
                            >
                              {skill.stage}
                            </span>
                          </div>
                          <p
                            className={`text-xs ${
                              isDark ? 'text-slate-400' : 'text-slate-600'
                            }`}
                          >
                            {skill.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Group 3: Areas of Interest */}
              {(activeSkillCategory === 'all' ||
                activeSkillCategory === 'interests') && (
                <div
                  className={`rounded-2xl border p-6 sm:p-7 flex flex-col justify-between ${
                    isDark
                      ? 'bg-[#111726] border-slate-800'
                      : 'bg-white border-slate-200/90 shadow-xs'
                  } ${
                    activeSkillCategory === 'interests' ? 'lg:col-span-3' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs font-mono text-purple-600 dark:text-purple-400 mb-2">
                      <span>03. Areas of Interest</span>
                      <span>{SKILLS_DATA.areasOfInterest.levelNote}</span>
                    </div>
                    <h3 className="text-xl font-bold font-display mb-2">
                      {SKILLS_DATA.areasOfInterest.title}
                    </h3>
                    <p
                      className={`text-sm mb-6 ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {SKILLS_DATA.areasOfInterest.description}
                    </p>

                    <div className="divide-y divide-slate-200/70 dark:divide-slate-800">
                      {SKILLS_DATA.areasOfInterest.items.map((skill) => (
                        <div key={skill.name} className="py-3 first:pt-0 last:pb-0">
                          <div className="flex items-baseline justify-between gap-2 mb-0.5">
                            <span className="font-semibold text-sm sm:text-base">
                              {skill.name}
                            </span>
                            <span
                              className={`text-xs font-mono ${
                                isDark ? 'text-purple-400' : 'text-purple-700'
                              }`}
                            >
                              {skill.stage}
                            </span>
                          </div>
                          <p
                            className={`text-xs ${
                              isDark ? 'text-slate-400' : 'text-slate-600'
                            }`}
                          >
                            {skill.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 5. PROJECTS SECTION */}
        <section
          id="projects"
          className="py-16 md:py-24 border-b border-slate-200/70 dark:border-slate-800/70"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div className="max-w-2xl space-y-2">
                <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
                  04. Academic &amp; Personal Builds
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-balance">
                  Projects
                </h2>
                <p
                  className={`text-sm sm:text-base ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Planned and in-progress first-year projects. Full technical
                  specifications and repository links will be updated as builds
                  are completed.
                </p>
              </div>

              {/* Interactive Project Category Filter */}
              <div
                role="tablist"
                aria-label="Filter projects by category"
                className={`inline-flex items-center gap-1 p-1 rounded-xl border self-start ${
                  isDark
                    ? 'bg-[#111726] border-slate-800'
                    : 'bg-slate-100 border-slate-200'
                }`}
              >
                {[
                  { id: 'all', label: 'All Projects' },
                  { id: 'productivity', label: 'Productivity' },
                  { id: 'web', label: 'Web' },
                  { id: 'programming', label: 'Programming' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={projectFilter === tab.id}
                    onClick={() =>
                      setProjectFilter(
                        tab.id as 'all' | 'productivity' | 'web' | 'programming'
                      )
                    }
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                      projectFilter === tab.id
                        ? isDark
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-white text-slate-900 shadow-xs'
                        : isDark
                        ? 'text-slate-400 hover:text-slate-200'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className={`rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${
                    isDark
                      ? 'bg-[#111726] border-slate-800 hover:border-blue-500/50'
                      : 'bg-white border-slate-200/90 hover:border-blue-400 shadow-xs'
                  }`}
                >
                  <div>
                    {/* Quiet Unboxed Metadata Kicker (Zero-Pill compliance) */}
                    <div
                      className={`flex items-center gap-2 text-xs mb-3 ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      <span className="font-mono font-semibold text-blue-600 dark:text-blue-400">
                        {project.index}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span className="italic">{project.status}</span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-bold font-display tracking-tight mb-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="text-left hover:text-blue-500 transition-colors focus:outline-none focus-visible:underline"
                      >
                        {project.title}
                      </button>
                    </h3>

                    {/* Short realistic description with "Project details coming soon" */}
                    <p
                      className={`text-sm leading-relaxed mb-6 ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="space-y-5 pt-4 border-t border-slate-200/70 dark:border-slate-800">
                    {/* Unboxed Technologies List with Middle Dots */}
                    <div>
                      <div
                        className={`text-[11px] font-mono mb-1.5 ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        Technologies:
                      </div>
                      <div
                        className={`flex flex-wrap items-center gap-y-1 text-xs font-mono ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        {project.technologies.map((tech, idx) => (
                          <React.Fragment key={tech}>
                            <span>{tech}</span>
                            {idx < project.technologies.length - 1 && (
                              <span
                                aria-hidden="true"
                                className="mx-2 text-slate-400 dark:text-slate-600"
                              >
                                ·
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons: GitHub Placeholder & Live Demo Placeholder */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() =>
                          showNotice(
                            `${project.title}: GitHub repository link is a placeholder and will be updated once the code is published.`
                          )
                        }
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                          isDark
                            ? 'bg-slate-800 hover:bg-slate-700 text-slate-100'
                            : 'bg-slate-900 hover:bg-slate-800 text-white'
                        }`}
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </button>

                      {project.hasLiveDemoPlaceholder && (
                        <button
                          type="button"
                          onClick={() =>
                            showNotice(
                              `${project.title}: Live Demo link is a placeholder and will be added when deployed.`
                            )
                          }
                          className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium border transition-colors whitespace-nowrap ${
                            isDark
                              ? 'border-slate-700 hover:bg-slate-800 text-slate-200'
                              : 'border-slate-300 hover:bg-slate-100 text-slate-800'
                          }`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className={`ml-auto text-xs font-medium underline-offset-4 hover:underline whitespace-nowrap ${
                          isDark
                            ? 'text-blue-400 hover:text-blue-300'
                            : 'text-blue-600 hover:text-blue-800'
                        }`}
                      >
                        Preview
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CERTIFICATIONS & ACHIEVEMENTS SECTION */}
        <section
          id="certifications"
          className="py-16 md:py-24 border-b border-slate-200/70 dark:border-slate-800/70"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-12 space-y-2">
              <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
                05. Milestones &amp; Credentials
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-balance">
                Certifications &amp; Achievements
              </h2>
              <p
                className={`text-sm sm:text-base ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Dedicated placeholders for future technical certificates,
                coding credentials, and college achievements at JECRC
                University.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className={`rounded-2xl border p-6 sm:p-7 flex flex-col justify-between ${
                    isDark
                      ? 'bg-[#111726]/70 border-slate-800/90'
                      : 'bg-white border-slate-200/90 shadow-xs'
                  }`}
                >
                  <div>
                    <div
                      className={`flex items-center justify-between gap-2 text-xs font-mono mb-4 pb-3 border-b ${
                        isDark
                          ? 'border-slate-800 text-slate-400'
                          : 'border-slate-100 text-slate-500'
                      }`}
                    >
                      <span>{cert.index}</span>
                      <span className="text-purple-600 dark:text-purple-400 font-medium">
                        {cert.status}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-display tracking-tight mb-1.5">
                      {cert.title} — {cert.status}
                    </h3>

                    <p className="text-xs font-mono text-blue-600 dark:text-blue-400 mb-3">
                      {cert.category}
                    </p>

                    <p
                      className={`text-sm leading-relaxed ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. CONTACT SECTION */}
        <section id="contact" className="py-16 md:py-24">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div
              className={`rounded-2xl border p-6 sm:p-10 lg:p-12 ${
                isDark
                  ? 'bg-[#111726] border-slate-800'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Column: Direct Details */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
                      06. Get In Touch
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-balance">
                      Contact Me
                    </h2>
                    <p
                      className={`text-sm sm:text-base max-w-xl leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      Feel free to connect for academic collaborations, student
                      projects, or internship opportunities.
                    </p>
                  </div>

                  {/* Contact Details List */}
                  <dl className="space-y-4 pt-2 text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <dt
                        className={`w-28 text-xs font-mono shrink-0 ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        Name
                      </dt>
                      <dd className="font-semibold text-base">
                        {STUDENT_INFO.name}
                      </dd>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <dt
                        className={`w-28 text-xs font-mono shrink-0 ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        Location
                      </dt>
                      <dd className="font-medium flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>{STUDENT_INFO.location}</span>
                      </dd>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                      <dt
                        className={`w-28 text-xs font-mono shrink-0 ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        Email
                      </dt>
                      <dd className="flex flex-wrap items-center gap-2.5">
                        <span className="font-mono text-sm">
                          {STUDENT_INFO.emailPlaceholder}
                        </span>
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium border transition-colors whitespace-nowrap ${
                            isDark
                              ? 'border-slate-700 bg-slate-800/80 text-slate-200 hover:bg-slate-700'
                              : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {copiedEmail ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Email</span>
                            </>
                          )}
                        </button>
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Right Column: Action Buttons (GitHub, LinkedIn, Email) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
                  <div
                    className={`p-6 rounded-xl border space-y-4 ${
                      isDark
                        ? 'bg-[#0B0F19] border-slate-800'
                        : 'bg-slate-50 border-slate-200/80'
                    }`}
                  >
                    <h3 className="text-sm font-bold font-display">
                      Connect &amp; Profiles
                    </h3>
                    <p
                      className={`text-xs leading-relaxed ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      GitHub and LinkedIn buttons are configured with clean
                      placeholders until actual profile URLs are provided.
                    </p>

                    <div className="flex flex-col gap-3 pt-1">
                      {/* GitHub Button Placeholder */}
                      <button
                        type="button"
                        onClick={() =>
                          showNotice(
                            'GitHub Profile Placeholder: Replace with your actual GitHub URL (e.g., https://github.com/yourusername) when ready.'
                          )
                        }
                        className={`w-full inline-flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold border transition-colors whitespace-nowrap ${
                          isDark
                            ? 'bg-[#111726] border-slate-700 text-slate-100 hover:border-blue-500'
                            : 'bg-white border-slate-300 text-slate-900 hover:border-blue-600'
                        }`}
                      >
                        <span className="inline-flex items-center gap-2.5">
                          <Github className="w-4 h-4 text-blue-500" />
                          <span>GitHub</span>
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          Placeholder URL
                        </span>
                      </button>

                      {/* LinkedIn Button Placeholder */}
                      <button
                        type="button"
                        onClick={() =>
                          showNotice(
                            'LinkedIn Profile Placeholder: Replace with your actual LinkedIn URL (e.g., https://linkedin.com/in/yourprofile) when ready.'
                          )
                        }
                        className={`w-full inline-flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold border transition-colors whitespace-nowrap ${
                          isDark
                            ? 'bg-[#111726] border-slate-700 text-slate-100 hover:border-indigo-500'
                            : 'bg-white border-slate-300 text-slate-900 hover:border-indigo-600'
                        }`}
                      >
                        <span className="inline-flex items-center gap-2.5">
                          <Linkedin className="w-4 h-4 text-indigo-500" />
                          <span>LinkedIn</span>
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          Placeholder URL
                        </span>
                      </button>

                      {/* Email Button */}
                      <a
                        href={`mailto:${STUDENT_INFO.emailPlaceholder}`}
                        className="w-full inline-flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all whitespace-nowrap"
                      >
                        <span className="inline-flex items-center gap-2.5">
                          <Mail className="w-4 h-4" />
                          <span>Email Me</span>
                        </span>
                        <span className="text-xs font-mono text-blue-100">
                          {STUDENT_INFO.emailPlaceholder}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 8. FOOTER SECTION */}
      <footer
        className={`border-t py-10 text-xs sm:text-sm ${
          isDark
            ? 'bg-[#0B0F19] border-slate-800/80 text-slate-400'
            : 'bg-white border-slate-200/80 text-slate-600'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <p>© 2026 Sachin Doodhwal. All rights reserved.</p>
            <span aria-hidden="true" className="text-slate-400 dark:text-slate-700">·</span>
            <a
              href="/sachin-doodhwal-portfolio.zip"
              download="sachin-doodhwal-portfolio.zip"
              className="text-blue-600 dark:text-blue-400 hover:underline font-mono text-xs font-medium"
            >
              Download Full Project (.zip)
            </a>
            <span aria-hidden="true" className="text-slate-400 dark:text-slate-700">·</span>
            <a
              href="/standalone-portfolio.html"
              download="index.html"
              className="text-indigo-600 dark:text-indigo-400 hover:underline font-mono text-xs"
            >
              Download Single HTML
            </a>
          </div>

          {/* Quick Navigation Links: Home | About | Education | Skills | Projects | Contact */}
          <nav
            aria-label="Footer Quick Navigation"
            className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1"
          >
            {[
              { label: 'Home', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Education', href: '#education' },
              { label: 'Skills', href: '#skills' },
              { label: 'Projects', href: '#projects' },
              { label: 'Contact', href: '#contact' },
            ].map((link, idx, arr) => (
              <React.Fragment key={link.href}>
                <a
                  href={link.href}
                  className={`transition-colors hover:underline underline-offset-4 ${
                    isDark ? 'hover:text-white' : 'hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </a>
                {idx < arr.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="text-slate-400 dark:text-slate-600"
                  >
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </footer>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isDark={isDark}
      />
    </div>
  );
}
