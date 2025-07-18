'use client';

import { useState } from 'react';

interface HumanAiRadarChartProps {
  className?: string;
}

export default function HumanAiRadarChart({ className = '' }: HumanAiRadarChartProps) {
  const [activeEntity, setActiveEntity] = useState<'human' | 'ai' | null>(null);

  const abilities = [
    { name: '创造性思维', human: 95, ai: 20, angle: 0 },
    { name: '模式识别', human: 40, ai: 95, angle: 60 },
    { name: '数据处理', human: 30, ai: 98, angle: 120 },
    { name: '执行速度', human: 35, ai: 90, angle: 180 },
    { name: '重复性工作', human: 25, ai: 98, angle: 240 },
    { name: '直觉洞察', human: 80, ai: 20, angle: 300 }
  ];

  const center = { x: 400, y: 400 };
  const radius = 300;

  // 计算点的坐标
  const calculatePoint = (angle: number, value: number) => {
    const radian = (angle * Math.PI) / 180;
    const r = (value / 100) * radius;
    return {
      x: Math.round((center.x + Math.cos(radian) * r) * 100) / 100,
      y: Math.round((center.y + Math.sin(radian) * r) * 100) / 100
    };
  };

  // 生成路径字符串
  const generatePath = (entity: 'human' | 'ai') => {
    const points = abilities.map(ability => {
      const value = entity === 'human' ? ability.human : ability.ai;
      return calculatePoint(ability.angle, value);
    });
    
    const pathData = points.reduce((path, point, index) => {
      const command = index === 0 ? 'M' : 'L';
      return `${path}${command}${point.x},${point.y}`;
    }, '');
    
    return `${pathData}Z`;
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">人机协作能力对比</h2>
        <p className="text-gray-600">探索人类与AI各自的优势领域</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* 雷达图 */}
        <div className="flex-1 lg:flex-[3]">
          <svg
            viewBox="0 0 800 800"
            className="w-full max-w-2xl h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 背景网格 */}
            <g stroke="#E5E7EB" strokeWidth="1" fill="none">
              {/* 同心圆 */}
              {[0.2, 0.4, 0.6, 0.8, 1.0].map((scale, index) => (
                <circle
                  key={index}
                  cx={center.x}
                  cy={center.y}
                  r={radius * scale}
                  opacity={0.3}
                />
              ))}
              
              {/* 射线 */}
              {abilities.map((ability, index) => {
                const point = calculatePoint(ability.angle, 100);
                return (
                  <line
                    key={index}
                    x1={center.x}
                    y1={center.y}
                    x2={point.x}
                    y2={point.y}
                    opacity={0.3}
                  />
                );
              })}
            </g>

            {/* 刻度标签 */}
            <g className="text-base fill-gray-500">
              {[20, 40, 60, 80, 100].map((value, index) => (
                <text
                  key={index}
                  x={center.x + 12}
                  y={center.y - (radius * value / 100)}
                  textAnchor="start"
                  alignmentBaseline="middle"
                >
                  {value}%
                </text>
              ))}
            </g>

            {/* AI 能力区域 */}
            <path
              d={generatePath('ai')}
              fill="rgba(139, 92, 246, 0.3)"
              stroke="#8B5CF6"
              strokeWidth="2"
              className={`transition-all duration-300 ${
                activeEntity === 'ai' ? 'opacity-100' : 'opacity-70'
              }`}
              onMouseEnter={() => setActiveEntity('ai')}
              onMouseLeave={() => setActiveEntity(null)}
            />

            {/* 人类能力区域 */}
            <path
              d={generatePath('human')}
              fill="rgba(59, 130, 246, 0.3)"
              stroke="#3B82F6"
              strokeWidth="2"
              className={`transition-all duration-300 ${
                activeEntity === 'human' ? 'opacity-100' : 'opacity-70'
              }`}
              onMouseEnter={() => setActiveEntity('human')}
              onMouseLeave={() => setActiveEntity(null)}
            />

            {/* 能力标签 */}
            {abilities.map((ability, index) => {
              const labelPoint = calculatePoint(ability.angle, 115);
              // 根据角度调整文本对齐方式
              const getTextAnchor = (angle: number) => {
                if (angle >= 45 && angle <= 135) return 'middle';
                if (angle > 135 && angle < 225) return 'end';
                if (angle >= 225 && angle <= 315) return 'middle';
                return 'start';
              };
              
              return (
                <text
                  key={index}
                  x={labelPoint.x}
                  y={labelPoint.y}
                  textAnchor={getTextAnchor(ability.angle)}
                  alignmentBaseline="middle"
                  className="text-lg fill-gray-700 font-bold"
                >
                  {ability.name}
                </text>
              );
            })}

            {/* 中心点 */}
            <circle
              cx={center.x}
              cy={center.y}
              r="6"
              fill="#374151"
            />
          </svg>
        </div>

        {/* 图例和说明 */}
        <div className="flex-1 lg:flex-[2] max-w-md space-y-6">
          {/* 图例 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">能力对比</h3>
            <div className="space-y-3">
              <div 
                className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeEntity === 'human' ? 'bg-blue-50 border-2 border-blue-200' : 'hover:bg-gray-50'
                }`}
                onMouseEnter={() => setActiveEntity('human')}
                onMouseLeave={() => setActiveEntity(null)}
              >
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                <div>
                  <div className="font-medium text-gray-900">人类能力</div>
                  <div className="text-sm text-gray-600">创造性思维、复杂决策、价值判断</div>
                </div>
              </div>
              
              <div 
                className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeEntity === 'ai' ? 'bg-purple-50 border-2 border-purple-200' : 'hover:bg-gray-50'
                }`}
                onMouseEnter={() => setActiveEntity('ai')}
                onMouseLeave={() => setActiveEntity(null)}
              >
                <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                <div>
                  <div className="font-medium text-gray-900">AI 能力</div>
                  <div className="text-sm text-gray-600">模式识别、数据处理、执行速度</div>
                </div>
              </div>
            </div>
          </div>

          {/* 核心洞察 */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">核心洞察</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• <strong>互补性：</strong>人类和AI具有高度互补的能力特征</p>
              <p>• <strong>协作区域：</strong>在复杂问题解决中需要深度协作</p>
              <p>• <strong>最优分工：</strong>让每一方专注于自己的优势领域</p>
            </div>
          </div>

          {/* 实际应用 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">实际应用</h3>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <div className="font-medium text-gray-900">人类主导</div>
                  <div className="text-sm text-gray-600">架构设计、需求分析、质量评估</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <div className="font-medium text-gray-900">AI 主导</div>
                  <div className="text-sm text-gray-600">代码生成、测试编写、文档整理</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <div className="font-medium text-gray-900">协作模式</div>
                  <div className="text-sm text-gray-600">复杂系统设计、问题诊断、优化决策</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}