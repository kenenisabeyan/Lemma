import React, { useState } from 'react';
import { 
  Inbox, 
  Trash2, 
  Mail, 
  Phone, 
  Search, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Building,
  Copy,
  ExternalLink
} from 'lucide-react';
import { AdminSidebar } from '../../components/layout/AdminSidebar';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';

export const ManageInquiries = () => {
  const { data, setData } = useFetch('/contact');
  const inquiries = data?.inquiries || [];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  const [copiedId, setCopiedId] = useState(null);

  const statuses = ['ALL', 'NEW', 'IN_REVIEW', 'RESPONDED'];

  const filteredInquiries = inquiries.filter(inq => {
    const matchesStatus = selectedStatus === 'ALL' || inq.status === selectedStatus;
    const matchesSearch = searchQuery === '' ||
      inq.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.subject?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.message?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const newCount = inquiries.filter(i => i.status === 'NEW').length;
  const inReviewCount = inquiries.filter(i => i.status === 'IN_REVIEW').length;
  const respondedCount = inquiries.filter(i => i.status === 'RESPONDED').length;

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

  const handleCopyEmail = (id, email) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex min-h-screen bg-[#121417] text-[#EAEAEA]">
      <AdminSidebar />

      <main className="flex-1 pt-16 lg:pt-8 p-4 sm:p-8 overflow-y-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-[#26282D]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#181A1E] px-3.5 py-1 text-xs font-mono text-[#D4AF37] mb-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Consultation CRM & Client Inquiries
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#EAEAEA] uppercase tracking-wider">
              Consultation Inquiries
            </h1>
            <p className="text-xs font-mono text-[#9CA3AF] mt-1">
              Track project inquiries, municipal review requests, and peer-review mandates
            </p>
          </div>
        </div>

        {/* Metric Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-5 shadow-lg">
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">Total Inquiries</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#EAEAEA]">{inquiries.length}</span>
              <Inbox size={18} className="text-[#D4AF37]" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-5 shadow-lg">
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">New Action Required</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-emerald-400">{newCount}</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            </div>
          </div>
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-5 shadow-lg">
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">In Review</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-amber-400">{inReviewCount}</span>
              <Clock size={18} className="text-amber-400" />
            </div>
          </div>
          <div className="rounded-2xl bg-[#181A1E] border border-[#333]/80 p-5 shadow-lg">
            <span className="text-[10px] font-mono uppercase text-[#9CA3AF] tracking-wider block mb-1">Responded</span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl sm:text-3xl font-mono font-extrabold text-[#9CA3AF]">{respondedCount}</span>
              <CheckCircle2 size={18} className="text-[#D4AF37]" />
            </div>
          </div>
        </div>

        {/* Filter Pills + Search */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-8 bg-[#181A1E] p-3 rounded-2xl border border-[#333]/80 shadow-xl">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none items-center">
            {statuses.map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStatus(st)}
                className={`rounded-full px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedStatus === st
                    ? 'bg-[#D4AF37] text-[#121417] shadow-[0_0_12px_rgba(212,175,55,0.35)]'
                    : 'bg-[#121417] text-[#9CA3AF] border border-[#333] hover:text-[#EAEAEA]'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-4 h-4" />
            <input
              type="text"
              placeholder="Search by client, email, message..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121417] rounded-full border border-[#333] pl-10 pr-4 py-2 text-xs text-[#EAEAEA] placeholder:text-[#666] focus:border-[#D4AF37] focus:outline-none transition-colors font-mono"
            />
          </div>
        </div>

        {/* Inquiries Cards */}
        {filteredInquiries.length === 0 ? (
          <div className="rounded-2xl bg-[#181A1E] border border-[#333] p-12 text-center">
            <Inbox className="mx-auto w-12 h-12 text-[#9CA3AF]/40 mb-3" />
            <h4 className="text-sm font-mono font-bold uppercase text-[#EAEAEA]">No consultation records found</h4>
            <p className="text-xs text-[#9CA3AF] mt-1">All incoming project inquiries from the contact page will appear here.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6 mb-12">
            {filteredInquiries.map((inq) => (
              <div 
                key={inq.id} 
                className="group rounded-2xl bg-[#181A1E] border border-[#333]/80 p-6 flex flex-col gap-5 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-xl"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#26282D] pb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#121417] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] font-mono font-bold text-sm shadow-md">
                      {inq.name ? inq.name.substring(0, 2).toUpperCase() : 'IN'}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-[#EAEAEA]">{inq.name}</h3>
                        <span className="rounded-full bg-[#121417] border border-[#D4AF37]/30 text-[#D4AF37] px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase">
                          {inq.projectType || 'General Consultation'}
                        </span>
                      </div>
                      <div className="text-xs text-[#9CA3AF] flex flex-wrap items-center gap-4 mt-1 font-mono">
                        <button
                          onClick={() => handleCopyEmail(inq.id, inq.email)}
                          className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"
                          title="Copy Email"
                        >
                          <Mail size={12} className="text-[#D4AF37]" />
                          <span>{inq.email}</span>
                          {copiedId === inq.id && <span className="text-emerald-400 text-[10px]">Copied!</span>}
                        </button>
                        {inq.phone && (
                          <span className="flex items-center gap-1.5">
                            <Phone size={12} className="text-[#D4AF37]" />
                            <span>{inq.phone}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    {/* Status Dropdown Selector */}
                    <select
                      value={inq.status}
                      onChange={(e) => handleUpdateStatus(inq.id, e.target.value)}
                      className={`text-xs font-mono font-extrabold uppercase px-3.5 py-2 rounded-xl border transition-all ${
                        inq.status === 'NEW' 
                          ? 'bg-emerald-950/60 text-emerald-400 border-emerald-500/50 shadow-[0_0_10px_rgba(52,211,153,0.15)]' 
                          : inq.status === 'IN_REVIEW'
                          ? 'bg-amber-950/60 text-amber-400 border-amber-500/50'
                          : 'bg-[#121417] text-[#9CA3AF] border-[#333]'
                      }`}
                    >
                      <option value="NEW">Status: NEW</option>
                      <option value="IN_REVIEW">Status: IN REVIEW</option>
                      <option value="RESPONDED">Status: RESPONDED</option>
                    </select>

                    <button
                      onClick={() => handleDelete(inq.id)}
                      className="rounded-xl p-2 bg-red-950/20 text-red-400 border border-red-500/30 hover:bg-red-600 hover:text-white hover:scale-105 active:scale-95 transition-all shadow-sm"
                      title="Delete Inquiry"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>

                <div>
                  {inq.subject && (
                    <div className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider mb-2">
                      Subject: {inq.subject}
                    </div>
                  )}
                  <p className="text-xs text-[#EAEAEA] bg-[#121417] p-4 rounded-xl border border-[#2D3137] leading-relaxed font-sans">
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
