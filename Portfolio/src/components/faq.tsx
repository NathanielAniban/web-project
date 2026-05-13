import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import TypingEffect from './typing-effect';
interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is your experience in web development?",
    answer: "I have several years of experience building full-stack web applications using modern technologies like PHP, React, Node.js, and various databases."
  },
  {
    question: "Do you work with both front-end and back-end?",
    answer: "Yes, I specialize in full-stack development, handling everything from user interfaces to server-side logic and database management."
  },
  {
    question: "What technologies do you commonly use?",
    answer: "I frequently work with JavaScript/TypeScript, React, Node.js, Express, Firebase, MongoDB, PHP frameworks like CodeIgniter and Laravel, and cloud services like AWS and Vercel."
  },
  {
    question: "How do you approach project collaboration?",
    answer: "I believe in clear communication, agile methodologies, and regular check-ins to ensure projects stay on track and meet client expectations."
  },
  {
    question: "Can you provide examples of your work?",
    answer: "Absolutely! You can view my projects in the portfolio section above, or visit my GitHub for more code samples and repositories."
  }
  // Add more FAQ items here as needed
];

export function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-10 sm:py-14 sm:px-6 lg:px-8">
      <motion.h2 
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="text-3xl font-bold text-center mb-12 underline decoration-teal-500 decoration-4 underline-offset-8"
      >
        Frequently Asked Questions
      </motion.h2>
      
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100, damping: 5 }}
            className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              <span className="font-semibold text-slate-900 dark:text-slate-100">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-teal-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-teal-500" />
              )}
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0, scale: 0.9 }}
                  animate={{ opacity: 1, height: "auto", scale: 1 }}
                  exit={{ opacity: 0, height: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-5">
                    <TypingEffect
                      styleProp="text-slate-600 dark:text-slate-400 leading-relaxed"
                      text={faq.answer}
                      speed={5}
                      delay={3000}
                      onRepeat={false}
                      cursorBlink={true}
                      cursorType="_"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}