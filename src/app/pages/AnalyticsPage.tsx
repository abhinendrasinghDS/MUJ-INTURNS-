import { StudentSidebar } from '../components/StudentSidebar';
import { GlassCard } from '../components/GlassCard';
import { 
  TrendingUp, 
  Award, 
  Target, 
  Clock,
  BarChart3
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

const readinessData = [
  { month: 'Aug', score: 45 },
  { month: 'Sep', score: 52 },
  { month: 'Oct', score: 58 },
  { month: 'Nov', score: 63 },
  { month: 'Dec', score: 68 },
  { month: 'Jan', score: 72 },
];

const skillGrowthData = [
  { skill: 'Python', current: 90, target: 95 },
  { skill: 'SQL', current: 75, target: 90 },
  { skill: 'React', current: 80, target: 85 },
  { skill: 'Node.js', current: 70, target: 85 },
  { skill: 'TypeScript', current: 65, target: 80 },
];

const skillRadarData = [
  { skill: 'Frontend', value: 85 },
  { skill: 'Backend', value: 70 },
  { skill: 'Database', value: 75 },
  { skill: 'DevOps', value: 45 },
  { skill: 'Data Science', value: 65 },
  { skill: 'Design', value: 50 },
];

export function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <StudentSidebar />
      
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Track your progress and skill development over time
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">72%</div>
                <div className="text-sm text-muted-foreground">Readiness</div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-accent">
              <TrendingUp className="w-3 h-3" />
              <span>+15% from last month</span>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">12</div>
                <div className="text-sm text-muted-foreground">Skills Mastered</div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-accent">
              <TrendingUp className="w-3 h-3" />
              <span>+3 this month</span>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">8</div>
                <div className="text-sm text-muted-foreground">Applications</div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>5 pending responses</span>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">45h</div>
                <div className="text-sm text-muted-foreground">Learning Time</div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-accent">
              <TrendingUp className="w-3 h-3" />
              <span>+12h this week</span>
            </div>
          </GlassCard>
        </div>

        {/* Charts Row 1 */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Readiness Progress Over Time */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold text-foreground">Readiness Progress</h2>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={readinessData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis 
                  dataKey="month" 
                  stroke="var(--color-muted-foreground)"
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke="var(--color-muted-foreground)"
                  style={{ fontSize: '12px' }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '12px',
                    color: 'var(--color-foreground)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#2563EB" 
                  strokeWidth={3}
                  dot={{ fill: '#2563EB', r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </GlassCard>

          {/* Skill Growth */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-accent" />
              <h2 className="text-xl font-bold text-foreground">Skill Growth vs Target</h2>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis 
                  dataKey="skill" 
                  stroke="var(--color-muted-foreground)"
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke="var(--color-muted-foreground)"
                  style={{ fontSize: '12px' }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '12px',
                    color: 'var(--color-foreground)'
                  }}
                />
                <Bar dataKey="current" fill="#10B981" radius={[8, 8, 0, 0]} />
                <Bar dataKey="target" fill="#7C3AED" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <span className="text-sm text-muted-foreground">Current Level</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <span className="text-sm text-muted-foreground">Target Level</span>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Charts Row 2 */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Skill Radar */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Target className="w-5 h-5 text-secondary" />
              <h2 className="text-xl font-bold text-foreground">Skill Distribution</h2>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart data={skillRadarData}>
                <PolarGrid stroke="var(--color-border)" />
                <PolarAngleAxis 
                  dataKey="skill" 
                  stroke="var(--color-muted-foreground)"
                  style={{ fontSize: '12px' }}
                />
                <PolarRadiusAxis 
                  stroke="var(--color-muted-foreground)"
                  style={{ fontSize: '10px' }}
                />
                <Radar 
                  name="Skills" 
                  dataKey="value" 
                  stroke="#2563EB" 
                  fill="#2563EB" 
                  fillOpacity={0.6} 
                />
              </RadarChart>
            </ResponsiveContainer>
          </GlassCard>

          {/* Recent Activities */}
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-bold text-foreground">Recent Activities</h2>
            </div>
            <div className="space-y-4">
              {[
                { action: 'Completed SQL Course', time: '2 hours ago', type: 'success' },
                { action: 'Applied to Google Internship', time: '1 day ago', type: 'info' },
                { action: 'Added new project to portfolio', time: '2 days ago', type: 'success' },
                { action: 'Started TypeScript learning path', time: '3 days ago', type: 'info' },
                { action: 'Earned Python Certification', time: '5 days ago', type: 'success' },
                { action: 'Updated profile information', time: '1 week ago', type: 'info' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'success' ? 'bg-accent' : 'bg-primary'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </main>
    </div>
  );
}
