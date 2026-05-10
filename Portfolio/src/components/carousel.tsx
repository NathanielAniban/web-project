import React, { useMemo } from 'react';
import { SiExpress, SiReact, SiNodedotjs, SiFirebase, 
    SiGitforwindows, SiApache, SiMysql,
    SiCodeigniter, SiJquery, SiBootstrap, SiTailwindcss

} from 'react-icons/si';

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

const mockTechStack: TechItem[] = [
  { name: "Firebase", icon: <SiFirebase/>},
  { name: "Express", icon: <SiExpress/> },
  { name: "React", icon: <SiReact/> },
  { name: "Node.js", icon: <SiNodedotjs/> },
  { name: "Windows", icon: <SiGitforwindows/> },
  { name: "Apache", icon: <SiApache/> },
  { name: "MySQL", icon: <SiMysql/> },
  { name: "PHP", icon: <SiGitforwindows/> },  
];

const Frameworks: TechItem[] = [
    { name: "CodeIgniter 4", icon: <SiCodeigniter/> },
    { name: "Jquery", icon: <SiJquery/> },
    { name: "Bootstrap", icon: <SiBootstrap/> },
    { name: "Tailwind CSS", icon: <SiTailwindcss/> },
];

const Carousel: React.FC = () => {
  const marqueeItems = useMemo(() => [...mockTechStack, ...mockTechStack], []);
  const marqueeFrameworks = useMemo(() => [...Frameworks, ...Frameworks, ...Frameworks], []);
  
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-14 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mb-4 text-center">
        <span className="inline-flex rounded-full bg-teal-100 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">
          Featured Skills
        </span>
        <h2 className='text-2xl sm:text-3xl font-bold text-slate-900 dark:text-green-300 mt-2 mb-4 transition-colors duration-300'>
          Web Related Skills
        </h2>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {/* Row Wrapper with Gradient Mask for UI Friendliness */}
        {[marqueeItems, marqueeFrameworks].map((items, rowIndex) => (
          <div 
            key={rowIndex}
            className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]"
          >
            <div className={`flex animate-marquee items-center gap-3 sm:gap-4 py-4 px-2 hover:[animation-play-state:paused]`}>
              {items.map((lang, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 min-w-[40vw] sm:min-w-[30vw] md:min-w-[25vw] lg:min-w-[20vw] xl:min-w-[15vw]"
                  title={lang.name}
                >
                  <div className="flex h-full flex-col items-center justify-center gap-2 sm:gap-4 rounded-2xl sm:rounded-[1.75rem] border border-slate-200 bg-white p-3 sm:p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-400 hover:bg-teal-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-400/60 dark:hover:bg-slate-950">
                    {/* Responsive Icon Sizes */}
                    <div className="flex h-12 w-12 sm:h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-2xl text-teal-600 shadow-inner dark:bg-slate-800 dark:text-teal-300 sm:text-4xl">
                      {lang.icon}
                    </div>
                    <p className="text-[10px] sm:text-xs font-medium text-slate-700 dark:text-slate-300 transition-colors truncate w-full px-1">
                      {lang.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;