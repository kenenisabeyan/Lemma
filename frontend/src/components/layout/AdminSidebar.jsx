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
  ArrowLeft
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
    { name: 'Consultation Inquiries', path: '/admin/inquiries', icon: Inbox },
    { name: 'Video & Media Library', path: '/admin/media', icon: Video },
    { name: 'Site Settings & SEO', path: '/admin/settings', icon: SettingsIcon },
  ];

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <aside className="w-64 bg-[#1E2125] border-r border-[#333] min-h-screen flex flex-col justify-between shrink-0">
      <div>
        {/* Brand */}
        <div className="p-6 border-b border-[#333]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[#D4AF37] bg-[#121417] flex items-center justify-center">
              <Layers className="text-[#D4AF37] w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#EAEAEA] uppercase tracking-wider">CMS Admin</h2>
              <p className="text-[10px] text-[#D4AF37] tracking-widest uppercase">Structural Portfolio</p>
            </div>
          </div>
          {user && (
            <div className="mt-4 pt-3 border-t border-[#2D3137] text-xs text-[#9CA3AF]">
              Logged in as: <span className="text-[#EAEAEA] font-medium block">{user.email}</span>
            </div>
          )}
        </div>

        {/* Back to main website */}
        <div className="p-4 border-b border-[#333]">
          <button
            onClick={() => navigate('/')}
            className="w-full bg-[#121417] text-[#9CA3AF] hover:text-[#D4AF37] hover:border-[#D4AF37]/50 border border-[#333] py-2 px-3 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
          >
            <ArrowLeft size={14} /> Back to Live Website
          </button>
        </div>

        {/* Nav list */}
        <nav className="p-4 flex flex-col gap-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 text-xs font-semibold tracking-wider uppercase transition-all border-l-2 ${
                    isActive
                      ? 'bg-[#121417] border-[#D4AF37] text-[#D4AF37]'
                      : 'border-transparent text-[#9CA3AF] hover:text-[#EAEAEA] hover:bg-[#121417]/50'
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
      <div className="p-4 border-t border-[#333]">
        <button
          onClick={handleLogout}
          className="w-full text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-red-500/20 py-2.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
        >
          <LogOut size={16} /> Sign Out CMS
        </button>
      </div>
    </aside>
  );
};
