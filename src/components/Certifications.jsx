import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: "Computational Theory: Language Principle & Finite Automata Theory",
    issuer: "Infosys Springboard",
    date: "",
    description: "Certification in Computational Theory and Finite Automata.",
    link: null
  },
  {
    id: 2,
    title: "ChatGPT-4 Prompt Engineering",
    issuer: "Infosys Springboard",
    date: "",
    description: "Certification in advanced prompt engineering techniques for ChatGPT-4.",
    link: null
  },
  {
    id: 3,
    title: "From Data to Decisions: Data Science",
    issuer: "LPU",
    date: "",
    description: "Comprehensive training in Data Science methodologies.",
    link: null
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-dark-bg transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 relative inline-block">
            Certifications
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded-full"></span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuous learning is core to my journey. Here are some of my professional certifications and achievements.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0 mb-8 md:mb-12 last:mb-0"
            >
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-[-3rem] w-px bg-gray-200 dark:bg-dark-border transform -translate-x-1/2 last:hidden"></div>
              
              <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-2 md:top-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-dark-bg transform -translate-x-1.5 md:-translate-x-1/2 md:-translate-y-1/2 z-10 shadow-sm shadow-primary/50"></div>
                
                {/* Content Card */}
                <div className="md:w-[45%]">
                  <div className="bg-gray-50 dark:bg-dark-card p-6 rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors"></div>
                    
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors pr-4">
                        {cert.title}
                      </h3>
                      <Award className="text-primary/50 flex-shrink-0" />
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-slate-700 px-2 py-0.5 rounded">
                        {cert.issuer}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        {cert.date}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                      {cert.description}
                    </p>
                    
                    {cert.link && (
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-hover transition-colors"
                      >
                         View Credential <ExternalLink size={14} className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
