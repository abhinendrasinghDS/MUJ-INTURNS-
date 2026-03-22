interface ProgressRingProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
}

export function ProgressRing({ 
  progress, 
  size = 120, 
  strokeWidth = 8,
  label = 'Readiness'
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  const getColor = (progress: number) => {
    if (progress >= 80) return '#10B981'; // green
    if (progress >= 60) return '#F59E0B'; // yellow
    return '#EF4444'; // red
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-muted"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={getColor(progress)}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-foreground">{progress}%</span>
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
    </div>
  );
}
