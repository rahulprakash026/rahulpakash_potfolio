import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary/30 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500/30 dark:bg-pink-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side (Text Content) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-6 text-center lg:text-left"
          >
            <div>
              <motion.h1
                className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Rahul Prakash
              </motion.h1>
              <motion.h2
                className="text-xl md:text-2xl font-medium text-primary dark:text-blue-400 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
               Aspiring Software Engineer | Data Science Enthusiast
              </motion.h2>
              <motion.p
                className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Passionate Computer Science student skilled in Python, Java, C++, and Data Science. Experienced in building machine learning models, data analytics projects, and web applications.
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-200 bg-primary border-transparent rounded-full hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-lg hover:shadow-primary/50"
              >
                View Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://drive.google.com/file/d/1yaTKKZ8JTN5IASc9fJcAl_nXk0tukMyL/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 font-semibold text-slate-900 dark:text-white transition-all duration-200 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-full hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 shadow-sm"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </a>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer inline-flex items-center justify-center px-8 py-3 font-semibold text-gray-700 dark:text-gray-300 transition-all duration-200 hover:text-primary dark:hover:text-primary underline-offset-4 hover:underline focus:outline-none"
              >
                Contact Me
              </Link>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-6 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a
                href="https://github.com/rahulprakash026"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors transform hover:scale-110"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/rahulpraksh026/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-[#0A66C2] dark:text-gray-400 dark:hover:text-[#0A66C2] transition-colors transform hover:scale-110"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:rahulprakash026@gmail.com"
                className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors transform hover:scale-110"
              >
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side (Profile Photo) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="flex justify-center lg:justify-end relative"
          >
            <div className="relative group">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

              {/* Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-dark-card shadow-2xl transition-transform duration-500 group-hover:scale-105">
                <img
                  src="/profile.png"
                  alt="Rahul Prakash Profile"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
