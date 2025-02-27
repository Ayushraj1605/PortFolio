import React from 'react';
import { GitBranch, GitPullRequest, Users, Code } from 'lucide-react';

const Experience = () => {
  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Open Source Contributor</h3>
                  <p className="text-blue-400 mt-1">Various Projects</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                    Ongoing
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                As an active open source contributor, I collaborate with global developer communities to improve 
                software projects, fix bugs, and implement new features. This experience has enhanced my technical 
                skills while allowing me to work with diverse teams and codebases.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900 p-5 rounded-lg">
                  <div className="flex items-center mb-3">
                    <GitBranch className="text-blue-400 mr-3" size={20} />
                    <h4 className="text-lg font-medium text-white">Issue Identification & Resolution</h4>
                  </div>
                  <p className="text-gray-400">
                    Identifying bugs and issues in open source projects and implementing effective solutions through 
                    well-tested code contributions.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-5 rounded-lg">
                  <div className="flex items-center mb-3">
                    <GitPullRequest className="text-blue-400 mr-3" size={20} />
                    <h4 className="text-lg font-medium text-white">Pull Request Management</h4>
                  </div>
                  <p className="text-gray-400">
                    Creating and managing pull requests with clear documentation, addressing reviewer feedback, and 
                    ensuring code quality meets project standards.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-5 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Users className="text-blue-400 mr-3" size={20} />
                    <h4 className="text-lg font-medium text-white">Community Collaboration</h4>
                  </div>
                  <p className="text-gray-400">
                    Actively participating in developer communities, engaging in discussions, and collaborating with 
                    maintainers and other contributors.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-5 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Code className="text-blue-400 mr-3" size={20} />
                    <h4 className="text-lg font-medium text-white">Code Quality Improvement</h4>
                  </div>
                  <p className="text-gray-400">
                    Enhancing existing codebases through refactoring, optimization, and implementing best practices 
                    to improve performance and maintainability.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <a 
                  href="https://github.com/Ayushraj1605/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
                >
                  <GitBranch size={18} />
                  View GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;