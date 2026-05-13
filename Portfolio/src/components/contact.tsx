import React from 'react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <section className="px-4 py-10 sm:py-14 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-400">Contact</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold dark:text-white">Reach out anytime.</h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-8">
            I’m available by email and happy to chat about new projects, collaborations, or freelance work.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className=""
        >
          <div className="">
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.2em] dark:text-teal-400 mb-3">Get in touch</p>
            </div>

            <div className="grid gap-5">
              <div className="rounded-3xl border border-slate-800 dark:bg-slate-950/80 p-5">
                <p className="text-xs uppercase tracking-[0.2em] dark:text-slate-500 mb-2">Email</p>
                <a href="mailto:nathanielaniban.dev@gmail.com" className="text-lg dark:text-white 
                hover:text-teal-400 transition-colors break-words">
                  nathanielaniban.dev@gmail.com
                </a>
              </div>

              <div className="rounded-3xl border border-slate-800 dark:bg-slate-950/80 p-5">
                <p className="text-xs uppercase tracking-[0.2em] dark:text-slate-500 mb-2">Location</p>
                <p className="text-lg dark:text-slate-200">Rizal, Philippines</p>
              </div>

              <div className="rounded-3xl border border-slate-800 dark:bg-slate-950/80 p-5">
                <p className="text-xs uppercase tracking-[0.2em] dark:text-slate-500 mb-2">Availability</p>
                <p className="text-lg dark:text-slate-200">Open to freelance and full-time opportunities</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
