'use client';

import { useState } from 'react';

interface WorkflowSwimlaneProps {
  className?: string;
}

export default function WorkflowSwimlane({ className = '' }: WorkflowSwimlaneProps) {
  const [activePhase, setActivePhase] = useState<string | null>(null);

  return (
    <div className={`w-full ${className}`}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">PACE完整工作流程</h2>
        <p className="text-gray-600">从想法到代码的系统化协作流程</p>
      </div>

      <div className="flex flex-col items-center gap-8">
        {/* 主要流程图 */}
        <div className="w-full overflow-x-auto">
          <svg
            viewBox="0 0 1200 600"
            className="w-full h-auto min-w-[800px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 定义渐变 */}
            <defs>
              <linearGradient id="humanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="collabGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.05" />
              </linearGradient>
              
              {/* 箭头标记 */}
              <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                      refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" />
              </marker>
            </defs>

            {/* 泳道背景 */}
            <rect x="50" y="100" width="1100" height="120" fill="url(#humanGradient)" />
            <rect x="50" y="220" width="1100" height="120" fill="url(#aiGradient)" />
            <rect x="50" y="340" width="1100" height="120" fill="url(#collabGradient)" />

            {/* 泳道标签 */}
            <g className="text-sm font-semibold">
              <text x="20" y="160" textAnchor="middle" fill="#3B82F6" transform="rotate(-90 20 160)">
                人类工程师
              </text>
              <text x="20" y="280" textAnchor="middle" fill="#8B5CF6" transform="rotate(-90 20 280)">
                AI系统
              </text>
              <text x="20" y="400" textAnchor="middle" fill="#10B981" transform="rotate(-90 20 400)">
                协作区域
              </text>
            </g>

            {/* 阶段分隔线 */}
            <line x1="670" y1="80" x2="670" y2="480" stroke="#D1D5DB" strokeWidth="2" strokeDasharray="5,5" />
            
            {/* 阶段标题 */}
            <text x="350" y="70" textAnchor="middle" className="text-lg font-bold" fill="#3B82F6">
              阶段 0: 蓝图规划
            </text>
            <text x="950" y="70" textAnchor="middle" className="text-lg font-bold" fill="#10B981">
              阶段 1: 切片循环 (标准化增强)
            </text>

            {/* 阶段 0 步骤 */}
            <g>
              {/* 输入原始材料 */}
              <rect x="80" y="130" width="100" height="60" rx="8" fill="#3B82F6" className="cursor-pointer"
                    onClick={() => setActivePhase('input')} />
              <text x="130" y="155" textAnchor="middle" className="text-sm font-medium fill-white">输入原始</text>
              <text x="130" y="170" textAnchor="middle" className="text-sm font-medium fill-white">材料</text>

              {/* AI辅助分析 */}
              <rect x="220" y="250" width="100" height="60" rx="8" fill="#8B5CF6" className="cursor-pointer"
                    onClick={() => setActivePhase('analysis')} />
              <text x="270" y="275" textAnchor="middle" className="text-sm font-medium fill-white">AI辅助</text>
              <text x="270" y="290" textAnchor="middle" className="text-sm font-medium fill-white">分析</text>

              {/* HTML原型 */}
              <rect x="360" y="250" width="100" height="60" rx="8" fill="#8B5CF6" className="cursor-pointer"
                    onClick={() => setActivePhase('prototype')} />
              <text x="410" y="275" textAnchor="middle" className="text-sm font-medium fill-white">HTML</text>
              <text x="410" y="290" textAnchor="middle" className="text-sm font-medium fill-white">原型</text>

              {/* PRD验证 */}
              <rect x="500" y="130" width="100" height="60" rx="8" fill="#3B82F6" className="cursor-pointer"
                    onClick={() => setActivePhase('validation')} />
              <text x="550" y="155" textAnchor="middle" className="text-sm font-medium fill-white">PRD验证</text>
              <text x="550" y="170" textAnchor="middle" className="text-sm font-medium fill-white">优化</text>

              {/* 连接线 */}
              <path d="M 180 160 L 220 160 L 220 280 L 220 280" stroke="#6B7280" strokeWidth="2" 
                    fill="none" markerEnd="url(#arrowhead)" />
              <path d="M 320 280 L 360 280" stroke="#6B7280" strokeWidth="2" 
                    fill="none" markerEnd="url(#arrowhead)" />
              <path d="M 460 280 L 500 280 L 500 160 L 500 160" stroke="#6B7280" strokeWidth="2" 
                    fill="none" markerEnd="url(#arrowhead)" />
            </g>

            {/* 阶段 1 步骤 - 增强版含标准化选择 */}
            <g>
              {/* 模式选择决策点 */}
              <polygon points="700,130 740,110 780,130 740,150" fill="#F59E0B" className="cursor-pointer"
                       onClick={() => setActivePhase('mode-select')} />
              <text x="740" y="133" textAnchor="middle" className="text-xs font-medium fill-white">模式选择</text>

              {/* 标准化模式路径 */}
              <rect x="680" y="180" width="120" height="50" rx="8" fill="#10B981" className="cursor-pointer"
                    onClick={() => setActivePhase('standard-mode')} />
              <text x="740" y="200" textAnchor="middle" className="text-xs font-medium fill-white">标准化模式</text>
              <text x="740" y="215" textAnchor="middle" className="text-xs font-medium fill-white">(Level 1-2)</text>

              {/* 灵活模式路径 */}
              <rect x="680" y="70" width="120" height="50" rx="8" fill="#6366F1" className="cursor-pointer"
                    onClick={() => setActivePhase('flexible-mode')} />
              <text x="740" y="90" textAnchor="middle" className="text-xs font-medium fill-white">灵活模式</text>
              <text x="740" y="105" textAnchor="middle" className="text-xs font-medium fill-white">(Level 3-4)</text>

              {/* 模式选择连接线 */}
              <path d="M 740 150 L 740 180" stroke="#F59E0B" strokeWidth="2" 
                    fill="none" markerEnd="url(#arrowhead)" />
              <path d="M 740 130 L 740 120" stroke="#F59E0B" strokeWidth="2" 
                    fill="none" markerEnd="url(#arrowhead)" />

              {/* 任务卡创建 */}
              <rect x="840" y="130" width="80" height="60" rx="8" fill="#3B82F6" className="cursor-pointer"
                    onClick={() => setActivePhase('create-card')} />
              <text x="880" y="155" textAnchor="middle" className="text-sm font-medium fill-white">创建</text>
              <text x="880" y="170" textAnchor="middle" className="text-sm font-medium fill-white">任务卡</text>

              {/* 实现 */}
              <rect x="960" y="250" width="80" height="60" rx="8" fill="#8B5CF6" className="cursor-pointer"
                    onClick={() => setActivePhase('implement')} />
              <text x="1000" y="285" textAnchor="middle" className="text-sm font-medium fill-white">实现</text>

              {/* 验证 */}
              <rect x="1080" y="130" width="80" height="60" rx="8" fill="#3B82F6" className="cursor-pointer"
                    onClick={() => setActivePhase('verify')} />
              <text x="1120" y="165" textAnchor="middle" className="text-sm font-medium fill-white">验证</text>

              {/* 路径连接线 */}
              <path d="M 800 95 L 820 95 L 820 160 L 840 160" stroke="#6366F1" strokeWidth="2" 
                    fill="none" markerEnd="url(#arrowhead)" />
              <path d="M 800 205 L 820 205 L 820 160 L 840 160" stroke="#10B981" strokeWidth="2" 
                    fill="none" markerEnd="url(#arrowhead)" />
              <path d="M 920 160 L 960 160 L 960 280" stroke="#6B7280" strokeWidth="2" 
                    fill="none" markerEnd="url(#arrowhead)" />
              <path d="M 1040 280 L 1080 280 L 1080 160" stroke="#6B7280" strokeWidth="2" 
                    fill="none" markerEnd="url(#arrowhead)" />
              
              {/* 回到模式选择的循环箭头 */}
              <path d="M 1120 130 Q 1170 100 1170 50 Q 1170 20 740 20 Q 700 20 700 130" 
                    stroke="#10B981" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" 
                    strokeDasharray="5,5" />

              {/* 标准化增强标识 */}
              <circle cx="600" cy="225" r="12" fill="#FBBF24" />
              <text x="600" y="230" textAnchor="middle" className="text-xs font-bold fill-white">✓</text>
              <text x="540" y="250" className="text-xs fill-gray-600">EARS语法</text>
              <text x="540" y="265" className="text-xs fill-gray-600">三文档结构</text>
            </g>

            {/* 协作指示器 */}
            <g>
              <circle cx="130" cy="400" r="8" fill="#10B981" />
              <text x="150" y="405" className="text-xs fill-gray-600">需求收集</text>
              
              <circle cx="270" cy="400" r="8" fill="#10B981" />
              <text x="290" y="405" className="text-xs fill-gray-600">分析协作</text>
              
              <circle cx="740" cy="400" r="8" fill="#10B981" />
              <text x="760" y="405" className="text-xs fill-gray-600">模式协作</text>
              
              <circle cx="880" cy="400" r="8" fill="#10B981" />
              <text x="900" y="405" className="text-xs fill-gray-600">任务协作</text>
              
              <circle cx="1000" cy="400" r="8" fill="#10B981" />
              <text x="1020" y="405" className="text-xs fill-gray-600">编码协作</text>
            </g>

            {/* 时间指示器 */}
            <g className="text-xs fill-gray-500">
              <text x="350" y="520" textAnchor="middle">1-2周</text>
              <text x="950" y="520" textAnchor="middle">持续迭代</text>
            </g>

            {/* 活跃状态指示器 */}
            {activePhase && (
              <circle cx="400" cy="300" r="20" fill="none" stroke="#F59E0B" strokeWidth="3" opacity="0.7">
                <animate attributeName="r" values="20;30;20" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2s" repeatCount="indefinite" />
              </circle>
            )}
          </svg>
        </div>

        {/* 详情面板 */}
        <div className="w-full max-w-4xl">
          {activePhase ? (
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">步骤详情</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">当前步骤</h4>
                  <p className="text-gray-700">{activePhase}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">主要活动</h4>
                  <p className="text-gray-700">详细的步骤说明和操作指南</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-600 mb-2">点击流程步骤</h3>
              <p className="text-gray-500">选择流程图中的任一步骤，查看详细说明和操作指南</p>
            </div>
          )}
        </div>

        {/* 流程说明 */}
        <div className="w-full max-w-4xl bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            流程核心特点
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                0
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">蓝图规划</h4>
              <p className="text-sm text-gray-700">一次性投入，建立清晰的项目蓝图和开发路线图</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                1
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">切片循环</h4>
              <p className="text-sm text-gray-700">持续迭代，每个循环交付一个完整的功能切片</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                ∞
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">价值交付</h4>
              <p className="text-sm text-gray-700">从第一个切片开始，每次迭代都交付可用的价值</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}