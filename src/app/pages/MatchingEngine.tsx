import { StudentSidebar } from '../components/StudentSidebar';
import { GlassCard } from '../components/GlassCard';
import { 
  Sparkles, 
  CheckCircle, 
  X, 
  MapPin, 
  Clock, 
  TrendingUp,
  AlertCircle,
  Building2
} from 'lucide-react';

const matches = [
  {
    company: 'Google',
    role: 'Data Analyst Intern',
    location: 'Bangalore, India',
    duration: '6 months',
    matchScore: 85,
    logo: '🔷',
    matched: ['Python', 'SQL', 'Data Analysis', 'Statistics'],
    missing: ['Power BI', 'Tableau'],
    salary: '₹50,000/month',
    posted: '2 days ago',
  },
  {
    company: 'Microsoft',
    role: 'Software Engineering Intern',
    location: 'Hyderabad, India',
    duration: '3 months',
    matchScore: 78,
    logo: '🟦',
    matched: ['Python', 'JavaScript', 'React', 'Git'],
    missing: ['Azure', 'C#'],
    salary: '₹45,000/month',
    posted: '1 week ago',
  },
  {
    company: 'Amazon',
    role: 'Frontend Developer Intern',
    location: 'Mumbai, India',
    duration: '6 months',
    matchScore: 72,
    logo: '🟧',
    matched: ['React', 'JavaScript', 'TypeScript', 'CSS'],
    missing: ['AWS', 'Redux'],
    salary: '₹40,000/month',
    posted: '3 days ago',
  },
  {
    company: 'Flipkart',
    role: 'Full Stack Developer Intern',
    location: 'Bangalore, India',
    duration: '4 months',
    matchScore: 68,
    logo: '🟨',
    matched: ['React', 'Node.js', 'MongoDB'],
    missing: ['Kafka', 'Microservices', 'Docker'],
    salary: '₹35,000/month',
    posted: '5 days ago',
  },
];

export function MatchingEngine() {
  return (
    <div className="flex min-h-screen bg-background">
      <StudentSidebar />
      
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">AI-Powered Matches</h1>
          </div>
          <p className="text-muted-foreground">
            Top internships matched to your skills and career goals
          </p>
        </div>

        {/* Filter/Stats Bar */}
        <GlassCard className="p-6 mb-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-muted/30 rounded-xl">
              <div className="text-2xl font-bold text-primary mb-1">{matches.length}</div>
              <div className="text-sm text-muted-foreground">Total Matches</div>
            </div>
            <div className="p-4 bg-muted/30 rounded-xl">
              <div className="text-2xl font-bold text-accent mb-1">85%</div>
              <div className="text-sm text-muted-foreground">Top Match Score</div>
            </div>
            <div className="p-4 bg-muted/30 rounded-xl">
              <div className="text-2xl font-bold text-secondary mb-1">12</div>
              <div className="text-sm text-muted-foreground">Skills Matched</div>
            </div>
            <div className="p-4 bg-muted/30 rounded-xl">
              <div className="text-2xl font-bold text-foreground mb-1">3</div>
              <div className="text-sm text-muted-foreground">New This Week</div>
            </div>
          </div>
        </GlassCard>

        {/* Matches List */}
        <div className="space-y-6">
          {matches.map((match, index) => (
            <GlassCard key={index} className="overflow-hidden">
              {/* Match Score Banner */}
              <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 px-6 py-3 border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="font-bold text-foreground">
                      {match.matchScore}% Match Score
                    </span>
                    {match.matchScore >= 80 && (
                      <span className="px-2 py-0.5 bg-accent text-white rounded-full text-xs font-medium">
                        Excellent Match
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">Posted {match.posted}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex gap-6">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-4xl">
                      {match.logo}
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h2 className="text-2xl font-bold text-foreground mb-1">
                          {match.role}
                        </h2>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <Building2 className="w-4 h-4" />
                          <span className="font-medium">{match.company}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {match.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {match.duration}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {match.salary}
                        </div>
                        <button className="px-6 py-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all hover:scale-105 shadow-lg">
                          Apply Now
                        </button>
                      </div>
                    </div>

                    {/* Match Breakdown */}
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      {/* Matched Skills */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle className="w-5 h-5 text-accent" />
                          <h3 className="font-bold text-foreground">Matched Skills</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {match.matched.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-accent/10 text-accent rounded-lg text-sm font-medium flex items-center gap-1"
                            >
                              <CheckCircle className="w-3 h-3" />
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Missing Skills */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <AlertCircle className="w-5 h-5 text-yellow-500" />
                          <h3 className="font-bold text-foreground">Skills to Learn</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {match.missing.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 rounded-lg text-sm font-medium flex items-center gap-1"
                            >
                              <X className="w-3 h-3" />
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* AI Insight */}
                    <div className="mt-4 p-4 bg-secondary/5 border border-secondary/20 rounded-xl">
                      <div className="flex gap-3">
                        <Sparkles className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-foreground text-sm mb-1">AI Insight</h4>
                          <p className="text-sm text-muted-foreground">
                            {match.matchScore >= 80
                              ? `You're a strong candidate! Your skills align well with this role. Consider applying soon as this is a popular position.`
                              : match.matchScore >= 70
                              ? `Good match! Learning ${match.missing[0]} would significantly boost your chances.`
                              : `Moderate match. Focus on acquiring ${match.missing.slice(0, 2).join(' and ')} to improve your candidacy.`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-muted text-foreground rounded-xl hover:bg-muted/80 transition-colors">
            Load More Matches
          </button>
        </div>
      </main>
    </div>
  );
}
