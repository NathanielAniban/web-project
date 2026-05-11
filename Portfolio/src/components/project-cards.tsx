import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Athletic MMA Landing Page",
    description: "A modern e-commerce solution for fitness enthusiasts with responsive design and smooth animations.",
    image: "https://naniban-portfolio.vercel.app/assets/athletic-mma-background-CzG_p0TO.png"
  },
  {
    id: 2,
    title: "Chat Application",
    description: "A real-time messaging application with a clean and intuitive user interface.",
    image: "https://naniban-portfolio.vercel.app/assets/chatapp-background-LcMOcUNA.png"
  },
  {
    id: 3,
    title: "Authentication System",
    description: "A custom authentication solution with secure login and registration features.",
    image: "https://naniban-portfolio.vercel.app/assets/Authentication-Login-Background-BHBEDr89.png"
  },
];

export function ProjectCards() {
  return (
    <section className="max-w-5xl mx-auto px-2 py-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-center mb-10 underline decoration-teal-500 decoration-4 underline-offset-8"
      >
        My Home Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 cursor-pointer"
          >
            <div className="h-56 bg-slate-200 dark:bg-slate-700">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{project.description}</p>
                <p className="mt-4 bg-teal-500/30 max-w-20 hover:bg-teal-600 
                text-[12px] text-teal-500 font-bold px-2 py-1 rounded-full">
                 Completed
                </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}