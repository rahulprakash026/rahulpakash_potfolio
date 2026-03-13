import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Code } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-dark-bg transition-colors duration-300 relative">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 relative inline-block">
            Achievements
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded-full"></span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Milestones reached through consistent practice and dedication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           {/* Achievement 1 */}
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-dark-card p-8 rounded-3xl border border-gray-100 dark:border-dark-border shadow-sm hover:shadow-xl transition-all duration-300 group flex items-center gap-6"
           >
              <div className="w-16 h-16 flex-shrink-0 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center text-yellow-500 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Code size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">100+ Coding Problems Solved</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Successfully tackled complex algorithmic challenges across competitive programming platforms including <span className="font-semibold text-primary dark:text-blue-400">LeetCode</span> and <span className="font-semibold text-primary dark:text-blue-400">HackerRank</span>.
                </p>
              </div>
           </motion.div>

           {/* Achievement 2 */}
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-dark-card p-8 rounded-3xl border border-gray-100 dark:border-dark-border shadow-sm hover:shadow-xl transition-all duration-300 group flex items-center gap-6"
           >
              <div className="w-16 h-16 flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-500 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Star size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">5-Star Python Badge</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Earned the highest <span className="font-semibold text-yellow-500">5-Star rating</span> in Python programming on <span className="font-semibold text-primary dark:text-blue-400">HackerRank</span>, demonstrating advanced proficiency.
                </p>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
