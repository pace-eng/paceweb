import React from 'react';

const AiToolsIntegration: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto my-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">现代AI工具深度集成架构</h2>
        <p className="text-lg text-gray-600">
          充分利用Claude Code、Cursor等AI工具特长，实现最优人机分工
        </p>
      </div>
      
      <svg viewBox="0 0 1200 800" className="w-full h-auto">
        <defs>
          {/* 渐变定义 */}
          <linearGradient id="claudeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#1E40AF" stopOpacity={0.8} />
          </linearGradient>
          <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#5B21B6" stopOpacity={0.8} />
          </linearGradient>
          <linearGradient id="integrationGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" stopOpacity={0.2} />
            <stop offset="50%" stopColor="#F59E0B" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#EF4444" stopOpacity={0.2} />
          </linearGradient>
          
          {/* 箭头标记 */}
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#374151" />
          </marker>
        </defs>

        {/* Claude Code 区域 */}
        <g>
          <rect x="100" y="150" width="300" height="200" rx="20" fill="url(#claudeGradient)" stroke="#1E40AF" strokeWidth="2" />
          <text x="250" y="180" textAnchor="middle" className="text-xl font-bold" fill="white">
            Claude Code
          </text>
          
          {/* Claude Code 特点 */}
          <rect x="120" y="200" width="260" height="130" rx="10" fill="rgba(255,255,255,0.9)" stroke="#1E40AF" strokeWidth="1" />
          <text x="250" y="220" textAnchor="middle" className="text-sm font-semibold" fill="#1E40AF">
            深度规划专家
          </text>
          
          <circle cx="140" cy="240" r="3" fill="#1E40AF" />
          <text x="150" y="245" className="text-xs" fill="#1E40AF">强大的上下文理解</text>
          
          <circle cx="140" cy="260" r="3" fill="#1E40AF" />
          <text x="150" y="265" className="text-xs" fill="#1E40AF">复杂项目规划设计</text>
          
          <circle cx="140" cy="280" r="3" fill="#1E40AF" />
          <text x="150" y="285" className="text-xs" fill="#1E40AF">CLAUDE.md记忆管理</text>
          
          <circle cx="140" cy="300" r="3" fill="#1E40AF" />
          <text x="150" y="305" className="text-xs" fill="#1E40AF">端到端任务处理</text>
        </g>

        {/* Cursor 区域 */}
        <g>
          <rect x="800" y="150" width="300" height="200" rx="20" fill="url(#cursorGradient)" stroke="#5B21B6" strokeWidth="2" />
          <text x="950" y="180" textAnchor="middle" className="text-xl font-bold" fill="white">
            Cursor
          </text>
          
          {/* Cursor 特点 */}
          <rect x="820" y="200" width="260" height="130" rx="10" fill="rgba(255,255,255,0.9)" stroke="#5B21B6" strokeWidth="1" />
          <text x="950" y="220" textAnchor="middle" className="text-sm font-semibold" fill="#5B21B6">
            快速执行专家
          </text>
          
          <circle cx="840" cy="240" r="3" fill="#5B21B6" />
          <text x="850" y="245" className="text-xs" fill="#5B21B6">优秀的实时代码补全</text>
          
          <circle cx="840" cy="260" r="3" fill="#5B21B6" />
          <text x="850" y="265" className="text-xs" fill="#5B21B6">无缝IDE集成体验</text>
          
          <circle cx="840" cy="280" r="3" fill="#5B21B6" />
          <text x="850" y="285" className="text-xs" fill="#5B21B6">智能项目结构感知</text>
          
          <circle cx="840" cy="300" r="3" fill="#5B21B6" />
          <text x="850" y="305" className="text-xs" fill="#5B21B6">快速响应增量编辑</text>
        </g>

        {/* 工具协作策略中心区域 */}
        <g>
          <ellipse cx="600" cy="250" rx="180" ry="80" fill="url(#integrationGradient)" stroke="#374151" strokeWidth="2" strokeDasharray="5,5" />
          <text x="600" y="230" textAnchor="middle" className="text-lg font-bold" fill="#374151">
            协作策略
          </text>
          
          <text x="600" y="250" textAnchor="middle" className="text-sm" fill="#374151">
            深度规划 + 快速执行
          </text>
          
          <text x="600" y="270" textAnchor="middle" className="text-sm" fill="#374151">
            阶段性切换 + 交叉验证
          </text>
        </g>

        {/* 连接箭头 */}
        <path d="M 400 250 L 420 250" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M 780 250 L 800 250" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

        {/* 任务卡适配增强 */}
        <g>
          <rect x="400" y="450" width="400" height="250" rx="15" fill="#F9FAFB" stroke="#6B7280" strokeWidth="2" />
          <text x="600" y="480" textAnchor="middle" className="text-lg font-bold" fill="#374151">
            任务卡AI适配增强
          </text>
          
          {/* 新增部分列表 */}
          <rect x="420" y="500" width="360" height="180" rx="8" fill="white" stroke="#D1D5DB" strokeWidth="1" />
          
          <text x="440" y="525" className="text-sm font-semibold" fill="#1F2937">AI协作策略</text>
          <text x="450" y="545" className="text-xs" fill="#6B7280">• 适用工具: Claude Code / Cursor</text>
          <text x="450" y="560" className="text-xs" fill="#6B7280">• 协作模式: 深度规划 / 增量开发</text>
          
          <text x="440" y="585" className="text-sm font-semibold" fill="#1F2937">AI提示优化</text>
          <text x="450" y="605" className="text-xs" fill="#6B7280">• 核心提示: [简洁任务描述]</text>
          <text x="450" y="620" className="text-xs" fill="#6B7280">• 关键约束: [技术和业务约束]</text>
          
          <text x="440" y="645" className="text-sm font-semibold" fill="#1F2937">当前焦点 (动态更新)</text>
          <text x="450" y="665" className="text-xs" fill="#6B7280">• 注意力检查点防偏移</text>
        </g>

        {/* 从工具到任务卡的连接线 */}
        <path d="M 250 350 Q 350 400 500 450" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrow)" strokeDasharray="3,3" />
        <path d="M 950 350 Q 850 400 700 450" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrow)" strokeDasharray="3,3" />

        {/* 三种协作模式 */}
        <g>
          <rect x="50" y="550" width="250" height="180" rx="10" fill="#ECFDF5" stroke="#10B981" strokeWidth="1" />
          <text x="175" y="575" textAnchor="middle" className="text-sm font-bold" fill="#047857">
            深度规划 + 快速执行
          </text>
          <text x="70" y="600" className="text-xs" fill="#047857">Claude Code负责:</text>
          <text x="75" y="615" className="text-xs" fill="#047857">• 整体架构设计</text>
          <text x="75" y="630" className="text-xs" fill="#047857">• 复杂逻辑规划</text>
          
          <text x="70" y="655" className="text-xs" fill="#047857">Cursor负责:</text>
          <text x="75" y="670" className="text-xs" fill="#047857">• 具体代码实现</text>
          <text x="75" y="685" className="text-xs" fill="#047857">• 增量优化调整</text>
        </g>

        <g>
          <rect x="850" y="550" width="250" height="180" rx="10" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />
          <text x="975" y="575" textAnchor="middle" className="text-sm font-bold" fill="#92400E">
            阶段性工具切换
          </text>
          <text x="870" y="600" className="text-xs" fill="#92400E">复杂逻辑阶段:</text>
          <text x="875" y="615" className="text-xs" fill="#92400E">• 使用Claude Code</text>
          <text x="875" y="630" className="text-xs" fill="#92400E">• 深度思考分析</text>
          
          <text x="870" y="655" className="text-xs" fill="#92400E">重复性工作:</text>
          <text x="875" y="670" className="text-xs" fill="#92400E">• 使用Cursor</text>
          <text x="875" y="685" className="text-xs" fill="#92400E">• 快速批量处理</text>
        </g>

        {/* 顶部标题 */}
        <text x="600" y="50" textAnchor="middle" className="text-xl font-bold" fill="#1F2937">
          PACE 1.2 AI工具协作架构
        </text>
        
        <text x="600" y="80" textAnchor="middle" className="text-sm" fill="#6B7280">
          通过工具特性分析和协作策略设计，实现人机协作效率最大化
        </text>
      </svg>
    </div>
  );
};

export default AiToolsIntegration;