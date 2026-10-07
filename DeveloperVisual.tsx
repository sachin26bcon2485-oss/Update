import React, { useState } from 'react';
import { Terminal, Code2, Cpu, Copy, Check } from 'lucide-react';

interface DeveloperVisualProps {
  isDark: boolean;
}

export const DeveloperVisual: React.FC<DeveloperVisualProps> = ({ isDark }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'c_code' | 'roadmap'>('profile');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    profile: `// student_profile.c — JECRC University, Jaipur
#include <stdio.h>

struct StudentDeveloper {
    const char *name;
    const char *degree;
    const char *standing;
    const char *institution;
};

int main(void) {
    struct StudentDeveloper sachin = {
        .name        = "Sachin Doodhwal",
        .degree      = "B.Tech Computer Science & Engineering",
        .standing    = "1st Year, 1st Semester",
        .institution = "JECRC University, Jaipur"
    };

    printf("Hello! I am %s.\\n", sachin.name);
    printf("Building strong programming fundamentals.\\n");
    return 0;
}`,
    c_code: `# learning_focus.py — Current Study & Exploration
student_name = "Sachin Doodhwal"

programming_foundations = [
    "C Programming",
    "Programming Fundamentals"
]

currently_learning = [
    "C++",
    "Python",
    "Data Structures & Algorithms",
    "Web Development",
    "Git & GitHub"
]

areas_of_interest = [
    "Artificial Intelligence",
    "Machine Learning",
    "Software Development",
    "Generative AI"
]`,
    roadmap: `Academic & Learning Roadmap (2026 – Present)
──────────────────────────────────────────────────
01. Current Stage
    1st Year · 1st Semester B.Tech CSE
    JECRC University, Jaipur, Rajasthan

02. Core Focus
    Mastering problem decomposition in C,
    exploring C++ & Python syntax, and learning
    responsive web development & Git workflows.

03. Future Exploration
    Artificial Intelligence, Machine Learning,
    and building practical student software.`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div
      className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
        isDark
          ? 'bg-[#111726] border-slate-800/90 shadow-2xl shadow-blue-950/20'
          : 'bg-white border-slate-200/90 shadow-xl shadow-slate-200/50'
      }`}
    >
      {/* Top Editor Header */}
      <div
        className={`flex items-center justify-between px-4 py-3 border-b ${
          isDark ? 'bg-[#0D121F] border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-400/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-400/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-400/40" />
          <span
            className={`ml-2 text-xs font-mono ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            sachin-doodhwal / workspace
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy code snippet"
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors whitespace-nowrap ${
            isDark
              ? 'text-slate-300 hover:bg-slate-800 hover:text-white'
              : 'text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Interactive File Tabs */}
      <div
        className={`flex items-center gap-1 px-3 pt-2 border-b overflow-x-auto ${
          isDark ? 'bg-[#0D121F]/60 border-slate-800' : 'bg-slate-100/70 border-slate-200'
        }`}
      >
        <button
          type="button"
          onClick={() => setActiveTab('profile')}
          className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono border-b-2 transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'profile'
              ? isDark
                ? 'border-blue-400 text-blue-300 bg-[#111726]'
                : 'border-blue-600 text-blue-700 bg-white'
              : isDark
              ? 'border-transparent text-slate-400 hover:text-slate-200'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>student_profile.c</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('c_code')}
          className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono border-b-2 transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'c_code'
              ? isDark
                ? 'border-indigo-400 text-indigo-300 bg-[#111726]'
                : 'border-indigo-600 text-indigo-700 bg-white'
              : isDark
              ? 'border-transparent text-slate-400 hover:text-slate-200'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>learning_focus.py</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('roadmap')}
          className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono border-b-2 transition-colors whitespace-nowrap shrink-0 ${
            activeTab === 'roadmap'
              ? isDark
                ? 'border-purple-400 text-purple-300 bg-[#111726]'
                : 'border-purple-600 text-purple-700 bg-white'
              : isDark
              ? 'border-transparent text-slate-400 hover:text-slate-200'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>roadmap.txt</span>
        </button>
      </div>

      {/* Code Content */}
      <div className="p-5 overflow-x-auto">
        <pre
          className={`text-xs sm:text-[13px] leading-relaxed font-mono ${
            isDark ? 'text-slate-200' : 'text-slate-800'
          }`}
        >
          <code>{codeSnippets[activeTab]}</code>
        </pre>
      </div>

      {/* Quiet Academic Footer Bar inside the card */}
      <div
        className={`px-5 py-3 border-t flex flex-wrap items-center justify-between gap-2 text-xs ${
          isDark
            ? 'bg-[#0D121F]/80 border-slate-800/80 text-slate-400'
            : 'bg-slate-50 border-slate-200/80 text-slate-600'
        }`}
      >
        <div className="flex items-center gap-2">
          <span>B.Tech CSE</span>
          <span aria-hidden="true">·</span>
          <span>1st Year (Sem 1)</span>
          <span aria-hidden="true">·</span>
          <span>JECRC University</span>
        </div>
        <span className="font-mono text-[11px] text-blue-600 dark:text-blue-400">
          Jaipur, Rajasthan
        </span>
      </div>
    </div>
  );
};
