import React, { useState } from 'react';
import { Save, CheckCircle2, Globe, ShieldCheck } from 'lucide-react';
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

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="mb-8 pb-6 border-b border-[#333]">
          <h1 className="text-2xl font-bold uppercase tracking-wider">Site Settings & SEO Configurations</h1>
          <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mt-1">Configure statistics, hero taglines, office details and SEO fields</p>
        </div>

        <div className="max-w-4xl bg-[#1E2125] border border-[#333] p-8 shadow-xl">
          {msg && (
            <div className="mb-6 p-4 bg-emerald-950/40 border border-emerald-500/50 text-emerald-400 text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 size={18} /> {msg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-xs">
            
            {/* General Identity */}
            <div className="border-b border-[#333] pb-6">
              <h3 className="text-sm font-bold uppercase text-[#D4AF37] mb-4 flex items-center gap-2">
                <Globe size={16} /> Professional Identity & Hero Text
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono uppercase text-[#9CA3AF] text-[10px] mb-1">Engineer Full Name</label>
                  <input
                    type="text"
                    name="engineerName"
                    value={formData.engineerName}
                    onChange={handleChange}
                    className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA]"
                  />
                </div>
                <div>
                  <label className="block font-mono uppercase text-[#9CA3AF] text-[10px] mb-1">Title & Credentials</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA]"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block font-mono uppercase text-[#9CA3AF] text-[10px] mb-1">Hero Tagline</label>
                <input
                  type="text"
                  name="heroTagline"
                  value={formData.heroTagline}
                  onChange={handleChange}
                  className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA]"
                />
              </div>

              <div className="mt-4">
                <label className="block font-mono uppercase text-[#9CA3AF] text-[10px] mb-1">Hero Bio Paragraph</label>
                <textarea
                  name="heroBio"
                  rows="3"
                  value={formData.heroBio}
                  onChange={handleChange}
                  className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA]"
                ></textarea>
              </div>
            </div>

            {/* Statistics */}
            <div className="border-b border-[#333] pb-6">
              <h3 className="text-sm font-bold uppercase text-[#D4AF37] mb-4">Homepage Statistics Metrics</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block font-mono uppercase text-[#9CA3AF] text-[10px] mb-1">Years Exp</label>
                  <input
                    type="text"
                    name="yearsExp"
                    value={formData.yearsExp}
                    onChange={handleChange}
                    className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA]"
                  />
                </div>
                <div>
                  <label className="block font-mono uppercase text-[#9CA3AF] text-[10px] mb-1">Projects Count</label>
                  <input
                    type="text"
                    name="projectsCount"
                    value={formData.projectsCount}
                    onChange={handleChange}
                    className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA]"
                  />
                </div>
                <div>
                  <label className="block font-mono uppercase text-[#9CA3AF] text-[10px] mb-1">Safety Record</label>
                  <input
                    type="text"
                    name="safetyRecord"
                    value={formData.safetyRecord}
                    onChange={handleChange}
                    className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA]"
                  />
                </div>
                <div>
                  <label className="block font-mono uppercase text-[#9CA3AF] text-[10px] mb-1">Clients Count</label>
                  <input
                    type="text"
                    name="clientsCount"
                    value={formData.clientsCount}
                    onChange={handleChange}
                    className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA]"
                  />
                </div>
              </div>
            </div>

            {/* SEO Metadata */}
            <div>
              <h3 className="text-sm font-bold uppercase text-[#D4AF37] mb-4">SEO Fields & Open Graph</h3>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="block font-mono uppercase text-[#9CA3AF] text-[10px] mb-1">Meta Title</label>
                  <input
                    type="text"
                    name="metaTitle"
                    value={formData.metaTitle}
                    onChange={handleChange}
                    className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA]"
                  />
                </div>
                <div>
                  <label className="block font-mono uppercase text-[#9CA3AF] text-[10px] mb-1">Meta Description</label>
                  <textarea
                    name="metaDescription"
                    rows="2"
                    value={formData.metaDescription}
                    onChange={handleChange}
                    className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA]"
                  ></textarea>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#D4AF37] text-[#121417] py-3.5 font-extrabold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 mt-4"
            >
              {loading ? 'Saving Settings...' : 'Save Site Settings'} <Save size={16} />
            </button>
          </form>
        </div>

      </main>
    </div>
  );
};
