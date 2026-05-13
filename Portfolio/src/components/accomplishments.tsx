import React, { useState } from 'react';
import TypingEffect from './typing-effect';

interface Accomplishment {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  tags: string[];
  category: 'Certification' | 'Career';
}

const accomplishments: Accomplishment[] = [
  {
    id: 1,
    title: "Technical Support Representative",
    organization: "Concentrix - Spark, Philippines",
    date: "May 2025 - Present",
    description: "1st Job, providing technical support to customers and resolving issues efficiently.",
    tags: ["Technical", "Customer Service", "Support"],
    category: "Career"
  },
  {
    id: 2,
    title: "IT Intern",
    organization: "AMA Computer College - Pasig, Philippines",
    date: "Sept 2024 - Jan 2025",
    description: "Internship experience in IT department, assisting with network maintenance and troubleshooting.",
    tags: ["IT", "Technical", "Internship"],
    category: "Career"
  },
   {
    id: 3,
    title: "Bachelor's Degree - Summa Cum Laude",
    organization: "AMA Computer College - Pasig, Philippines",
    date: "2021 - 2025",
    description: "Pursuing a degree in Information Technology, gaining knowledge in programming, networking, and database management.",
    tags: ["IT", "Technical", "Education"],
    category: "Certification"
  },
  {
   id: 4,
   title: "AI Prompt Engineering Text to Image Competition",
   organization: "AMA Computer College - Pasig, Philippines",
   date: "Feb 2024",
   description: "Participated in a competition focused on creating effective prompts for AI text-to-image generation, showcasing creativity and understanding of AI capabilities.",
   tags: ["IT", "Technical", "Education", "Prompt Engineering", "AWS"],
   category: "Certification"
 },
   {
    id: 5,
    title: "Generative AI - Exploring the World of AI Creativity.",
    organization: "AMA Computer College - Pasig, Philippines",
    date: "Aug 2023",
    description: "Attended a seminar on generative AI, learning about cloud-based services and their applications in various industries.",
    tags: ["IT", "Technical", "Education", "Alibaba Cloud"],
    category: "Certification"
  },
];

const AccomplishmentPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Certification' | 'Career'>('All');

  const filteredAccomplishments = filter === 'All' ? accomplishments : accomplishments.filter(item => item.category === filter);

  const categories = ['All', 'Certification', 'Career'];

  return (
    <div className='px-4 py-10 sm:py-14 sm:px-6 lg:px-8'>
      <div className="mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-teal-500 tracking-tight">Milestones & Wins</h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">A timeline of my professional journey and key achievements, optimized for every screen size.</p>
        </header>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category as any)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                filter === category
                  ? 'bg-teal-500 text-white shadow-lg dark:bg-teal-600'
                  : 'bg-white text-slate-700 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredAccomplishments.map((item, index) => (
            <div key={item.id} className="group animate-fade-in flex flex-col sm:flex-row sm:items-start gap-4" style={{ animationDelay: `${index * 0.15}s` }}>
              {/* Dot icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-500 text-white shadow-md flex-shrink-0 transition-transform hover:scale-110">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M12 4L4.92 11H1L5.08 4H12Z" />
                </svg>
              </div>

              {/* Content Card */}
              <div className="flex-1 p-6 rounded-3xl border dark:bg-slate-800 dark:border-slate-700 border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                  <time className="font-mono text-sm text-teal-600 dark:text-teal-300">{item.date}</time>
                  <span className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold ${
                    item.category === 'Certification' ? 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300' :
                    item.category === 'Career' ? 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300' :
                    'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
                  }`}>
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium mb-3">{item.organization}</p>
                <p className="text-sm sm:text-base leading-7 text-slate-600 dark:text-slate-300 mb-4">
                  <TypingEffect
                    text={item.description}
                    speed={10}
                    delay={3000}
                    onRepeat={false}
                    cursorType=''
                  />
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.55s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default AccomplishmentPage;