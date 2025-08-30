import React from 'react';
import { Code, Database, Server, Smartphone, Award, Users, Clock, Star } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Users, label: 'Happy Clients', value: '25+' },
    { icon: Clock, label: 'Years Experience', value: '3+' },
    { icon: Award, label: 'Certifications', value: '10+' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                About Me
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Building Digital Solutions with
                <span className="block text-blue-600 dark:text-blue-400">Passion & Precision</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I'm a passionate full-stack developer with expertise in the MERN stack. I love creating 
                scalable web applications that solve real-world problems. My approach combines technical 
                excellence with user-centered design to deliver exceptional digital experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Quick Skills Icons */}
            <div className="flex space-x-6">
              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Code size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Frontend</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <Server size={24} className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Backend</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Database size={24} className="text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Database</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                  <Smartphone size={24} className="text-amber-600 dark:text-amber-400" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Mobile</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <stat.icon size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;