import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Indian Institute of Information Technology Senapati, Manipur",
      degree: "Computer Science Engineering with specialization in AI & DS",
      duration: "2022 - 2026 (Expected)",
      grade: "CGPA: 8.21",
      logo: "../../src/assets/college.jpg"
    },
    {
      institution: "H.D Jain College, Arrah",
      degree: "Bihar School Examination Board, Bihar",
      duration: "2021",
      grade: "Higher Secondary Education",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      institution: "Shakti Shanti Academy Aamin, Saran",
      degree: "Central Board of Secondary Education, Bihar",
      duration: "2018",
      grade: "Secondary Education",
      logo: "../../src/assets/school.jpg"
    }
  ];

  return (
    <div className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-500/30"></div>
            
            {/* Education items */}
            {educationData.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } mb-16 last:mb-0`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-gray-800 z-10"></div>
                
                {/* Content */}
                <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                  <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <GraduationCap className="text-blue-400 mr-3" size={24} />
                      <h3 className="text-xl font-semibold text-white">{item.institution}</h3>
                    </div>
                    <p className="text-gray-300 mb-2">{item.degree}</p>
                    <div className="flex items-center text-gray-400 mb-4">
                      <Calendar className="mr-2" size={16} />
                      <span>{item.duration}</span>
                    </div>
                    <p className="text-blue-400 font-medium">{item.grade}</p>
                  </div>
                </div>
                
                {/* Image (visible only on medium and larger screens) */}
                <div className="hidden md:block md:w-1/2 md:px-8">
                  <div className="h-40 rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={item.logo} 
                      alt={item.institution} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;