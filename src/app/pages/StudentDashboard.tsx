import { StudentSidebar } from '../components/StudentSidebar';
import { GlassCard } from '../components/GlassCard';
import { ProgressRing } from '../components/ProgressRing';
import { 
  TrendingUp, 
  Sparkles, 
  Target, 
  CheckCircle, 
  AlertCircle, 
  Clock,
  ArrowRight,
  ExternalLink,
  Award,
  BookOpen,
  Briefcase
} from 'lucide-react';

const skills = {
  completed: ['Python', 'JavaScript', 'React', 'Git'],
  inProgress: ['SQL', 'TypeScript', 'Node.js'],
  missing: ['Power BI', 'Docker', 'AWS'],
};

const recommendations = [
  { action: 'Learn SQL', priority: 'High', estimatedTime: '2 weeks' },
  { action: 'Complete Python Certification', priority: 'Medium', estimatedTime: '1 week' },
  { action: 'Build Portfolio Project', priority: 'High', estimatedTime: '3 weeks' },
];

const internships = [
  {
    company: 'Google',
    role: 'Software Engineering Intern',
    match: 85,
    location: 'Bangalore',
    logo: '🔷',
  },
  {
    company: 'Microsoft',
    role: 'Data Analyst Intern',
    match: 78,
    location: 'Hyderabad',
    logo: '🟦',
  },
  {
    company: 'Amazon',
    role: 'Frontend Developer Intern',
    match: 72,
    location: 'Mumbai',
    logo: '🟧',
  },
];

const courses = [
  {
    title: 'Advanced SQL Mastery',
    platform: 'Coursera',
    price: '₹999',
    tag: 'Trending',
    rating: 4.8,
  },
  {
    title: 'Complete Python Bootcamp',
    platform: 'Udemy',
    price: '₹1,299',
    tag: 'High ROI',
    rating: 4.9,
  },
  {
    title: 'AWS Cloud Practitioner',
    platform: 'AWS Training',
    price: '₹2,499',
    tag: 'In-Demand',
    rating: 4.7,
  },
];

export function StudentDashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <StudentSidebar />
      
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your progress overview</p>
        </div>

        {/* Readiness Score Card */}
        <GlassCard className="p-8 mb-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <ProgressRing progress={72} size={140} strokeWidth={10} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Internship Readiness Score
              </h2>
              <p className="text-muted-foreground mb-4">
                You are <span className="text-accent font-semibold">72% ready</span> for Data Analyst Role
              </p>
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-500"
                  style={{ width: '72%' }}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Complete 3 more skills to reach 90% readiness
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Skills Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-bold text-foreground">Completed Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.completed.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-accent/10 text-accent rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-yellow-500" />
              </div>
              <h3 className="font-bold text-foreground">In Progress</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.inProgress.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="font-bold text-foreground">Missing Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.missing.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-destructive/10 text-destructive rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {/* AI Recommendations */}
          <div className="lg:col-span-1">
            <GlassCard className="p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-bold text-foreground">AI Recommendations</h3>
              </div>
              <div className="space-y-3">
                {recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className="p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-medium text-foreground text-sm">{rec.action}</p>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          rec.priority === 'High'
                            ? 'bg-destructive/10 text-destructive'
                            : 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-500'
                        }`}
                      >
                        {rec.priority}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Est. time: {rec.estimatedTime}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Recommended Internships */}
          <div className="lg:col-span-2">
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">Recommended Internships</h3>
                </div>
                <button className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-3">
                {internships.map((internship, index) => (
                  <div
                    key={index}
                    className="p-4 bg-muted/50 rounded-xl hover:bg-muted transition-all hover:scale-[1.01] cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl">
                          {internship.logo}
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">{internship.role}</h4>
                          <p className="text-sm text-muted-foreground">{internship.company}</p>
                          <p className="text-xs text-muted-foreground mt-1">{internship.location}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-2">
                          <div className="w-2 h-2 rounded-full bg-accent"></div>
                          <span className="text-sm font-bold text-accent">{internship.match}% Match</span>
                        </div>
                        <button className="px-4 py-1.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm">
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Course Recommendations */}
        <GlassCard className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Recommended Courses</h3>
                <p className="text-sm text-muted-foreground">Boost your skills with these courses</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <div
                key={index}
                className="p-4 bg-muted/50 rounded-xl hover:bg-muted transition-all hover:scale-[1.02] cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className={`px-2 py-1 rounded-lg text-xs font-medium ${
                      course.tag === 'Trending'
                        ? 'bg-primary/10 text-primary'
                        : course.tag === 'High ROI'
                        ? 'bg-accent/10 text-accent'
                        : 'bg-secondary/10 text-secondary'
                    }`}
                  >
                    {course.tag}
                  </span>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-xs font-medium text-foreground">{course.rating}</span>
                  </div>
                </div>
                <h4 className="font-bold text-foreground mb-2">{course.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{course.platform}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{course.price}</span>
                  <button className="text-primary hover:underline text-sm flex items-center gap-1">
                    View
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </main>
    </div>
  );
}
