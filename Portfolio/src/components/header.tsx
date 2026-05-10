import { ExternalLink, ArrowRight, } from 'lucide-react';
import { FaFacebook , FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';


export function Header() {
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
        </>
    )
}