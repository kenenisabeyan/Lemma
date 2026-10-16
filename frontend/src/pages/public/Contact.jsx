import React, { useState } from 'react';
import { Phone, Mail, MapPin, ShieldCheck, CheckCircle2, Send, AlertCircle } from 'lucide-react';
import api from '../../services/api';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Commercial High-Rise',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const res = await api.post('/contact', formData);
      if (res.data.success) {
        setSuccessMsg(res.data.message || 'Consultation inquiry submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: 'Commercial High-Rise',
          subject: '',
          message: ''
        });
      }
    } catch (err) {
      setErrorMsg(err.response?.data?.message || 'Failed to submit inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#121417] text-[#EAEAEA] pt-28 pb-24 relative overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            Direct Consultation Channel
          </span>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#EAEAEA] tracking-tight mb-6">
            Request a <span className="text-[#D4AF37]">Consultation.</span>
          </h1>
          <p className="text-[#9CA3AF] text-base leading-relaxed">
            Available for new structural engineering projects, high-rise wind & seismic peer reviews, structural evaluations, and technical advisory.
          </p>
        </div>

        {/* Grid Container */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 border border-[#333] bg-[#1E2125] shadow-2xl">
          
          {/* Left Column: Direct Office Contact */}
          <div className="md:col-span-2 bg-[#17191D] p-10 border-b md:border-b-0 md:border-r border-[#333] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#EAEAEA] mb-8 uppercase tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D4AF37]"></span> Office Details
              </h3>

              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#121417] border border-[#333] text-[#D4AF37] shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[#9CA3AF] text-[10px] uppercase tracking-widest mb-1 font-mono">Telephone</p>
                    <p className="text-[#EAEAEA] text-sm font-semibold">+1 (555) 019-8472</p>
                    <p className="text-[11px] text-[#9CA3AF]">Mon - Fri: 8:00 AM - 6:00 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#121417] border border-[#333] text-[#D4AF37] shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[#9CA3AF] text-[10px] uppercase tracking-widest mb-1 font-mono">Official Email</p>
                    <p className="text-[#EAEAEA] text-sm font-semibold">consult@alexandre-structural.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#121417] border border-[#333] text-[#D4AF37] shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[#9CA3AF] text-[10px] uppercase tracking-widest mb-1 font-mono">Headquarters</p>
                    <p className="text-[#EAEAEA] text-sm font-semibold">
                      Suite 400, Iron Building<br />
                      Metropolis City, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#2A2E35] mt-8 text-xs text-[#9CA3AF]">
              <p className="flex items-center gap-1.5 text-[#D4AF37]">
                <ShieldCheck size={16} /> Confidentiality Assured
              </p>
              <p className="mt-1">All drawings and project data shared are protected under standard NDA principles.</p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="md:col-span-3 p-10">
            <h3 className="text-xl font-bold text-[#EAEAEA] mb-8 uppercase tracking-wide">
              Consultation Form
            </h3>

            {successMsg && (
              <div className="mb-6 p-4 bg-emerald-950/40 border border-emerald-500/50 text-emerald-400 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 size={18} /> {successMsg}
              </div>
            )}

            {errorMsg && (
              <div className="mb-6 p-4 bg-red-950/40 border border-red-500/50 text-red-400 text-xs font-semibold flex items-center gap-2">
                <AlertCircle size={18} /> {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#9CA3AF] mb-2 font-mono">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full bg-[#121417] border border-[#333] text-[#EAEAEA] p-3.5 text-xs focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#9CA3AF] mb-2 font-mono">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="s.jenkins@architech.com"
                    className="w-full bg-[#121417] border border-[#333] text-[#EAEAEA] p-3.5 text-xs focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#9CA3AF] mb-2 font-mono">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#121417] border border-[#333] text-[#EAEAEA] p-3.5 text-xs focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#9CA3AF] mb-2 font-mono">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-[#121417] border border-[#333] text-[#EAEAEA] p-3.5 text-xs focus:border-[#D4AF37] focus:outline-none transition-colors"
                  >
                    <option value="Commercial High-Rise">Commercial High-Rise</option>
                    <option value="Infrastructure & Bridges">Infrastructure & Bridges</option>
                    <option value="Special Structure / Dome">Special Structure / Dome</option>
                    <option value="Seismic Retrofit Audit">Seismic Retrofit Audit</option>
                    <option value="Peer Review / Value Engineering">Peer Review / Value Engineering</option>
                    <option value="Forensic Structural Evaluation">Forensic Structural Evaluation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#9CA3AF] mb-2 font-mono">
                  Subject / Project Name
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Seismic lateral bracing audit for 20-story building"
                  className="w-full bg-[#121417] border border-[#333] text-[#EAEAEA] p-3.5 text-xs focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#9CA3AF] mb-2 font-mono">
                  Structural Project Requirements *
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe building height, structural materials (concrete/steel), site location, timeline, or key technical challenges..."
                  className="w-full bg-[#121417] border border-[#333] text-[#EAEAEA] p-3.5 text-xs focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#D4AF37] text-[#121417] px-8 py-4 text-xs font-extrabold tracking-widest uppercase hover:bg-white transition-all w-full flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
              >
                {loading ? 'Submitting Inquiry...' : 'Send Secure Inquiry'} <Send size={14} />
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};
