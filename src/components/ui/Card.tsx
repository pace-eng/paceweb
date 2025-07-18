'use client';

import { ReactNode, useState } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  expandable?: boolean;
  defaultExpanded?: boolean;
}

export function Card({ 
  children, 
  className = '', 
  hover = false, 
  expandable = false, 
  defaultExpanded = false 
}: CardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const baseClasses = 'bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden';
  const hoverClasses = hover ? 'hover:shadow-lg hover:border-gray-300 transition-all duration-300' : '';
  const expandableClasses = expandable ? 'cursor-pointer' : '';

  const handleClick = () => {
    if (expandable) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${expandableClasses} ${className}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  expandable?: boolean;
  isExpanded?: boolean;
  onClick?: () => void;
}

export function CardHeader({ 
  children, 
  className = '', 
  icon, 
  expandable = false, 
  isExpanded = false,
  onClick
}: CardHeaderProps) {
  return (
    <div className={`px-6 py-4 border-b border-gray-100 ${className}`} onClick={onClick}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {icon && <div className="flex-shrink-0">{icon}</div>}
          <div className="flex-1">{children}</div>
        </div>
        {expandable && (
          <div className="flex-shrink-0 ml-4">
            <svg 
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`px-6 py-4 border-t border-gray-100 bg-gray-50 ${className}`}>
      {children}
    </div>
  );
}

// 专门的阶段卡片组件
interface PhaseCardProps {
  phase: {
    id: string;
    title: string;
    duration: string;
    description: string;
    activities: string[];
    outcomes: string[];
    color: string;
  };
  isExpanded?: boolean;
  onToggle?: () => void;
}

export function PhaseCard({ phase, isExpanded = false }: PhaseCardProps) {

  const iconColorClasses = {
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
  };

  return (
    <Card hover expandable className="transition-all duration-300">
      <CardHeader 
        expandable 
        isExpanded={isExpanded}
        icon={
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${iconColorClasses[phase.color as keyof typeof iconColorClasses]}`}>
            {phase.id}
          </div>
        }
      >
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{phase.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{phase.duration}</p>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-700 mb-4">{phase.description}</p>
        
        {isExpanded && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">关键活动</h4>
              <ul className="space-y-2">
                {phase.activities.map((activity, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-600">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">预期成果</h4>
              <ul className="space-y-2">
                {phase.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-600">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}