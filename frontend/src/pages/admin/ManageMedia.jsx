import React, { useState } from 'react';
import { Video, Upload, CheckCircle2, AlertCircle } from 'lucide-react';
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

  return (
    <div className="flex min-h-screen bg-[#121417] text-[#EAEAEA]">
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="mb-8 pb-6 border-b border-[#333]">
          <h1 className="text-2xl font-bold uppercase tracking-wider">Homepage Introduction Video Manager</h1>
          <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mt-1">Replace or upload the homepage hero introduction video directly without code modifications</p>
        </div>

        <div className="max-w-3xl bg-[#1E2125] border border-[#333] p-8 shadow-xl">
          {msg && (
            <div className="mb-6 p-4 bg-emerald-950/40 border border-emerald-500/50 text-emerald-400 text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 size={18} /> {msg}
            </div>
          )}

          <form onSubmit={handleUpdateVideo} className="flex flex-col gap-6 text-xs">
            <div>
              <label className="block font-mono uppercase text-[#9CA3AF] text-[10px] mb-2">
                Current Video Stream URL
              </label>
              <input
                type="url"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="https://assets.mixkit.co/videos/preview/..."
                className="w-full bg-[#121417] border border-[#333] p-3 text-[#EAEAEA] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div className="border border-dashed border-[#333] p-6 text-center bg-[#121417]">
              <Upload className="mx-auto text-[#D4AF37] w-8 h-8 mb-2" />
              <p className="text-xs font-semibold text-[#EAEAEA] mb-1">Or Upload New MP4 / WEBM Video File</p>
              <p className="text-[10px] text-[#9CA3AF] mb-4">Max size 100MB • High quality architectural reel</p>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => setVideoFile(e.target.files[0])}
                className="text-xs text-[#9CA3AF]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#D4AF37] text-[#121417] py-3.5 font-extrabold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
              {loading ? 'Publishing Video...' : 'Publish Hero Introduction Video'} <Video size={16} />
            </button>
          </form>

          {/* Current Video Preview */}
          <div className="mt-8 pt-6 border-t border-[#333]">
            <h4 className="text-xs font-bold uppercase text-[#D4AF37] mb-3">Live Homepage Video Preview</h4>
            <div className="aspect-video bg-black border border-[#333] overflow-hidden">
              <iframe
                src={settings.introVideoUrl || videoUrl}
                title="Current Intro Video"
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};
