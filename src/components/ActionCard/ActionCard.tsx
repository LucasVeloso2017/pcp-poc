import React from 'react';
import { ActionCardProps } from './ActionCard.types';



const ActionCard: React.FC<ActionCardProps> = ({
  icon,
  title,
  description,
  onClick,
  className = '',
  iconColor = '#06b6d4',
  isActive = false
}) => {
  const IconComponent = icon;

  return (
    <div
      className={`
        relative p-6 rounded-lg border-2 transition-all duration-200 cursor-pointer
        ${isActive 
          ? 'border-cyan-500 bg-cyan-50' 
          : 'border-gray-200 bg-white hover:border-cyan-300 hover:shadow-md'
        }
        ${className}
      `}
      onClick={onClick}
    >
      <div className="flex flex-col items-start justify-start gap-2 h-full">
        <div className={`
          p-3 rounded-full 
          ${isActive ? 'bg-cyan-100' : 'bg-gray-50'}
        `}>
          <IconComponent 
            size={20} 
            color={isActive ? '#0891b2' : iconColor}
          />
        </div>
        
        <h3 className={`
          font-semibold text-lg
          ${isActive ? 'text-cyan-900' : 'text-gray-900'}
        `}>
          {title}
        </h3>
        
        <p className={`
          text-sm leading-relaxed
          ${isActive ? 'text-cyan-700' : 'text-gray-600'}
        `}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ActionCard;
