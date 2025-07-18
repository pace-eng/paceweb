'use client';

import { useState } from 'react';

interface TaskLevelPyramidProps {
  className?: string;
}

export default function TaskLevelPyramid({ className = '' }: TaskLevelPyramidProps) {
  const [activeLevel, setActiveLevel] = useState<number | null>(null);

  const levels = [
    {
      level: 4,
      name: '创新探索',
      description: '高度不确定性，需要创造性思维',
      aiParticipation: '10-30%',
      collaboration: '人类主导创新，AI提供支持',
      examples: ['新技术验证', '算法创新', '用户体验设计', '商业模式探索'],
      color: '#8B5CF6',
      complexity: 'complex'
    },
    {
      level: 3,
      name: '架构设计',
      description: '需要权衡多个因素，涉及技术选型',
      aiParticipation: '30-50%',
      collaboration: '人机深度协作，共同探索方案',
      examples: ['系统架构', '性能优化', '技术选型', '安全设计'],
      color: '#F59E0B',
      complexity: 'moderate'
    },
    {
      level: 2,
      name: '集成协调',
      description: '多模块交互，需要考虑系统一致性',
      aiParticipation: '60-80%',
      collaboration: '人类设计框架，AI实现细节',
      examples: ['API集成', '状态管理', '数据流设计', '组件组合'],
      color: '#3B82F6',
      complexity: 'simple'
    },
    {
      level: 1,
      name: '标准化实现',
      description: '明确的输入输出，标准化的实现模式',
      aiParticipation: '85-95%',
      collaboration: 'AI主导执行，人类监督验证',
      examples: ['CRUD操作', '数据转换', '工具函数', '单元测试'],
      color: '#10B981',
      complexity: 'simple'
    }
  ];

  return (
    <div className={`w-full ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">PACE 任务分级体系</h2>
        <p className="text-gray-600">从Level 1到Level 4，任务复杂度递增，AI参与度递减</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* 3D金字塔 */}
        <div className="relative">
          <svg
            viewBox="0 0 400 350"
            className="w-full max-w-lg h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 定义渐变 */}
            <defs>
              {levels.map((level) => (
                <linearGradient
                  key={level.level}
                  id={`gradient-${level.level}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor={level.color} stopOpacity="0.8" />
                  <stop offset="100%" stopColor={level.color} stopOpacity="0.6" />
                </linearGradient>
              ))}
              
              {/* 阴影滤镜 */}
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3"/>
              </filter>
            </defs>

            {/* Level 1 - 底层 */}
            <g>
              <path
                d="M 50 250 L 350 250 L 320 280 L 80 280 Z"
                fill={`url(#gradient-1)`}
                stroke="#059669"
                strokeWidth="2"
                filter="url(#shadow)"
                className={`cursor-pointer transition-all duration-300 ${
                  activeLevel === 1 ? 'opacity-100' : 'opacity-80'
                }`}
                onClick={() => setActiveLevel(activeLevel === 1 ? null : 1)}
              />
              <path
                d="M 350 250 L 320 280 L 320 300 L 350 270 Z"
                fill={levels[3].color}
                opacity="0.4"
                className="cursor-pointer"
                onClick={() => setActiveLevel(activeLevel === 1 ? null : 1)}
              />
              <text
                x="200"
                y="270"
                textAnchor="middle"
                className="text-white font-bold text-sm cursor-pointer select-none"
                onClick={() => setActiveLevel(activeLevel === 1 ? null : 1)}
              >
                Level 1: 标准化实现
              </text>
            </g>

            {/* Level 2 */}
            <g>
              <path
                d="M 80 200 L 320 200 L 300 220 L 100 220 Z"
                fill={`url(#gradient-2)`}
                stroke="#2563EB"
                strokeWidth="2"
                filter="url(#shadow)"
                className={`cursor-pointer transition-all duration-300 ${
                  activeLevel === 2 ? 'opacity-100' : 'opacity-80'
                }`}
                onClick={() => setActiveLevel(activeLevel === 2 ? null : 2)}
              />
              <path
                d="M 320 200 L 300 220 L 300 240 L 320 220 Z"
                fill={levels[2].color}
                opacity="0.4"
                className="cursor-pointer"
                onClick={() => setActiveLevel(activeLevel === 2 ? null : 2)}
              />
              <text
                x="200"
                y="215"
                textAnchor="middle"
                className="text-white font-bold text-sm cursor-pointer select-none"
                onClick={() => setActiveLevel(activeLevel === 2 ? null : 2)}
              >
                Level 2: 集成协调
              </text>
            </g>

            {/* Level 3 */}
            <g>
              <path
                d="M 110 150 L 290 150 L 280 170 L 120 170 Z"
                fill={`url(#gradient-3)`}
                stroke="#D97706"
                strokeWidth="2"
                filter="url(#shadow)"
                className={`cursor-pointer transition-all duration-300 ${
                  activeLevel === 3 ? 'opacity-100' : 'opacity-80'
                }`}
                onClick={() => setActiveLevel(activeLevel === 3 ? null : 3)}
              />
              <path
                d="M 290 150 L 280 170 L 280 190 L 290 170 Z"
                fill={levels[1].color}
                opacity="0.4"
                className="cursor-pointer"
                onClick={() => setActiveLevel(activeLevel === 3 ? null : 3)}
              />
              <text
                x="200"
                y="165"
                textAnchor="middle"
                className="text-white font-bold text-sm cursor-pointer select-none"
                onClick={() => setActiveLevel(activeLevel === 3 ? null : 3)}
              >
                Level 3: 架构设计
              </text>
            </g>

            {/* Level 4 - 顶层 */}
            <g>
              <path
                d="M 140 100 L 260 100 L 250 120 L 150 120 Z"
                fill={`url(#gradient-4)`}
                stroke="#7C3AED"
                strokeWidth="2"
                filter="url(#shadow)"
                className={`cursor-pointer transition-all duration-300 ${
                  activeLevel === 4 ? 'opacity-100' : 'opacity-80'
                }`}
                onClick={() => setActiveLevel(activeLevel === 4 ? null : 4)}
              />
              <path
                d="M 260 100 L 250 120 L 250 140 L 260 120 Z"
                fill={levels[0].color}
                opacity="0.4"
                className="cursor-pointer"
                onClick={() => setActiveLevel(activeLevel === 4 ? null : 4)}
              />
              <text
                x="200"
                y="115"
                textAnchor="middle"
                className="text-white font-bold text-sm cursor-pointer select-none"
                onClick={() => setActiveLevel(activeLevel === 4 ? null : 4)}
              >
                Level 4: 创新探索
              </text>
            </g>

            {/* AI参与度指示器 */}
            <g className="text-xs fill-gray-600">
              <text x="30" y="100" textAnchor="middle">AI参与度</text>
              <text x="30" y="140" textAnchor="middle">10-30%</text>
              <text x="30" y="180" textAnchor="middle">30-50%</text>
              <text x="30" y="220" textAnchor="middle">60-80%</text>
              <text x="30" y="260" textAnchor="middle">85-95%</text>
              
              {/* 箭头 */}
              <path
                d="M 20 120 L 20 240 M 15 235 L 20 240 L 25 235"
                stroke="#6B7280"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
              />
            </g>

            {/* 复杂度指示器 */}
            <g className="text-xs fill-gray-600">
              <text x="370" y="100" textAnchor="middle">复杂度</text>
              <text x="370" y="140" textAnchor="middle">高</text>
              <text x="370" y="180" textAnchor="middle">中高</text>
              <text x="370" y="220" textAnchor="middle">中低</text>
              <text x="370" y="260" textAnchor="middle">低</text>
              
              {/* 箭头 */}
              <path
                d="M 360 120 L 360 240 M 355 235 L 360 240 L 365 235"
                stroke="#6B7280"
                strokeWidth="2"
                fill="none"
              />
            </g>

            {/* 活跃状态的脉冲效果 */}
            {activeLevel && (
              <g>
                {(() => {
                  const levelIndex = levels.findIndex(l => l.level === activeLevel);
                  const yPositions = [110, 160, 210, 260];
                  const y = yPositions[levelIndex];
                  
                  return (
                    <circle
                      cx="200"
                      cy={y}
                      r="8"
                      fill="none"
                      stroke={levels[levelIndex].color}
                      strokeWidth="3"
                      opacity="0.7"
                    >
                      <animate
                        attributeName="r"
                        values="8;15;8"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.7;0;0.7"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  );
                })()}
              </g>
            )}
          </svg>
        </div>

        {/* 详情面板 */}
        <div className="flex-1 max-w-md">
          {activeLevel ? (
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 transition-all duration-300"
                 style={{ borderLeftColor: levels.find(l => l.level === activeLevel)?.color }}>
              {(() => {
                const level = levels.find(l => l.level === activeLevel);
                if (!level) return null;
                
                return (
                  <>
                    <div className="flex items-center mb-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4"
                        style={{ backgroundColor: level.color }}
                      >
                        {level.level}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Level {level.level}</h3>
                        <p className="text-gray-600">{level.name}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">特征描述</h4>
                        <p className="text-gray-700 text-sm">{level.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">AI参与度</h4>
                        <div className="flex items-center">
                          <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                            <div 
                              className="h-2 rounded-full"
                              style={{ 
                                backgroundColor: level.color,
                                width: level.level === 1 ? '90%' : 
                                      level.level === 2 ? '70%' : 
                                      level.level === 3 ? '40%' : '20%'
                              }}
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-900">{level.aiParticipation}</span>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">协作模式</h4>
                        <p className="text-gray-700 text-sm">{level.collaboration}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">典型示例</h4>
                        <div className="flex flex-wrap gap-2">
                          {level.examples.map((example, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                            >
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">选择一个级别</h3>
              <p className="text-gray-500">点击金字塔的任一层级，了解详细的任务分级信息</p>
            </div>
          )}
        </div>
      </div>

      {/* 底部总结 */}
      <div className="mt-12 bg-gradient-to-r from-green-50 to-purple-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
          任务分级核心原则
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">分级依据</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• 任务复杂度和不确定性</li>
              <li>• 所需的创造性程度</li>
              <li>• 标准化实现的可能性</li>
              <li>• 人机协作的最优模式</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">应用策略</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• 根据项目阶段动态调整</li>
              <li>• 团队能力匹配任务级别</li>
              <li>• 业务压力影响级别选择</li>
              <li>• 持续优化协作模式</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}