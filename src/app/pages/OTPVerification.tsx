import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router';
import { ThemeToggle } from '../components/ThemeToggle';
import { GlassCard } from '../components/GlassCard';
import { Sparkles, Mail, ArrowRight } from 'lucide-react';

export function OTPVerification() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role') || 'student';
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'company') {
      navigate('/company/dashboard');
    } else {
      navigate('/student/dashboard');
    }
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Verify Your Email</h1>
          <p className="text-muted-foreground">
            We've sent a 6-digit code to your email
          </p>
        </div>

        <GlassCard className="p-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-12 h-12 text-center text-xl font-bold bg-input-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  required
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg"
            >
              Verify & Continue
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Didn't receive the code?{' '}
              <button className="text-primary hover:underline font-medium">
                Resend
              </button>
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
