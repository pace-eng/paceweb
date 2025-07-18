'use client';

import { ReactNode } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  backgroundPattern?: boolean;
  className?: string;
}

export function HeroSection({ 
  title, 
  subtitle, 
  description, 
  children, 
  backgroundPattern = true,
  className = '' 
}: HeroSectionProps) {
  return (
    <div className={`relative py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      {/* Background Pattern */}
      {backgroundPattern && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjAyIj4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+')] opacity-40"></div>
        </div>
      )}
      
      <div className="relative max-w-4xl mx-auto text-center">
        {subtitle && (
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            {subtitle}
          </p>
        )}
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          {title}
        </h1>
        
        {description && (
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        
        {children}
      </div>
    </div>
  );
}