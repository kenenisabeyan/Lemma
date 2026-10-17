import React, { useState } from 'react';
import { Save, CheckCircle2, Globe, ShieldCheck, Search, Sparkles, Building2, Phone, Mail, MapPin } from 'lucide-react';
import { AdminSidebar } from '../../components/layout/AdminSidebar';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';

export const Settings = () => {
  const { data, setData } = useFetch('/settings');
  const initialSettings = data?.settings || {};

  const [formData, setFormData] = useState({
    engineerName: initialSettings.engineerName || 'Alexandre Techane',
    title: initialSettings.title || 'Senior Structural Engineer, PE, SE',
    heroTagline: initialSettings.heroTagline || 'Precision in Every Structure.',
    heroBio: initialSettings.heroBio || 'Ensuring structural integrity, seismic safety, and architectural elegance for high-rise towers, infrastructure bridges, and complex commercial developments.',
    yearsExp: initialSettings.yearsExp || '14+',
    projectsCount: initialSettings.projectsCount || '180+',
    safetyRecord: initialSettings.safetyRecord || '100%',
    clientsCount: initialSettings.clientsCount || '50+',
    email: initialSettings.email || 'consult@alexandre-structural.com',
    phone: initialSettings.phone || '+1 (555) 019-8472',
    officeAddress: initialSettings.officeAddress || 'Suite 400, Iron Building, Metropolis City, NY 10001',
    metaTitle: initialSettings.metaTitle || 'Alexandre - Senior Structural Engineer & Consultant',
    metaDescription: initialSettings.metaDescription || 'Professional structural engineering portfolio featuring high-rise analysis, seismic retrofitting, concrete & steel design case studies.'
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg('');

    try {
      const res = await api.put('/settings', formData);
      if (res.data.success) {
        setMsg('Site configurations and SEO metadata updated successfully!');
        setData({ ...data, settings: res.data.settings });
      }
    } catch (err) {
      alert('Failed to save settings.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#121417] text-[#EAEAEA]">
      <AdminSidebar />

      <main className="flex-1 pt-16 lg:pt-8 p-4 sm:p-8 overflow-y-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-[#26282D]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#181A1E] px-3.5 py-1 text-xs font-mono text-[#D4AF37] mb-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Global Configurations & SEO CMS
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#EAEAEA] uppercase tracking-wider">
              Site Settings & SEO
            </h1>
            <p className="text-xs font-mono text-[#9CA3AF] mt-1">
              Configure engineer credentials, metric stats counters, office locations, and search engine metadata
            </p>
          </div>
        </div>

        {msg && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-emerald-400 text-xs font-mono font-bold flex items-center gap-2 shadow-lg">
            <CheckCircle2 size={18} /> {msg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-8 max-w-5xl mb-12">
          
          {/* Section 1: Professional Identity */}
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-6 sm:p-8 shadow-xl">
            <h3 className="text-sm font-mono font-bold uppercase text-[#D4AF37] tracking-wider mb-6 flex items-center gap-2">
              <Globe size={18} /> 1. Professional Identity & Hero Copy
            </h3>

            <div className="grid sm:grid-cols-2 gap-5 mb-5 font-mono text-xs">
              <div>
                <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">
                  Engineer Full Name
                </label>
                <input
                  type="text"
                  name="engineerName"
                  value={formData.engineerName}
                  onChange={handleChange}
                  className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans text-sm font-bold"
                />
              </div>
              <div>
                <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">
                  Title & Professional Licenses
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans text-sm"
                />
              </div>
            </div>

            <div className="mb-5 font-mono text-xs">
              <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">
                Hero Tagline
              </label>
              <input
                type="text"
                name="heroTagline"
                value={formData.heroTagline}
                onChange={handleChange}
                className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans text-sm"
              />
            </div>

            <div className="font-mono text-xs">
              <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">
                Hero Narrative Statement
              </label>
              <textarea
                rows="3"
                name="heroBio"
                value={formData.heroBio}
                onChange={handleChange}
                className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans leading-relaxed text-xs"
              ></textarea>
            </div>
          </div>

          {/* Section 2: Metric Stat Counters */}
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-6 sm:p-8 shadow-xl">
            <h3 className="text-sm font-mono font-bold uppercase text-[#D4AF37] tracking-wider mb-6 flex items-center gap-2">
              <Sparkles size={18} /> 2. Public Metric Stat Counters
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
              <div>
                <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">
                  Years of Experience
                </label>
                <input
                  type="text"
                  name="yearsExp"
                  value={formData.yearsExp}
                  onChange={handleChange}
                  placeholder="14+"
                  className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-bold text-center text-sm"
                />
              </div>
              <div>
                <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">
                  Projects Completed
                </label>
                <input
                  type="text"
                  name="projectsCount"
                  value={formData.projectsCount}
                  onChange={handleChange}
                  placeholder="180+"
                  className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-bold text-center text-sm"
                />
              </div>
              <div>
                <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">
                  Safety Margin
                </label>
                <input
                  type="text"
                  name="safetyRecord"
                  value={formData.safetyRecord}
                  onChange={handleChange}
                  placeholder="100%"
                  className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-emerald-400 focus:border-[#D4AF37] focus:outline-none transition-colors font-bold text-center text-sm"
                />
              </div>
              <div>
                <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">
                  Developer Clients
                </label>
                <input
                  type="text"
                  name="clientsCount"
                  value={formData.clientsCount}
                  onChange={handleChange}
                  placeholder="50+"
                  className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-bold text-center text-sm"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Contact & Office Coordinates */}
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-6 sm:p-8 shadow-xl">
            <h3 className="text-sm font-mono font-bold uppercase text-[#D4AF37] tracking-wider mb-6 flex items-center gap-2">
              <Building2 size={18} /> 3. Contact Coordinates & Office
            </h3>

            <div className="grid sm:grid-cols-2 gap-5 mb-5 font-mono text-xs">
              <div>
                <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold flex items-center gap-1.5">
                  <Mail size={12} className="text-[#D4AF37]" /> Official Consultation Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold flex items-center gap-1.5">
                  <Phone size={12} className="text-[#D4AF37]" /> Telephone / Office Direct
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="font-mono text-xs">
              <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold flex items-center gap-1.5">
                <MapPin size={12} className="text-[#D4AF37]" /> Physical Office Address
              </label>
              <input
                type="text"
                name="officeAddress"
                value={formData.officeAddress}
                onChange={handleChange}
                className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Section 4: SEO Metadata with Live Google Search Snippet Preview */}
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-6 sm:p-8 shadow-xl">
            <h3 className="text-sm font-mono font-bold uppercase text-[#D4AF37] tracking-wider mb-6 flex items-center gap-2">
              <Search size={18} /> 4. Global Search Engine Optimization (SEO)
            </h3>

            <div className="grid gap-5 font-mono text-xs mb-6">
              <div>
                <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">
                  SEO Meta Title Tag (60 chars max)
                </label>
                <input
                  type="text"
                  name="metaTitle"
                  value={formData.metaTitle}
                  onChange={handleChange}
                  className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">
                  SEO Meta Description Tag (160 chars max)
                </label>
                <textarea
                  rows="2"
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleChange}
                  className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors font-sans text-xs"
                ></textarea>
              </div>
            </div>

            {/* Live Search Engine Snippet Preview */}
            <div className="rounded-xl bg-[#121417] border border-[#2D3137] p-5">
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-2 font-bold">
                Live Google Search Result Preview
              </span>
              <div className="font-sans">
                <span className="text-[11px] text-[#9CA3AF] block mb-0.5">https://alexandre-structural.com</span>
                <h4 className="text-base text-[#8AB4F8] hover:underline cursor-pointer font-medium leading-snug">
                  {formData.metaTitle || 'Alexandre - Senior Structural Engineer & Consultant'}
                </h4>
                <p className="text-xs text-[#BDC1C6] mt-1 line-clamp-2 leading-relaxed">
                  {formData.metaDescription || 'Professional structural engineering portfolio featuring high-rise analysis, seismic retrofitting, concrete & steel design case studies.'}
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-[#D4AF37] text-[#121417] px-8 py-4 font-mono font-extrabold uppercase tracking-widest hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] flex items-center gap-2"
            >
              <Save size={16} />
              {loading ? 'Saving Configurations...' : 'Save Site Settings & SEO'}
            </button>
          </div>

        </form>

      </main>
    </div>
  );
};
