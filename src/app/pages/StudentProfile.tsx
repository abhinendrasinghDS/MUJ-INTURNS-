import { useState } from 'react';
import { StudentSidebar } from '../components/StudentSidebar';
import { GlassCard } from '../components/GlassCard';
import { EditProfileModal } from '../components/EditProfileModal';
import { 
  Award, 
  Briefcase, 
  Code, 
  Edit, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone,
  Shield,
  Star
} from 'lucide-react';

const initialProfile = {
  name: 'John Doe',
  email: 'john.doe@muj.ac.in',
  phone: '+91 98765 43210',
  location: 'Jaipur, Rajasthan',
  college: 'Manipal University Jaipur',
  major: 'Computer Science',
  year: '3rd Year',
  github: 'github.com/johndoe',
  linkedin: 'linkedin.com/in/johndoe',
};

const initialSkills = [
  { name: 'Python', level: 90, verified: true },
  { name: 'JavaScript', level: 85, verified: true },
  { name: 'React', level: 80, verified: true },
  { name: 'SQL', level: 75, verified: false },
  { name: 'Node.js', level: 70, verified: false },
  { name: 'TypeScript', level: 65, verified: false },
];

const initialCertifications = [
  {
    title: 'Python for Data Science',
    issuer: 'Coursera',
    date: 'Jan 2026',
    verified: true,
  },
  {
    title: 'React Developer Certification',
    issuer: 'Meta',
    date: 'Dec 2025',
    verified: true,
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Nov 2025',
    verified: false,
  },
];

const initialProjects = [
  {
    title: 'E-commerce Analytics Dashboard',
    description: 'Real-time analytics dashboard built with React and Python Flask',
    tech: ['React', 'Python', 'PostgreSQL', 'Chart.js'],
    link: '#',
  },
  {
    title: 'AI Chatbot Application',
    description: 'Conversational AI chatbot using NLP and machine learning',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    link: '#',
  },
  {
    title: 'Task Management System',
    description: 'Collaborative task management with real-time updates',
    tech: ['Node.js', 'React', 'MongoDB', 'Socket.io'],
    link: '#',
  },
];

export function StudentProfile() {
  const [profile, setProfile] = useState(initialProfile);
  const [skills, setSkills] = useState(initialSkills);
  const [certifications, setCertifications] = useState(initialCertifications);
  const [projects, setProjects] = useState(initialProjects);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleSave = (data: {
    profile: typeof initialProfile;
    skills: typeof initialSkills;
    certifications: typeof initialCertifications;
    projects: typeof initialProjects;
  }) => {
    setProfile(data.profile);
    setSkills(data.skills);
    setCertifications(data.certifications);
    setProjects(data.projects);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <StudentSidebar />
      
      <main className="flex-1 p-8 overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Profile</h1>
            <p className="text-muted-foreground">Manage your profile and credentials</p>
          </div>
          <button
            onClick={() => setIsEditOpen(true)}
            className="px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2"
          >
            <Edit className="w-4 h-4" />
            Edit Profile
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <GlassCard className="p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                {profile.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <h2 className="text-2xl font-bold text-foreground">{profile.name}</h2>
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center" title="Verified Profile">
                  <Shield className="w-4 h-4 text-white" />
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{profile.major}</p>
              <div className="space-y-2 text-sm text-muted-foreground text-left">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{profile.location}</span>
                </div>
              </div>
              <div className="border-t border-border mt-4 pt-4">
                <div className="flex gap-2 justify-center">
                  <a
                    href={`https://${profile.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                  >
                    <Github className="w-5 h-5 text-foreground" />
                  </a>
                  <a
                    href={`https://${profile.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-foreground" />
                  </a>
                </div>
              </div>
            </GlassCard>

            {/* Education */}
            <GlassCard className="p-6">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Education
              </h3>
              <div>
                <p className="font-medium text-foreground">{profile.college}</p>
                <p className="text-sm text-muted-foreground">{profile.major}</p>
                <p className="text-sm text-muted-foreground">{profile.year}</p>
              </div>
            </GlassCard>
          </div>

          {/* Right Column - Skills, Certifications, Projects */}
          <div className="lg:col-span-2 space-y-6">
            {/* Skills */}
            <GlassCard className="p-6">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Technical Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        {skill.verified && (
                          <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center" title="Verified Skill">
                            <Shield className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-500 ${
                          skill.verified
                            ? 'bg-gradient-to-r from-accent to-primary'
                            : 'bg-muted-foreground'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Certifications */}
            <GlassCard className="p-6">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-secondary" />
                Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-foreground text-sm">{cert.title}</h4>
                      {cert.verified && (
                        <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0" title="Verified">
                          <Shield className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Projects */}
            <GlassCard className="p-6">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" />
                Projects
              </h3>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="p-5 bg-muted/50 rounded-xl hover:bg-muted transition-all hover:scale-[1.01]"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-foreground">{project.title}</h4>
                      <a
                        href={project.link}
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </main>

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        profile={profile}
        skills={skills}
        certifications={certifications}
        projects={projects}
        onSave={handleSave}
      />
    </div>
  );
}
