import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-bg transition-colors duration-300 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded-full"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Decorative Image/Element Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-4 lg:col-span-5 flex justify-center"
          >
             <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-purple-600/80 mix-blend-overlay z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2755&auto=format&fit=crop" 
                  alt="Coding setup" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
             </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-8 lg:col-span-7 space-y-6 text-lg text-gray-700 dark:text-gray-300"
          >
            <p className="leading-relaxed">
              Hello! I'm <span className="font-semibold text-primary dark:text-blue-400">Rahul Prakash</span>, a highly motivated and self-driven B.Tech student in Computer Science and Engineering. My journey in tech is fueled by a deep curiosity for how things work and a passion for building impactful solutions.
            </p>
            <p className="leading-relaxed">
              I specialize in bridging the gap between complex backend logic and intuitive user experiences. Whether it's training a machine learning model to uncover insights from data or architecting a responsive web application, I thrive on challenges that demand both analytical thinking and creativity.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="p-6 bg-white dark:bg-dark-card rounded-xl shadow-sm border border-gray-100 dark:border-dark-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Software Development</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Crafting robust, scalable, and efficient applications.</p>
              </div>
              
              <div className="p-6 bg-white dark:bg-dark-card rounded-xl shadow-sm border border-gray-100 dark:border-dark-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-500/10 dark:bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">Data Science</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Transforming raw data into actionable intelligence.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
