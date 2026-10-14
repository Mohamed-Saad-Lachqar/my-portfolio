
import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasVideo =
    project.videoId &&
    !project.videoId.startsWith("YOUR_");

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center
        justify-center bg-black/80 p-3 backdrop-blur-sm
        sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative flex h-[90dvh] w-full max-w-7xl
          flex-col overflow-hidden rounded-2xl
          border border-white/10 bg-[#1b1a1a] text-white
          shadow-2xl md:h-[80vh] md:w-[80vw] lg:flex-row"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-3 top-3 z-20
            flex h-10 w-10 items-center justify-center
            rounded-full bg-black/70 text-3xl text-white
            transition hover:bg-[#a652f4]"
        >
          &times;
        </button>

        {/* Video section */}
        <div
          className="w-full shrink-0 bg-black lg:h-full
            lg:w-[58%] lg:overflow-y-auto"
        >
          {hasVideo ? (
            <div className="aspect-video w-full lg:sticky lg:top-0">
              <iframe
                key={project.videoId}
                src={`https://www.youtube-nocookie.com/embed/${project.videoId}`}
                title={`${project.title} project video`}
                className="h-full w-full"
                loading="eager"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture;
                  web-share"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="flex aspect-video w-full items-center
              justify-center bg-[#242222] p-6 text-center
              text-white/50">
              <p>Project video coming soon.</p>
            </div>
          )}
        </div>

        {/* Project information */}
        <div className="min-h-0 flex-1 overflow-y-auto p-6 sm:p-8">
          <p className="mb-3 text-sm uppercase tracking-[0.2em]
            text-[#a652f4]">
            Project Showcase
          </p>

          <h2
            id="project-modal-title"
            className="mb-5 text-3xl font-bold sm:text-4xl"
          >
            {project.title}
          </h2>

          <p className="leading-7 text-white/70">
            {project.description}
          </p>

          <h3 className="mb-3 mt-8 font-semibold">
            Technologies
          </h3>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border
                  border-[#a652f4]/30 bg-[#a652f4]/10
                  px-3 py-1.5 text-sm text-purple-200"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Optional project links */}
          {(project.liveDemo || project.sourceCode) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-[#a652f4] px-5 py-3
                    font-medium transition hover:bg-purple-500"
                >
                  Live Demo 
                </a>
              )}

              {project.sourceCode && (
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/20
                    px-5 py-3 font-medium transition
                    hover:bg-white/10"
                >
                  Source Code 
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
