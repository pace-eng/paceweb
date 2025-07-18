'use client';

import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  gradient?: boolean;
}

export function Hero({ 
  title, 
  subtitle, 
  description, 
  children, 
  className = '', 
  gradient = false 
}: HeroProps) {
  const gradientClasses = gradient 
    ? 'bg-gradient-to-br from-blue-50 via-white to-purple-50' 
    : 'bg-white';

  return (
    <div className={`relative ${gradientClasses} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center">
          {subtitle && (
            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">
              {subtitle}
            </span>
          )}
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {title}
          </h1>
          
          {description && (
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {description}
            </p>
          )}
          
          {children}
        </div>
      </div>
      
      {/* 装饰性背景元素 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-green-100 to-blue-100 opacity-20"></div>
      </div>
    </div>
  );
}