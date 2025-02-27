import React from 'react';
import { Code, BookOpen, Brain, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            I am a dedicated Computer Science Engineering student at the Indian Institute of Information Technology Senapati, Manipur, 
            specializing in Artificial Intelligence and Data Science. My academic journey has equipped me with a strong foundation in 
            programming, algorithms, and software development.
          </p>
          
          <p className="text-gray-300 text-lg mb-12 leading-relaxed">
            Beyond academics, I am passionate about applying my technical skills to solve real-world problems. I actively contribute to 
            open-source projects and participate in hackathons to expand my knowledge and collaborate with like-minded individuals. 
            My goal is to leverage technology to create innovative solutions that make a positive impact on society.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:translate-y-[-5px]">
              <div className="flex items-center mb-4">
                <Code className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Technical Expertise</h3>
              </div>
              <p className="text-gray-400">
                Proficient in multiple programming languages including C++, JavaScript, and Python, with experience in web development, 
                data structures, and algorithms.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:translate-y-[-5px]">
              <div className="flex items-center mb-4">
                <BookOpen className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Academic Focus</h3>
              </div>
              <p className="text-gray-400">
                Pursuing Computer Science Engineering with a specialization in AI & DS, maintaining a strong CGPA of 8.21 while 
                balancing coursework and practical projects.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:translate-y-[-5px]">
              <div className="flex items-center mb-4">
                <Brain className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Areas of Interest</h3>
              </div>
              <p className="text-gray-400">
                Passionate about web development, machine learning, and competitive programming, with a keen interest in exploring 
                emerging technologies and their applications.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:translate-y-[-5px]">
              <div className="flex items-center mb-4">
                <Rocket className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Future Vision</h3>
              </div>
              <p className="text-gray-400">
                Aspiring to become a skilled software engineer with expertise in AI applications, contributing to innovative projects 
                that address complex challenges in technology and society.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;