import { ExternalLink, Github, Rocket } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'NEURAL COMMERCE',
      description: 'AI-powered e-commerce platform with real-time personalization and predictive analytics',
      tech: ['React', 'Node.js', 'TensorFlow', 'PostgreSQL'],
      gradient: 'from-cyan-500 to-blue-500',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'QUANTUM DASHBOARD',
      description: 'Real-time data visualization platform processing millions of events per second',
      tech: ['Next.js', 'D3.js', 'WebSocket', 'Redis'],
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'CRYPTO SENTINEL',
      description: 'Blockchain analytics tool with advanced security monitoring and threat detection',
      tech: ['Vue.js', 'Python', 'MongoDB', 'Web3'],
      gradient: 'from-pink-500 to-orange-500',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'CLOUD NEXUS',
      description: 'Distributed microservices architecture with auto-scaling and zero-downtime deployment',
      tech: ['Docker', 'Kubernetes', 'Go', 'gRPC'],
      gradient: 'from-cyan-500 to-purple-500',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'METAVERSE STUDIO',
      description: '3D collaborative workspace with real-time multiplayer and spatial audio',
      tech: ['Three.js', 'WebRTC', 'Socket.io', 'Unity'],
      gradient: 'from-purple-500 to-blue-500',
      image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'AI CONTENT ENGINE',
      description: 'Machine learning pipeline for automated content generation and optimization',
      tech: ['Python', 'GPT-4', 'FastAPI', 'Celery'],
      gradient: 'from-pink-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-pink-500/10 border border-pink-400/30 rounded-lg">
            <Rocket className="w-6 h-6 text-pink-400" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              PROJECTS.ARRAY
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-cyan-400/20 bg-black/40 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold font-mono text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-mono bg-cyan-500/10 border border-cyan-400/30 rounded text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-lg text-sm font-mono text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300">
                    <ExternalLink className="w-4 h-4" />
                    DEMO
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-400/30 rounded-lg text-sm font-mono text-purple-400 hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300">
                    <Github className="w-4 h-4" />
                    CODE
                  </button>
                </div>
              </div>

              <div className="absolute top-4 right-4 w-12 h-12 bg-cyan-400/10 border border-cyan-400/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-xs font-mono font-bold text-cyan-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
