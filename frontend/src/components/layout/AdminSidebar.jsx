import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FolderKanban, 
  Wrench, 
  FileText, 
  MessageSquareQuote, 
  Inbox, 
  Video, 
  Settings as SettingsIcon, 
  LogOut, 
  Layers,
  ArrowLeft,
  Download,
  HelpCircle,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export const AdminSidebar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard, tag: 'Live' },
    { name: 'Projects & Studies', path: '/admin/projects', icon: FolderKanban },
    { name: 'Engineering Services', path: '/admin/services', icon: Wrench },
    { name: 'Insights & Notes', path: '/admin/insights', icon: FileText },
    { name: 'Client Reviews', path: '/admin/testimonials', icon: MessageSquareQuote },
    { name: 'Technical FAQs', path: '/admin/faqs', icon: HelpCircle },
    { name: 'Doc Resources', path: '/admin/resources', icon: Download },
    { name: 'Inquiries', path: '/admin/inquiries', icon: Inbox, tag: 'New' },
    { name: 'Hero Reel Media', path: '/admin/media', icon: Video },
    { name: 'Settings & SEO', path: '/admin/settings', icon: SettingsIcon },
  ];

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const navContent = (
    <div className="flex flex-col h-full justify-between">
      <div>
        {/* Brand Header */}
        <div className="p-6 border-b border-[#232936]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl border border-[#D3AE36]/60 bg-gradient-to-br from-[#232936] to-[#12151C] flex items-center justify-center shadow-[0_0_15px_rgba(211,174,54,0.25)]">
                <Layers className="text-[#D3AE36] w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm font-extrabold text-[#F8F9FA] uppercase tracking-wider flex items-center gap-1.5">
                  CMS Portal
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D3AE36] animate-pulse"></span>
                </h2>
                <p className="text-[10px] font-mono text-[#D3AE36] tracking-widest uppercase">Structural Suite</p>
              </div>
            </div>

            {/* Mobile Close Button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="lg:hidden p-2 rounded-lg bg-[#232936] text-[#9CA3AF] hover:text-[#F8F9FA] border border-[#31394D]"
              aria-label="Close Sidebar"
            >
              <X size={18} />
            </button>
          </div>

          {user && (
            <div className="mt-4 p-2.5 rounded-xl bg-[#232936] border border-[#31394D] text-xs font-mono">
              <span className="text-[10px] text-[#9CA3AF] uppercase block tracking-wider">Authenticated As</span>
              <span className="text-[#F8F9FA] font-semibold block truncate mt-0.5">{user.email}</span>
            </div>
          )}
        </div>

        {/* Live Site Link Pill */}
        <div className="px-4 pt-4">
          <button
            onClick={() => navigate('/')}
            className="w-full rounded-xl bg-[#232936] text-[#9CA3AF] hover:text-[#D3AE36] hover:border-[#D3AE36]/50 border border-[#31394D] py-2 px-3 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>View Public Site</span>
            <ExternalLink size={12} className="opacity-60" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 flex flex-col gap-1 overflow-y-auto max-h-[calc(100vh-280px)] scrollbar-none">
          <span className="text-[10px] font-mono uppercase text-[#717A8C] tracking-widest px-3 mb-1">
            System Modules
          </span>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 group ${
                  isActive
                    ? 'bg-gradient-to-r from-[#D3AE36]/20 to-transparent text-[#D3AE36] border-l-2 border-[#D3AE36] shadow-sm font-extrabold'
                    : 'text-[#9CA3AF] hover:text-[#F8F9FA] hover:bg-[#232936]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={16} className={isActive ? 'text-[#D3AE36]' : 'text-[#9CA3AF] group-hover:text-[#F8F9FA]'} />
                  <span>{item.name}</span>
                </div>
                {item.tag && (
                  <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    isActive ? 'bg-[#D3AE36] text-[#12151C]' : 'bg-[#232936] text-[#D3AE36] border border-[#D3AE36]/30'
                  }`}>
                    {item.tag}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-[#232936] bg-[#12151C]/50">
        <button
          onClick={handleLogout}
          className="w-full rounded-xl bg-red-950/20 text-red-400 hover:bg-red-600 hover:text-white border border-red-500/30 py-2.5 px-3 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95"
        >
          <LogOut size={14} /> End CMS Session
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Top App Bar (< lg screens) */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-40 bg-[#12151C]/95 backdrop-blur-md border-b border-[#232936] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg border border-[#D3AE36]/60 bg-[#12151C] flex items-center justify-center shadow-sm">
            <Layers className="text-[#D3AE36] w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-xs font-extrabold text-[#F8F9FA] uppercase tracking-wider block">CMS Admin</span>
            <span className="text-[9px] font-mono text-[#D3AE36] block">Structural Suite</span>
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-xl bg-[#232936] border border-[#31394D] text-[#D3AE36] hover:border-[#D3AE36] transition-all"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div 
          onClick={() => setMobileOpen(false)}
          className="lg:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm animate-in fade-in"
        />
      )}

      {/* Mobile Slide-Over Drawer */}
      <div className={`lg:hidden fixed top-0 bottom-0 left-0 z-50 w-72 bg-[#12151C] border-r border-[#232936] transform transition-transform duration-300 ease-out shadow-2xl ${
        mobileOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {navContent}
      </div>

      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:flex w-64 bg-[#12151C] border-r border-[#232936] min-h-screen flex-col shrink-0 sticky top-0 h-screen shadow-2xl">
        {navContent}
      </aside>
    </>
  );
};
