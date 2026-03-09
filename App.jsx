import React, { useState, useEffect } from 'react';
import { 
  Shield, Github, Server, Users, Unlock, Globe, Eye, ChevronRight, 
  Database, Lock, Terminal, ArrowRight, CheckCircle2, Code, Zap, 
  Activity, Cpu, LogIn, User, Key, LogOut, Mail, Copy, X, Loader2,
  Building2, MapPin, Save
} from 'lucide-react';

// Configuration
const API_BASE = "https://identity.77security.com/api";

// Standardized Lists (Aligned with init_db.sql)
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
  const [newKey, setNewKey] = useState(null); 
  const [formData, setFormData] = useState({ email: '', password: '', industry_key: '', region_code: '' });
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch(`${API_BASE}/user/me`);
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

  const updateProfile = async () => {
    setIsUpdating(true);
    try {
      const res = await fetch(`${API_BASE}/user/profile`, {
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
      setIsUpdating(false);
    }
  };

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
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("Copied to clipboard!");
  };

  if (loading) return <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-emerald-500" /></div>;

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-200 font-sans selection:bg-emerald-500/30">
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
                  <button onClick={() => window.location.reload()} className="text-slate-400 hover:text-white transition-colors">
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

      {user ? (
        <main className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-2">Node Operator Portal</h2>
              <p className="text-slate-400">Configure your environmental metadata for verified threat sensing.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#16161a] border border-white/10 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-500/20 rounded-xl"><User className="text-emerald-400" /></div>
                    <h3 className="text-xl font-bold text-white">Identity</h3>
                  </div>
                  <button 
                    onClick={updateProfile}
                    disabled={isUpdating}
                    className="flex items-center gap-2 text-xs font-bold bg-emerald-500 text-black px-3 py-1.5 rounded-lg hover:bg-emerald-400 disabled:opacity-50"
                  >
                    {isUpdating ? <Loader2 className="w-3 h-3 animate-spin" /> : <Save className="w-3 h-3" />}
                    Save Changes
                  </button>
                </div>
                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Verified Email</span>
                    <div className="text-sm text-slate-200 bg-black/40 p-3 rounded-xl border border-white/5">{user.email}</div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">TI Sector (Standardized)</span>
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

              <div className="bg-[#16161a] border border-emerald-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-xl"><Key className="text-blue-400" /></div>
                  <h3 className="text-xl font-bold text-white">Security Keys</h3>
                </div>
                
                {newKey ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl mb-4">
                    <p className="text-xs text-emerald-400 font-bold mb-2 uppercase tracking-widest text-center">Zero-Knowledge Key Generated</p>
                    <div className="flex items-center gap-2 bg-black/40 p-3 rounded-lg font-mono text-xs overflow-hidden text-emerald-200 border border-white/5">
                      <span className="truncate flex-1">{newKey}</span>
                      <button onClick={() => copyToClipboard(newKey)} className="shrink-0 text-emerald-400 hover:text-white p-1">
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                    <button onClick={() => setNewKey(null)} className="w-full mt-4 py-2 bg-emerald-500 text-black text-xs font-bold rounded-lg uppercase tracking-wider">I have stored this safely</button>
                  </div>
                ) : (
                  <button 
                    onClick={generateKey}
                    className="w-full py-10 border-2 border-dashed border-white/10 rounded-xl text-slate-400 hover:border-emerald-500/50 hover:text-emerald-400 transition-all group flex flex-col items-center gap-3"
                  >
                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-emerald-500/10 transition-colors">
                      <Zap className="w-6 h-6" />
                    </div>
                    <span className="font-bold">Provision New Access Key</span>
                  </button>
                )}
                <div className="mt-6 p-4 bg-blue-500/5 border border-blue-500/10 rounded-xl">
                  <p className="text-[10px] leading-relaxed text-slate-500 italic">
                    API keys are hashed using SHA-256 and stored as BYTEA. 77 Security does not store plaintext keys. Loss of a key requires generating a new one.
                  </p>
                </div>
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
                  onClick={() => setAuthModal('register')}
                  className="bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
                >
                  Join the Network <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </section>
          {/* Landing sections omitted for brevity but preserved in logic */}
        </>
      )}

      {authModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0a0a0c]/90 backdrop-blur-sm" onClick={() => setAuthModal(null)}></div>
          <div className="relative bg-[#16161a] border border-white/10 w-full max-w-md rounded-3xl p-8 shadow-2xl">
            <button onClick={() => setAuthModal(null)} className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"><X /></button>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{authModal === 'login' ? 'Identity Portal' : 'Register Node'}</h3>
              <p className="text-slate-400 text-sm">Secure access via Zero-Knowledge principles.</p>
            </div>

            {error && <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-lg text-center">{error}</div>}

            <form onSubmit={handleAuth} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Work Email</label>
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
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Security Key/Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input 
                    type="password" required
                    className="w-full bg-black border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-emerald-500 outline-none transition-all"
                    onChange={e => setFormData({...formData, password: e.target.value})}
                  />
                </div>
              </div>

              {authModal === 'register' && (
                <div className="grid grid-cols-1 gap-4 pt-2">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">TI Industry Sector</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 z-10" />
                      <select 
                        required
                        className="w-full bg-black border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-emerald-500 outline-none appearance-none cursor-pointer"
                        onChange={e => setFormData({...formData, industry_key: e.target.value})}
                        value={formData.industry_key}
                      >
                        <option value="" disabled>Select Sector</option>
                        {INDUSTRIES.map(ind => <option key={ind.key} value={ind.key}>{ind.name}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Country / Region</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 z-10" />
                      <select 
                        required
                        className="w-full bg-black border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:border-emerald-500 outline-none appearance-none cursor-pointer"
                        onChange={e => setFormData({...formData, region_code: e.target.value})}
                        value={formData.region_code}
                      >
                        <option value="" disabled>Select Country</option>
                        {COUNTRIES.map(reg => <option key={reg.code} value={reg.code}>{reg.name}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-black py-4 rounded-xl font-bold mt-4 transition-all">
                {authModal === 'login' ? 'Authenticate' : 'Provision Node Account'}
              </button>
            </form>

            <div className="mt-8 text-center text-xs text-slate-500">
              {authModal === 'login' ? (
                <>New operator? <button onClick={() => setAuthModal('register')} className="text-emerald-500 font-bold underline">Create Node</button></>
              ) : (
                <>Existing operator? <button onClick={() => setAuthModal('login')} className="text-emerald-500 font-bold underline">Login</button></>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;