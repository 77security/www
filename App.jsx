import React, { useState, useEffect } from 'react';
import { 
  Shield, Github, Server, Users, Unlock, Globe, Eye, ChevronRight, 
  Database, Lock, Terminal, ArrowRight, CheckCircle2, Code, Zap, 
  Activity, Cpu, LogIn, User, Key, LogOut, Mail, Copy, X, Loader2
} from 'lucide-react';

// Configuration
const API_BASE = "https://identity.77security.com/api";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authModal, setAuthModal] = useState(null); // 'login' | 'register' | null
  const [newKey, setNewKey] = useState(null); // Store generated API key temporarily
  const [formData, setFormData] = useState({ email: '', password: '', industry: '', region_code: '' });
  const [error, setError] = useState('');

  // 1. Initial Auth Check
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch(`${API_BASE}/user/me`, { 
        headers: { 'Content-Type': 'application/json' }
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data);
      }
    } catch (err) {
      console.error("Auth check failed", err);
    } finally {
      setLoading(false);
    }
  };

  // 2. Auth Actions
  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    const endpoint = authModal === 'login' ? '/auth/login' : '/auth/register';
    
    try {
      const res = await fetch(`${API_BASE}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || "Action failed");
      
      if (authModal === 'login') {
        setAuthModal(null);
        checkAuth();
      } else {
        alert("Verification email sent! Please check your inbox.");
        setAuthModal('login');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // 3. API Key Generation
  const generateKey = async () => {
    try {
      const res = await fetch(`${API_BASE}/keys/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: `Key_${Date.now()}`, scopes: { omnisense: ["read"] } })
      });
      const data = await res.json();
      if (res.ok) {
        setNewKey(data.api_key);
      }
    } catch (err) {
      alert("Failed to generate key");
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  if (loading) return <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-emerald-500" /></div>;

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-200 font-sans selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-emerald-500/30 bg-black flex items-center justify-center">
                <Shield className="text-emerald-500 w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">77<span className="text-emerald-500">SECURITY</span></span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#omnisense" className="hover:text-emerald-400 transition-colors">OmniSense</a>
              <a href="#transparency" className="hover:text-emerald-400 transition-colors">Transparency</a>
              <a href="#ownership" className="hover:text-emerald-400 transition-colors">Data Ownership</a>
              
              {user ? (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                    <User className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">{user.email.split('@')[0]}</span>
                  </div>
                  <button onClick={() => setUser(null)} className="text-slate-400 hover:text-white transition-colors">
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <button onClick={() => setAuthModal('login')} className="hover:text-emerald-400 transition-colors">Login</button>
                  <button onClick={() => setAuthModal('register')} className="bg-emerald-500 hover:bg-emerald-400 text-black px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105">
                    Join Network
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Conditional Rendering: User Dashboard or Full Landing Page */}
      {user ? (
        <main className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
              <p className="text-slate-400">Manage your threat sensing nodes and security keys.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Profile Card */}
              <div className="bg-[#16161a] border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-emerald-500/20 rounded-xl"><User className="text-emerald-400" /></div>
                  <h3 className="text-xl font-bold text-white">Profile</h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-slate-500">Email</span>
                    <span className="text-slate-200">{user.email}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-slate-500">Industry</span>
                    <span className="text-slate-200">{user.industry || 'Not Set'}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-slate-500">Region</span>
                    <span className="text-slate-200">{user.region_code || 'WW'}</span>
                  </div>
                </div>
              </div>

              {/* API Keys Card */}
              <div className="bg-[#16161a] border border-emerald-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-xl"><Key className="text-blue-400" /></div>
                  <h3 className="text-xl font-bold text-white">Security Keys</h3>
                </div>
                
                {newKey ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl mb-4">
                    <p className="text-xs text-emerald-400 font-bold mb-2 uppercase tracking-widest">New API Key Created</p>
                    <div className="flex items-center gap-2 bg-black/40 p-2 rounded font-mono text-sm overflow-hidden text-emerald-200">
                      <span className="truncate">{newKey}</span>
                      <button onClick={() => copyToClipboard(newKey)} className="shrink-0 text-emerald-400 hover:text-white">
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-[10px] text-slate-500 mt-2 italic">Key is only shown once for zero-knowledge security.</p>
                    <button onClick={() => setNewKey(null)} className="w-full mt-3 py-1.5 bg-emerald-500 text-black text-xs font-bold rounded">I've Saved It</button>
                  </div>
                ) : (
                  <button 
                    onClick={generateKey}
                    className="w-full py-4 border-2 border-dashed border-white/10 rounded-xl text-slate-400 hover:border-emerald-500/50 hover:text-emerald-400 transition-all flex flex-col items-center gap-2"
                  >
                    <Zap className="w-5 h-5" />
                    <span className="font-bold">Generate New OmniSense Key</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>
      ) : (
        <>
          {/* Hero Section */}
          <section className="pt-40 pb-20 px-4 relative overflow-hidden">
            <div className="max-w-5xl mx-auto text-center relative z-10">
              <div className="mb-10 inline-block">
                <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden border-2 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.2)] bg-black flex items-center justify-center">
                  <Shield className="text-emerald-500 w-12 h-12" />
                </div>
              </div>
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
                <button 
                  onClick={() => setAuthModal('register')}
                  className="bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  Contribute & Get Free Access <ArrowRight className="w-5 h-5" />
                </button>
                <a href="https://github.com/77security/OmniSense" target="_blank" className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                  Explore OmniSense <Zap className="w-5 h-5 text-emerald-400" />
                </a>
              </div>
            </div>
          </section>

          {/* OmniSense Section */}
          <section id="omnisense" className="py-24 border-y border-white/5 bg-[#0d0d0f]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                   <div className="flex items-center gap-4 mb-6">
                     <div className="w-16 h-16 rounded-xl overflow-hidden border border-blue-500/30 shadow-lg shadow-blue-500/10 bg-black flex items-center justify-center">
                        <Terminal className="text-blue-500 w-8 h-8" />
                     </div>
                     <div>
                        <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold mb-1 uppercase tracking-wider">
                          Flagship Product
                        </div>
                        <h2 className="text-4xl font-bold text-white tracking-tight">OmniSense</h2>
                     </div>
                   </div>
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

          {/* Transparency Section */}
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
                      <Shield className="w-40 h-40 opacity-20 filter grayscale text-emerald-500" />
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

          {/* Data Ownership Section */}
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

          {/* Footer */}
          <footer className="py-20 border-t border-white/5 bg-[#0a0a0c]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-8 h-8 rounded overflow-hidden border border-emerald-500/30 bg-black flex items-center justify-center">
                  <Shield className="text-emerald-500 w-5 h-5" />
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
        </>
      )}

      {/* Auth Modals */}
      {authModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0a0a0c]/90 backdrop-blur-sm" onClick={() => setAuthModal(null)}></div>
          <div className="relative bg-[#16161a] border border-white/10 w-full max-w-md rounded-3xl p-8 shadow-2xl">
            <button onClick={() => setAuthModal(null)} className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"><X /></button>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{authModal === 'login' ? 'Welcome Back' : 'Join 77 Security'}</h3>
              <p className="text-slate-400 text-sm">{authModal === 'login' ? 'Secure Login to Identity Portal' : 'Start your radical transparency journey'}</p>
            </div>

            {error && <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-lg text-center">{error}</div>}

            <form onSubmit={handleAuth} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input 
                    type="email" required
                    className="w-full bg-black border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-emerald-500 outline-none transition-all"
                    placeholder="name@company.com"
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input 
                    type="password" required
                    className="w-full bg-black border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-emerald-500 outline-none transition-all"
                    placeholder="••••••••"
                    onChange={e => setFormData({...formData, password: e.target.value})}
                  />
                </div>
              </div>

              {authModal === 'register' && (
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Industry</label>
                    <input 
                      className="w-full bg-black border border-white/10 rounded-xl py-2 px-4 text-sm"
                      placeholder="Tech/Gov"
                      onChange={e => setFormData({...formData, industry: e.target.value})}
                    />
                  </div>
                   <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Region</label>
                    <input 
                      className="w-full bg-black border border-white/10 rounded-xl py-2 px-4 text-sm"
                      placeholder="US/EU"
                      onChange={e => setFormData({...formData, region_code: e.target.value})}
                    />
                  </div>
                </div>
              )}

              <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black py-4 rounded-xl font-bold mt-4 transition-all transform active:scale-95">
                {authModal === 'login' ? 'Access Portal' : 'Create Account'}
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-slate-500">
              {authModal === 'login' ? (
                <>New here? <button onClick={() => setAuthModal('register')} className="text-emerald-500 font-bold underline">Create an Account</button></>
              ) : (
                <>Already a member? <button onClick={() => setAuthModal('login')} className="text-emerald-500 font-bold underline">Login</button></>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;