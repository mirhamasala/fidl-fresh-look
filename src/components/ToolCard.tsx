
import React from 'react';

interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="bg-fidl-card-bg w-16 h-16 rounded-full flex items-center justify-center text-fidl-purple">
        {icon}
      </div>
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
};

export default ToolCard;
