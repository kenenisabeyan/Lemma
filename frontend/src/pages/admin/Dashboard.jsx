import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FolderKanban, 
  Inbox, 
  Wrench, 
  FileText, 
  Video, 
  CheckCircle2, 
  TrendingUp, 
  Eye, 
  Plus,
  ShieldCheck
} from 'lucide-react';
import { AdminSidebar } from '../../components/layout/AdminSidebar';
import { useFetch } from '../../hooks/useFetch';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { data: projectsData } = useFetch('/projects');
  const { data: inquiriesData } = useFetch('/contact');
  const { data: insightsData } = useFetch('/insights');

  const projectsCount = projectsData?.projects?.length || 3;
  const inquiries = inquiriesData?.inquiries || [];
  const newInquiriesCount = inquiries.filter(i => i.status === 'NEW').length;

  return (
    <div className="flex min-h-screen bg-[#121417] text-[#EAEAEA]">
      <AdminSidebar />

      <main className="flex-1 pt-16 lg:pt-8 p-4 sm:p-8 overflow-y-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-[#26282D]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#181A1E] px-3.5 py-1 text-xs font-mono text-[#D4AF37] mb-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Admin Operation Center
            </div>
            <h1 className="text-2xl font-extrabold text-[#EAEAEA] uppercase tracking-wider">CMS Admin Dashboard</h1>
            <p className="text-xs font-mono text-[#9CA3AF] mt-1">Manage portfolio projects, consultation requests & site media</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => navigate('/admin/projects')}
              className="rounded-full bg-[#D4AF37] text-[#121417] px-5 py-2.5 text-xs font-mono font-extrabold uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_15px_rgba(212,175,55,0.25)] flex items-center gap-1.5 active:scale-95"
            >
              <Plus size={14} /> Add Project
            </button>
            <button
              onClick={() => navigate('/admin/media')}
              className="rounded-full bg-[#181A1E] text-[#EAEAEA] border border-[#333] hover:border-[#D4AF37] px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 active:scale-95"
            >
              <Video size={14} /> Hero Video
            </button>
          </div>
        </div>

        {/* Metrics Grid (Bento cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-6 shadow-xl hover:border-[#D4AF37]/50 transition-all">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#9CA3AF]">Total Projects</span>
              <div className="w-8 h-8 rounded-lg bg-[#121417] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <FolderKanban size={16} />
              </div>
            </div>
            <h3 className="text-3xl font-extrabold text-[#EAEAEA] font-mono">{projectsCount}</h3>
            <p className="text-[11px] text-[#9CA3AF] mt-1">Published case studies</p>
          </div>

          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-6 shadow-xl hover:border-emerald-500/50 transition-all">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#9CA3AF]">New Inquiries</span>
              <div className="w-8 h-8 rounded-lg bg-[#121417] border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Inbox size={16} />
              </div>
            </div>
            <h3 className="text-3xl font-extrabold text-emerald-400 font-mono">{newInquiriesCount}</h3>
            <p className="text-[11px] text-[#9CA3AF] mt-1">Pending consultation requests</p>
          </div>

          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-6 shadow-xl hover:border-[#D4AF37]/50 transition-all">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#9CA3AF]">Articles & Notes</span>
              <div className="w-8 h-8 rounded-lg bg-[#121417] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <FileText size={16} />
              </div>
            </div>
            <h3 className="text-3xl font-extrabold text-[#EAEAEA] font-mono">{insightsData?.insights?.length || 3}</h3>
            <p className="text-[11px] text-[#9CA3AF] mt-1">Technical publications</p>
          </div>

          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-6 shadow-xl hover:border-emerald-500/50 transition-all">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#9CA3AF]">System Health</span>
              <div className="w-8 h-8 rounded-lg bg-[#121417] border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck size={16} />
              </div>
            </div>
            <h3 className="text-2xl font-extrabold text-emerald-400 font-mono">100% ONLINE</h3>
            <p className="text-[11px] text-[#9CA3AF] mt-1">Prisma ORM & SQLite Active</p>
          </div>

        </div>

        {/* Inquiries & Quick Management Table (Alazar Bento Containers) */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 rounded-2xl bg-[#181A1E] border border-[#333]/80 p-7 shadow-xl">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#26282D]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#EAEAEA] flex items-center gap-2">
                <Inbox size={16} className="text-[#D4AF37]" /> Recent Consultation Inquiries
              </h3>
              <button 
                onClick={() => navigate('/admin/inquiries')} 
                className="text-xs font-mono font-bold text-[#D4AF37] hover:underline flex items-center gap-1"
              >
                View All ({inquiries.length})
              </button>
            </div>

            {inquiries.length === 0 ? (
              <p className="text-xs font-mono text-[#9CA3AF] py-8 text-center">No consultation inquiries received yet.</p>
            ) : (
              <div className="flex flex-col gap-3">
                {inquiries.slice(0, 4).map((inq) => (
                  <div key={inq.id} className="p-4 rounded-xl bg-[#121417] border border-[#26282D] hover:border-[#D4AF37]/40 transition-colors flex justify-between items-center text-xs">
                    <div>
                      <h4 className="font-bold text-[#EAEAEA] text-sm mb-0.5">{inq.name}</h4>
                      <p className="text-[#9CA3AF] text-[11px] font-mono">{inq.projectType} • {inq.email}</p>
                    </div>
                    <span className={`px-3 py-1 text-[10px] font-mono font-bold uppercase rounded-full ${
                      inq.status === 'NEW' 
                        ? 'bg-emerald-950/50 text-emerald-400 border border-emerald-500/40 shadow-sm' 
                        : 'bg-[#181A1E] text-[#9CA3AF] border border-[#333]'
                    }`}>
                      {inq.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* CMS Shortcuts Bento Box */}
          <div className="lg:col-span-4 rounded-2xl bg-[#181A1E] border border-[#333]/80 p-7 flex flex-col gap-3.5 shadow-xl">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#EAEAEA] mb-2 border-b border-[#26282D] pb-4">
              CMS Quick Actions
            </h3>

            <button
              onClick={() => navigate('/admin/projects')}
              className="p-4 rounded-xl bg-[#121417] border border-[#26282D] hover:border-[#D4AF37] text-left text-xs font-mono font-bold uppercase tracking-wider text-[#EAEAEA] hover:text-[#D4AF37] transition-all flex items-center justify-between group shadow-sm"
            >
              <span>Manage Projects</span>
              <FolderKanban size={16} className="text-[#D4AF37] group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={() => navigate('/admin/media')}
              className="p-4 rounded-xl bg-[#121417] border border-[#26282D] hover:border-[#D4AF37] text-left text-xs font-mono font-bold uppercase tracking-wider text-[#EAEAEA] hover:text-[#D4AF37] transition-all flex items-center justify-between group shadow-sm"
            >
              <span>Hero Intro Video</span>
              <Video size={16} className="text-[#D4AF37] group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={() => navigate('/admin/settings')}
              className="p-4 rounded-xl bg-[#121417] border border-[#26282D] hover:border-[#D4AF37] text-left text-xs font-mono font-bold uppercase tracking-wider text-[#EAEAEA] hover:text-[#D4AF37] transition-all flex items-center justify-between group shadow-sm"
            >
              <span>Site SEO & Bio</span>
              <Wrench size={16} className="text-[#D4AF37] group-hover:scale-110 transition-transform" />
            </button>
          </div>

        </div>

      </main>
    </div>
  );
};
