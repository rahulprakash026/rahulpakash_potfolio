import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "Python", level: 90, color: "bg-blue-500" },
      { name: "Java", level: 85, color: "bg-red-500" },
      { name: "C++", level: 80, color: "bg-purple-500" },
      { name: "JavaScript", level: 75, color: "bg-yellow-400" },
      { name: "SQL", level: 80, color: "bg-teal-500" },
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: "🚀",
    skills: [
      { name: "React.js", level: 80, color: "bg-cyan-400" },
      { name: "Tailwind CSS", level: 85, color: "bg-sky-400" },
      { name: "Node.js", level: 70, color: "bg-green-500" },
      { name: "Express.js", level: 70, color: "bg-gray-500" },
      { name: "Pandas/NumPy", level: 85, color: "bg-blue-600" },
      { name: "Scikit-Learn", level: 75, color: "bg-orange-500" }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 85, color: "bg-stone-800" },
      { name: "VS Code", level: 90, color: "bg-blue-500" },
      { name: "MongoDB", level: 75, color: "bg-green-600" },
      { name: "MySQL", level: 80, color: "bg-blue-700" },
      { name: "Firebase", level: 65, color: "bg-yellow-500" },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-bg transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 relative inline-block">
            My Skills
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded-full"></span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, ranging from core programming languages to modern web frameworks and data science tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-gray-50 dark:bg-dark-card rounded-2xl p-8 border border-gray-100 dark:border-dark-border shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div key={skillIdx} variants={itemVariants}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className={`h-2.5 rounded-full ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (skillIdx * 0.1), ease: "easeOut" }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
