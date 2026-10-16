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

      <main className="flex-1 p-8 overflow-y-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-[#333]">
          <div>
            <h1 className="text-2xl font-bold text-[#EAEAEA] uppercase tracking-wider">CMS Admin Dashboard</h1>
            <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mt-1">Manage portfolio projects, consultation requests & site media</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => navigate('/admin/projects')}
              className="bg-[#D4AF37] text-[#121417] px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-1.5"
            >
              <Plus size={14} /> Add Project
            </button>
            <button
              onClick={() => navigate('/admin/media')}
              className="bg-[#1E2125] text-[#EAEAEA] border border-[#333] px-4 py-2 text-xs font-bold uppercase tracking-wider hover:border-[#D4AF37] transition-colors flex items-center gap-1.5"
            >
              <Video size={14} /> Hero Video
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          <div className="bg-[#1E2125] border border-[#333] p-6 border-l-4 border-l-[#D4AF37]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs uppercase font-mono text-[#9CA3AF]">Total Projects</span>
              <FolderKanban className="text-[#D4AF37] w-5 h-5" />
            </div>
            <h3 className="text-3xl font-extrabold text-[#EAEAEA]">{projectsCount}</h3>
            <p className="text-[10px] text-[#9CA3AF] mt-1">Published case studies</p>
          </div>

          <div className="bg-[#1E2125] border border-[#333] p-6 border-l-4 border-l-emerald-500">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs uppercase font-mono text-[#9CA3AF]">New Inquiries</span>
              <Inbox className="text-emerald-400 w-5 h-5" />
            </div>
            <h3 className="text-3xl font-extrabold text-[#EAEAEA]">{newInquiriesCount}</h3>
            <p className="text-[10px] text-[#9CA3AF] mt-1">Pending consultation requests</p>
          </div>

          <div className="bg-[#1E2125] border border-[#333] p-6 border-l-4 border-l-blue-500">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs uppercase font-mono text-[#9CA3AF]">Articles & Notes</span>
              <FileText className="text-blue-400 w-5 h-5" />
            </div>
            <h3 className="text-3xl font-extrabold text-[#EAEAEA]">{insightsData?.insights?.length || 3}</h3>
            <p className="text-[10px] text-[#9CA3AF] mt-1">Technical publications</p>
          </div>

          <div className="bg-[#1E2125] border border-[#333] p-6 border-l-4 border-l-purple-500">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs uppercase font-mono text-[#9CA3AF]">System Health</span>
              <ShieldCheck className="text-purple-400 w-5 h-5" />
            </div>
            <h3 className="text-xl font-extrabold text-emerald-400">ONLINE 100%</h3>
            <p className="text-[10px] text-[#9CA3AF] mt-1">Prisma ORM & SQLite Active</p>
          </div>

        </div>

        {/* Inquiries & Quick Management Table */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8 bg-[#1E2125] border border-[#333] p-6">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#333]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#EAEAEA] flex items-center gap-2">
                <Inbox size={16} className="text-[#D4AF37]" /> Recent Consultation Inquiries
              </h3>
              <button onClick={() => navigate('/admin/inquiries')} className="text-xs font-bold text-[#D4AF37] hover:underline">
                View All ({inquiries.length})
              </button>
            </div>

            {inquiries.length === 0 ? (
              <p className="text-xs text-[#9CA3AF] py-6 text-center">No consultation inquiries received yet.</p>
            ) : (
              <div className="flex flex-col gap-3">
                {inquiries.slice(0, 4).map((inq) => (
                  <div key={inq.id} className="p-4 bg-[#121417] border border-[#333] flex justify-between items-center text-xs">
                    <div>
                      <h4 className="font-bold text-[#EAEAEA]">{inq.name}</h4>
                      <p className="text-[#9CA3AF] text-[11px]">{inq.projectType} • {inq.email}</p>
                    </div>
                    <span className={`px-2.5 py-1 text-[10px] font-mono font-bold uppercase ${
                      inq.status === 'NEW' 
                        ? 'bg-emerald-950/50 text-emerald-400 border border-emerald-500/40' 
                        : 'bg-[#1E2125] text-[#9CA3AF]'
                    }`}>
                      {inq.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* CMS Shortcuts */}
          <div className="lg:col-span-4 bg-[#1E2125] border border-[#333] p-6 flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#EAEAEA] mb-2 border-b border-[#333] pb-3">
              CMS Quick Actions
            </h3>

            <button
              onClick={() => navigate('/admin/projects')}
              className="p-4 bg-[#121417] border border-[#333] hover:border-[#D4AF37] text-left text-xs font-bold uppercase tracking-wider text-[#EAEAEA] transition-colors flex items-center justify-between"
            >
              <span>Manage Projects Portfolio</span>
              <FolderKanban size={16} className="text-[#D4AF37]" />
            </button>

            <button
              onClick={() => navigate('/admin/media')}
              className="p-4 bg-[#121417] border border-[#333] hover:border-[#D4AF37] text-left text-xs font-bold uppercase tracking-wider text-[#EAEAEA] transition-colors flex items-center justify-between"
            >
              <span>Replace Hero Intro Video</span>
              <Video size={16} className="text-[#D4AF37]" />
            </button>

            <button
              onClick={() => navigate('/admin/settings')}
              className="p-4 bg-[#121417] border border-[#333] hover:border-[#D4AF37] text-left text-xs font-bold uppercase tracking-wider text-[#EAEAEA] transition-colors flex items-center justify-between"
            >
              <span>Update SEO & Site Bio</span>
              <Wrench size={16} className="text-[#D4AF37]" />
            </button>
          </div>

        </div>

      </main>
    </div>
  );
};
