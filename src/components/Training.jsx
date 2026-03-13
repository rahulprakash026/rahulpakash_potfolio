import React from 'react';
import { motion } from 'framer-motion';
import { Database, BarChart3, LineChart, Code2 } from 'lucide-react';

const Training = () => {
  return (
    <section id="training" className="py-20 bg-white dark:bg-dark-card transition-colors duration-300 relative border-t border-gray-100 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 relative inline-block">
            Training & Workshops
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded-full"></span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto bg-gray-50 dark:bg-dark-bg p-8 md:p-10 rounded-3xl border border-primary/20 shadow-xl relative overflow-hidden group"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-colors duration-500"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
             
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg text-2xl font-bold italic">
               D2D
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                From Data to Decisions: A Hands-On Approach to Data Science
              </h3>
              <p className="text-primary dark:text-blue-400 font-medium mb-6">Comprehensive Data Analytics & ML Training Program</p>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                An intensive hands-on training focusing on extracting actionable insights from raw data. The curriculum covered data extraction, visualization, and building predictive models.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 bg-white dark:bg-dark-card p-4 rounded-xl shadow-sm border border-gray-100 dark:border-dark-border">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Database size={20} />
                  </div>
                  <span className="font-medium text-slate-700 dark:text-gray-200">SQL & Databases</span>
                </div>
                
                <div className="flex items-center space-x-3 bg-white dark:bg-dark-card p-4 rounded-xl shadow-sm border border-gray-100 dark:border-dark-border">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-600 dark:text-green-400">
                    <BarChart3 size={20} />
                  </div>
                  <span className="font-medium text-slate-700 dark:text-gray-200">Excel Analytics & Power BI</span>
                </div>

                <div className="flex items-center space-x-3 bg-white dark:bg-dark-card p-4 rounded-xl shadow-sm border border-gray-100 dark:border-dark-border">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <LineChart size={20} />
                  </div>
                  <span className="font-medium text-slate-700 dark:text-gray-200">Exploratory Data Analysis</span>
                </div>

                <div className="flex items-center space-x-3 bg-white dark:bg-dark-card p-4 rounded-xl shadow-sm border border-gray-100 dark:border-dark-border">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary dark:text-blue-400">
                    <Code2 size={20} />
                  </div>
                  <span className="font-medium text-slate-700 dark:text-gray-200">Feature Engineering & ML</span>
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Training;
