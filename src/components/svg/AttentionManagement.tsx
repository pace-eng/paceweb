import React from 'react';

const AttentionManagement: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto my-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">注意力管理与目标聚焦机制</h2>
        <p className="text-lg text-gray-600">
          防止长任务中的目标偏移，确保AI协作始终聚焦核心目标
        </p>
      </div>
      
      <svg viewBox="0 0 1200 700" className="w-full h-auto">
        <defs>
          {/* 渐变定义 */}
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.8} />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#10B981" stopOpacity={0.8} />
          </linearGradient>
          <radialGradient id="focusGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity={0.1} />
          </radialGradient>
          <linearGradient id="checkpointGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#EF4444" stopOpacity={0.1} />
          </linearGradient>
        </defs>

        {/* 主流程线 */}
        <path d="M 100 350 Q 300 250 500 350 Q 700 450 900 350 Q 1000 300 1100 350" 
              stroke="url(#flowGradient)" strokeWidth="4" fill="none" strokeDasharray="10,5" />

        {/* 目标复述机制 - 左侧 */}
        <g>
          <circle cx="150" cy="200" r="60" fill="url(#focusGradient)" stroke="#F59E0B" strokeWidth="3" />
          <text x="150" y="190" textAnchor="middle" className="text-sm font-bold" fill="#D97706">
            目标复述
          </text>
          <text x="150" y="210" textAnchor="middle" className="text-sm font-bold" fill="#D97706">
            机制
          </text>
          
          {/* 复述步骤 */}
          <rect x="80" y="300" width="140" height="120" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />
          <text x="150" y="320" textAnchor="middle" className="text-xs font-semibold" fill="#92400E">
            四个关键时刻
          </text>
          <text x="90" y="340" className="text-xs" fill="#92400E">1. 任务开始时</text>
          <text x="90" y="355" className="text-xs" fill="#92400E">2. 阶段开始前</text>
          <text x="90" y="370" className="text-xs" fill="#92400E">3. 复杂决策时</text>
          <text x="90" y="385" className="text-xs" fill="#92400E">4. 任务完成前</text>
          
          {/* 连接线 */}
          <path d="M 150 260 L 150 300" stroke="#F59E0B" strokeWidth="2" markerEnd="url(#arrowhead)" />
        </g>

        {/* 分阶段检查点 - 中间 */}
        <g>
          <rect x="450" y="150" width="160" height="100" rx="15" fill="url(#checkpointGradient)" stroke="#EF4444" strokeWidth="2" />
          <text x="530" y="175" textAnchor="middle" className="text-sm font-bold" fill="#DC2626">
            分阶段检查点
          </text>
          
          {/* 检查点类型 */}
          <circle cx="480" cy="200" r="4" fill="#EF4444" />
          <text x="490" y="205" className="text-xs" fill="#DC2626">功能检查</text>
          
          <circle cx="480" cy="220" r="4" fill="#EF4444" />
          <text x="490" y="225" className="text-xs" fill="#DC2626">质量检查</text>
          
          <circle cx="560" cy="200" r="4" fill="#EF4444" />
          <text x="570" y="205" className="text-xs" fill="#DC2626">目标对齐</text>
          
          <circle cx="560" cy="220" r="4" fill="#EF4444" />
          <text x="570" y="225" className="text-xs" fill="#DC2626">进度检查</text>
        </g>

        {/* 注意力分散预防 - 右侧 */}
        <g>
          <ellipse cx="950" cy="200" rx="80" ry="60" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
          <text x="950" y="185" textAnchor="middle" className="text-sm font-bold" fill="#1E40AF">
            分散预防
          </text>
          <text x="950" y="205" textAnchor="middle" className="text-sm font-bold" fill="#1E40AF">
            策略
          </text>
          
          {/* 常见问题和对策 */}
          <rect x="820" y="300" width="260" height="180" rx="10" fill="#F0F9FF" stroke="#3B82F6" strokeWidth="1" />
          <text x="950" y="320" textAnchor="middle" className="text-xs font-semibold" fill="#1E40AF">
            常见分散原因及对策
          </text>
          
          {/* 技术兔子洞 */}
          <rect x="830" y="335" width="110" height="50" rx="5" fill="#FEF2F2" stroke="#EF4444" strokeWidth="1" />
          <text x="885" y="350" textAnchor="middle" className="text-xs font-bold" fill="#DC2626">技术兔子洞</text>
          <text x="835" y="365" className="text-xs" fill="#DC2626">设定时间盒</text>
          <text x="835" y="377" className="text-xs" fill="#DC2626">定期回归</text>
          
          {/* 功能蔓延 */}
          <rect x="950" y="335" width="110" height="50" rx="5" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1" />
          <text x="1005" y="350" textAnchor="middle" className="text-xs font-bold" fill="#D97706">功能蔓延</text>
          <text x="955" y="365" className="text-xs" fill="#D97706">严格边界</text>
          <text x="955" y="377" className="text-xs" fill="#D97706">记录想法</text>
          
          {/* 完美主义 */}
          <rect x="890" y="395" width="110" height="50" rx="5" fill="#F0FDF4" stroke="#10B981" strokeWidth="1" />
          <text x="945" y="410" textAnchor="middle" className="text-xs font-bold" fill="#059669">完美主义</text>
          <text x="895" y="425" className="text-xs" fill="#059669">足够好标准</text>
          <text x="895" y="437" className="text-xs" fill="#059669">先交付后优化</text>
          
          {/* 连接线 */}
          <path d="M 950 260 L 950 300" stroke="#3B82F6" strokeWidth="2" markerEnd="url(#arrowhead)" />
        </g>

        {/* 核心目标圈 - 中心 */}
        <g>
          <circle cx="600" cy="550" r="80" fill="#ECFDF5" stroke="#10B981" strokeWidth="3" />
          <text x="600" y="535" textAnchor="middle" className="text-lg font-bold" fill="#047857">
            核心目标
          </text>
          <text x="600" y="555" textAnchor="middle" className="text-sm" fill="#047857">
            始终保持
          </text>
          <text x="600" y="575" textAnchor="middle" className="text-sm" fill="#047857">
            焦点聚集
          </text>
          
          {/* 从各个机制指向核心目标的箭头 */}
          <path d="M 220 380 Q 350 450 520 550" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <path d="M 530 250 Q 550 350 580 470" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrowhead)" />
          <path d="M 870 380 Q 750 450 680 550" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrowhead)" />
        </g>

        {/* 箭头标记定义 */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#10B981" />
          </marker>
        </defs>

        {/* 流程说明 */}
        <text x="600" y="50" textAnchor="middle" className="text-lg font-semibold" fill="#374151">
          PACE 注意力管理机制确保长任务执行不偏离目标
        </text>
        
        {/* 底部说明 */}
        <text x="600" y="680" textAnchor="middle" className="text-sm" fill="#6B7280">
          通过目标复述、检查点设置和分散预防，建立系统性的注意力管理体系
        </text>
      </svg>
    </div>
  );
};

export default AttentionManagement;