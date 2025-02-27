import React from 'react';
import { Code, Database, Server, Cpu, Globe, BookOpen, Users, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="text-blue-400" size={24} />,
      skills: ["C language", "C++", "JavaScript", "Python", "TypeScript"]
    },
    {
      title: "Developer Tools",
      icon: <Cpu className="text-blue-400" size={24} />,
      skills: ["JavaScript", "Bootstrap", "GitHub", "VSCode", "Git"]
    },
    {
      title: "Frameworks",
      icon: <Globe className="text-blue-400" size={24} />,
      skills: ["ReactJS", "React Native", "NodeJS", "ExpressJS"]
    },
    {
      title: "Cloud/Databases",
      icon: <Database className="text-blue-400" size={24} />,
      skills: ["MySQL", "MongoDB", "Google Cloud Platform", "Firebase"]
    },
    // {
    //   title: "Technologies",
    //   icon: <Server className="text-blue-400" size={24} />,
    //   skills: ["JWT Authentication", "REST API"]
    // },
    // {
    //   title: "Soft Skills",
    //   icon: <Users className="text-blue-400" size={24} />,
    //   skills: ["Leadership", "Public Speaking", "Communication", "Management"]
    // },
    // {
    //   title: "Coursework",
    //   icon: <BookOpen className="text-blue-400" size={24} />,
    //   skills: ["Data Structures and Algorithms", "Operating Systems", "Object-Oriented Programming", "DBMS"]
    // },
    // {
    //   title: "Areas of Interest",
    //   icon: <Lightbulb className="text-blue-400" size={24} />,
    //   skills: ["Web Development", "Machine Learning", "Competitive Programming"]
    // }
  ];

  // Function to render skill level bars
  const renderSkillLevel = (skill: string) => {
    // Simulate skill levels (in a real app, these would come from actual data)
    const skillLevels: {[key: string]: number} = {
      "C++": 80,
      "JavaScript": 80,
      "TypeScript": 80,
      "Python": 60,
      "ReactJS": 85,
      "NodeJS": 80,
      "MongoDB": 70,
      "Data Structures and Algorithms": 90,
      "Web Development": 85,
      "C language":70,
    };
    
    const level = skillLevels[skill]// Default random level between 70-100
    
    return (
      <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
        <div 
          className="bg-blue-500 h-2 rounded-full" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{category.title}</h3>
              </div>
              
              <ul className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{skill}</span>
                    </div>
                    {renderSkillLevel(skill)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Skill Radar Chart (simplified visual representation) */}
        <div className="mt-16 max-w-2xl mx-auto bg-gray-800 rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Core Competencies</h3>
          
          <div className="relative h-64 w-64 mx-auto">
            {/* Radar background circles */}
            <div className="absolute inset-0 rounded-full border border-gray-700 opacity-20"></div>
            <div className="absolute inset-[15%] rounded-full border border-gray-700 opacity-40"></div>
            <div className="absolute inset-[30%] rounded-full border border-gray-700 opacity-60"></div>
            <div className="absolute inset-[45%] rounded-full border border-gray-700 opacity-80"></div>
            <div className="absolute inset-[60%] rounded-full border border-gray-700"></div>
            
            {/* Radar lines */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-700"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gray-700"></div>
            <div className="absolute top-0 left-0 right-0 bottom-0 transform rotate-45 origin-center">
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-700"></div>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 transform -rotate-45 origin-center">
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-700"></div>
            </div>
            
            {/* Radar data points */}
            <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="absolute top-1/2 left-[10%] transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="absolute top-1/2 right-[15%] transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="absolute top-[30%] left-[30%] w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="absolute bottom-[30%] right-[30%] w-3 h-3 bg-blue-500 rounded-full"></div>
            
            {/* Radar area */}
            <div className="absolute inset-0 opacity-20">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon 
                  points="50,10 15,50 50,85 85,50" 
                  fill="rgba(59, 130, 246, 0.5)" 
                  stroke="#3b82f6" 
                  strokeWidth="1"
                />
              </svg>
            </div>
            
            {/* Labels */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 text-blue-400 text-sm font-medium">
              Web Dev
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-16 text-blue-400 text-sm font-medium">
              Algorithms
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 text-blue-400 text-sm font-medium">
              Backend
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-16 text-blue-400 text-sm font-medium">
              AI/ML
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;