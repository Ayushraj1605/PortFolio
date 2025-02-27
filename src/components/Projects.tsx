import React, { useState } from 'react';
import { Github, ExternalLink, Code, Database, Server, Cpu } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Parallel File Encryptor",
      description: "Developed a CLI-based parallel file encryptor leveraging multiprocessing and multithreading to optimize encryption speed and maximize CPU utilization. The project fully applies key OS concepts like process management and concurrency.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1034&q=80",
      github: "https://github.com/Ayushraj1605/",
      demo: "",
      technologies: ["C++", "OS Concepts", "Multithreading", "Encryption"],
      category: "cli"
    },
    {
      id: 2,
      title: "Paytm Wallet Clone",
      description: "Built a full-stack web application replicating core functionalities of a digital wallet system, including wallet balance management and transaction history. Designed and implemented responsive user interfaces using ReactJS and Material-UI for an enhanced user experience. Developed secure RESTful APIs using ExpressJS for wallet operations, integrated MongoDB for storing transaction data, and implemented user authentication with JWT.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      github: "https://github.com/Ayushraj1605/",
      demo: "",
      technologies: ["ReactJS", "Material-UI", "ExpressJS", "MongoDB", "NodeJS", "JWT"],
      category: "web"
    },
    {
      id: 3,
      title: "E-Waste Crisis Handling",
      description: "Leading a team in the Google Solution Challenge Hackathon to develop an innovative solution for e-waste management. The project aims to connect e-waste generators with recyclers and create awareness about proper disposal methods.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      github: "https://github.com/Ayushraj1605/",
      demo: "",
      technologies: ["React Native", "Firebase", "Google Cloud", "Machine Learning"],
      category: "ongoing"
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const tabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'cli', label: 'CLI Projects' },
    { id: 'ongoing', label: 'Ongoing' }
  ];

  return (
    <div className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        {/* Project Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  
                  <div>
                    {project.category === 'web' && <Server className="text-blue-400" size={20} />}
                    {project.category === 'cli' && <Cpu className="text-green-400" size={20} />}
                    {project.category === 'ongoing' && <Code className="text-yellow-400" size={20} />}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;