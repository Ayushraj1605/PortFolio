import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth',
      });
      setActiveSection('projects');
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth',
      });
      setActiveSection('contact');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-blue-500/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-xl md:text-2xl font-medium text-blue-400 mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Ayush Raj</h1>
            {/* <h3 className="text-xl md:text-2xl font-medium text-gray-300 mb-6">
              CSE Student specializing in AI & DS
            </h3> */}
            <p className="text-gray-400 text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0">
              A passionate computer science student with a focus on competitive coding, problem-solving, and software development, dedicated to solving real-world problems through technology and innovation.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <button
                onClick={scrollToProjects}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
              >
                View My Projects
              </button>
              <button
                onClick={scrollToContact}
                className="px-6 py-3 bg-transparent border border-blue-600 text-blue-400 rounded-md hover:bg-blue-900/20 transition-colors duration-300"
              >
                Contact Me
              </button>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/Ayushraj1605/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ayush-raj-15a282255/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:ayushrajoff1605@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-xl shadow-blue-500/20">
              <img src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads01&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=CollarSweater&clotheColor=Gray01&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Pale'
              alt="Ayush Raj"
                className="w-full h-full object-cover"
              />
              {/* <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="Ayush Raj"
                className="w-full h-full object-cover"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-blue-400" size={32} />
        </div>
      </div>
    </div>
  );
};

export default Hero;