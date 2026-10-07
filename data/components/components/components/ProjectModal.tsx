import React from 'react';
import { X } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  isDark: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, isDark }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className={`relative w-full max-w-lg rounded-2xl border p-6 sm:p-8 shadow-2xl transition-all ${
        isDark ? 'bg-[#111726] border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-xs font-mono text-blue-500 mb-2">{project.categoryLabel}</div>
        <h3 className="text-2xl font-bold font-display mb-3">{project.title}</h3>
        <p className="text-sm leading-relaxed mb-6 text-slate-400">{project.shortDescription}</p>

        <div className="mb-6">
          <div className="text-xs font-mono text-slate-400 mb-2">Technologies Used:</div>
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
          <button onClick={onClose} className="px-4 py-2 rounded-lg text-xs font-medium border border-slate-700 hover:bg-slate-800">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
