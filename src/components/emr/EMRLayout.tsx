import React from 'react';
import { LayoutDashboard, Users, FileText, Settings, LogOut, Bell, Loader2 } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/components/auth/AuthProvider';

const sidebarLinks = [
  { name: 'Overview', href: '/emr/dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
  { name: 'Patients', href: '/emr/patients', icon: <Users className="h-5 w-5" /> },
  { name: 'Consulations', href: '/emr/consultations', icon: <FileText className="h-5 w-5" /> },
  { name: 'Settings', href: '/emr/settings', icon: <Settings className="h-5 w-5" /> },
];

export function EMRLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="h-10 w-10 text-primary animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    await logout();
    navigate('/emr/login');
  };

  return (
    <div className="flex h-screen bg-[#F9F8F6] overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-white flex flex-col">
        <div className="p-8 border-b border-border">
           <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white shadow-lg shadow-primary/20">
              CH
            </div>
            <span className="font-serif italic text-lg tracking-tight text-[#1A1A1A]">EMR Portal</span>
          </Link>
        </div>
        
        <nav className="flex-grow p-6 space-y-3">
          {sidebarLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all group",
                location.pathname === link.href 
                  ? "bg-primary text-white shadow-xl shadow-primary/20" 
                  : "text-[#5C5C5C] hover:bg-muted hover:text-primary"
              )}
            >
              <span className={cn(
                "transition-colors",
                location.pathname === link.href ? "text-white" : "text-[#A1A1A1] group-hover:text-primary"
              )}>
                {link.icon}
              </span>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-border space-y-4">
           <div className="flex items-center gap-4 px-2">
              <div className="h-12 w-12 rounded-full bg-muted border border-border flex items-center justify-center font-serif text-primary overflow-hidden shadow-inner">
                 {user.photoURL ? <img src={user.photoURL} alt={user.displayName || ''} className="h-full w-full object-cover" /> : user.displayName?.charAt(0) || 'D'}
              </div>
              <div className="flex flex-col overflow-hidden">
                 <span className="text-sm font-bold text-[#1A1A1A] truncate">{user.displayName || 'Specialist'}</span>
                 <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Medical Officer</span>
              </div>
           </div>
           <Button 
            variant="ghost" 
            onClick={handleLogout}
            className="w-full justify-start text-[#A1A1A1] hover:bg-[#FFF5F5] hover:text-red-500 rounded-2xl transition-colors"
          >
             <LogOut className="h-5 w-5 mr-3" />
             Log Out
           </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow flex flex-col overflow-hidden">
        <header className="h-20 bg-white border-b border-border flex items-center justify-between px-10">
           <h2 className="text-xl font-serif text-[#1A1A1A]">
             {sidebarLinks.find(l => l.href === location.pathname)?.name || 'Patient Records'}
           </h2>
           <div className="flex items-center gap-6">
              <Button variant="ghost" size="icon" className="relative text-[#A1A1A1] hover:text-primary hover:bg-muted rounded-full">
                 <Bell className="h-5 w-5" />
                 <div className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></div>
              </Button>
              <div className="h-8 w-[1px] bg-border"></div>
              <Button size="sm" className="rounded-full px-8 h-10 font-medium shadow-md shadow-primary/10">New Consultation</Button>
           </div>
        </header>
        
        <main className="flex-grow overflow-auto p-10">
           {children}
        </main>
      </div>
    </div>
  );
}
