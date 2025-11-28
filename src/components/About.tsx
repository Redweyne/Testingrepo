import { User, Sparkles, Zap, Target } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Sparkles,
      title: 'CREATIVE VISION',
      description: 'Transforming complex problems into elegant, user-centric solutions',
    },
    {
      icon: Zap,
      title: 'RAPID EXECUTION',
      description: 'Delivering high-performance applications with cutting-edge technology',
    },
    {
      icon: Target,
      title: 'PRECISION FOCUS',
      description: 'Obsessed with details, committed to excellence in every line of code',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-32 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-cyan-500/10 border border-cyan-400/30 rounded-lg">
            <User className="w-6 h-6 text-cyan-400" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ABOUT_ME.EXE
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-2xl" />
              <div className="relative bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8">
                <div className="mb-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                <div className="font-mono text-sm space-y-2">
                  <div className="text-gray-500">{'// Developer Profile'}</div>
                  <div className="text-cyan-400">const <span className="text-white">developer</span> = {'{'}</div>
                  <div className="ml-4 text-gray-300">
                    <span className="text-purple-400">name:</span> <span className="text-green-400">"Redweyne"</span>,
                  </div>
                  <div className="ml-4 text-gray-300">
                    <span className="text-purple-400">role:</span> <span className="text-green-400">"Full Stack Developer"</span>,
                  </div>
                  <div className="ml-4 text-gray-300">
                    <span className="text-purple-400">passion:</span> <span className="text-green-400">"Building the future"</span>,
                  </div>
                  <div className="ml-4 text-gray-300">
                    <span className="text-purple-400">status:</span> <span className="text-green-400">"Available for projects"</span>
                  </div>
                  <div className="text-cyan-400">{'}'}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a <span className="text-cyan-400 font-semibold">full-stack developer</span> who thrives
              at the bleeding edge of technology. With a passion for creating immersive digital experiences,
              I transform ambitious ideas into reality through clean code and innovative design.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Whether it's architecting scalable backend systems, crafting pixel-perfect interfaces, or
              optimizing performance to the millisecond, I bring a{' '}
              <span className="text-purple-400 font-semibold">holistic approach</span> to every project.
            </p>

            <div className="space-y-4 mt-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group flex gap-4 p-4 bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-lg hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="p-3 bg-cyan-500/10 border border-cyan-400/30 rounded-lg group-hover:bg-cyan-500/20 transition-all">
                    <highlight.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-cyan-400 mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-gray-400">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
