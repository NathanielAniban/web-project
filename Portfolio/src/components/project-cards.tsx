import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Athletic MMA Landing Page",
    description: "A modern e-commerce solution for fitness enthusiasts with responsive design and smooth animations.",
    image: "https://naniban-portfolio.vercel.app/assets/athletic-mma-background-CzG_p0TO.png",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/NathanielAniban/AthleticMMA",

  },
  {
    id: 2,
    title: "Chat Application",
    description: "A real-time messaging application with a clean and intuitive user interface.",
    image: "https://naniban-portfolio.vercel.app/assets/chatapp-background-LcMOcUNA.png",
    tags: ["React", "Firebase", "Node.js"],
    link: "https://chatapp-chi-three.vercel.app/",
  },
  {
    id: 3,
    title: "Authentication System",
    description: "A custom authentication solution with secure login and registration features.",
    image: "https://naniban-portfolio.vercel.app/assets/Authentication-Login-Background-BHBEDr89.png",
    tags: ["React", "Node.js", "Codeigniter"],
    link: "https://github.com/NathanielAniban/auth_w_security",
  },
];

export function ProjectCards() {
  return (
    <section className=" mx-auto px-2 py-8">
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
            className="bg-white dark:bg-slate-800 rounded-2xl 
            overflow-hidden shadow-lg border border-slate-300 
            dark:border-slate-700 cursor-pointer"
            onClick={() => project.link && window.open(project.link, '_blank')}
          >
            <div className="h-56 bg-slate-200 dark:bg-slate-700">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 border-t border-slate-300 dark:border-slate-700">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-teal-300/30 dark:bg-teal-500/30 text-[12px] text-teal-800 dark:text-teal-500 font-bold px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}