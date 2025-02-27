import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">Ayush Raj</h2>
            <p className="text-gray-400">CSE Student specializing in AI & DS</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a 
                href="https://github.com/Ayushraj1605/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ayush-raj-15a282255/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:ayushrajoff1605@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ayush Raj. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">About</a>
            <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Projects</a>
            <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Skills</a>
            <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;