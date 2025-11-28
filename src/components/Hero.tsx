import { useEffect, useState } from 'react';
import { Terminal, Code2, Cpu } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = '> INITIALIZING SYSTEM...';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8 flex justify-center gap-4">
          <div className="p-4 bg-cyan-500/10 border border-cyan-400/30 rounded-lg backdrop-blur-sm animate-float">
            <Terminal className="w-8 h-8 text-cyan-400" />
          </div>
          <div className="p-4 bg-purple-500/10 border border-purple-400/30 rounded-lg backdrop-blur-sm animate-float delay-200">
            <Code2 className="w-8 h-8 text-purple-400" />
          </div>
          <div className="p-4 bg-pink-500/10 border border-pink-400/30 rounded-lg backdrop-blur-sm animate-float delay-400">
            <Cpu className="w-8 h-8 text-pink-400" />
          </div>
        </div>

        <div className="mb-6 font-mono text-cyan-400 text-sm">
          {text}
          {showCursor && <span className="animate-pulse">_</span>}
        </div>

        <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            REDWEYNE
          </span>
        </h1>

        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
          <p className="text-xl md:text-3xl font-mono text-gray-300 relative">
            <span className="text-cyan-400">{'<'}</span>
            FULL STACK DEVELOPER
            <span className="text-cyan-400">{' />'}</span>
          </p>
        </div>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Architecting digital experiences at the intersection of{' '}
          <span className="text-cyan-400 font-semibold">innovation</span>,{' '}
          <span className="text-purple-400 font-semibold">design</span>, and{' '}
          <span className="text-pink-400 font-semibold">performance</span>
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-mono font-bold overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">VIEW PROJECTS</span>
          </button>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-cyan-400/50 rounded-lg font-mono font-bold hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300"
          >
            INITIALIZE CONTACT
          </button>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { label: 'SYSTEMS ONLINE', value: '100%' },
            { label: 'PROJECTS DEPLOYED', value: '50+' },
            { label: 'CLIENTS SATISFIED', value: '30+' },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-lg hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
