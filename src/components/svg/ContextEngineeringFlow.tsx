'use client';

import { useState } from 'react';

interface ContextEngineeringFlowProps {
  className?: string;
}

export default function ContextEngineeringFlow({ className = '' }: ContextEngineeringFlowProps) {
  const [activeLayer, setActiveLayer] = useState<string | null>('core');

  const contextLayers = [
    {
      id: 'core',
      name: '核心上下文',
      priority: '必须',
      color: '#DC2626',
      description: '任务卡本身、直接依赖的接口',
      examples: ['任务描述', '输入输出规格', '直接依赖'],
      radius: 60,
      position: { x: 250, y: 250 }
    },
    {
      id: 'key',
      name: '关键上下文',
      priority: '重要',
      color: '#EA580C',
      description: '相关架构文档、数据模型、业务规则',
      examples: ['架构文档', '数据模型', '业务规则', 'API规范'],
      radius: 90,
      position: { x: 250, y: 250 }
    },
    {
      id: 'auxiliary',
      name: '辅助上下文',
      priority: '有用',
      color: '#CA8A04',
      description: '代码示例、历史实现、最佳实践',
      examples: ['代码示例', '历史实现', '最佳实践', '设计模式'],
      radius: 120,
      position: { x: 250, y: 250 }
    },
    {
      id: 'background',
      name: '背景上下文',
      priority: '可选',
      color: '#16A34A',
      description: '详细需求、用户故事、业务背景',
      examples: ['用户故事', '业务背景', '详细需求', '历史演进'],
      radius: 150,
      position: { x: 250, y: 250 }
    }
  ];

  const informationFlow = [
    {
      id: 'input',
      name: '信息输入',
      x: 100,
      y: 250,
      description: '业务需求、技术规格、历史数据'
    },
    {
      id: 'processing',
      name: '上下文处理',
      x: 250,
      y: 250,
      description: '结构化组织、优先级排序、格式转换'
    },
    {
      id: 'output',
      name: 'AI理解',
      x: 400,
      y: 250,
      description: '任务执行、代码生成、质量保障'
    }
  ];

  return (
    <div className={`w-full ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">上下文工程信息流动</h2>
        <p className="text-gray-600">分层管理和智能传递，确保AI获得最佳上下文</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* 主要流程图 */}
        <div className="flex-1 lg:flex-[3]">
          <svg
            viewBox="0 0 500 600"
            className="w-full max-w-lg h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 定义渐变和滤镜 */}
            <defs>
              {contextLayers.map((layer) => (
                <radialGradient
                  key={layer.id}
                  id={`gradient-${layer.id}`}
                  cx="50%"
                  cy="50%"
                  r="50%"
                >
                  <stop offset="0%" stopColor={layer.color} stopOpacity="0.2" />
                  <stop offset="100%" stopColor={layer.color} stopOpacity="0.1" />
                </radialGradient>
              ))}
              
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* 信息流动箭头 */}
            <g stroke="#6B7280" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                        refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" />
                </marker>
              </defs>
              
              {/* 主流程箭头 */}
              <path d="M 130 250 Q 190 230 210 250" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite"/>
              </path>
              <path d="M 290 250 Q 350 230 370 250" strokeDasharray="5,5">
                <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite"/>
              </path>
              
              {/* 上下文层级的连接线 */}
              {contextLayers.map((layer, index) => {
                if (index === 0) return null;
                return (
                  <circle
                    key={layer.id}
                    cx={layer.position.x}
                    cy={layer.position.y}
                    r={layer.radius}
                    fill="none"
                    stroke={layer.color}
                    strokeWidth="2"
                    strokeDasharray="3,3"
                    opacity={activeLayer === layer.id ? 0.8 : 0.3}
                    className="transition-all duration-300"
                  />
                );
              })}
            </g>

            {/* 上下文层级圆圈 */}
            {contextLayers.map((layer) => (
              <g key={layer.id}>
                <circle
                  cx={layer.position.x}
                  cy={layer.position.y}
                  r={layer.radius}
                  fill={`url(#gradient-${layer.id})`}
                  stroke={layer.color}
                  strokeWidth={activeLayer === layer.id ? "3" : "2"}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeLayer === layer.id ? 'opacity-100' : 'opacity-60'
                  }`}
                  onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                />
                
                {/* 层级标签 */}
                <text
                  x={layer.position.x}
                  y={layer.position.y - layer.radius - 15}
                  textAnchor="middle"
                  className={`text-sm font-semibold cursor-pointer select-none transition-all duration-300 ${
                    activeLayer === layer.id ? 'text-gray-900' : 'text-gray-600'
                  }`}
                  fill={activeLayer === layer.id ? layer.color : '#6B7280'}
                  onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                >
                  {layer.name}
                </text>
                
                {/* 优先级标签 */}
                <text
                  x={layer.position.x}
                  y={layer.position.y - layer.radius + 2}
                  textAnchor="middle"
                  className="text-xs cursor-pointer select-none"
                  fill={layer.color}
                  onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                >
                  ({layer.priority})
                </text>
              </g>
            ))}

            {/* 信息流程节点 */}
            {informationFlow.map((node, index) => (
              <g key={node.id}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="25"
                  fill={index === 0 ? '#3B82F6' : index === 1 ? '#8B5CF6' : '#10B981'}
                  stroke="white"
                  strokeWidth="3"
                  filter="url(#glow)"
                  className="cursor-pointer transition-all duration-300 hover:opacity-90"
                />
                
                {/* 节点图标 */}
                <g fill="white" className="cursor-pointer">
                  {index === 0 && (
                    <rect x={node.x - 8} y={node.y - 8} width="16" height="16" rx="2" />
                  )}
                  {index === 1 && (
                    <rect x={node.x - 8} y={node.y - 8} width="16" height="16" rx="2" />
                  )}
                  {index === 2 && (
                    <rect x={node.x - 8} y={node.y - 8} width="16" height="16" rx="2" />
                  )}
                </g>
                
                {/* 节点标签 */}
                <text
                  x={node.x}
                  y={node.y + 45}
                  textAnchor="middle"
                  className="text-sm font-semibold text-gray-900"
                >
                  {node.name}
                </text>
                
                {/* 多行描述文本 */}
                <g>
                  {node.description.split('、').map((text, textIndex) => (
                    <text
                      key={textIndex}
                      x={node.x}
                      y={node.y + 62 + textIndex * 16}
                      textAnchor="middle"
                      className="text-xs text-gray-600"
                    >
                      {text}
                    </text>
                  ))}
                </g>
              </g>
            ))}

            {/* 认知负荷指示器 */}
            <g className="text-xs fill-gray-600">
              <text x="250" y="25" textAnchor="middle" className="font-semibold">认知负荷管理</text>
              <rect x="200" y="35" width="100" height="8" fill="#E5E7EB" rx="4" />
              <rect x="200" y="35" width="70" height="8" fill="#F59E0B" rx="4" />
              <text x="250" y="55" textAnchor="middle">优化信息密度</text>
            </g>

            {/* 活跃状态的脉冲效果 */}
            {activeLayer && (
              <circle
                cx="250"
                cy="250"
                r={contextLayers.find(l => l.id === activeLayer)?.radius || 60}
                fill="none"
                stroke={contextLayers.find(l => l.id === activeLayer)?.color || '#3B82F6'}
                strokeWidth="3"
                opacity="0.5"
              >
                <animate
                  attributeName="opacity"
                  values="0.5;0.1;0.5"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </svg>
        </div>

        {/* 详情面板 */}
        <div className="flex-1 lg:flex-[2] max-w-md">
          {activeLayer ? (
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 transition-all duration-300"
                 style={{ borderLeftColor: contextLayers.find(l => l.id === activeLayer)?.color }}>
              {(() => {
                const layer = contextLayers.find(l => l.id === activeLayer);
                if (!layer) return null;
                
                return (
                  <>
                    <div className="flex items-center mb-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4"
                        style={{ backgroundColor: layer.color }}
                      >
                        {layer.priority}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{layer.name}</h3>
                        <p className="text-gray-600">优先级: {layer.priority}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">描述</h4>
                        <p className="text-gray-700 text-sm">{layer.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">包含内容</h4>
                        <div className="flex flex-wrap gap-2">
                          {layer.examples.map((example, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-xs rounded text-white"
                              style={{ backgroundColor: layer.color }}
                            >
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">使用策略</h4>
                        <div className="text-sm text-gray-700">
                          {layer.id === 'core' && (
                            <p>• 必须包含，直接影响任务执行质量<br/>• 信息要准确、完整、结构化</p>
                          )}
                          {layer.id === 'key' && (
                            <p>• 重要参考，显著影响实现方案<br/>• 需要保持与核心上下文的一致性</p>
                          )}
                          {layer.id === 'auxiliary' && (
                            <p>• 辅助参考，提供实现思路<br/>• 可根据上下文窗口大小动态调整</p>
                          )}
                          {layer.id === 'background' && (
                            <p>• 可选包含，帮助理解业务背景<br/>• 在上下文空间充足时添加</p>
                          )}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">选择上下文层级</h3>
              <p className="text-gray-500">点击图中的圆圈，了解不同层级的上下文内容和管理策略</p>
            </div>
          )}
        </div>
      </div>

      {/* 底部核心原则 */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
          上下文工程核心原则
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
              1
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">结构化组织</h4>
            <p className="text-sm text-gray-700">将复杂信息转化为AI可理解的结构化格式</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
              2
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">认知负荷管理</h4>
            <p className="text-sm text-gray-700">在有限窗口内传递最关键的信息</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
              3
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">意图精确传达</h4>
            <p className="text-sm text-gray-700">确保AI理解真实意图而非表面需求</p>
          </div>
        </div>
      </div>
    </div>
  );
}