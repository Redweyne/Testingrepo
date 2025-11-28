import { Terminal } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const sections = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-xl border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <Terminal className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
          <span className="font-mono text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            REDWEYNE.SYS
          </span>
        </div>

        <div className="flex gap-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-4 py-2 font-mono text-sm transition-all duration-300 relative group ${
                activeSection === section.id
                  ? 'text-cyan-400'
                  : 'text-gray-400 hover:text-cyan-300'
              }`}
            >
              <span className="relative z-10">{section.label}</span>
              {activeSection === section.id && (
                <div className="absolute inset-0 bg-cyan-400/10 border border-cyan-400/30 rounded animate-pulse" />
              )}
              <div className="absolute inset-0 bg-cyan-400/5 border border-cyan-400/0 group-hover:border-cyan-400/20 rounded transition-all duration-300" />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
