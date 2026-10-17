import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layers, Lock, Mail, ShieldCheck, AlertCircle, ArrowLeft, Sparkles, KeyRound } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await login({ email, password });
      if (res.success) {
        navigate('/admin/dashboard');
      } else {
        setError(res.message || 'Invalid credentials');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please verify credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickFill = () => {
    setEmail('admin@engineering.com');
    setPassword('AdminPassword123!');
  };

  return (
    <div className="min-h-screen bg-[#121417] flex items-center justify-center p-6 relative overflow-hidden selection:bg-[#D4AF37] selection:text-[#121417]">
      
      {/* Ambient Aurora Drift Background Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 left-[10%] h-[50vh] w-[50vh] rounded-full bg-[#D4AF37]/15 blur-[130px] animate-aurora-drift"></div>
        <div className="absolute -bottom-1/4 right-[10%] h-[50vh] w-[50vh] rounded-full bg-[#D4AF37]/10 blur-[130px] animate-aurora-drift-2"></div>
      </div>

      {/* Blueprint grid subtle pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      {/* Back to Live Site Pill */}
      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={() => navigate('/')}
          className="rounded-full bg-[#181A1E]/80 backdrop-blur-md border border-[#333] hover:border-[#D4AF37]/50 text-[#9CA3AF] hover:text-[#EAEAEA] px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-md"
        >
          <ArrowLeft size={14} /> Back to Live Site
        </button>
      </div>

      <div className="w-full max-w-md rounded-3xl bg-[#181A1E]/95 backdrop-blur-xl border border-[#D4AF37]/35 p-8 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] relative z-10">
        
        {/* Technical Top Border Gradient */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] rounded-t-3xl"></div>

        <div className="flex flex-col items-center text-center mb-8 pt-2">
          <div className="w-14 h-14 rounded-2xl border border-[#D4AF37]/60 bg-[#121417] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(212,175,55,0.25)]">
            <Layers className="text-[#D4AF37] w-7 h-7" />
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#121417] px-3.5 py-1 text-xs font-mono text-[#D4AF37] mb-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            CMS Admin Access
          </div>
          <h1 className="text-2xl font-extrabold text-[#EAEAEA] uppercase tracking-wider font-mono">
            Engineer Portal
          </h1>
          <p className="text-xs text-[#9CA3AF] font-mono mt-1">
            Authenticate to manage structural portfolio case studies
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-red-950/40 border border-red-500/50 text-red-300 text-xs font-mono font-semibold flex items-center gap-2 shadow-md">
            <AlertCircle size={18} className="shrink-0" /> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-mono text-xs">
          <div>
            <label className="block text-[10px] uppercase tracking-wider text-[#9CA3AF] mb-1.5 font-bold">
              Administrator Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-4 h-4" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@engineering.com"
                className="w-full bg-[#121417] rounded-xl border border-[#333] text-[#EAEAEA] pl-10 pr-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-wider text-[#9CA3AF] mb-1.5 font-bold">
              Access Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-4 h-4" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-[#121417] rounded-xl border border-[#333] text-[#EAEAEA] pl-10 pr-4 py-3 focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-[#D4AF37] text-[#121417] py-3.5 text-xs font-mono font-extrabold tracking-widest uppercase hover:bg-white hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 mt-2 shadow-[0_0_20px_rgba(212,175,55,0.25)]"
          >
            {loading ? 'Verifying Credentials...' : 'Sign In to Portal'} <ShieldCheck size={16} />
          </button>
        </form>

        {/* 1-Click Demo Credentials Quick Fill */}
        <div className="mt-8 pt-6 border-t border-[#26282D] text-center">
          <p className="text-[11px] font-mono text-[#9CA3AF] mb-3">
            Testing credentials:
          </p>
          <button
            type="button"
            onClick={handleQuickFill}
            className="w-full rounded-xl bg-[#121417] border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#D4AF37] py-2 px-3 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:bg-[#D4AF37]/10"
          >
            <KeyRound size={13} /> Quick Fill Demo Admin Credentials
          </button>
        </div>

      </div>
    </div>
  );
};
