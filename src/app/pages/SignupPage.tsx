import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { ThemeToggle } from '../components/ThemeToggle';
import { GlassCard } from '../components/GlassCard';
import { Sparkles, Mail, Lock, User, Building2, ArrowRight } from 'lucide-react';

export function SignupPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialRole = searchParams.get('role') || 'student';

  const [role, setRole] = useState<'student' | 'company'>(initialRole as any);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/verify-otp');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">MUJ INTURNS</span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
          <p className="text-muted-foreground">Start your journey to success</p>
        </div>

        <GlassCard className="p-8">
          {/* Role Toggle */}
          <div className="flex gap-2 p-1 bg-muted rounded-xl mb-6">
            <button
              type="button"
              onClick={() => setRole('student')}
              className={`flex-1 py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2 ${
                role === 'student'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <User className="w-4 h-4" />
              Student
            </button>
            <button
              type="button"
              onClick={() => setRole('company')}
              className={`flex-1 py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2 ${
                role === 'company'
                  ? 'bg-secondary text-white shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Building2 className="w-4 h-4" />
              Company
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                {role === 'student' ? 'Full Name' : 'Company Name'}
              </label>
              <div className="relative">
                {role === 'student' ? (
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                ) : (
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                )}
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-input-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder={role === 'student' ? 'John Doe' : 'Company Inc.'}
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-input-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-input-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <label className="flex items-start gap-2">
              <input type="checkbox" className="w-4 h-4 mt-1 rounded border-input accent-primary" required />
              <span className="text-sm text-muted-foreground">
                I agree to the{' '}
                <a href="#" className="text-primary hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              </span>
            </label>

            <button
              type="submit"
              className={`w-full py-3 text-white rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg ${
                role === 'student' ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'
              }`}
            >
              Create Account
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </GlassCard>

        <p className="text-center mt-6 text-muted-foreground">
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
