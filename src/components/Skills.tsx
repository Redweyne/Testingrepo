import { Code2, Database, Layers, Palette, Server, Smartphone } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'FRONTEND',
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Three.js'],
      color: 'cyan',
    },
    {
      icon: Server,
      title: 'BACKEND',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
      color: 'purple',
    },
    {
      icon: Database,
      title: 'DATABASE',
      skills: ['Supabase', 'Firebase', 'Prisma', 'SQL', 'NoSQL', 'Redis'],
      color: 'pink',
    },
    {
      icon: Layers,
      title: 'DEVOPS',
      skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Nginx', 'Linux'],
      color: 'cyan',
    },
    {
      icon: Smartphone,
      title: 'MOBILE',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'PWA', 'Expo'],
      color: 'purple',
    },
    {
      icon: Palette,
      title: 'DESIGN',
      skills: ['Figma', 'UI/UX', 'Animation', 'Prototyping', 'Design Systems', 'Framer'],
      color: 'pink',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: 'border-cyan-400/20 hover:border-cyan-400/50 bg-cyan-500/5',
      purple: 'border-purple-400/20 hover:border-purple-400/50 bg-purple-500/5',
      pink: 'border-pink-400/20 hover:border-pink-400/50 bg-pink-500/5',
    };
    return colors[color as keyof typeof colors];
  };

  const getIconColor = (color: string) => {
    const colors = {
      cyan: 'text-cyan-400',
      purple: 'text-purple-400',
      pink: 'text-pink-400',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="min-h-screen flex items-center py-32 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-purple-500/10 border border-purple-400/30 rounded-lg">
            <Code2 className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              TECH_STACK.JSON
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative p-6 backdrop-blur-sm border rounded-xl transition-all duration-300 hover:scale-105 ${getColorClasses(
                category.color
              )}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 bg-black/40 border ${getColorClasses(category.color)} rounded-lg`}>
                    <category.icon className={`w-5 h-5 ${getIconColor(category.color)}`} />
                  </div>
                  <h3 className={`font-mono font-bold ${getIconColor(category.color)}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-3 py-1 bg-black/60 border border-white/10 rounded-full text-xs font-mono text-gray-300 hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-2xl">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 font-mono">
            {'>'} CONTINUOUS_LEARNING.PROTOCOL
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Technology evolves at the speed of light. I stay ahead by constantly exploring emerging
            frameworks, experimenting with cutting-edge tools, and contributing to open-source projects.
            My stack isn't just a list of technologies—it's a living, breathing arsenal that grows
            with every challenge.
          </p>
        </div>
      </div>
    </section>
  );
}
