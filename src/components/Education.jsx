import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School } from 'lucide-react';

const educationData = [
  {
    id: 1,
    degree: "B.Tech Computer Science and Engineering",
    institution: "Lovely Professional University",
    score: "CGPA: 7.86",
    duration: "2023 – 2027",
    icon: <GraduationCap size={24} />
  },
  {
    id: 2,
    degree: "Intermediate",
    institution: "S.A.N.S College, Motihari",
    score: "Score: 71%",
    duration: "Completed",
    icon: <BookOpen size={24} />
  },
  {
    id: 3,
    degree: "Matriculation",
    institution: "Levana Public School, Chakia",
    score: "Score: 76.6%",
    duration: "Completed",
    icon: <School size={24} />
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-dark-card transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 relative inline-block">
            Education
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded-full"></span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic timeline and qualifications.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0 mb-8 md:mb-12 last:mb-0"
            >
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-[-3rem] w-px bg-gray-200 dark:bg-dark-border transform -translate-x-1/2 last:hidden"></div>

              <div className={`md:flex items-center justify-between w-full ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Timeline Dot with Icon */}
                <div className="absolute left-0 md:left-1/2 top-2 md:top-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center transform -translate-x-[22px] md:-translate-x-1/2 md:-translate-y-1/2 z-10 shadow-lg shadow-primary/30">
                  {item.icon}
                </div>

                {/* Content Card */}
                <div className="md:w-[45%]">
                  <div className="bg-gray-50 dark:bg-dark-bg p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors"></div>

                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                      {item.degree}
                    </h3>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                        {item.institution}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-slate-700 px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">
                        {item.duration}
                      </span>
                    </div>

                    <div className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 font-semibold text-sm">
                      {item.score}
                    </div>
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

export default Education;
