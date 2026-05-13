import React from 'react';
import { motion } from 'framer-motion';

const values: Value[] = [
  { title: 'Integrity', description: 'Delivering transparent, dependable solutions with every collaboration.', icon: '⚖️' },
  { title: 'Innovation', description: 'Designing smarter systems that scale gracefully and adapt fast.', icon: '🚀' },
  { title: 'Excellence', description: 'Crafting polished digital experiences with attention to every detail.', icon: '🏆' }
];

export interface Value {
  title: string;
  description: string;
  icon: string;
}

const AboutPage: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="px-4 py-10 sm:py-14 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-500">About Me</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">A thoughtful developer who crafts reliable digital experiences.</h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-8">
            I build modern applications with clean architecture, polished interactions, and responsive design. My work blends practical technical skills with a strong focus on user experience, performance, and long-term maintainability.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="rounded-[2rem] border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl shadow-slate-900/5 p-8 sm:p-10"
          >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">What I bring to every project</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-7">
                From frontend polish to backend reliability, I deliver code that feels intentional, 
                looks clean, and works consistently across devices. By using AI technologies, I enhance user experience and streamline development, allowing me to focus on crafting thoughtful solutions that meet real needs.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 p-5 shadow-sm hover:shadow-lg transition-shadow">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-2">Focus</p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">User-centered design</p>
              </div>
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 p-5 shadow-sm hover:shadow-lg transition-shadow">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-2">Approach</p>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">Clean, maintainable code</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 shadow-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.16),_transparent_25%)] pointer-events-none" />
            <div className="relative p-10 sm:p-12 text-white">
              <p className="text-sm uppercase tracking-[0.24em] text-teal-300 mb-2">Professional DNA</p>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Building trust through thoughtful technology.</h3>
              <p className="text-base sm:text-lg leading-8 text-slate-200 opacity-90">
                I work with teams and individuals who want solutions that are both reliable and dependable. My goal is to be more than just a developer; I want to be a problem-solver and a collaborator.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16">
          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.12 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-[1.75rem] border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-7 shadow-lg shadow-slate-900/5 hover:-translate-y-1 transition-transform"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{value.title}</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-7">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
