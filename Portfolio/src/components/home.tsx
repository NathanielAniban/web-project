import Carousel from './carousel';
import { Header } from './header';
import { motion } from 'framer-motion';
export function Homepage() {

    return(
        <>
          <Header />
          <Carousel/>
          
            {/* Projects Section */}
            <section className="max-w-6xl mx-auto px-6 py-16">
              <h2 className="text-2xl font-bold text-center mb-10 underline decoration-teal-500 decoration-4 underline-offset-8">My Projects</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[1, 2,3,4,5].map((proj) => (
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