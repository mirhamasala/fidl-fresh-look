
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  color?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  linkText,
  linkUrl,
  color = 'text-fidl-purple'
}) => {
  return (
    <div className="feature-card">
      <div className={`feature-icon ${color}`}>{icon}</div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-muted-foreground text-sm flex-grow">{description}</p>
      <Link to={linkUrl} className="card-link">
        {linkText} <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default FeatureCard;
