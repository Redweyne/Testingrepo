import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 2000);
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#', color: 'cyan' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'purple' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'pink' },
    { icon: Mail, label: 'Email', href: 'mailto:contact@redweyne.dev', color: 'cyan' },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: 'text-cyan-400 hover:text-cyan-300 border-cyan-400/30 hover:border-cyan-400/50 bg-cyan-500/10 hover:bg-cyan-500/20',
      purple: 'text-purple-400 hover:text-purple-300 border-purple-400/30 hover:border-purple-400/50 bg-purple-500/10 hover:bg-purple-500/20',
      pink: 'text-pink-400 hover:text-pink-300 border-pink-400/30 hover:border-pink-400/50 bg-pink-500/10 hover:bg-pink-500/20',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-32 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-cyan-500/10 border border-cyan-400/30 rounded-lg">
            <Send className="w-6 h-6 text-cyan-400" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              CONTACT.INIT
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 font-mono">
                {'>'} LET'S BUILD SOMETHING AMAZING
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Have a project in mind? Looking for a developer who can turn your vision into reality?
                Let's connect and create something extraordinary together.
              </p>

              <div className="flex items-center gap-3 text-gray-400 mb-4">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Available for remote opportunities worldwide</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-mono text-gray-500 uppercase tracking-wider">
                Connect with me
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`flex items-center gap-2 px-4 py-3 border rounded-lg transition-all duration-300 ${getColorClasses(
                      social.color
                    )}`}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="font-mono text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-xl">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse delay-100" />
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse delay-200" />
              </div>
              <div className="font-mono text-sm text-gray-400">
                <div className="text-cyan-400">{'>'} STATUS: <span className="text-green-400">AVAILABLE</span></div>
                <div className="text-cyan-400">{'>'} RESPONSE_TIME: <span className="text-green-400">{'<'} 24 HOURS</span></div>
                <div className="text-cyan-400">{'>'} LOCATION: <span className="text-green-400">GLOBAL</span></div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-2xl" />
            <form
              onSubmit={handleSubmit}
              className="relative bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8"
            >
              <div className="mb-6">
                <label className="block text-sm font-mono text-cyan-400 mb-2">
                  {'>'} NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-black/60 border border-cyan-400/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-mono text-cyan-400 mb-2">
                  {'>'} EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-black/60 border border-cyan-400/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-mono text-cyan-400 mb-2">
                  {'>'} MESSAGE
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-black/60 border border-cyan-400/30 rounded-lg text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className="w-full group relative px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-mono font-bold overflow-hidden transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {status === 'idle' && (
                    <>
                      <Send className="w-5 h-5" />
                      TRANSMIT MESSAGE
                    </>
                  )}
                  {status === 'sending' && 'SENDING...'}
                  {status === 'sent' && 'MESSAGE SENT!'}
                </span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block p-6 bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-xl">
            <p className="font-mono text-sm text-gray-400">
              <span className="text-cyan-400">{'>'}</span> REDWEYNE.SYS v2.0.0{' '}
              <span className="text-cyan-400">|</span> BUILT WITH REACT + TYPESCRIPT{' '}
              <span className="text-cyan-400">|</span> © 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
