import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
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
  HelpCircle
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export const AdminSidebar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard Overview', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Manage Projects', path: '/admin/projects', icon: FolderKanban },
    { name: 'Manage Services', path: '/admin/services', icon: Wrench },
    { name: 'Insights & Articles', path: '/admin/insights', icon: FileText },
    { name: 'Testimonials', path: '/admin/testimonials', icon: MessageSquareQuote },
    { name: 'Client FAQs', path: '/admin/faqs', icon: HelpCircle },
    { name: 'Engineering Resources', path: '/admin/resources', icon: Download },
    { name: 'Consultation Inquiries', path: '/admin/inquiries', icon: Inbox },
    { name: 'Video & Media Library', path: '/admin/media', icon: Video },
    { name: 'Site Settings & SEO', path: '/admin/settings', icon: SettingsIcon },
  ];

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <aside className="w-64 bg-[#14161A] border-r border-[#26282D] min-h-screen flex flex-col justify-between shrink-0 shadow-2xl">
      <div>
        {/* Brand */}
        <div className="p-6 border-b border-[#26282D]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg border border-[#D4AF37]/60 bg-[#121417] flex items-center justify-center shadow-md">
              <Layers className="text-[#D4AF37] w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-extrabold text-[#EAEAEA] uppercase tracking-wider">CMS Admin</h2>
              <p className="text-[10px] font-mono text-[#D4AF37] tracking-widest uppercase">Structural Portfolio</p>
            </div>
          </div>
          {user && (
            <div className="mt-4 pt-3 border-t border-[#26282D] text-xs font-mono text-[#9CA3AF]">
              Logged in: <span className="text-[#EAEAEA] font-medium block truncate">{user.email}</span>
            </div>
          )}
        </div>

        {/* Back to main website */}
        <div className="p-4 border-b border-[#26282D]">
          <button
            onClick={() => navigate('/')}
            className="w-full rounded-full bg-[#181A1E] text-[#9CA3AF] hover:text-[#D4AF37] hover:border-[#D4AF37]/50 border border-[#333] py-2 px-3 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            <ArrowLeft size={14} /> Back to Live Site
          </button>
        </div>

        {/* Nav list */}
        <nav className="p-4 flex flex-col gap-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/40 shadow-sm'
                      : 'text-[#9CA3AF] hover:text-[#EAEAEA] hover:bg-[#181A1E]'
                  }`
                }
              >
                <Icon size={16} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-[#26282D]">
        <button
          onClick={handleLogout}
          className="w-full rounded-full bg-red-950/20 text-red-400 hover:bg-red-600 hover:text-white border border-red-500/30 py-2.5 px-3 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
        >
          <LogOut size={14} /> Sign Out CMS
        </button>
      </div>
    </aside>
  );
};
