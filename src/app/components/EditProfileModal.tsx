import { useState } from 'react';
import { GlassCard } from './GlassCard';
import {
  X,
  User,
  Code,
  GraduationCap,
  Award,
  Star,
  Plus,
  Trash2,
  Save,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from 'lucide-react';

type ProfileData = {
  name: string;
  email: string;
  phone: string;
  location: string;
  college: string;
  major: string;
  year: string;
  github: string;
  linkedin: string;
};

type Skill = { name: string; level: number; verified: boolean };
type Certification = { title: string; issuer: string; date: string; verified: boolean };
type Project = { title: string; description: string; tech: string[]; link: string };

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  skills: Skill[];
  certifications: Certification[];
  projects: Project[];
  onSave: (data: {
    profile: ProfileData;
    skills: Skill[];
    certifications: Certification[];
    projects: Project[];
  }) => void;
}

const tabs = [
  { id: 'personal', label: 'Personal', icon: User },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'projects', label: 'Projects', icon: Star },
] as const;

type TabId = (typeof tabs)[number]['id'];

export function EditProfileModal({
  isOpen,
  onClose,
  profile,
  skills,
  certifications,
  projects,
  onSave,
}: EditProfileModalProps) {
  const [activeTab, setActiveTab] = useState<TabId>('personal');
  const [editProfile, setEditProfile] = useState<ProfileData>({ ...profile });
  const [editSkills, setEditSkills] = useState<Skill[]>(skills.map(s => ({ ...s })));
  const [editCerts, setEditCerts] = useState<Certification[]>(certifications.map(c => ({ ...c })));
  const [editProjects, setEditProjects] = useState<Project[]>(projects.map(p => ({ ...p, tech: [...p.tech] })));

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({
      profile: editProfile,
      skills: editSkills,
      certifications: editCerts,
      projects: editProjects,
    });
    onClose();
  };

  const handleCancel = () => {
    setEditProfile({ ...profile });
    setEditSkills(skills.map(s => ({ ...s })));
    setEditCerts(certifications.map(c => ({ ...c })));
    setEditProjects(projects.map(p => ({ ...p, tech: [...p.tech] })));
    onClose();
  };

  const updateProfile = (field: keyof ProfileData, value: string) => {
    setEditProfile(prev => ({ ...prev, [field]: value }));
  };

  // Skills helpers
  const addSkill = () => {
    setEditSkills(prev => [...prev, { name: '', level: 50, verified: false }]);
  };
  const removeSkill = (index: number) => {
    setEditSkills(prev => prev.filter((_, i) => i !== index));
  };
  const updateSkill = (index: number, field: keyof Skill, value: string | number | boolean) => {
    setEditSkills(prev => prev.map((s, i) => (i === index ? { ...s, [field]: value } : s)));
  };

  // Certifications helpers
  const addCert = () => {
    setEditCerts(prev => [...prev, { title: '', issuer: '', date: '', verified: false }]);
  };
  const removeCert = (index: number) => {
    setEditCerts(prev => prev.filter((_, i) => i !== index));
  };
  const updateCert = (index: number, field: keyof Certification, value: string | boolean) => {
    setEditCerts(prev => prev.map((c, i) => (i === index ? { ...c, [field]: value } : c)));
  };

  // Projects helpers
  const addProject = () => {
    setEditProjects(prev => [...prev, { title: '', description: '', tech: [], link: '' }]);
  };
  const removeProject = (index: number) => {
    setEditProjects(prev => prev.filter((_, i) => i !== index));
  };
  const updateProject = (index: number, field: keyof Project, value: string | string[]) => {
    setEditProjects(prev => prev.map((p, i) => (i === index ? { ...p, [field]: value } : p)));
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end" style={{ animation: 'fadeInOverlay 0.3s ease-out' }}>
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleCancel}
      />

      {/* Modal Panel */}
      <div
        className="relative w-full max-w-2xl h-full bg-background border-l border-border shadow-2xl flex flex-col overflow-hidden"
        style={{ animation: 'slideInRight 0.35s cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border bg-card/50 backdrop-blur-xl">
          <div>
            <h2 className="text-xl font-bold text-foreground">Edit Profile</h2>
            <p className="text-sm text-muted-foreground mt-0.5">Update your profile information</p>
          </div>
          <button
            onClick={handleCancel}
            className="p-2 rounded-xl hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border bg-card/30 px-4 gap-1 overflow-x-auto">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-all relative
                  ${isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'personal' && (
            <div className="space-y-5" style={{ animation: 'fadeIn 0.3s ease-out' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white text-2xl font-bold shrink-0">
                  {editProfile.name.split(' ').map(n => n[0]).join('').toUpperCase() || 'U'}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-lg">{editProfile.name || 'Your Name'}</h3>
                  <p className="text-sm text-muted-foreground">{editProfile.major || 'Your Department'}</p>
                </div>
              </div>

              <InputField
                icon={<User className="w-4 h-4" />}
                label="Full Name"
                value={editProfile.name}
                onChange={v => updateProfile('name', v)}
                placeholder="Enter your full name"
              />
              <InputField
                icon={<Mail className="w-4 h-4" />}
                label="Email Address"
                value={editProfile.email}
                onChange={v => updateProfile('email', v)}
                placeholder="Enter your email"
                type="email"
              />
              <div className="grid grid-cols-2 gap-4">
                <InputField
                  icon={<Phone className="w-4 h-4" />}
                  label="Phone"
                  value={editProfile.phone}
                  onChange={v => updateProfile('phone', v)}
                  placeholder="Phone number"
                />
                <InputField
                  icon={<MapPin className="w-4 h-4" />}
                  label="Location"
                  value={editProfile.location}
                  onChange={v => updateProfile('location', v)}
                  placeholder="City, State"
                />
              </div>
              <div className="border-t border-border pt-5 mt-2">
                <h4 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-primary" />
                  Social Links
                </h4>
                <div className="space-y-4">
                  <InputField
                    icon={<Github className="w-4 h-4" />}
                    label="GitHub"
                    value={editProfile.github}
                    onChange={v => updateProfile('github', v)}
                    placeholder="github.com/username"
                  />
                  <InputField
                    icon={<Linkedin className="w-4 h-4" />}
                    label="LinkedIn"
                    value={editProfile.linkedin}
                    onChange={v => updateProfile('linkedin', v)}
                    placeholder="linkedin.com/in/username"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-4" style={{ animation: 'fadeIn 0.3s ease-out' }}>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Drag the slider to adjust your proficiency level</p>
                <button
                  onClick={addSkill}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Skill
                </button>
              </div>

              {editSkills.map((skill, index) => (
                <GlassCard key={index} className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <input
                      type="text"
                      value={skill.name}
                      onChange={e => updateSkill(index, 'name', e.target.value)}
                      placeholder="Skill name (e.g. Python)"
                      className="flex-1 px-3 py-2 bg-input-background border border-input rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                    <button
                      onClick={() => removeSkill(index)}
                      className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={skill.level}
                      onChange={e => updateSkill(index, 'level', parseInt(e.target.value))}
                      className="flex-1 h-2 rounded-full appearance-none cursor-pointer accent-primary"
                      style={{
                        background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${skill.level}%, var(--muted) ${skill.level}%, var(--muted) 100%)`,
                      }}
                    />
                    <span className="text-sm font-bold text-foreground w-12 text-right">{skill.level}%</span>
                  </div>
                </GlassCard>
              ))}

              {editSkills.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  <Code className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>No skills added yet. Click "Add Skill" to get started.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-5" style={{ animation: 'fadeIn 0.3s ease-out' }}>
              <GlassCard className="p-5">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">University Details</h3>
                    <p className="text-xs text-muted-foreground">Update your education information</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <InputField
                    icon={<GraduationCap className="w-4 h-4" />}
                    label="College / University"
                    value={editProfile.college}
                    onChange={v => updateProfile('college', v)}
                    placeholder="Enter your college name"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <InputField
                      label="Major / Department"
                      value={editProfile.major}
                      onChange={v => updateProfile('major', v)}
                      placeholder="e.g. Computer Science"
                    />
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Year</label>
                      <select
                        value={editProfile.year}
                        onChange={e => updateProfile('year', e.target.value)}
                        className="w-full px-3 py-2.5 bg-input-background border border-input rounded-xl text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      >
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                        <option value="5th Year">5th Year</option>
                        <option value="Graduated">Graduated</option>
                      </select>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="space-y-4" style={{ animation: 'fadeIn 0.3s ease-out' }}>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Add your verified certifications</p>
                <button
                  onClick={addCert}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-white rounded-lg text-sm hover:bg-secondary/90 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Certification
                </button>
              </div>

              {editCerts.map((cert, index) => (
                <GlassCard key={index} className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-secondary" />
                    </div>
                    <button
                      onClick={() => removeCert(index)}
                      className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={cert.title}
                      onChange={e => updateCert(index, 'title', e.target.value)}
                      placeholder="Certification title"
                      className="w-full px-3 py-2 bg-input-background border border-input rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        value={cert.issuer}
                        onChange={e => updateCert(index, 'issuer', e.target.value)}
                        placeholder="Issuing organization"
                        className="px-3 py-2 bg-input-background border border-input rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                      <input
                        type="text"
                        value={cert.date}
                        onChange={e => updateCert(index, 'date', e.target.value)}
                        placeholder="e.g. Jan 2026"
                        className="px-3 py-2 bg-input-background border border-input rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                </GlassCard>
              ))}

              {editCerts.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  <Award className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>No certifications added yet. Click "Add Certification" to get started.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-4" style={{ animation: 'fadeIn 0.3s ease-out' }}>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">Showcase your best work</p>
                <button
                  onClick={addProject}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-accent text-white rounded-lg text-sm hover:bg-accent/90 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Project
                </button>
              </div>

              {editProjects.map((project, index) => (
                <GlassCard key={index} className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center shrink-0">
                      <Star className="w-5 h-5 text-accent" />
                    </div>
                    <button
                      onClick={() => removeProject(index)}
                      className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={project.title}
                      onChange={e => updateProject(index, 'title', e.target.value)}
                      placeholder="Project title"
                      className="w-full px-3 py-2 bg-input-background border border-input rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all font-medium"
                    />
                    <textarea
                      value={project.description}
                      onChange={e => updateProject(index, 'description', e.target.value)}
                      placeholder="Brief description of the project"
                      rows={2}
                      className="w-full px-3 py-2 bg-input-background border border-input rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    />
                    <input
                      type="text"
                      value={project.tech.join(', ')}
                      onChange={e =>
                        updateProject(
                          index,
                          'tech',
                          e.target.value
                            .split(',')
                            .map(t => t.trim())
                            .filter(Boolean)
                        )
                      }
                      placeholder="Technologies (comma-separated, e.g. React, Python, SQL)"
                      className="w-full px-3 py-2 bg-input-background border border-input rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                    <input
                      type="text"
                      value={project.link}
                      onChange={e => updateProject(index, 'link', e.target.value)}
                      placeholder="Project link (e.g. https://github.com/...)"
                      className="w-full px-3 py-2 bg-input-background border border-input rounded-lg text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                </GlassCard>
              ))}

              {editProjects.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  <Star className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>No projects added yet. Click "Add Project" to get started.</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-border bg-card/50 backdrop-blur-xl">
          <button
            onClick={handleCancel}
            className="px-5 py-2.5 border border-border rounded-xl text-foreground hover:bg-muted transition-all text-sm font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2.5 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2 text-sm font-medium shadow-lg shadow-primary/25"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

// Reusable input field component
function InputField({
  icon,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  icon?: React.ReactNode;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full ${icon ? 'pl-10' : 'pl-3'} pr-3 py-2.5 bg-input-background border border-input rounded-xl text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all`}
        />
      </div>
    </div>
  );
}
