import { Link, useLocation } from 'react-router';
import { 
  LayoutDashboard, 
  Brain, 
  Map, 
  Briefcase, 
  FileText, 
  User, 
  BarChart3,
  Target,
  Sparkles 
} from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/student/dashboard' },
  { icon: Brain, label: 'My Skills', path: '/student/dashboard' },
  { icon: Map, label: 'Roadmap', path: '/student/roadmap' },
  { icon: Target, label: 'Matches', path: '/student/matches' },
  { icon: Briefcase, label: 'Applications', path: '/student/dashboard' },
  { icon: BarChart3, label: 'Analytics', path: '/student/analytics' },
  { icon: User, label: 'Profile', path: '/student/profile' },
];

export function StudentSidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border h-screen sticky top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-bold text-sidebar-foreground">MUJ INTURNS</div>
            <div className="text-xs text-muted-foreground">Student Portal</div>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-md'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold">
              JD
            </div>
            <div className="text-sm">
              <div className="font-medium text-sidebar-foreground">John Doe</div>
              <div className="text-xs text-muted-foreground">Student</div>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}
