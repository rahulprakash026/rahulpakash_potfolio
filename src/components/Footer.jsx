import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-card border-t border-gray-100 dark:border-dark-border transition-colors duration-300 relative overflow-hidden">
        {/* Subtle top gradient line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <span className="font-bold text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-primary dark:to-purple-400">
              Rahul Prakash
            </span>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Social Links Mini */}
          <div className="flex items-center space-x-5">
            <a
              href="https://github.com/rahulprakash026"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-gray-50 dark:bg-slate-800 flex items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-slate-700 transition-all"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rahulpraksh026/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-gray-50 dark:bg-slate-800 flex items-center justify-center text-gray-500 hover:text-[#0A66C2] dark:text-gray-400 dark:hover:text-[#0A66C2] hover:bg-gray-200 dark:hover:bg-slate-700 transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:rahulprakash026@gmail.com"
              className="w-10 h-10 rounded-full bg-gray-50 dark:bg-slate-800 flex items-center justify-center text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-dark-border flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {currentYear} Rahul Prakash. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            Designed & Built with <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
