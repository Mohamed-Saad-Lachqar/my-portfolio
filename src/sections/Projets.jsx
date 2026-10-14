
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projects } from "../data/projects";
import ProjectModal from "../components/ProjectModal";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Projets() {
  const [selectedProject, setSelectedProject] = useState(null);

  const CardsRef = useRef([]);
  const Spotlight = useRef();

  const CardsFinalPos = [
    [-200, -160],
    [-50, -140],
    [-160, 40],
    [20, 30],
    [120, -160],
  ];

  useGSAP(
    () => {
      const Cards = CardsRef.current;

      const initialRotations = [5, -3, 3.5, -1, 5];
      const phaseOneStartOffsets = [0, 0.1, 0.2, 0.3, 0.4];
      const phaseTwoStartOffsets = [0.5, 0.55, 0.6, 0.65, 0.7];

      ScrollTrigger.create({
        trigger: Spotlight.current,
        start: "top top",
        end: `+${window.innerHeight * 4}px`,
        pin: true,
        pinSpacing: true,
        scrub: 1,

        onUpdate: (self) => {
          const progress = self.progress;

          Cards.forEach((card, index) => {
            if (!card) return;

            const initialRotation = initialRotations[index];
            const phaseOneStart = phaseOneStartOffsets[index];

            const phaseOneEnd = Math.min(
              phaseOneStart +
                (0.5 - phaseOneStart) * 0.9,
              0.5
            );

            let x = -50;
            let y;
            let rotation;

            // Phase 1: cards rise into view
            if (progress < phaseOneStart) {
              y = 200;
              rotation = initialRotation;
            } else if (progress <= 0.5) {
              let phaseOneProgress;

              if (progress >= phaseOneEnd) {
                phaseOneProgress = 1;
              } else {
                const linearProgress =
                  (progress - phaseOneStart) /
                  (phaseOneEnd - phaseOneStart);

                phaseOneProgress =
                  1 - Math.pow(1 - linearProgress, 3);
              }

              y = 200 - phaseOneProgress * 250;
              rotation = initialRotation;
            } else {
              y = -50;
              rotation = initialRotation;
            }

            // Phase 2: cards move into their final positions
            const phaseTwoStart = phaseTwoStartOffsets[index];

            const phaseTwoEnd = Math.min(
              phaseTwoStart +
                (0.95 - phaseTwoStart) * 0.9,
              0.95
            );

            const [finalX, finalY] = CardsFinalPos[index];

            if (
              progress >= phaseTwoStart &&
              progress <= 0.95
            ) {
              let phaseTwoProgress;

              if (progress >= phaseTwoEnd) {
                phaseTwoProgress = 1;
              } else {
                const linearProgress =
                  (progress - phaseTwoStart) /
                  (phaseTwoEnd - phaseTwoStart);

                phaseTwoProgress =
                  1 - Math.pow(1 - linearProgress, 3);
              }

              x = -50 + (finalX + 50) * phaseTwoProgress;
              y = -50 + (finalY + 50) * phaseTwoProgress;

              rotation =
                initialRotation * (1 - phaseTwoProgress);
            } else if (progress > 0.95) {
              x = finalX;
              y = finalY;
              rotation = 0;
            }

            gsap.set(card, {
              transform:
                `translate(${x}%, ${y}%) rotate(${rotation}deg)`,
            });
          });
        },
      });
    },
    { scope: Spotlight }
  );

  return (
    <>
      <section
        ref={Spotlight}
        className="relative flex min-h-svh w-full
          flex-col items-center justify-center
          overflow-hidden bg-(--light-color)
          text-(--dark-color)"
      >
        <h1
          className="text-center text-[5rem]
            font-(family-name:--font-bebas) font-semibold
            max-md:text-[3rem]"
        >
          <span className="highlight">some</span> of{" "}
          <span className="highlight">my</span> work :
        </h1>

        {/* Animated project cards */}
        <div className="absolute left-0 top-0 h-full w-full">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(element) => {
                CardsRef.current[index] = element;
              }}
              role="button"
              tabIndex={0}
              aria-label={`View ${project.title} project details`}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" ||
                  event.key === " "
                ) {
                  event.preventDefault();
                  setSelectedProject(project);
                }
              }}
              className="group absolute left-[50%] top-[50%]
                aspect-[7/4] w-[20rem] cursor-pointer
                overflow-hidden rounded-2xl
                translate-x-[-50%] translate-y-[200%]
                focus-visible:outline-2
                focus-visible:outline-[#a652f4]"
            >
              {/* Purple hover overlay */}
              <div
                className="absolute bottom-0 left-0 z-10
                  flex h-0 w-full items-center justify-center
                  overflow-hidden bg-gradient-to-b
                  from-black/80 to-[#a652f4]
                  text-(--light-color)
                  duration-[.5s] group-hover:h-full"
              >
                <h2 className="text-xl font-semibold">
                  See more 
                </h2>
              </div>

              {/* Project image */}
              <img
                src={project.image}
                alt={`${project.title} preview`}
                draggable="false"
                className="h-full w-full object-cover
                  duration-[.5s] group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Keep the modal outside the pinned, overflow-hidden section */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
