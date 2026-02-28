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
  Code,
  Zap,
  Activity,
  Cpu
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
              <a href="#omnisense" className="hover:text-emerald-400 transition-colors">OmniSense</a>
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
            The world's first open-source threat intelligence network built on radical transparency. No backdoors. No hidden logic. Just pure community-driven defense.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20">
              Contribute & Get Free Access <ArrowRight className="w-5 h-5" />
            </button>
            <a href="https://github.com/77security/OmniSense" target="_blank" className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
              Explore OmniSense <Zap className="w-5 h-5 text-emerald-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Product Feature: OmniSense */}
      <section id="omnisense" className="py-24 border-y border-white/5 bg-[#0d0d0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-4">
                 <Activity className="w-3 h-3" /> FLAGSHIP PRODUCT
               </div>
               <h2 className="text-4xl font-bold text-white mb-6">Introducing OmniSense</h2>
               <p className="text-lg text-slate-400 mb-6">
                 OmniSense is our high-performance ingestion engine designed to collect, normalize, and verify threat signals in real-time. It's the brain of the 77 Security network.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <Cpu className="w-5 h-5 text-emerald-400 mb-2" />
                    <h4 className="font-bold text-white">Distributed Sensing</h4>
                    <p className="text-xs text-slate-500">Lightweight nodes that can be deployed anywhere from edge to core.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <Terminal className="w-5 h-5 text-blue-400 mb-2" />
                    <h4 className="font-bold text-white">Universal API</h4>
                    <p className="text-xs text-slate-500">Query and contribute via a standardized, transparent API interface.</p>
                  </div>
               </div>
               <a href="https://github.com/77security/OmniSense" target="_blank" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-3 rounded-xl font-bold transition-all">
                Check OmniSense Source <ChevronRight className="w-4 h-4" />
               </a>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl opacity-30"></div>
              <div className="relative bg-[#16161a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="px-4 py-3 bg-white/5 border-b border-white/10 flex justify-between">
                  <span className="text-xs font-mono text-slate-400">omnisense-core / src / main.rs</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                  </div>
                </div>
                <pre className="p-6 text-sm font-mono text-emerald-400/90 leading-relaxed overflow-x-auto">
                  <code>{`// OmniSense Threat Ingestion
pub async fn process_signal(signal: Signal) {
    let trust_score = verify_origin(&signal.metadata).await;
    if trust_score > THRESHOLD {
        broadcast_to_community(signal).await;
    }
}

// Radical Transparency: 
// You can audit this logic right now on GitHub.`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantage 1: Radical Transparency */}
      <section id="transparency" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Built on Transparency</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Security is inherently tied to low-level infrastructure and sensitive data. We believe transparency isn't just a feature—it's the only way to ensure safety.
              </p>
              <ul className="space-y-4">
                {[
                  "100% Free & Open Source: No black boxes",
                  "Clear Data Logic: Every signal we collect is documented",
                  "Public GitHub Repos: We even open-source this website code",
                  "Community-Audited: Peer-reviewed by security experts globally"
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
                 <a href="https://github.com/77security" target="_blank" className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:underline">
                    Browse 77 Security GitHub <ChevronRight className="w-4 h-4" />
                 </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantage 2: Data Ownership */}
      <section id="ownership" className="py-24 bg-white/[0.02]">
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
                Security should never mean lock-in. Unlike closed vendors, we offer full private deployment. You can run 77 Security inside your own data center or cloud accounts.
              </p>
              <div className="space-y-6">
                <div className="p-4 bg-white/5 rounded-xl border-l-4 border-emerald-500">
                  <h4 className="font-bold text-white mb-1">Private Infrastructure</h4>
                  <p className="text-sm text-slate-400">Use our open-source scripts to deploy OmniSense on your hardware. Keep sensitive detections off the public cloud.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border-l-4 border-blue-500">
                  <h4 className="font-bold text-white mb-1">Zero Lock-in</h4>
                  <p className="text-sm text-slate-400">Your data, your servers. We provide the intelligence engine; you provide the environment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantage 3: Community Flywheel / Reciprocity */}
      <section id="community" className="py-24 bg-emerald-500/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-16 h-16 bg-emerald-500 text-black rounded-2xl flex items-center justify-center mb-8 mx-auto rotate-3">
            <Users className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">Data Reciprocity</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Attackers hide, but our community is in the light. In order to collect the intelligence needed for global security, we operate on a simple principle: **Give to Get**.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-[#16161a] p-8 rounded-3xl border border-emerald-500/20 shadow-xl">
              <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full mb-4">CONTRIBUTOR MODEL</div>
              <h3 className="text-2xl font-bold text-white mb-4">Contribute & Get Free</h3>
              <p className="text-slate-400 mb-6 italic">"If you share your anonymized threat signals (blocked IPs, domains, hashes), you get full access to the global intelligence feed for $0."</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-300">
                <li className="flex items-center gap-2 font-mono"><ChevronRight className="w-3 h-3 text-emerald-500" /> Share Anonymized Blocks</li>
                <li className="flex items-center gap-2 font-mono"><ChevronRight className="w-3 h-3 text-emerald-500" /> Contribute to IOCHub</li>
                <li className="flex items-center gap-2 font-mono"><ChevronRight className="w-3 h-3 text-emerald-500" /> **Result: 100% Free Pro Access**</li>
              </ul>
              <button className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl transition-all">Start Contributing</button>
            </div>
            
            <div className="bg-[#16161a] p-8 rounded-3xl border border-white/5 opacity-80 hover:opacity-100 transition-all">
              <div className="inline-block px-3 py-1 bg-white/10 text-slate-400 text-xs font-bold rounded-full mb-4">OBSERVER MODEL</div>
              <h3 className="text-2xl font-bold text-white mb-4">SaaS Subscription</h3>
              <p className="text-slate-400 mb-6 italic">"Prefer to only consume data without contributing your internal signals? Our paid plans support the network's growth and scaling."</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-300">
                <li className="flex items-center gap-2 font-mono text-slate-500"><ChevronRight className="w-3 h-3" /> Private Query Mode</li>
                <li className="flex items-center gap-2 font-mono text-slate-500"><ChevronRight className="w-3 h-3" /> Zero Data Contribution</li>
                <li className="flex items-center gap-2 font-mono text-slate-500"><ChevronRight className="w-3 h-3" /> **Result: Paid Tier Usage**</li>
              </ul>
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
            Built with transparency on <a href="https://github.com/77security" className="text-emerald-500 hover:underline">GitHub</a>.
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