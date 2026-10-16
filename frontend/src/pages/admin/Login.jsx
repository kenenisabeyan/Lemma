import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layers, Lock, Mail, ShieldCheck, AlertCircle } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-[#121417] flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Structural blueprint lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="w-full max-w-md bg-[#1E2125] border border-[#333] p-8 shadow-2xl relative z-10">
        
        {/* Technical Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]"></div>

        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-12 h-12 border border-[#D4AF37] bg-[#121417] flex items-center justify-center mb-4">
            <Layers className="text-[#D4AF37] w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-[#EAEAEA] uppercase tracking-wider">CMS Admin Access</h1>
          <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mt-1">Structural Engineering Portfolio</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-950/40 border border-red-500/50 text-red-400 text-xs font-semibold flex items-center gap-2">
            <AlertCircle size={18} /> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest text-[#9CA3AF] mb-2">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-4 h-4" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@engineering.com"
                className="w-full bg-[#121417] border border-[#333] text-[#EAEAEA] pl-10 pr-4 py-3 text-xs focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-mono uppercase tracking-widest text-[#9CA3AF] mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-4 h-4" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-[#121417] border border-[#333] text-[#EAEAEA] pl-10 pr-4 py-3 text-xs focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#D4AF37] text-[#121417] py-3.5 text-xs font-extrabold tracking-widest uppercase hover:bg-white transition-all flex items-center justify-center gap-2 mt-2 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
          >
            {loading ? 'Authenticating...' : 'Sign In to Admin Dashboard'} <ShieldCheck size={16} />
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-[#333] text-center">
          <p className="text-[11px] text-[#9CA3AF]">
            Default Seeded Admin Email: <code className="text-[#D4AF37]">admin@engineering.com</code>
            <br />
            Password: <code className="text-[#D4AF37]">AdminPassword123!</code>
          </p>
        </div>

      </div>
    </div>
  );
};
