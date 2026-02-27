import React, { useState } from 'react';
import { 
  Shield, 
  Github, 
  Server, 
  Users, 
  Unlock, 
  Globe, 
  Eye, 
  ChevronRight, 
  Database, 
  Lock, 
  Terminal,
  ArrowRight,
  CheckCircle2,
  Code
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-200 font-sans selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-500 p-1.5 rounded-lg">
                <Shield className="w-6 h-6 text-black" strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">77<span className="text-emerald-500">SECURITY</span></span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#transparency" className="hover:text-emerald-400 transition-colors">Transparency</a>
              <a href="#ownership" className="hover:text-emerald-400 transition-colors">Data Ownership</a>
              <a href="#community" className="hover:text-emerald-400 transition-colors">Community</a>
              <a href="https://github.com/77security" target="_blank" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all">
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <button className="bg-emerald-500 hover:bg-emerald-400 text-black px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105">
                Join Network
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Globe className="w-3 h-3" /> Worldwide Threat Sensing
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Security is <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Transparent</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The world's first open-source threat intelligence network built on the principle of radical transparency. No backdoors. No hidden logic. Just pure community-driven defense.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20">
              Contribute & Get Free Access <ArrowRight className="w-5 h-5" />
            </button>
            <a href="https://github.com/77security" target="_blank" className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
              View Source on GitHub <Github className="w-5 h-5" />
            </a>
          </div>
          
          {/* Code/Infra Preview Mock */}
          <div className="mt-20 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#16161a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                </div>
                <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                  <Terminal className="w-3 h-3" /> 77sec-engine/v1.0.4/deploy.sh
                </div>
                <div className="w-8"></div>
              </div>
              <div className="p-6 text-left font-mono text-sm leading-relaxed overflow-x-auto">
                <p className="text-emerald-400"># Start transparent ingestion engine</p>
                <p><span className="text-purple-400">docker-compose</span> up -d --build</p>
                <p className="text-slate-500 mt-2"># Our logic is clear: we only capture signals you approve</p>
                <p><span className="text-blue-400">export</span> TRUST_LEVEL=<span className="text-yellow-400">"COMMUNITY_VERIFIED"</span></p>
                <p><span className="text-blue-400">./77-security-audit.sh</span> --verbose</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantage 1: Radical Transparency */}
      <section id="transparency" className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Radical Transparency</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Most security vendors are "black boxes." You have to trust their closed algorithms. At 77 Security, we believe trust is earned through visibility.
              </p>
              <ul className="space-y-4">
                {[
                  "100% Open Source: From UI to backend engine",
                  "No Backdoors: Audit every line of code",
                  "Clear Data Logic: Know exactly what is collected",
                  "Public GitHub repository for community peer-review"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#16161a] to-[#0a0a0c] border border-white/10 p-8 rounded-3xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Github className="w-40 h-40" />
               </div>
               <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-8">
                   <div className="p-3 bg-white/5 rounded-full">
                     <Code className="w-6 h-6 text-emerald-400" />
                   </div>
                   <h3 className="text-xl font-bold text-white">Open Source DNA</h3>
                 </div>
                 <p className="text-slate-400 mb-6 italic">"If you can't see how it works, you can't be sure it's working for you."</p>
                 <a href="https://github.com/77security" className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:underline">
                    Explore our repositories <ChevronRight className="w-4 h-4" />
                 </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantage 2: Data Ownership */}
      <section id="ownership" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 flex gap-4">
               <div className="flex-1 space-y-4">
                  <div className="h-40 bg-white/5 rounded-2xl flex flex-col items-center justify-center p-4 border border-white/10 hover:border-emerald-500/30 transition-all cursor-default">
                    <Server className="w-8 h-8 text-blue-400 mb-2" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Public Cloud</span>
                  </div>
                  <div className="h-40 bg-white/5 rounded-2xl flex flex-col items-center justify-center p-4 border border-white/10 hover:border-emerald-500/30 transition-all cursor-default">
                    <Database className="w-8 h-8 text-emerald-400 mb-2" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">On-Premise</span>
                  </div>
               </div>
               <div className="flex-1 mt-10 space-y-4">
                  <div className="h-40 bg-white/5 rounded-2xl flex flex-col items-center justify-center p-4 border border-white/10 hover:border-emerald-500/30 transition-all cursor-default">
                    <Lock className="w-8 h-8 text-cyan-400 mb-2" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Air-Gapped</span>
                  </div>
                  <div className="h-40 bg-white/5 rounded-2xl flex flex-col items-center justify-center p-4 border border-white/10 hover:border-emerald-500/30 transition-all cursor-default">
                    <Shield className="w-8 h-8 text-purple-400 mb-2" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Private SaaS</span>
                  </div>
               </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Unlock className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">You Own Your Data</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Security should never mean lock-in. We offer flexible deployment scripts so you can keep your threat data exactly where you want it.
              </p>
              <div className="space-y-6">
                <div className="p-4 bg-white/5 rounded-xl border-l-4 border-emerald-500">
                  <h4 className="font-bold text-white mb-1">Private Deployment</h4>
                  <p className="text-sm text-slate-400">Deploy the full 77 Security stack in your own AWS/Azure account or physical data center.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border-l-4 border-blue-500">
                  <h4 className="font-bold text-white mb-1">Hybrid Freedom</h4>
                  <p className="text-sm text-slate-400">Sync with our global community feed while keeping your internal detections 100% private.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantage 3: Community Flywheel */}
      <section id="community" className="py-24 bg-emerald-500/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-16 h-16 bg-emerald-500 text-black rounded-2xl flex items-center justify-center mb-8 mx-auto rotate-3">
            <Users className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">Collective Defense</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Attackers hide, but our community is in the light. By collaborating, we see what no single vendor can.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-[#16161a] p-8 rounded-3xl border border-emerald-500/20 shadow-xl">
              <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full mb-4">FOR CONTRIBUTORS</div>
              <h3 className="text-2xl font-bold text-white mb-4">Contribute to get Free</h3>
              <p className="text-slate-400 mb-6">Share your anonymized threat signals with the network and get full, unlimited access to the global intelligence feed for $0.</p>
              <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl transition-all">Start Contributing</button>
            </div>
            
            <div className="bg-[#16161a] p-8 rounded-3xl border border-white/5 opacity-80 hover:opacity-100 transition-all">
              <div className="inline-block px-3 py-1 bg-white/10 text-slate-400 text-xs font-bold rounded-full mb-4">FOR OBSERVERS</div>
              <h3 className="text-2xl font-bold text-white mb-4">Paid Access</h3>
              <p className="text-slate-400 mb-6">Prefer to only consume data without contributing? Our transparent pricing supports the community's growth and infrastructure.</p>
              <button className="w-full py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all">View Pricing Plans</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="bg-emerald-500 p-1.5 rounded-lg">
              <Shield className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold text-white tracking-tighter">77SECURITY</span>
          </div>
          <p className="text-slate-500 text-sm mb-8">
            © 2026 77 Security. All rights reserved. <br />
            Transparency by design.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/77security" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Documentation</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
