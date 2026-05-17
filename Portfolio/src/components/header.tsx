import { ExternalLink, Download, } from 'lucide-react';
import { FaFacebook , FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import TypingEffect from './typing-effect';
import myPortfolio from '../assets/my-portfolio.pdf';
import FormalPhoto from '../assets/formal-photo.png';

export function Header() {
    return(
        <>
         <header className="max-w-4xl mx-auto px-6 md:py-12 flex flex-col md:flex-row items-center gap-2 md:gap-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
              >
                <div className="w-48 h-48 hover:scale-105 rounded-full border-4 
                border-teal-500 overflow-hidden shadow-2xl transition transition-all duration-300">
                  <img src={FormalPhoto} alt="Nathaniel" className="w-full h-full object-cover" />
                </div>
              </motion.div>

              <div className="text-center md:text-left">
                <p className="text-teal-500 font-medium tracking-wide">Hello there!</p>
                <TypingEffect
                  styleProp="text-2xl md:text-5xl font-bold mb-2 font-mono"
                  text="Nathaniel Aniban"
                  speed={50}
                  delay={3000}
                  onRepeat={false}
                  cursorBlink={true}
                  cursorType="_"
                />
                <p className="text-sm md:text-xl text-slate-500 dark:text-slate-400 mb-2 font-mono">Full Stack Developer | Technical Support</p>
                <p className="text-slate-600 dark:text-slate-300 leading-7 mb-6">
                  Building modern applications with clean structure, using AI to enhance user experience, and crafting polished interactions with responsive design.
               </p>
               
                  <div className="flex gap-4 justify-center md:justify-start mb-8">
                    <a href="https://www.facebook.com/n.aniban.dev" target="_blank" rel="noopener noreferrer">
                      <FaFacebook className="hover:text-teal-500 cursor-pointer transition" />
                    </a>
                    <a href="https://www.instagram.com/urMirr0r__" target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="hover:text-teal-500 cursor-pointer transition" />
                    </a>
                    <a href="https://www.linkedin.com/in/nathaniel-aniban-48643a287/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="hover:text-teal-500 cursor-pointer transition" />
                    </a>
                    <a href="https://github.com/NathanielAniban" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="hover:text-teal-500 cursor-pointer transition" />
                    </a>
                  </div>
                

                <div className="flex gap-4 justify-center md:justify-start">
                  <a href='https://www.credly.com/users/nathaniel-aniban/badges'
                    target='_blank'  
                    className="bg-teal-700 text-white text-xs md:text-base px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 flex items-center gap-2">
                    Visit My Credly <ExternalLink size={18} />
                  </a>
                  <a href={myPortfolio} target='_blank' className="border border-slate-300 dark:border-slate-700 
                  text-xs md:text-base px-6 py-3 rounded-lg font-semibold hover:bg-slate-200 dark:hover:bg-slate-800 flex items-center gap-2">
                    Download CV <Download size={18} />
                  </a>
                </div>
              </div>
          </header>
        </>
    )
}