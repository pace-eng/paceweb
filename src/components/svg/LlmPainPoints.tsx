'use client';

import { useState } from 'react';

interface LlmPainPointsProps {
  className?: string;
}

export default function LlmPainPoints({ className = '' }: LlmPainPointsProps) {
  const [activeChallenge, setActiveChallenge] = useState<string | null>('assumptions');

  const challenges = [
    {
      id: 'assumptions',
      title: '致命"想当然"',
      problem: 'AI缺乏架构感知，引入冲突依赖',
      solution: '架构规范显式化',
      color: '#EF4444',
      position: { x: 80, y: 60 },
      icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.99-.833-2.76 0L4.054 16.5C3.284 18.333 4.246 20 5.786 20z'
    },
    {
      id: 'hallucination',
      title: '优雅"幻觉"',
      problem: '使用不存在字段，代码精美却完全错误',
      solution: '事实规范强化',
      color: '#F97316',
      position: { x: 280, y: 60 },
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
      id: 'amnesia',
      title: '经常性"失忆"',
      problem: 'Chat A的实现被Chat B完全忘记',
      solution: '外部记忆系统',
      color: '#3B82F6',
      position: { x: 80, y: 200 },
      icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      id: 'defocus',
      title: '上下文失焦',
      problem: '信息过载，AI被"淹没"忽略核心指令',
      solution: '注意力精准管理',
      color: '#8B5CF6',
      position: { x: 280, y: 200 },
      icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
    }
  ];

  const coreSystem = [
    {
      id: 'spec-writing',
      title: 'Spec-Writing',
      subtitle: '规范化编程',
      description: '将需求转化为可执行规范文档',
      color: '#10B981',
      position: { x: 120, y: 320 }
    },
    {
      id: 'context-engineering',
      title: 'Context Engineering', 
      subtitle: '上下文工程',
      description: '精准管理AI注意力资源',
      color: '#6366F1',
      position: { x: 240, y: 320 }
    }
  ];

  return (
    <div className={`w-full ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">为什么需要 PACE？</h2>
        <p className="text-xl text-gray-600 mb-2">LLM协作编程的四大经典挑战</p>
        <p className="text-gray-500">点击痛点了解详情</p>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-center gap-8">
        {/* SVG 可视化 */}
        <div className="flex-1 lg:flex-[3]">
          <svg
            viewBox="0 0 360 400"
            className="w-full max-w-2xl h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 背景区域定义 */}
            <defs>
              <linearGradient id="problemGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FEF2F2" />
                <stop offset="100%" stopColor="#FECACA" />
              </linearGradient>
              <linearGradient id="solutionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F0FDF4" />
                <stop offset="100%" stopColor="#BBF7D0" />
              </linearGradient>
            </defs>

            {/* 问题区域背景 */}
            <rect
              x="10"
              y="20"
              width="340"
              height="220"
              rx="12"
              fill="url(#problemGradient)"
              stroke="#FCA5A5"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            
            {/* 解决方案区域背景 */}
            <rect
              x="10"
              y="280"
              width="340"
              height="100"
              rx="12"
              fill="url(#solutionGradient)"
              stroke="#86EFAC"
              strokeWidth="2"
            />

            {/* 区域标题 */}
            <text x="30" y="45" className="text-lg font-bold fill-red-800">
              协作痛点
            </text>
            <text x="30" y="305" className="text-lg font-bold fill-green-800">
              PACE 双核心解决方案
            </text>

            {/* 四大挑战圆圈 */}
            {challenges.map((challenge) => {
              const isActive = activeChallenge === challenge.id;
              const { x, y } = challenge.position;

              return (
                <g key={challenge.id}>
                  {/* 挑战圆圈 */}
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? "35" : "30"}
                    fill={challenge.color}
                    stroke={isActive ? "#1F2937" : "white"}
                    strokeWidth={isActive ? "3" : "2"}
                    className="cursor-pointer transition-all duration-300 hover:opacity-90 drop-shadow-md"
                    onClick={() => setActiveChallenge(activeChallenge === challenge.id ? null : challenge.id)}
                  />
                  
                  {/* 图标 */}
                  <g
                    transform={`translate(${x-12}, ${y-12})`}
                    className="cursor-pointer"
                    onClick={() => setActiveChallenge(activeChallenge === challenge.id ? null : challenge.id)}
                  >
                    <svg width="24" height="24" fill="white" stroke="white" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d={challenge.icon} />
                    </svg>
                  </g>
                  
                  {/* 挑战标题 */}
                  <text
                    x={x}
                    y={y + 50}
                    textAnchor="middle"
                    className="text-sm font-semibold fill-gray-800 cursor-pointer select-none"
                    onClick={() => setActiveChallenge(activeChallenge === challenge.id ? null : challenge.id)}
                  >
                    {challenge.title}
                  </text>

                  {/* 活跃状态脉冲效果 */}
                  {isActive && (
                    <circle
                      cx={x}
                      cy={y}
                      r="35"
                      fill="none"
                      stroke={challenge.color}
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

                  {/* 解决方案连接线 */}
                  <line
                    x1={x}
                    y1={y + 40}
                    x2={x < 180 ? 140 : 220}
                    y2="280"
                    stroke="#D1D5DB"
                    strokeWidth="2"
                    strokeDasharray="3,3"
                    className="transition-opacity duration-300"
                    opacity={isActive ? "1" : "0.3"}
                  />
                </g>
              );
            })}

            {/* 双核心解决方案 */}
            {coreSystem.map((core) => {
              const { x, y } = core.position;
              const isHighlighted = activeChallenge !== null;

              return (
                <g key={core.id}>
                  {/* 解决方案圆圈 */}
                  <circle
                    cx={x}
                    cy={y}
                    r="25"
                    fill={core.color}
                    stroke="white"
                    strokeWidth="2"
                    className={`transition-all duration-300 drop-shadow-md ${
                      isHighlighted ? 'opacity-100' : 'opacity-70'
                    }`}
                  />
                  
                  {/* 解决方案图标 */}
                  <g transform={`translate(${x-8}, ${y-8})`}>
                    <svg width="16" height="16" fill="white">
                      <path d={core.id === 'spec-writing' 
                        ? "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        : "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      } />
                    </svg>
                  </g>
                  
                  {/* 解决方案标题 */}
                  <text
                    x={x}
                    y={y + 45}
                    textAnchor="middle"
                    className="text-xs font-semibold fill-gray-700 select-none"
                  >
                    {core.subtitle}
                  </text>
                </g>
              );
            })}

            {/* 中央PACE标识 */}
            <rect
              x="150"
              y="135"
              width="60"
              height="30"
              rx="15"
              fill="#1F2937"
              className="drop-shadow-lg"
            />
            <text
              x="180"
              y="154"
              textAnchor="middle"
              className="text-sm font-bold fill-white select-none"
            >
              PACE
            </text>
          </svg>
        </div>

        {/* 详情面板 */}
        <div className="flex-1 lg:flex-[2] max-w-md">
          {activeChallenge ? (
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 transition-all duration-300"
                 style={{ borderLeftColor: challenges.find(c => c.id === activeChallenge)?.color }}>
              {(() => {
                const challenge = challenges.find(c => c.id === activeChallenge);
                if (!challenge) return null;
                
                return (
                  <>
                    <div className="flex items-center mb-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-4"
                        style={{ backgroundColor: challenge.color }}
                      >
                        <svg width="20" height="20" fill="currentColor" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d={challenge.icon} />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{challenge.title}</h3>
                        <p className="text-gray-600 text-sm">经典AI协作痛点</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-300">
                        <h4 className="font-semibold text-red-900 mb-1">问题表现</h4>
                        <p className="text-red-700 text-sm">{challenge.problem}</p>
                      </div>
                      
                      <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-300">
                        <h4 className="font-semibold text-green-900 mb-1">PACE解决方案</h4>
                        <p className="text-green-700 text-sm">{challenge.solution}</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">点击了解痛点</h3>
              <p className="text-gray-500">选择上方的挑战圆圈，了解LLM协作编程中的具体问题和PACE的解决方案</p>
            </div>
          )}
        </div>
      </div>

      {/* 底部总结 */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
          PACE 1.3：双核心体系系统性解决AI协作挑战
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreSystem.map((core) => (
            <div key={core.id} className="flex items-center space-x-4">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                style={{ backgroundColor: core.color }}
              >
                <svg width="16" height="16" fill="currentColor">
                  <path d={core.id === 'spec-writing' 
                    ? "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    : "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  } />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">{core.title}</h4>
                <p className="text-sm text-gray-600">{core.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}