'use client';

import { useState } from 'react';

interface PaceConceptDiagramProps {
  className?: string;
}

export default function PaceConceptDiagram({ className = '' }: PaceConceptDiagramProps) {
  const [activeSection, setActiveSection] = useState<string | null>('programmatic');

  const concepts = [
    {
      id: 'programmatic',
      letter: 'P',
      title: 'Programmatic',
      subtitle: '程序化',
      description: '强调系统化、结构化的工程方法，通过明确的流程、规范和工具来管理复杂的开发过程',
      color: '#3B82F6',
      icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4'
    },
    {
      id: 'ai',
      letter: 'A',
      title: 'AI Collaboration',
      subtitle: 'AI协作',
      description: '突出人类工程师与AI系统之间的深度协作，而非简单的工具使用关系',
      color: '#8B5CF6',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
      id: 'collaboration',
      letter: 'C',
      title: 'Collaboration',
      subtitle: '协作',
      description: '建立人类创造力与AI执行力完美结合的协作模式',
      color: '#10B981',
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'
    },
    {
      id: 'engineering',
      letter: 'E',
      title: 'Engineering',
      subtitle: '工程',
      description: '体现严谨的工程实践本质，注重质量、效率和可持续发展',
      color: '#F59E0B',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
    }
  ];

  return (
    <div className={`w-full ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">PACE 方法论核心概念</h2>
        <p className="text-gray-600">点击字母了解每个概念的详细含义</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* SVG 图形 */}
        <div className="flex-1 lg:flex-[3]">
          <svg
            viewBox="0 0 400 300"
            className="w-full max-w-lg h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 背景圆圈 */}
            <circle
              cx="200"
              cy="150"
              r="140"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            
            {/* 中心连接线 */}
            <g stroke="#D1D5DB" strokeWidth="1">
              <line x1="200" y1="150" x2="200" y2="50" />
              <line x1="200" y1="150" x2="340" y2="150" />
              <line x1="200" y1="150" x2="200" y2="250" />
              <line x1="200" y1="150" x2="60" y2="150" />
            </g>

            {/* 四个概念圆圈 */}
            {concepts.map((concept, index) => {
              const angles = [0, 90, 180, 270]; // 上、右、下、左
              const angle = angles[index];
              const radian = (angle * Math.PI) / 180;
              const x = 200 + Math.cos(radian) * 100;
              const y = 150 + Math.sin(radian) * 100;
              const isActive = activeSection === concept.id;

              return (
                <g key={concept.id}>
                  {/* 概念圆圈 */}
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? "35" : "30"}
                    fill={concept.color}
                    stroke={isActive ? "#1F2937" : "none"}
                    strokeWidth={isActive ? "3" : "0"}
                    className="cursor-pointer transition-all duration-300 hover:opacity-90"
                    onClick={() => setActiveSection(activeSection === concept.id ? null : concept.id)}
                  />
                  
                  {/* 字母 */}
                  <text
                    x={x}
                    y={y + 8}
                    textAnchor="middle"
                    className="text-2xl font-bold fill-white cursor-pointer select-none"
                    onClick={() => setActiveSection(activeSection === concept.id ? null : concept.id)}
                  >
                    {concept.letter}
                  </text>
                  
                  {/* 标题 */}
                  <text
                    x={x}
                    y={y + 50}
                    textAnchor="middle"
                    className="text-sm font-semibold fill-gray-700 cursor-pointer select-none"
                    onClick={() => setActiveSection(activeSection === concept.id ? null : concept.id)}
                  >
                    {concept.subtitle}
                  </text>

                  {/* 活跃状态的脉冲效果 */}
                  {isActive && (
                    <circle
                      cx={x}
                      cy={y}
                      r="35"
                      fill="none"
                      stroke={concept.color}
                      strokeWidth="2"
                      opacity="0.6"
                    >
                      <animate
                        attributeName="r"
                        values="35;45;35"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.6;0;0.6"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              );
            })}

            {/* 中心 PACE 标识 */}
            <circle
              cx="200"
              cy="150"
              r="25"
              fill="linear-gradient(45deg, #3B82F6, #8B5CF6)"
              className="drop-shadow-lg"
            />
            <text
              x="200"
              y="155"
              textAnchor="middle"
              className="text-sm font-bold fill-white select-none"
            >
              PACE
            </text>
          </svg>
        </div>

        {/* 概念详情面板 */}
        <div className="flex-1 lg:flex-[2] max-w-md">
          {activeSection ? (
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 transition-all duration-300"
                 style={{ borderLeftColor: concepts.find(c => c.id === activeSection)?.color }}>
              {(() => {
                const concept = concepts.find(c => c.id === activeSection);
                if (!concept) return null;
                
                return (
                  <>
                    <div className="flex items-center mb-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4"
                        style={{ backgroundColor: concept.color }}
                      >
                        {concept.letter}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{concept.title}</h3>
                        <p className="text-gray-600">{concept.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{concept.description}</p>
                  </>
                );
              })()}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">选择一个概念</h3>
              <p className="text-gray-500">点击上方的字母圆圈，深入了解 PACE 方法论的核心概念</p>
            </div>
          )}
        </div>
      </div>

      {/* 底部概念总结 */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
          PACE = Programmatic AI Collaboration Engineering
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          {concepts.map((concept) => (
            <div key={concept.id} className="flex flex-col items-center">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2"
                style={{ backgroundColor: concept.color }}
              >
                {concept.letter}
              </div>
              <span className="text-sm font-medium text-gray-700">{concept.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}