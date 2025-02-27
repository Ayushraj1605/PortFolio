import React from 'react';
import { Award, Code, Brain } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Code className="text-yellow-400" size={28} />,
      title: "Algorithmic Problem Solving",
      description: "Solved 400+ Leetcode problems, max-rating 1662 (top 20%)",
      color: "from-yellow-500/20 to-yellow-600/5"
    },
    {
      icon: <Code className="text-purple-400" size={28} />,
      title: "Competitive Programming",
      description: "Reached Pupil level (1217) on Codeforces, solving 100+ problems",
      color: "from-purple-500/20 to-purple-600/5"
    },
    {
      icon: <Brain className="text-green-400" size={28} />,
      title: "Regional Mathematics Olympiad",
      description: "Qualified with distinction in 2018",
      color: "from-green-500/20 to-green-600/5"
    }
  ];

  return (
    <div className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Trophy Banner */}
          <div className="relative mb-16 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-xl p-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-0 left-0 w-20 h-20 bg-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-purple-500 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <Award className="text-yellow-400 w-16 h-16 md:w-24 md:h-24 mx-auto md:mx-0" />
              </div>
              
              <div className="text-center md:text-left md:flex-1">
                {/* <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Proven Problem Solver</h3> */}
                <p className="text-gray-300 text-lg">
                  With a strong foundation in algorithms, mathematics, and competitive programming, 
                  I've consistently demonstrated my ability to tackle complex problems efficiently.
                </p>
              </div>
            </div>
          </div>
          
          {/* Achievement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-b ${achievement.color} bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:translate-y-[-5px] border border-gray-800`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-gray-800 rounded-full">
                    {achievement.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                  
                  <p className="text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Achievement Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Leetcode Stats</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Problems Solved</span>
                    <span className="text-blue-400 font-medium">400+</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Max Rating</span>
                    <span className="text-blue-400 font-medium">1662</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Percentile</span>
                    <span className="text-blue-400 font-medium">Top 20%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Codeforces Stats</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Problems Solved</span>
                    <span className="text-blue-400 font-medium">100+</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Current Rating</span>
                    <span className="text-blue-400 font-medium">1217 (Pupil)</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Contests Participated</span>
                    <span className="text-blue-400 font-medium">20+</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;