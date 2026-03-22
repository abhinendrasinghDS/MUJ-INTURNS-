import { StudentSidebar } from '../components/StudentSidebar';
import { GlassCard } from '../components/GlassCard';
import { CheckCircle, Circle, Clock, Target } from 'lucide-react';

const roadmapSteps = [
  {
    title: 'Learn Python Basics',
    status: 'completed',
    description: 'Master fundamental Python programming concepts',
    duration: '4 weeks',
    skills: ['Python', 'Data Structures', 'OOP'],
    completedDate: 'Jan 15, 2026',
  },
  {
    title: 'Learn SQL & Databases',
    status: 'in-progress',
    description: 'Database design, queries, and optimization',
    duration: '3 weeks',
    skills: ['SQL', 'PostgreSQL', 'Database Design'],
    progress: 65,
  },
  {
    title: 'Data Analysis with Pandas',
    status: 'in-progress',
    description: 'Data manipulation and analysis using Pandas',
    duration: '2 weeks',
    skills: ['Pandas', 'NumPy', 'Data Analysis'],
    progress: 30,
  },
  {
    title: 'Build Portfolio Project',
    status: 'pending',
    description: 'Create a full-stack data analysis project',
    duration: '4 weeks',
    skills: ['Full Stack', 'API', 'Visualization'],
  },
  {
    title: 'Learn Power BI',
    status: 'pending',
    description: 'Business intelligence and data visualization',
    duration: '2 weeks',
    skills: ['Power BI', 'DAX', 'Dashboards'],
  },
  {
    title: 'Cloud Computing (AWS)',
    status: 'pending',
    description: 'Cloud fundamentals and deployment',
    duration: '3 weeks',
    skills: ['AWS', 'EC2', 'S3'],
  },
  {
    title: 'Interview Preparation',
    status: 'pending',
    description: 'Technical interviews and coding challenges',
    duration: '2 weeks',
    skills: ['DSA', 'System Design', 'Behavioral'],
  },
];

export function RoadmapPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <StudentSidebar />
      
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Your Learning Roadmap</h1>
          <p className="text-muted-foreground">
            Personalized path to becoming a Data Analyst
          </p>
        </div>

        {/* Progress Overview */}
        <GlassCard className="p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Overall Progress</span>
                <span className="text-sm font-bold text-primary">35%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-500"
                  style={{ width: '35%' }}
                />
              </div>
            </div>
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">1</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">2</div>
                <div className="text-sm text-muted-foreground">In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-muted-foreground">4</div>
                <div className="text-sm text-muted-foreground">Pending</div>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-8">
            {roadmapSteps.map((step, index) => {
              const isCompleted = step.status === 'completed';
              const isInProgress = step.status === 'in-progress';
              const isPending = step.status === 'pending';

              return (
                <div key={index} className="relative pl-16">
                  {/* Status Icon */}
                  <div className="absolute left-0 top-0">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-background ${
                        isCompleted
                          ? 'bg-accent'
                          : isInProgress
                          ? 'bg-yellow-500'
                          : 'bg-muted'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : isInProgress ? (
                        <Clock className="w-6 h-6 text-white" />
                      ) : (
                        <Circle className="w-6 h-6 text-muted-foreground" />
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <GlassCard
                    className={`p-6 ${
                      isInProgress ? 'ring-2 ring-yellow-500' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                          <Target className="w-4 h-4" />
                          {step.duration}
                        </div>
                        {isCompleted && (
                          <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                            Completed
                          </span>
                        )}
                        {isInProgress && (
                          <span className="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 rounded-full text-xs font-medium">
                            In Progress
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {step.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-lg text-sm font-medium ${
                            isCompleted
                              ? 'bg-accent/10 text-accent'
                              : isInProgress
                              ? 'bg-primary/10 text-primary'
                              : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Progress Bar for In-Progress */}
                    {isInProgress && step.progress !== undefined && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">Progress</span>
                          <span className="text-sm font-bold text-primary">{step.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div 
                            className="h-full bg-primary transition-all duration-500"
                            style={{ width: `${step.progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Completed Date */}
                    {isCompleted && step.completedDate && (
                      <p className="text-sm text-muted-foreground">
                        Completed on {step.completedDate}
                      </p>
                    )}

                    {/* Action Buttons */}
                    {isInProgress && (
                      <div className="flex gap-2 mt-4">
                        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                          Continue Learning
                        </button>
                        <button className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors">
                          Resources
                        </button>
                      </div>
                    )}
                    {isPending && (
                      <button className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors mt-4">
                        Start Learning
                      </button>
                    )}
                  </GlassCard>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
