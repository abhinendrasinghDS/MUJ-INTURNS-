import { useState } from 'react';
import { CompanySidebar } from '../components/CompanySidebar';
import { GlassCard } from '../components/GlassCard';
import { 
  PlusCircle, 
  Search, 
  Shield, 
  Star, 
  MapPin, 
  Briefcase,
  Users,
  TrendingUp,
  Eye,
  Filter
} from 'lucide-react';

const candidates = [
  {
    name: 'Rahul Sharma',
    college: 'IIT Delhi',
    major: 'Computer Science',
    match: 92,
    verified: true,
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL'],
    experience: '2 internships',
    location: 'Delhi',
  },
  {
    name: 'Priya Patel',
    college: 'MUJ',
    major: 'Data Science',
    match: 88,
    verified: true,
    skills: ['Python', 'R', 'Statistics', 'Power BI'],
    experience: '1 internship',
    location: 'Jaipur',
  },
  {
    name: 'Arjun Mehta',
    college: 'BITS Pilani',
    major: 'Software Engineering',
    match: 85,
    verified: true,
    skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
    experience: '3 internships',
    location: 'Goa',
  },
  {
    name: 'Sneha Reddy',
    college: 'NIT Trichy',
    major: 'Computer Science',
    match: 82,
    verified: false,
    skills: ['Java', 'Spring Boot', 'MySQL', 'Docker'],
    experience: '1 internship',
    location: 'Chennai',
  },
];

export function CompanyDashboard() {
  const [activeTab, setActiveTab] = useState<'post' | 'search' | 'applications'>('post');

  return (
    <div className="flex min-h-screen bg-background">
      <CompanySidebar />
      
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Company Dashboard</h1>
          <p className="text-muted-foreground">Manage internships and find top talent</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <GlassCard className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">5</div>
                <div className="text-sm text-muted-foreground">Active Postings</div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">142</div>
                <div className="text-sm text-muted-foreground">Applications</div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">87%</div>
                <div className="text-sm text-muted-foreground">Match Quality</div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">28</div>
                <div className="text-sm text-muted-foreground">Pending Reviews</div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 p-1 bg-muted/30 rounded-xl w-fit">
          <button
            onClick={() => setActiveTab('post')}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === 'post'
                ? 'bg-primary text-white shadow-md'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <PlusCircle className="w-4 h-4 inline mr-2" />
            Post Internship
          </button>
          <button
            onClick={() => setActiveTab('search')}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === 'search'
                ? 'bg-primary text-white shadow-md'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Search className="w-4 h-4 inline mr-2" />
            Search Candidates
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === 'applications'
                ? 'bg-primary text-white shadow-md'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Applications
          </button>
        </div>

        {/* Post Internship Form */}
        {activeTab === 'post' && (
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Post New Internship</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Role Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="e.g., Software Engineering Intern"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="e.g., Bangalore, India"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Duration
                  </label>
                  <select className="w-full px-4 py-3 bg-input-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground">
                    <option>3 months</option>
                    <option>6 months</option>
                    <option>12 months</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Stipend (per month)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="e.g., ₹40,000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Required Skills
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-input-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="e.g., Python, React, SQL (comma separated)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Description
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-input-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="Describe the role, responsibilities, and requirements..."
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
              >
                Post Internship
              </button>
            </form>
          </GlassCard>
        )}

        {/* Search Candidates */}
        {activeTab === 'search' && (
          <div>
            {/* Filters */}
            <GlassCard className="p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-foreground" />
                <h3 className="font-bold text-foreground">Filters</h3>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                <input
                  type="text"
                  className="px-4 py-2 bg-input-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="Search skills..."
                />
                <select className="px-4 py-2 bg-input-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground">
                  <option>All Colleges</option>
                  <option>IIT</option>
                  <option>NIT</option>
                  <option>MUJ</option>
                </select>
                <select className="px-4 py-2 bg-input-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-foreground">
                  <option>Readiness: All</option>
                  <option>80%+</option>
                  <option>60-80%</option>
                  <option>Below 60%</option>
                </select>
                <button className="px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors">
                  Apply Filters
                </button>
              </div>
            </GlassCard>

            {/* Candidate Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {candidates.map((candidate, index) => (
                <GlassCard key={index} className="p-6 hover:shadow-xl transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                        {candidate.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-foreground">{candidate.name}</h3>
                          {candidate.verified && (
                            <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center" title="Verified">
                              <Shield className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{candidate.college}</p>
                        <p className="text-xs text-muted-foreground">{candidate.major}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="w-4 h-4 text-accent fill-accent" />
                        <span className="text-sm font-bold text-accent">{candidate.match}%</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Match</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {candidate.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-lg text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {candidate.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {candidate.experience}
                    </div>
                  </div>

                  <button className="w-full py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    View Profile
                  </button>
                </GlassCard>
              ))}
            </div>
          </div>
        )}

        {/* Applications */}
        {activeTab === 'applications' && (
          <GlassCard className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-6">Recent Applications</h2>
            <div className="space-y-4">
              {[
                { name: 'Amit Kumar', role: 'Data Analyst Intern', status: 'pending', match: 85 },
                { name: 'Neha Singh', role: 'Frontend Developer Intern', status: 'reviewing', match: 78 },
                { name: 'Vikram Joshi', role: 'Backend Developer Intern', status: 'approved', match: 92 },
              ].map((app, index) => (
                <div key={index} className="p-4 bg-muted/30 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                      {app.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{app.name}</p>
                      <p className="text-sm text-muted-foreground">{app.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm font-bold text-accent">{app.match}% Match</div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      app.status === 'approved' 
                        ? 'bg-accent/10 text-accent'
                        : app.status === 'reviewing'
                        ? 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-500'
                        : 'bg-primary/10 text-primary'
                    }`}>
                      {app.status}
                    </span>
                    <button className="px-4 py-1 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm">
                      Review
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        )}
      </main>
    </div>
  );
}
