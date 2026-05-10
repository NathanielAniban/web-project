import { ExternalLink, ArrowRight, } from 'lucide-react';
import { FaFacebook , FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

export function Homepage() {

      const skills = [
            { name: 'MySQL', icon: '🐬' }, { name: 'PHP', icon: '🐘' },
            { name: 'Firebase', icon: '🔥' }, { name: 'Express', icon: 'ex' },
            { name: 'React', icon: '⚛️' }, { name: 'Tailwind', icon: '🌊' }
        ];


    return(
        <>
         <header className="max-w-4xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
              >
                <div className="w-48 h-48 rounded-full border-4 border-teal-500 overflow-hidden shadow-2xl">
                  <img src="https://naniban-portfolio.vercel.app/assets/Formal-photo-CtRwKe1E.jpg" alt="Nathaniel" className="w-full h-full object-cover" />
                </div>
              </motion.div>

              <div className="text-center md:text-left">
                <p className="text-teal-500 font-medium tracking-wide">Hello there!</p>
                <h1 className="text-5xl font-bold mb-2">Nathaniel Aniban</h1>
                <p className="text-xl text-slate-500 dark:text-slate-400 mb-6">Full Stack Developer | Technical Support</p>
                
                {
                  true &&
                  <div className="flex gap-4 justify-center md:justify-start mb-8">
                    <FaFacebook className="hover:text-teal-500 cursor-pointer transition" />
                    <FaInstagram className="hover:text-teal-500 cursor-pointer transition" />
                    <FaLinkedin className="hover:text-teal-500 cursor-pointer transition" />
                    <FaGithub className="hover:text-teal-500 cursor-pointer transition" />
                  </div>
                }

                <div className="flex gap-4 justify-center md:justify-start">
                  <button className="bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 flex items-center gap-2">
                    Visit My Credly <ExternalLink size={18} />
                  </button>
                  <button className="border border-slate-300 dark:border-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-200 dark:hover:bg-slate-800 flex items-center gap-2">
                    Learn More <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </header>

            {/* Skills Grid */}
            <section className="max-w-5xl mx-auto px-6 py-16">
              <h2 className="text-2xl font-bold text-center mb-10 underline decoration-teal-500 decoration-4 underline-offset-8">Web Related Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center hover:shadow-md transition">
                    <span className="text-3xl mb-2">{skill.icon}</span>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Projects Section */}
            <section className="max-w-6xl mx-auto px-6 py-16">
              <h2 className="text-2xl font-bold text-center mb-10 underline decoration-teal-500 decoration-4 underline-offset-8">My Projects</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[1, 2].map((proj) => (
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700"
                  >
                    <div className="h-56 bg-slate-200 dark:bg-slate-700">
                      {/* Image Placeholder */}
                      <img src={`https://via.placeholder.com/600x400`} alt="project" className="w-full h-full object-cover opacity-80" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">Athletic MMA Landing Page</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">A modern e-commerce solution for fitness enthusiasts.</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
        </>
    )
}