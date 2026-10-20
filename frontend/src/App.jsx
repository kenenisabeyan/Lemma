import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { ThemeProvider } from './context/ThemeContext';
import { useAuth } from './hooks/useAuth';

// Public Layout
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingDock } from './components/layout/FloatingDock';

// Public Pages
import { Home } from './pages/public/Home';
import { About } from './pages/public/About';
import { ServicesPage } from './pages/public/ServicesPage';
import { Portfolio } from './pages/public/Portfolio';
import { Experience } from './pages/public/Experience';
import { CaseStudyPage } from './pages/public/CaseStudy';
import { InsightsPage } from './pages/public/InsightsPage';
import { InsightDetail } from './pages/public/InsightDetail';
import { ResourcesPage } from './pages/public/ResourcesPage';
import { FaqPage } from './pages/public/FaqPage';
import { Contact } from './pages/public/Contact';

// Admin Pages
import { Login } from './pages/admin/Login';
import { Dashboard } from './pages/admin/Dashboard';
import { ManageProjects } from './pages/admin/ManageProjects';
import { ManageServices } from './pages/admin/ManageServices';
import { ManageInsights } from './pages/admin/ManageInsights';
import { ManageTestimonials } from './pages/admin/ManageTestimonials';
import { ManageInquiries } from './pages/admin/ManageInquiries';
import { ManageMedia } from './pages/admin/ManageMedia';
import { ManageResources } from './pages/admin/ManageResources';
import { ManageFaqs } from './pages/admin/ManageFaqs';
import { Settings } from './pages/admin/Settings';

// Scroll to Top & Hash Anchor Helper
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

// Protected Admin Route Component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div className="min-h-screen bg-[#121417] text-[#D4AF37] flex items-center justify-center font-mono">Verifying Credentials...</div>;
  if (!user) return <Navigate to="/admin/login" replace />;
  return children;
};

// Layout Wrapper for Public Pages
const PublicLayout = ({ children }) => {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
      setScrollProgress(scroll);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Reading Progress Bar (like alazar.dev) */}
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] pointer-events-none transition-transform duration-75 ease-out shadow-[0_0_10px_rgba(212,175,55,0.7)]"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      <Navbar />
      <main className="bg-[#FAF9F6] dark:bg-[#0B0C0E] min-h-screen text-zinc-900 dark:text-[#EAEAEA] transition-colors duration-200">{children}</main>
      <FloatingDock />
      <Footer />
    </>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ScrollToTop />
        <Routes>
        {/* Public Visitor Routes */}
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
        <Route path="/services" element={<PublicLayout><ServicesPage /></PublicLayout>} />
        <Route path="/projects" element={<PublicLayout><Portfolio /></PublicLayout>} />
        <Route path="/projects/:slug" element={<PublicLayout><CaseStudyPage /></PublicLayout>} />
        <Route path="/experience" element={<PublicLayout><Experience /></PublicLayout>} />
        <Route path="/insights" element={<PublicLayout><InsightsPage /></PublicLayout>} />
        <Route path="/insights/:slug" element={<PublicLayout><InsightDetail /></PublicLayout>} />
        <Route path="/resources" element={<PublicLayout><ResourcesPage /></PublicLayout>} />
        <Route path="/testimonials" element={<Navigate to="/#testimonials" replace />} />
        <Route path="/faq" element={<PublicLayout><FaqPage /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />

        {/* CMS Admin Auth & Management Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/admin/projects" element={<ProtectedRoute><ManageProjects /></ProtectedRoute>} />
        <Route path="/admin/services" element={<ProtectedRoute><ManageServices /></ProtectedRoute>} />
        <Route path="/admin/insights" element={<ProtectedRoute><ManageInsights /></ProtectedRoute>} />
        <Route path="/admin/testimonials" element={<ProtectedRoute><ManageTestimonials /></ProtectedRoute>} />
        <Route path="/admin/resources" element={<ProtectedRoute><ManageResources /></ProtectedRoute>} />
        <Route path="/admin/faqs" element={<ProtectedRoute><ManageFaqs /></ProtectedRoute>} />
        <Route path="/admin/inquiries" element={<ProtectedRoute><ManageInquiries /></ProtectedRoute>} />
        <Route path="/admin/media" element={<ProtectedRoute><ManageMedia /></ProtectedRoute>} />
        <Route path="/admin/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />

        {/* Custom 404 Route */}
        <Route path="*" element={
          <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#121417] text-zinc-900 dark:text-[#EAEAEA] flex flex-col items-center justify-center p-6 text-center transition-colors">
            <h1 className="text-8xl font-extrabold text-[#801834] dark:text-[#D4AF37] font-mono">404</h1>
            <p className="text-xl font-bold uppercase tracking-wider mt-4">Structural Boundary Not Found</p>
            <p className="text-xs text-zinc-500 dark:text-[#9CA3AF] mt-2 mb-6">The requested engineering route does not exist in the blueprint schema.</p>
            <a href="/" className="bg-[#801834] dark:bg-[#D4AF37] text-white dark:text-[#121417] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-zinc-900 dark:hover:bg-white transition-colors rounded-full shadow-md">
              Return to Homepage
            </a>
          </div>
        } />
      </Routes>
    </AuthProvider>
    </ThemeProvider>
  );
}
