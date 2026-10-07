import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Info, Copy, Check } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  isDark: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  isDark,
}) => {
  const [copiedPlaceholder, setCopiedPlaceholder] = React.useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const handlePlaceholderAction = (label: string) => {
    setCopiedPlaceholder(label);
    setTimeout(() => setCopiedPlaceholder(null), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-2xl rounded-2xl border p-6 sm:p-8 transition-all ${
          isDark
            ? 'bg-[#111726] border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div
              className={`flex items-center gap-2 text-xs mb-1.5 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              <span className="font-mono">{project.index}</span>
              <span aria-hidden="true">·</span>
              <span>{project.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                {project.status}
              </span>
            </div>
            <h3
              id="modal-project-title"
              className="text-xl sm:text-2xl font-bold font-display tracking-tight"
            >
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className={`p-2 rounded-lg transition-colors ${
              isDark
                ? 'text-slate-400 hover:bg-slate-800 hover:text-white'
                : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Description */}
        <p
          className={`text-sm sm:text-base leading-relaxed mb-5 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {project.fullNote}
        </p>

        {/* Code / Structure Preview */}
        <div
          className={`rounded-xl border overflow-hidden mb-6 ${
            isDark ? 'bg-[#0B0F19] border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div
            className={`px-4 py-2 border-b text-xs font-mono flex items-center justify-between ${
              isDark
                ? 'border-slate-800 text-slate-400 bg-[#0D121F]'
                : 'border-slate-200 text-slate-500 bg-slate-100/80'
            }`}
          >
            <span>{project.codePreview.filename}</span>
            <span>Preview</span>
          </div>
          <pre
            className={`p-4 text-xs font-mono overflow-x-auto leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            <code>{project.codePreview.snippet}</code>
          </pre>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <div
            className={`text-xs font-medium mb-2 ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Planned & Learning Technologies
          </div>
          <div
            className={`flex flex-wrap items-center gap-y-1 text-xs sm:text-sm font-mono ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            {project.technologies.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span>{tech}</span>
                {idx < project.technologies.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={`mx-2.5 ${
                      isDark ? 'text-slate-600' : 'text-slate-400'
                    }`}
                  >
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Placeholder Notice Banner */}
        {copiedPlaceholder && (
          <div
            className={`mb-5 p-3.5 rounded-xl border flex items-start gap-2.5 text-xs sm:text-sm ${
              isDark
                ? 'bg-blue-950/40 border-blue-800/60 text-blue-200'
                : 'bg-blue-50 border-blue-200 text-blue-900'
            }`}
          >
            <Info className="w-4 h-4 shrink-0 mt-0.5 text-blue-500" />
            <div>
              <span className="font-semibold">{copiedPlaceholder}:</span> Actual URL has not been provided yet. This button serves as a clean placeholder until the repository or live deployment is published.
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => handlePlaceholderAction('GitHub Repository Placeholder')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-100'
                  : 'bg-slate-900 hover:bg-slate-800 text-white'
              }`}
            >
              <Github className="w-4 h-4" />
              <span>GitHub (Placeholder)</span>
            </button>

            {project.hasLiveDemoPlaceholder && (
              <button
                type="button"
                onClick={() => handlePlaceholderAction('Live Demo Placeholder')}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium border transition-colors whitespace-nowrap ${
                  isDark
                    ? 'border-slate-700 hover:bg-slate-800 text-slate-200'
                    : 'border-slate-300 hover:bg-slate-100 text-slate-800'
                }`}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo (Placeholder)</span>
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
              isDark
                ? 'text-slate-400 hover:text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
