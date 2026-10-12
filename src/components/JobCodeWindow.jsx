import React, { useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // ✅ move outside

const JobCodeWindow = ({
    title,
    from,
    to,
    company,
    activeIndex = 0,
    totalJobs = 1,
}) => {

    const containerRef = useRef(null); // ✅ ref

    const tabs = Array.from({ length: totalJobs }, (_, i) => `job-${i + 1}.js`);

useLayoutEffect(() => {
    const el = containerRef.current;

    const ctx = gsap.context(() => {
      gsap.set(el, { opacity: 0, y: 100 });

      gsap.to(el, {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top 60%",
          scrub: 1,
        }
      });
    }, el);

 
    

    return () => ctx.revert();
  }, []);

    return (
        <div
            ref={containerRef} // ✅ attach ref
            className={`max-w-[620px]  mx-auto bg-[#1e1e1e] rounded-2xl shadow-2xl overflow-hidden border border-[#333333] font-mono text-sm ${activeIndex % 2 === 1 ? 'rotate-4' : '-rotate-4'}`}
        >
            {/* Window header */}
            <div className="h-11 bg-[#2d2d2d] flex items-center px-3 border-b border-[#444444]">
                <div className="flex gap-2 mr-8">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>

                <div className="flex flex-1 -ml-2 overflow-hidden pr-[3rem]">
                    {tabs.map((tabName, index) => (
                        <div
                            key={tabName}
                            className={`px-4 py-1.5 text-xs transition-colors rounded-t ${
                                index === activeIndex
                                    ? 'font-medium text-white bg-[#1e1e1e] relative z-10'
                                    : 'text-gray-400 hover:bg-[#3c3c3c]'
                            }`}
                        >
                            {tabName}
                        </div>
                    ))}
                </div>
            </div>

            {/* Code area */}
            <div className="flex bg-[#252526] p-6 text-[#d4d4d4] overflow-hidden">
                <div className="w-10 text-right pr-6 text-[#6e7681] select-none leading-relaxed shrink-0">
                    <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div>
                </div>

                <div className="flex-1 leading-relaxed min-w-0 overflow-hidden">
                    <div>
                        <span className="text-[#c586c0]">const</span>{' '}
                        <span>job</span>{' = {'}
                    </div>

                    <div className="pl-6">
                        <span className="text-[#9cdcfe]">title:</span>{' '}
                        <span className="text-[#ce9178]">"{title}"</span>,
                    </div>

                    <div className="pl-6">
                        <span className="text-[#9cdcfe]">from:</span>{' '}
                        <span className="text-[#ce9178]">"{from}"</span>,
                    </div>

                    <div className="pl-6">
                        <span className="text-[#9cdcfe]">to:</span>{' '}
                        <span className="text-[#ce9178]">"{to}"</span>,
                    </div>

                    <div className="pl-6">
                        <span className="text-[#9cdcfe]">company:</span>{' '}
                        <span className="text-[#ce9178]">"{company}"</span>
                    </div>

                    <div>{'}'}</div>
                </div>
            </div>
        </div>
    );
};

export default JobCodeWindow;