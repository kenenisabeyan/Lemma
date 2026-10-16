import React from 'react';
import { Inbox, CheckCircle2, Clock, Trash2, Mail, Phone } from 'lucide-react';
import { AdminSidebar } from '../../components/layout/AdminSidebar';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';

export const ManageInquiries = () => {
  const { data, setData } = useFetch('/contact');
  const inquiries = data?.inquiries || [];

  const handleUpdateStatus = async (id, status) => {
    try {
      await api.patch(`/contact/${id}/status`, { status });
      setData({
        ...data,
        inquiries: inquiries.map(i => i.id === id ? { ...i, status } : i)
      });
    } catch (err) {
      alert('Failed to update status.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this consultation record?')) return;
    try {
      await api.delete(`/contact/${id}`);
      setData({ ...data, inquiries: inquiries.filter(i => i.id !== id) });
    } catch (err) {
      alert('Failed to delete inquiry.');
    }
  };

  return (
    <div className="flex min-h-screen bg-[#121417] text-[#EAEAEA]">
      <AdminSidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="mb-8 pb-6 border-b border-[#333]">
          <h1 className="text-2xl font-bold uppercase tracking-wider">Consultation Request Inquiries</h1>
          <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mt-1">Review visitor engineering consultations and project details</p>
        </div>

        {inquiries.length === 0 ? (
          <div className="p-12 text-center bg-[#1E2125] border border-[#333]">
            <p className="text-[#9CA3AF] text-sm uppercase">No consultation inquiries received yet.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {inquiries.map((inq) => (
              <div key={inq.id} className="bg-[#1E2125] border border-[#333] p-6 flex flex-col gap-4">
                <div className="flex flex-wrap justify-between items-start gap-4 border-b border-[#333] pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#EAEAEA]">{inq.name}</h3>
                    <p className="text-xs text-[#9CA3AF] flex items-center gap-4 mt-1 font-mono">
                      <span><Mail size={12} className="inline text-[#D4AF37]" /> {inq.email}</span>
                      {inq.phone && <span><Phone size={12} className="inline text-[#D4AF37]" /> {inq.phone}</span>}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <select
                      value={inq.status}
                      onChange={(e) => handleUpdateStatus(inq.id, e.target.value)}
                      className={`text-xs font-mono font-bold uppercase p-2 border ${
                        inq.status === 'NEW' 
                          ? 'bg-emerald-950/60 text-emerald-400 border-emerald-500/40' 
                          : inq.status === 'IN_REVIEW'
                          ? 'bg-amber-950/60 text-amber-400 border-amber-500/40'
                          : 'bg-[#121417] text-[#9CA3AF] border-[#333]'
                      }`}
                    >
                      <option value="NEW">Status: NEW</option>
                      <option value="IN_REVIEW">Status: IN REVIEW</option>
                      <option value="RESPONDED">Status: RESPONDED</option>
                    </select>

                    <button
                      onClick={() => handleDelete(inq.id)}
                      className="p-2 bg-red-950/20 text-red-400 border border-red-500/30 hover:bg-red-600 hover:text-white"
                      title="Delete Inquiry"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-2">
                    <span>Project Type: {inq.projectType}</span> • <span>Subject: {inq.subject}</span>
                  </div>
                  <p className="text-xs text-[#EAEAEA] bg-[#121417] p-4 border border-[#2D3137] leading-relaxed">
                    {inq.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
