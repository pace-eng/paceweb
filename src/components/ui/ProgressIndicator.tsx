'use client';

interface ProgressStep {
  id: string;
  title: string;
  status: 'completed' | 'current' | 'upcoming';
}

interface ProgressIndicatorProps {
  steps: ProgressStep[];
  className?: string;
}

export function ProgressIndicator({ steps, className = '' }: ProgressIndicatorProps) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          {/* Step Circle */}
          <div className="flex flex-col items-center">
            <div className={`
              w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
              ${step.status === 'completed' 
                ? 'bg-green-500 text-white' 
                : step.status === 'current'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-600'
              }
            `}>
              {step.status === 'completed' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                index + 1
              )}
            </div>
            <span className={`
              mt-2 text-xs font-medium text-center max-w-20
              ${step.status === 'current' ? 'text-blue-600' : 'text-gray-600'}
            `}>
              {step.title}
            </span>
          </div>
          
          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div className={`
              flex-1 h-0.5 mx-4 min-w-12
              ${steps[index + 1].status === 'completed' || step.status === 'completed' 
                ? 'bg-green-500' 
                : 'bg-gray-200'
              }
            `} />
          )}
        </div>
      ))}
    </div>
  );
}