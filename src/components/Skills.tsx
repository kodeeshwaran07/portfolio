import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'blue',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 75 }
      ]
    },
    {
      title: 'Backend',
      color: 'emerald',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'Python', level: 82 },
        { name: 'Django', level: 78 },
        { name: 'GraphQL', level: 80 }
      ]
    },
    {
      title: 'Database',
      color: 'purple',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'Redis', level: 70 },
        { name: 'Supabase', level: 85 }
      ]
    },
    {
      title: 'Tools & Others',
      color: 'amber',
      skills: [
        { name: 'Git & GitHub', level: 92 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 78 },
        { name: 'Figma', level: 85 },
        { name: 'Jest', level: 80 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-500 dark:bg-blue-600',
      emerald: 'bg-emerald-500 dark:bg-emerald-600',
      purple: 'bg-purple-500 dark:bg-purple-600',
      amber: 'bg-amber-500 dark:bg-amber-600'
    };
    return colors[color as keyof typeof colors];
  };

  const getBgColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 dark:bg-blue-900/20',
      emerald: 'bg-emerald-50 dark:bg-emerald-900/20',
      purple: 'bg-purple-50 dark:bg-purple-900/20',
      amber: 'bg-amber-50 dark:bg-amber-900/20'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-4">
            Technical Skills
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Technologies I Work With
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Here's a comprehensive overview of my technical expertise across different domains of web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 ${getBgColorClasses(category.color)} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${getColorClasses(category.color)} transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Technologies & Frameworks
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'React', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'TypeScript',
              'Python', 'PostgreSQL', 'Docker', 'AWS', 'Git', 'Figma'
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;