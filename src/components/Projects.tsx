import React, { useState, useEffect } from 'react';
import { Folder, Github, ExternalLink, X, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './ui/ImageWithFallback';
import brewguardImage from '../assets/brewguard.png';

interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  fallbackImage: string;
  githubUrl: string;
  liveUrl?: string;
}

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll and listen for Escape key when modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const projects: Project[] = [
    {
      id: 'brewguard',
      title: 'BrewGuard: Coffee Disease Detection',
      category: 'Research & Mobile Application',
      tags: ['YOLO v11', 'React Native', 'Computer Vision', 'Python'],
      description: 'Comparative study of YOLO 11 configurations in real-time coffee disease detection and mobile telemetry monitoring.',
      longDescription: 'BrewGuard is an agricultural AI research initiative and cross-platform mobile application evaluating YOLO 11 configurations for real-time detection of coffee crop diseases. Published on ResearchGate, the study benchmarked deep learning models to deliver instant diagnostic telemetry to farmers.',
      features: [
        'YOLO 11 deep learning model benchmarking and disease detection analysis',
        'Real-time coffee leaf diagnostic telemetry and severity reporting',
        'Cross-platform mobile interface built with React Native for field work',
        'Peer-reviewed publication on agricultural AI model optimization'
      ],
      image: brewguardImage,
      fallbackImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      githubUrl: 'https://github.com/FTsune/kape',
      liveUrl: 'https://www.researchgate.net/publication/387503406_Brewguard_Comparative_study_of_YOLO_11_Configurations_in_Coffee_Disease_Detection_2024'
    }
  ];

  return (
    <section
      id="projects"
      className="py-16 px-6 md:px-12 lg:px-20 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
            <Folder className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest">Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Featured Project</h2>
          <p className="text-slate-600 dark:text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
            A featured engineering and research project reflecting my focus on quality, mobile architecture, and UX.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white dark:bg-zinc-900/40 border border-slate-200/50 dark:border-zinc-800/60 shadow-lg hover:shadow-2xl overflow-hidden hover:border-indigo-500/20 dark:hover:border-indigo-400/20 transition-all duration-300 flex flex-col"
            >
              <div className="aspect-video relative overflow-hidden bg-slate-100 dark:bg-zinc-950/30 cursor-pointer" onClick={() => setSelectedProject(project)}>
                <ImageWithFallback
                  src={project.image}
                  fallbackSrc={project.fallbackImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-xs font-semibold underline">Click to inspect details</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((t, i) => (
                      <span key={i} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100/30 dark:border-indigo-900/10">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-3 pt-6 border-t border-slate-100 dark:border-zinc-800/50 mt-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-750 text-slate-700 dark:text-zinc-200 transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View GitHub</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-zinc-950">
              <ImageWithFallback
                src={selectedProject.image}
                fallbackSrc={selectedProject.fallbackImage}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((t, i) => (
                  <span key={i} className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30">
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{selectedProject.title}</h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-zinc-800">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-sm bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-750 text-slate-800 dark:text-zinc-100 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>Repository</span>
                </a>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{selectedProject.liveUrl.includes('researchgate.net') ? 'Research Paper' : 'View Project'}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
