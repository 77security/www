import React, { useState, useEffect } from 'react';
import { 
  Shield, Github, Server, Users, Unlock, Globe, Eye, ChevronRight, 
  Database, Lock, Terminal, ArrowRight, CheckCircle2, Code, Zap, 
  Activity, Cpu, LogIn, User, Key, LogOut, Mail, Copy, X, Loader2,
  Building2, MapPin, Save, ShieldAlert
} from 'lucide-react';

// Configuration
const API_BASE = "https://identity.77security.com/api";

// Standardized Lists
const INDUSTRIES = [
  { key: "CHEMICAL", name: "Chemical Industry" },
  { key: "CRIT_ENERGY", name: "Energy & Utilities" },
  { key: "CRIT_WATER", name: "Water & Waste Management" },
  { key: "DEF_BASE", name: "Defense Industrial Base" },
  { key: "EDU_RES", name: "Education & Research" },
  { key: "FOOD_AGRI", name: "Food & Agriculture" },
  { key: "FIN_BANK", name: "Finance: Banking" },
  { key: "FIN_INS", name: "Finance: Insurance" },
  { key: "GOV_NAT", name: "Government: National/Federal" },
  { key: "GOV_LOC", name: "Government: Local/State" },
  { key: "HEALTH", name: "Healthcare & Public Health" },
  { key: "MANU_CRIT", name: "Manufacturing: Critical" },
  { key: "MANU_GEN", name: "Manufacturing: General" },
  { key: "MEDIA", name: "Media & Entertainment" },
  { key: "NON_PROF", name: "Non-Profit / NGO" },
  { key: "TECH_SW", name: "Technology: Software & SaaS" },
  { key: "TECH_HW", name: "Technology: Hardware & Infra" },
  { key: "TELECOM", name: "Telecommunications" },
  { key: "TRANS_LOG", name: "Transportation & Logistics" },
  { key: "RETAIL", name: "Retail & Consumer Goods" },
  { key: "OTHER", name: "Other / Unclassified" }
];

const COUNTRIES = [
  { code: "AF", name: "Afghanistan" },
  { code: "AX", name: "Åland Islands" },
  { code: "AL", name: "Albania" },
  { code: "DZ", name: "Algeria" },
  { code: "AS", name: "American Samoa" },
  { code: "AD", name: "Andorra" },
  { code: "AO", name: "Angola" },
  { code: "AI", name: "Anguilla" },
  { code: "AQ", name: "Antarctica" },
  { code: "AG", name: "Antigua and Barbuda" },
  { code: "AR", name: "Argentina" },
  { code: "AM", name: "Armenia" },
  { code: "AW", name: "Aruba" },
  { code: "AU", name: "Australia" },
  { code: "AT", name: "Austria" },
  { code: "AZ", name: "Azerbaijan" },
  { code: "BS", name: "Bahamas" },
  { code: "BH", name: "Bahrain" },
  { code: "BD", name: "Bangladesh" },
  { code: "BB", name: "Barbados" },
  { code: "BY", name: "Belarus" },
  { code: "BE", name: "Belgium" },
  { code: "BZ", name: "Belize" },
  { code: "BJ", name: "Benin" },
  { code: "BM", name: "Bermuda" },
  { code: "BT", name: "Bhutan" },
  { code: "BO", name: "Bolivia" },
  { code: "BQ", name: "Bonaire, Sint Eustatius and Saba" },
  { code: "BA", name: "Bosnia and Herzegovina" },
  { code: "BW", name: "Botswana" },
  { code: "BV", name: "Bouvet Island" },
  { code: "BR", name: "Brazil" },
  { code: "IO", name: "British Indian Ocean Territory" },
  { code: "BN", name: "Brunei Darussalam" },
  { code: "BG", name: "Bulgaria" },
  { code: "BF", name: "Burkina Faso" },
  { code: "BI", name: "Burundi" },
  { code: "CV", name: "Cabo Verde" },
  { code: "KH", name: "Cambodia" },
  { code: "CM", name: "Cameroon" },
  { code: "CA", name: "Canada" },
  { code: "KY", name: "Cayman Islands" },
  { code: "CF", name: "Central African Republic" },
  { code: "TD", name: "Chad" },
  { code: "CL", name: "Chile" },
  { code: "CN", name: "China" },
  { code: "CX", name: "Christmas Island" },
  { code: "CC", name: "Cocos (Keeling) Islands" },
  { code: "CO", name: "Colombia" },
  { code: "KM", name: "Comoros" },
  { code: "CD", name: "Congo, Democratic Republic of the" },
  { code: "CG", name: "Congo" },
  { code: "CK", name: "Cook Islands" },
  { code: "CR", name: "Costa Rica" },
  { code: "CI", name: "Côte d'Ivoire" },
  { code: "HR", name: "Croatia" },
  { code: "CU", name: "Cuba" },
  { code: "CW", name: "Curaçao" },
  { code: "CY", name: "Cyprus" },
  { code: "CZ", name: "Czechia" },
  { code: "DK", name: "Denmark" },
  { code: "DJ", name: "Djibouti" },
  { code: "DM", name: "Dominica" },
  { code: "DO", name: "Dominican Republic" },
  { code: "EC", name: "Ecuador" },
  { code: "EG", name: "Egypt" },
  { code: "SV", name: "El Salvador" },
  { code: "GQ", name: "Equatorial Guinea" },
  { code: "ER", name: "Eritrea" },
  { code: "EE", name: "Estonia" },
  { code: "SZ", name: "Eswatini" },
  { code: "ET", name: "Ethiopia" },
  { code: "FK", name: "Falkland Islands" },
  { code: "FO", name: "Faroe Islands" },
  { code: "FJ", name: "Fiji" },
  { code: "FI", name: "Finland" },
  { code: "FR", name: "France" },
  { code: "GF", name: "French Guiana" },
  { code: "PF", name: "French Polynesia" },
  { code: "TF", name: "French Southern Territories" },
  { code: "GA", name: "Gabon" },
  { code: "GM", name: "Gambia" },
  { code: "GE", name: "Georgia" },
  { code: "DE", name: "Germany" },
  { code: "GH", name: "Ghana" },
  { code: "GI", name: "Gibraltar" },
  { code: "GR", name: "Greece" },
  { code: "GL", name: "Greenland" },
  { code: "GD", name: "Grenada" },
  { code: "GP", name: "Guadeloupe" },
  { code: "GU", name: "Guam" },
  { code: "GT", name: "Guatemala" },
  { code: "GG", name: "Guernsey" },
  { code: "GN", name: "Guinea" },
  { code: "GW", name: "Guinea-Bissau" },
  { code: "GY", name: "Guyana" },
  { code: "HT", name: "Haiti" },
  { code: "HM", name: "Heard Island and McDonald Islands" },
  { code: "VA", name: "Holy See" },
  { code: "HN", name: "Honduras" },
  { code: "HK", name: "Hong Kong" },
  { code: "HU", name: "Hungary" },
  { code: "IS", name: "Iceland" },
  { code: "IN", name: "India" },
  { code: "ID", name: "Indonesia" },
  { code: "IR", name: "Iran" },
  { code: "IQ", name: "Iraq" },
  { code: "IE", name: "Ireland" },
  { code: "IM", name: "Isle of Man" },
  { code: "IL", name: "Israel" },
  { code: "IT", name: "Italy" },
  { code: "JM", name: "Jamaica" },
  { code: "JP", name: "Japan" },
  { code: "JE", name: "Jersey" },
  { code: "JO", name: "Jordan" },
  { code: "KZ", name: "Kazakhstan" },
  { code: "KE", name: "Kenya" },
  { code: "KI", name: "Kiribati" },
  { code: "KP", name: "Korea (North)" },
  { code: "KR", name: "Korea (South)" },
  { code: "KW", name: "Kuwait" },
  { code: "KG", name: "Kyrgyzstan" },
  { code: "LA", name: "Lao People's Democratic Republic" },
  { code: "LV", name: "Latvia" },
  { code: "LB", name: "Lebanon" },
  { code: "LS", name: "Lesotho" },
  { code: "LR", name: "Liberia" },
  { code: "LY", name: "Libya" },
  { code: "LI", name: "Liechtenstein" },
  { code: "LT", name: "Lithuania" },
  { code: "LU", name: "Luxembourg" },
  { code: "MO", name: "Macao" },
  { code: "MG", name: "Madagascar" },
  { code: "MW", name: "Malawi" },
  { code: "MY", name: "Malaysia" },
  { code: "MV", name: "Maldives" },
  { code: "ML", name: "Mali" },
  { code: "MT", name: "Malta" },
  { code: "MH", name: "Marshall Islands" },
  { code: "MQ", name: "Martinique" },
  { code: "MR", name: "Mauritania" },
  { code: "MU", name: "Mauritius" },
  { code: "YT", name: "Mayotte" },
  { code: "MX", name: "Mexico" },
  { code: "FM", name: "Micronesia" },
  { code: "MD", name: "Moldova" },
  { code: "MC", name: "Monaco" },
  { code: "MN", name: "Mongolia" },
  { code: "ME", name: "Montenegro" },
  { code: "MS", name: "Montserrat" },
  { code: "MA", name: "Morocco" },
  { code: "MZ", name: "Mozambique" },
  { code: "MM", name: "Myanmar" },
  { code: "NA", name: "Namibia" },
  { code: "NR", name: "Nauru" },
  { code: "NP", name: "Nepal" },
  { code: "NL", name: "Netherlands" },
  { code: "NC", name: "New Caledonia" },
  { code: "NZ", name: "New Zealand" },
  { code: "NI", name: "Nicaragua" },
  { code: "NE", name: "Niger" },
  { code: "NG", name: "Nigeria" },
  { code: "NU", name: "Niue" },
  { code: "NF", name: "Norfolk Island" },
  { code: "MK", name: "North Macedonia" },
  { code: "MP", name: "Northern Mariana Islands" },
  { code: "NO", name: "Norway" },
  { code: "OM", name: "Oman" },
  { code: "PK", name: "Pakistan" },
  { code: "PW", name: "Palau" },
  { code: "PS", name: "Palestine, State of" },
  { code: "PA", name: "Panama" },
  { code: "PG", name: "Papua New Guinea" },
  { code: "PY", name: "Paraguay" },
  { code: "PE", name: "Peru" },
  { code: "PH", name: "Philippines" },
  { code: "PN", name: "Pitcairn" },
  { code: "PL", name: "Poland" },
  { code: "PT", name: "Portugal" },
  { code: "PR", name: "Puerto Rico" },
  { code: "QA", name: "Qatar" },
  { code: "RE", name: "Réunion" },
  { code: "RO", name: "Romania" },
  { code: "RU", name: "Russian Federation" },
  { code: "RW", name: "Rwanda" },
  { code: "BL", name: "Saint Barthélemy" },
  { code: "SH", name: "Saint Helena" },
  { code: "KN", name: "Saint Kitts and Nevis" },
  { code: "LC", name: "Saint Lucia" },
  { code: "MF", name: "Saint Martin (French part)" },
  { code: "PM", name: "Saint Pierre and Miquelon" },
  { code: "VC", name: "Saint Vincent and the Grenadines" },
  { code: "WS", name: "Samoa" },
  { code: "SM", name: "San Marino" },
  { code: "ST", name: "Sao Tome and Principe" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "SN", name: "Senegal" },
  { code: "RS", name: "Serbia" },
  { code: "SC", name: "Seychelles" },
  { code: "SL", name: "Sierra Leone" },
  { code: "SG", name: "Singapore" },
  { code: "SX", name: "Sint Maarten (Dutch part)" },
  { code: "SK", name: "Slovakia" },
  { code: "SI", name: "Slovenia" },
  { code: "SB", name: "Solomon Islands" },
  { code: "SO", name: "Somalia" },
  { code: "ZA", name: "South Africa" },
  { code: "GS", name: "South Georgia and the South Sandwich Islands" },
  { code: "SS", name: "South Sudan" },
  { code: "ES", name: "Spain" },
  { code: "LK", name: "Sri Lanka" },
  { code: "SD", name: "Sudan" },
  { code: "SR", name: "Suriname" },
  { code: "SJ", name: "Svalbard and Jan Mayen" },
  { code: "SE", name: "Sweden" },
  { code: "CH", name: "Switzerland" },
  { code: "SY", name: "Syrian Arab Republic" },
  { code: "TW", name: "Taiwan" },
  { code: "TJ", name: "Tajikistan" },
  { code: "TZ", name: "Tanzania" },
  { code: "TH", name: "Thailand" },
  { code: "TL", name: "Timor-Leste" },
  { code: "TG", name: "Togo" },
  { code: "TK", name: "Tokelau" },
  { code: "TO", name: "Tonga" },
  { code: "TT", name: "Trinidad and Tobago" },
  { code: "TN", name: "Tunisia" },
  { code: "TR", name: "Turkey" },
  { code: "TM", name: "Turkmenistan" },
  { code: "TC", name: "Turks and Caicos Islands" },
  { code: "TV", name: "Tuvalu" },
  { code: "UG", name: "Uganda" },
  { code: "UA", name: "Ukraine" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "GB", name: "United Kingdom" },
  { code: "US", name: "United States" },
  { code: "UM", name: "United States Minor Outlying Islands" },
  { code: "UY", name: "Uruguay" },
  { code: "UZ", name: "Uzbekistan" },
  { code: "VU", name: "Vanuatu" },
  { code: "VE", name: "Venezuela" },
  { code: "VN", name: "Viet Nam" },
  { code: "VG", name: "Virgin Islands (British)" },
  { code: "VI", name: "Virgin Islands (U.S.)" },
  { code: "WF", name: "Wallis and Futuna" },
  { code: "EH", name: "Western Sahara" },
  { code: "YE", name: "Yemen" },
  { code: "ZM", name: "Zambia" },
  { code: "ZW", name: "Zimbabwe" }
].sort((a, b) => a.name.localeCompare(b.name));

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authModal, setAuthModal] = useState(null); 
  const [formData, setFormData] = useState({ email: '', password: '', industry_key: '', region_code: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const [verifying, setVerifying] = useState({ status: 'idle', message: '' });

  const secureFetch = (url, options = {}) => {
    return fetch(url, {
      ...options,
      credentials: 'include', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
  };

  useEffect(() => {
    const handleRoute = () => {
      const path = window.location.pathname;
      if (path === '/login') {
        setAuthModal('login');
      } else if (path === '/signup') {
        setAuthModal('register');
      } else {
        setAuthModal(null);
      }
    };

    handleRoute();
    window.addEventListener('popstate', handleRoute);
    return () => window.removeEventListener('popstate', handleRoute);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const verifyToken = params.get('token');
    
    if (verifyToken) {
      handleVerification(verifyToken);
    } else {
      checkAuth();
    }
  }, []);

  const handleVerification = async (token) => {
    setVerifying({ status: 'loading', message: 'Validating your security credentials...' });
    try {
      const res = await secureFetch(`${API_BASE}/auth/verify?token=${token}`);
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || "Verification failed");
      
      setVerifying({ status: 'success', message: data.message });
      window.history.replaceState({}, document.title, window.location.pathname);
    } catch (err) {
      setVerifying({ status: 'error', message: err.message });
    }
  };

  const checkAuth = async () => {
    try {
      const res = await secureFetch(`${API_BASE}/user/me`);
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

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    const endpoint = authModal === 'login' ? '/auth/login' : '/auth/register';
    
    try {
      const res = await secureFetch(`${API_BASE}${endpoint}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const contentType = res.headers.get("content-type");
      let data;
      if (contentType && contentType.indexOf("application/json") !== -1) {
        data = await res.json();
      } else {
        data = { message: await res.text() };
      }
      
      if (!res.ok) throw new Error(data.error || data.message || "Action failed");
      
      if (authModal === 'login') {
        closeAuthModal();
        checkAuth();
      } else {
        alert(data.message || "Registration successful! Please check your email to verify.");
        openAuthModal('login');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = async () => {
    await secureFetch(`${API_BASE}/auth/logout`, { method: 'POST' });
    setUser(null);
    window.location.href = "/";
  };

  const openAuthModal = (type) => {
    const path = type === 'login' ? '/login' : '/signup';
    window.history.pushState({}, '', path);
    setAuthModal(type);
  };

  const closeAuthModal = () => {
    window.history.pushState({}, '', '/');
    setAuthModal(null);
  };

  const updateProfile = async () => {
    setIsSubmitting(true);
    try {
      const res = await secureFetch(`${API_BASE}/user/profile`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          industry_key: user.industry_key,
          region_code: user.region_code
        })
      });
      if (res.ok) {
        alert("Profile updated successfully");
        checkAuth();
      }
    } catch (err) {
      alert("Failed to update profile");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading && verifying.status === 'idle') return <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-emerald-500" /></div>;

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-200 font-sans selection:bg-emerald-500/30">
      
      {verifying.status !== 'idle' && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0a0a0c] p-6 text-center">
          <div className="max-w-md w-full bg-[#16161a] border border-white/10 rounded-3xl p-10 shadow-2xl">
            {verifying.status === 'loading' && (
              <div className="space-y-6">
                <Loader2 className="w-12 h-12 animate-spin text-emerald-500 mx-auto" />
                <h2 className="text-2xl font-bold text-white">Verifying Identity</h2>
                <p className="text-slate-400">{verifying.message}</p>
              </div>
            )}
            {verifying.status === 'success' && (
              <div className="space-y-6">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                </div>
                <h2 className="text-2xl font-bold text-white">Identity Verified</h2>
                <p className="text-slate-400">{verifying.message}</p>
                <button 
                  onClick={() => { setVerifying({ status: 'idle' }); openAuthModal('login'); }}
                  className="w-full bg-emerald-500 text-black py-4 rounded-xl font-bold hover:bg-emerald-400 transition-all"
                >
                  Proceed to Login
                </button>
              </div>
            )}
            {verifying.status === 'error' && (
              <div className="space-y-6">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
                  <ShieldAlert className="w-8 h-8 text-red-500" />
                </div>
                <h2 className="text-2xl font-bold text-white">Verification Failed</h2>
                <p className="text-slate-400">{verifying.message}</p>
                <button 
                  onClick={() => setVerifying({ status: 'idle' })}
                  className="w-full bg-white/10 text-white py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
                >
                  Back to Home
                </button>
              </div>
            )}
          </div>
        </div>
      )}

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
              <a href="https://omnisense.77security.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">OmniSense</a>
              <a href="#transparency" className="hover:text-emerald-400 transition-colors">Transparency</a>
              <a href="#ownership" className="hover:text-emerald-400 transition-colors">Data Ownership</a>
              
              {user ? (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                    <User className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">{user.email.split('@')[0]}</span>
                  </div>
                  <button onClick={handleLogout} className="text-slate-400 hover:text-white transition-colors">
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <button onClick={() => openAuthModal('login')} className="hover:text-emerald-400 transition-colors">Login</button>
                  <button onClick={() => openAuthModal('register')} className="bg-emerald-500 hover:bg-emerald-400 text-black px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105">
                    Join Network
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {user ? (
        <main className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-2">User Portal</h2>
              <p className="text-slate-400">Manage your profile and environmental metadata for verified threat sensing.</p>
            </div>

            <div className="grid md:grid-cols-1 gap-8">
              <div className="bg-[#16161a] border border-white/10 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-500/20 rounded-xl"><User className="text-emerald-400" /></div>
                    <h3 className="text-xl font-bold text-white">Identity Profile</h3>
                  </div>
                  <button 
                    onClick={updateProfile}
                    disabled={isSubmitting}
                    className="flex items-center gap-2 text-xs font-bold bg-emerald-500 text-black px-3 py-1.5 rounded-lg hover:bg-emerald-400 disabled:opacity-50"
                  >
                    {isSubmitting ? <Loader2 className="w-3 h-3 animate-spin" /> : <Save className="w-3 h-3" />}
                    Save Changes
                  </button>
                </div>
                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Verified Email</span>
                    <div className="text-sm text-slate-200 bg-black/40 p-3 rounded-xl border border-white/5">{user.email}</div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Industry Sector</span>
                    <select 
                      value={user.industry_key}
                      onChange={(e) => setUser({...user, industry_key: e.target.value})}
                      className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 text-sm focus:border-emerald-500 outline-none transition-all appearance-none cursor-pointer"
                    >
                      {INDUSTRIES.map(i => <option key={i.key} value={i.key}>{i.name}</option>)}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Operation Region (ISO 3166)</span>
                    <select 
                      value={user.region_code}
                      onChange={(e) => setUser({...user, region_code: e.target.value})}
                      className="w-full bg-black border border-white/10 rounded-xl py-3 px-4 text-sm focus:border-emerald-500 outline-none transition-all appearance-none cursor-pointer"
                    >
                      {COUNTRIES.map(c => <option key={c.code} value={c.code}>{c.name} ({c.code})</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-[#16161a]/50 border border-white/5 rounded-2xl p-8 text-center py-12">
                  <Activity className="w-12 h-12 text-emerald-500/20 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">OmniSense Integration</h3>
                  <p className="text-slate-500 text-sm max-w-sm mx-auto">
                    Advanced security features including API key provisioning and real-time telemetry will be enabled shortly.
                  </p>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <>
          <section className="pt-40 pb-20 px-4 relative overflow-hidden text-center">
            <div className="max-w-5xl mx-auto relative z-10">
              <div className="mb-10 inline-block">
                <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden border-2 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.2)] bg-black flex items-center justify-center">
                  <Shield className="text-emerald-500 w-12 h-12" />
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
                <Globe className="w-3 h-3" /> Standardized Intelligence Sharing
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                Security is <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Transparent</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Join the open-source threat intelligence network. Standardized industry sectors, ISO-verified regions, and radical transparency.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => openAuthModal('register')}
                  className="bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
                >
                  Join the Network <ArrowRight className="w-5 h-5" />
                </button>
                <a 
                  href="https://omnisense.77security.com" 
                  target="_blank"
                  className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 border border-white/10"
                >
                  Explore OmniSense
                </a>
              </div>
            </div>
          </section>

          {/* New Sections Added Back */}
          <section id="transparency" className="py-24 px-4 bg-[#111115]/50 border-y border-white/5">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="text-emerald-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">Radical Transparency</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  We believe security works best when it's open. 77 Security provides a verifiable foundation where threat intelligence is standardized, not siloed.
                </p>
                <ul className="space-y-4">
                  {[
                    "Open-source data processing pipelines",
                    "Publicly verifiable industry sector mapping",
                    "Transparent reporting standards (ISO 3166)",
                    "Community-driven threat definitions"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-2 relative">
                  <div className="bg-[#16161a] rounded-xl overflow-hidden border border-white/5">
                    <div className="flex items-center gap-2 p-3 bg-white/5 border-b border-white/5">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                      </div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-4">Transparency-Core / Public-API</div>
                    </div>
                    <div className="p-6 font-mono text-sm space-y-2">
                      <div className="text-emerald-500">GET /api/v1/threats/global</div>
                      <div className="text-slate-400">{`{`}</div>
                      <div className="text-slate-400 ml-4">"status": "verified",</div>
                      <div className="text-slate-400 ml-4">"standard": "ISO-3166-2",</div>
                      <div className="text-slate-400 ml-4">"sectors": ["FINANCE", "TECH"],</div>
                      <div className="text-emerald-400 ml-4">"source_verified": true</div>
                      <div className="text-slate-400">{`}`}</div>
                    </div>
                  </div>
              </div>
            </div>
          </section>

          <section id="ownership" className="py-24 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center flex-row-reverse">
              <div className="order-2 md:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-[#16161a] border border-white/10 rounded-2xl">
                    <Database className="w-8 h-8 text-blue-400 mb-4" />
                    <h4 className="text-white font-bold mb-2">Silo-Free</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Your data remains your property, formatted to global standards.</p>
                  </div>
                  <div className="p-6 bg-[#16161a] border border-white/10 rounded-2xl">
                    <Unlock className="w-8 h-8 text-emerald-400 mb-4" />
                    <h4 className="text-white font-bold mb-2">Portability</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Export and integrate intelligence with any security stack.</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <ShieldAlert className="text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">True Data Ownership</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  77 Security is a conduit, not a cage. You maintain absolute control over your environmental telemetry while contributing to a global immune system.
                </p>
                <div className="flex gap-4">
                   <div className="flex-1 p-4 border border-emerald-500/20 bg-emerald-500/5 rounded-xl">
                      <div className="text-emerald-400 font-bold mb-1">Zero Lock-in</div>
                      <div className="text-xs text-slate-400 italic leading-snug">We provide the protocols, you provide the insight.</div>
                   </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {authModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0a0a0c]/90 backdrop-blur-sm" onClick={closeAuthModal}></div>
          <div className="relative bg-[#16161a] border border-white/10 w-full max-w-md rounded-3xl p-8 shadow-2xl">
            <button onClick={closeAuthModal} className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"><X /></button>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{authModal === 'login' ? 'User Login' : 'Register Account'}</h3>
              <p className="text-slate-400 text-sm">Access the 77 Security Intelligence Network.</p>
            </div>

            {error && <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-lg text-center">{error}</div>}

            <form onSubmit={handleAuth} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input 
                    type="email" required
                    className="w-full bg-black border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-emerald-500 outline-none transition-all"
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input 
                    type="password" required
                    className="w-full bg-black border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-emerald-500 outline-none transition-all"
                    onChange={e => setFormData({...formData, password: e.target.value})}
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-500 text-black py-4 rounded-xl font-bold hover:bg-emerald-400 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : (authModal === 'login' ? 'Login' : 'Create Account')}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-white/5 text-center">
              <p className="text-slate-500 text-sm">
                {authModal === 'login' ? "Don't have an account?" : "Already joined?"}
                <button 
                  onClick={() => openAuthModal(authModal === 'login' ? 'register' : 'login')}
                  className="ml-2 text-emerald-400 font-bold hover:text-emerald-300"
                >
                  {authModal === 'login' ? 'Join Now' : 'Sign In'}
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      <footer className="py-20 border-t border-white/5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span className="font-bold text-white">77 SECURITY</span>
            <span className="ml-4">© 2025 Standardizing the Web.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/77-Security" className="hover:text-white transition-colors flex items-center gap-2"><Github className="w-4 h-4"/> Open Source</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;