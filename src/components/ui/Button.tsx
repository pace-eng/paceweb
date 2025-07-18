'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  disabled = false,
  icon,
  iconPosition = 'left'
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500',
    ghost: 'text-gray-600 hover:bg-gray-100 focus:ring-gray-500'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer';
  
  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2 -ml-1">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2 -mr-1">{icon}</span>
      )}
    </>
  );
  
  if (href) {
    return (
      <Link href={href} className={finalClasses}>
        {content}
      </Link>
    );
  }
  
  return (
    <button 
      className={finalClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}