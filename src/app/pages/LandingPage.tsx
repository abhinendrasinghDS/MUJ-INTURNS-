import { Link } from 'react-router';
import { ThemeToggle } from '../components/ThemeToggle';
import { GlassCard } from '../components/GlassCard';
import { 
  Sparkles, 
  TrendingUp, 
  Shield, 
  Target, 
  Brain, 
  Award,
  CheckCircle,
  ArrowRight,
  Users,
  Building2,
  BookOpen
} from 'lucide-react';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">MUJ INTURNS</span>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              to="/login" 
              className="px-4 py-2 text-foreground hover:text-primary transition-colors"
            >
              Login
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Brain className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Matching Platform</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Bridge Your Skills to <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Real Internships
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            AI-based skill matching, verified credentials, and personalized readiness scoring 
            to connect students with their perfect internship opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup?role=student"
              className="px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              Get Started as Student
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/signup?role=company"
              className="px-8 py-4 bg-secondary text-white rounded-xl hover:bg-secondary/90 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              Hire Talent
              <Building2 className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Challenge We're Solving
            </h2>
            <p className="text-lg text-muted-foreground">
              Traditional internship platforms fail to address critical gaps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard className="p-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Skill Gap</h3>
              <p className="text-muted-foreground">
                Students often don't know what skills they're missing for their dream roles
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Fake Credentials</h3>
              <p className="text-muted-foreground">
                Companies struggle to verify student skills and certifications
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Poor Matching</h3>
              <p className="text-muted-foreground">
                Generic algorithms don't provide personalized internship recommendations
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our AI-Powered Solution
            </h2>
            <p className="text-lg text-muted-foreground">
              Smart technology that bridges the gap between talent and opportunity
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard className="p-6" hover>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">AI Matching</h3>
              <p className="text-muted-foreground">
                Advanced algorithms match your skills with the perfect internship opportunities
              </p>
            </GlassCard>
            <GlassCard className="p-6" hover>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Verified Skills</h3>
              <p className="text-muted-foreground">
                Blockchain-backed skill verification ensures credential authenticity
              </p>
            </GlassCard>
            <GlassCard className="p-6" hover>
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Readiness Score</h3>
              <p className="text-muted-foreground">
                Get personalized readiness scores and actionable improvement plans
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Get started in three simple steps
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Create Your Profile</h3>
                <p className="text-muted-foreground">
                  Sign up and add your skills, certifications, and career goals
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Get Your Readiness Score</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes your profile and provides a personalized readiness assessment
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Apply to Perfect Matches</h3>
                <p className="text-muted-foreground">
                  Receive personalized internship recommendations and apply with confidence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-muted-foreground">Partner Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-muted-foreground">Match Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5K+</div>
              <div className="text-muted-foreground">Successful Placements</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from students and companies who found their perfect match
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  RS
                </div>
                <div>
                  <div className="font-bold text-foreground">Rahul Sharma</div>
                  <div className="text-sm text-muted-foreground">CS Student, MUJ</div>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Got my dream internship at Google! The AI matching was incredibly accurate and the readiness score helped me focus on the right skills."
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold">
                  PK
                </div>
                <div>
                  <div className="font-bold text-foreground">Priya Kapoor</div>
                  <div className="text-sm text-muted-foreground">Data Science Student</div>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The personalized roadmap and course recommendations helped me bridge my skill gaps. Landed an internship in just 2 months!"
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold">
                  AM
                </div>
                <div>
                  <div className="font-bold text-foreground">Amit Mehta</div>
                  <div className="text-sm text-muted-foreground">HR Director, TechCorp</div>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Found highly qualified candidates with verified skills. The matching algorithm saved us weeks of screening time."
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <GlassCard className="max-w-4xl mx-auto p-12 text-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of students and companies already using MUJ INTURNS
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup?role=student"
              className="px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              Sign Up Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </GlassCard>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-foreground">MUJ INTURNS</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Smart Internship Matching & Skill Readiness Platform
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">For Students</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/signup?role=student" className="hover:text-primary">Sign Up</Link></li>
                <li><a href="#" className="hover:text-primary">Find Internships</a></li>
                <li><a href="#" className="hover:text-primary">Skill Assessment</a></li>
                <li><a href="#" className="hover:text-primary">Courses</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">For Companies</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/signup?role=company" className="hover:text-primary">Post Internships</Link></li>
                <li><a href="#" className="hover:text-primary">Search Talent</a></li>
                <li><a href="#" className="hover:text-primary">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">About Us</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 MUJ INTURNS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
