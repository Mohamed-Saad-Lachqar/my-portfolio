import React from 'react';

const JobCodeWindow = ({ 
  title, 
  from, 
  to, 
  company, 
  activeIndex = 0,          // which job is currently "open"/highlighted (0-based)
  totalJobs = 1   ,          // total number of jobs → controls how many tabs to show
  className = ' ',
}) => {
  // Generate tab names: job-1.js, job-2.js, ..., job-N.js
  const tabs = Array.from({ length: totalJobs }, (_, i) => `job-${i + 1}.js`);

  return (
    <div className={`max-w-[620px] mx-auto bg-[#1e1e1e] rounded-2xl shadow-2xl overflow-hidden border border-[#333333] font-mono text-sm ${className}`}>
      {/* Window header */}
      <div className="h-11 bg-[#2d2d2d] flex items-center px-3 border-b border-[#444444]">
        {/* Traffic lights */}
        <div className="flex gap-2 mr-8">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>

        {/* Dynamic tabs */}
        <div className="flex flex-1 -ml-2 overflow-hidden pr-[3rem]">
          {tabs.map((tabName, index) => (
            <div
              key={tabName}
              className={`
                px-4 py-1.5 text-xs transition-colors rounded-t
                ${index === activeIndex 
                  ? 'font-medium text-white bg-[#1e1e1e]    relative z-10' 
                  : 'text-gray-400 hover:bg-[#3c3c3c]'
                }
              `}
            >
              {tabName}
            </div>
          ))}
        </div>
      </div>

      {/* Code area */}
      <div className="flex bg-[#252526] p-6 text-[#d4d4d4] overflow-hidden">
        {/* Line numbers */}
        <div className="w-10 text-right pr-6 text-[#6e7681] select-none leading-relaxed shrink-0">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>

        {/* Code content */}
        <div className="flex-1 leading-relaxed min-w-0 overflow-hidden">
          <div>
            <span className="text-[#c586c0]">const</span>{' '}
            <span className="text-[#d4d4d4]">job</span>{' = {'}
          </div>

          <div className="pl-6">
            <span className="text-[#9cdcfe]">title:</span>{' '}
            <span className="text-[#ce9178] break-words">"{title}"</span>,
          </div>

          <div className="pl-6">
            <span className="text-[#9cdcfe]">from:</span>{' '}
            <span className="text-[#ce9178] break-words">"{from}"</span>,
          </div>

          <div className="pl-6">
            <span className="text-[#9cdcfe]">to:</span>{' '}
            <span className="text-[#ce9178] break-words">"{to}"</span>,
          </div>

          <div className="pl-6">
            <span className="text-[#9cdcfe]">company:</span>{' '}
            <span className="text-[#ce9178] break-words">"{company}"</span>
          </div>

          <div>{'}'}</div>
        </div>
      </div>
    </div>
  );
};

export default JobCodeWindow;