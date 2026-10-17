import React, { useState } from 'react';
import { Video, Upload, CheckCircle2, Play, Sparkles, Film, ArrowUpRight } from 'lucide-react';
import { AdminSidebar } from '../../components/layout/AdminSidebar';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';

export const ManageMedia = () => {
  const { data, setData } = useFetch('/settings');
  const settings = data?.settings || {};

  const [videoUrl, setVideoUrl] = useState(settings.introVideoUrl || '');
  const [videoFile, setVideoFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  const presetReels = [
    {
      title: 'Metropolis Skyline High-Rise Reel',
      url: 'https://assets.mixkit.co/videos/preview/mixkit-modern-city-skyscrapers-and-buildings-41551-large.mp4',
      badge: 'Skyscraper'
    },
    {
      title: 'Suspension Bridge Transit Dynamic Reel',
      url: 'https://assets.mixkit.co/videos/preview/mixkit-suspension-bridge-seen-from-below-43288-large.mp4',
      badge: 'Infrastructure'
    },
    {
      title: 'Architectural Blueprint & Construction Site',
      url: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-an-architect-working-on-a-blueprint-41566-large.mp4',
      badge: 'CAD / Design'
    }
  ];

  const handleUpdateVideo = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg('');

    const payload = new FormData();
    if (videoFile) {
      payload.append('video', videoFile);
    } else {
      payload.append('introVideoUrl', videoUrl);
    }

    try {
      const res = await api.put('/settings', payload, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      if (res.data.success) {
        setMsg('Hero introduction video updated successfully!');
        setData({ ...data, settings: res.data.settings });
      }
    } catch (err) {
      alert('Error updating video: ' + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  const handleApplyPreset = (url) => {
    setVideoUrl(url);
    setVideoFile(null);
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
              Homepage Hero Introduction Reel CMS
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#EAEAEA] uppercase tracking-wider">
              Hero Video Media
            </h1>
            <p className="text-xs font-mono text-[#9CA3AF] mt-1">
              Replace or stream the homepage introduction architectural video without touching code
            </p>
          </div>
        </div>

        {msg && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-emerald-400 text-xs font-mono font-bold flex items-center gap-2 shadow-lg">
            <CheckCircle2 size={18} /> {msg}
          </div>
        )}

        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          
          {/* Form & Preset Controls (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Quick Preset Selector */}
            <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase font-bold text-[#D4AF37] tracking-wider flex items-center gap-2">
                  <Sparkles size={14} /> Curated Architectural Reels (1-Click Select)
                </span>
              </div>
              <div className="flex flex-col gap-2.5">
                {presetReels.map((preset, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleApplyPreset(preset.url)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                      videoUrl === preset.url
                        ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37]'
                        : 'bg-[#121417] border-[#333] text-[#9CA3AF] hover:text-[#EAEAEA] hover:border-[#D4AF37]/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Film size={16} className={videoUrl === preset.url ? 'text-[#D4AF37]' : 'text-[#666]'} />
                      <span className="text-xs font-mono font-semibold">{preset.title}</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#181A1E] border border-white/10 uppercase">
                      {preset.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom URL or Upload Form */}
            <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-6 shadow-xl">
              <form onSubmit={handleUpdateVideo} className="flex flex-col gap-5 text-xs font-mono">
                <div>
                  <label className="block uppercase text-[#9CA3AF] text-[10px] tracking-wider mb-1.5 font-bold">
                    Custom Video Stream URL (.mp4 / .webm)
                  </label>
                  <input
                    type="url"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    placeholder="https://assets.mixkit.co/videos/preview/..."
                    className="w-full bg-[#121417] rounded-xl border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>

                <div className="rounded-2xl border border-dashed border-[#333] p-6 text-center bg-[#121417]">
                  <Upload className="mx-auto text-[#D4AF37] w-8 h-8 mb-2" />
                  <p className="text-xs font-semibold text-[#EAEAEA] mb-1">
                    Or Upload MP4 / WEBM Direct Video File
                  </p>
                  <p className="text-[10px] text-[#9CA3AF] mb-4">
                    Max size 100MB • High resolution engineering or high-rise footage
                  </p>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => setVideoFile(e.target.files[0])}
                    className="text-xs text-[#9CA3AF] file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-mono file:bg-[#181A1E] file:text-[#D4AF37]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-[#D4AF37] text-[#121417] py-3.5 font-mono font-extrabold uppercase tracking-widest hover:bg-white hover:scale-[1.01] active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)] flex items-center justify-center gap-2"
                >
                  {loading ? 'Publishing Reel Video...' : 'Publish Hero Introduction Reel'} <Video size={16} />
                </button>
              </form>
            </div>

          </div>

          {/* Live Preview Monitor (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-6 shadow-xl sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase font-bold text-[#D4AF37] tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Live Homepage Video Monitor
                </span>
                <span className="text-[10px] font-mono text-[#9CA3AF]">Auto-Looping</span>
              </div>

              <div className="aspect-video bg-black rounded-xl border border-[#333] overflow-hidden shadow-2xl relative">
                <video
                  src={videoFile ? URL.createObjectURL(videoFile) : (videoUrl || settings.introVideoUrl)}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-4 pt-4 border-t border-[#26282D] text-xs font-mono text-[#9CA3AF] flex flex-col gap-2">
                <div className="flex justify-between">
                  <span>Playback Mode:</span>
                  <span className="text-[#EAEAEA]">Background Ambient Loop</span>
                </div>
                <div className="flex justify-between">
                  <span>Current Target:</span>
                  <span className="text-[#D4AF37] truncate max-w-[200px]">
                    {videoFile ? videoFile.name : (videoUrl || 'Standard Reel')}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
};
