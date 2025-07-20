import React from 'react';

const TaskCardEvolution: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto my-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">任务卡AI协作适配演进</h2>
        <p className="text-lg text-gray-600">
          从传统任务卡到PACE标准化融合版本的演进过程
        </p>
      </div>
      
      <svg viewBox="0 0 1200 950" className="w-full h-auto">
        <defs>
          {/* 渐变定义 */}
          <linearGradient id="traditionalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6B7280" stopOpacity={0.1} />
            <stop offset="100%" stopColor="#6B7280" stopOpacity={0.3} />
          </linearGradient>
          <linearGradient id="enhancedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.1} />
            <stop offset="100%" stopColor="#10B981" stopOpacity={0.3} />
          </linearGradient>
          <linearGradient id="evolutionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#EF4444" stopOpacity={0.8} />
          </linearGradient>
          
          {/* 箭头标记 */}
          <marker id="arrowEvolution" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
            <path d="M0,0 L0,12 L12,6 z" fill="#F59E0B" />
          </marker>
        </defs>

        {/* 传统任务卡 - 左侧 */}
        <g>
          <rect x="80" y="150" width="350" height="500" rx="15" fill="url(#traditionalGradient)" stroke="#6B7280" strokeWidth="2" />
          <text x="255" y="180" textAnchor="middle" className="text-lg font-bold" fill="#374151">
            传统任务卡
          </text>
          
          {/* 传统内容结构 */}
          <rect x="100" y="200" width="310" height="430" rx="8" fill="white" stroke="#D1D5DB" strokeWidth="1" />
          
          {/* 基础信息 */}
          <rect x="120" y="220" width="270" height="40" rx="5" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1" />
          <text x="130" y="240" className="text-sm font-semibold" fill="#1F2937">任务标题和描述</text>
          <text x="130" y="255" className="text-xs" fill="#6B7280">基本的功能需求描述</text>
          
          {/* 技术要求 */}
          <rect x="120" y="280" width="270" height="60" rx="5" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1" />
          <text x="130" y="300" className="text-sm font-semibold" fill="#1F2937">技术要求</text>
          <text x="130" y="315" className="text-xs" fill="#6B7280">• 使用的技术栈</text>
          <text x="130" y="330" className="text-xs" fill="#6B7280">• 基本的约束条件</text>
          
          {/* 验收标准 */}
          <rect x="120" y="360" width="270" height="80" rx="5" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1" />
          <text x="130" y="380" className="text-sm font-semibold" fill="#1F2937">验收标准</text>
          <text x="130" y="395" className="text-xs" fill="#6B7280">• 功能正常运行</text>
          <text x="130" y="410" className="text-xs" fill="#6B7280">• 通过基本测试</text>
          <text x="130" y="425" className="text-xs" fill="#6B7280">• 代码风格一致</text>
          
          {/* 传统模式的局限性 */}
          <rect x="120" y="460" width="270" height="120" rx="5" fill="#FEF2F2" stroke="#F87171" strokeWidth="1" />
          <text x="130" y="480" className="text-sm font-semibold" fill="#DC2626">传统模式局限性</text>
          <text x="130" y="500" className="text-xs" fill="#DC2626">❌ 缺乏AI协作指导</text>
          <text x="130" y="515" className="text-xs" fill="#DC2626">❌ 无注意力管理机制</text>
          <text x="130" y="530" className="text-xs" fill="#DC2626">❌ 无工具适配策略</text>
          <text x="130" y="545" className="text-xs" fill="#DC2626">❌ 无上下文优化</text>
          <text x="130" y="560" className="text-xs" fill="#DC2626">❌ 无偏移预防措施</text>
        </g>

        {/* 演进箭头 */}
        <path d="M 450 400 L 550 400" stroke="url(#evolutionGradient)" strokeWidth="6" markerEnd="url(#arrowEvolution)" />
        <text x="500" y="350" textAnchor="middle" className="text-sm font-bold" fill="#F59E0B">标准化融合</text>
        <text x="500" y="460" textAnchor="middle" className="text-sm font-bold" fill="#F59E0B">升级</text>

        {/* AI协作增强版任务卡 - 右侧 */}
        <g>
          <rect x="570" y="100" width="550" height="680" rx="15" fill="url(#enhancedGradient)" stroke="#10B981" strokeWidth="3" />
          <text x="845" y="130" textAnchor="middle" className="text-lg font-bold" fill="#047857">
            标准化融合版任务卡
          </text>
          
          {/* 增强内容结构 */}
          <rect x="590" y="150" width="510" height="610" rx="8" fill="white" stroke="#10B981" strokeWidth="1" />
          
          {/* 原有基础信息 (保留) */}
          <rect x="610" y="170" width="470" height="50" rx="5" fill="#F0F9FF" stroke="#3B82F6" strokeWidth="1" />
          <text x="620" y="190" className="text-sm font-semibold" fill="#1E40AF">原有基础内容 (保留)</text>
          <text x="620" y="205" className="text-xs" fill="#1E40AF">任务描述、技术要求、验收标准</text>
          
          {/* 新增: AI协作策略 */}
          <rect x="610" y="240" width="470" height="80" rx="5" fill="#ECFDF5" stroke="#10B981" strokeWidth="1" />
          <text x="620" y="260" className="text-sm font-bold" fill="#047857">🤖 AI协作策略 (新增)</text>
          <text x="620" y="280" className="text-xs" fill="#047857">• 适用工具: Claude Code / Cursor</text>
          <text x="620" y="295" className="text-xs" fill="#047857">• 协作模式: 深度规划 / 增量开发</text>
          <text x="620" y="310" className="text-xs" fill="#047857">• 上下文管理: 完整包 / 分片加载</text>
          
          {/* 新增: AI提示优化 */}
          <rect x="610" y="340" width="470" height="80" rx="5" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />
          <text x="620" y="360" className="text-sm font-bold" fill="#D97706">⚡ AI提示优化 (新增)</text>
          <text x="620" y="380" className="text-xs" fill="#D97706">• 核心提示: [简洁的任务描述，1-2句话]</text>
          <text x="620" y="395" className="text-xs" fill="#D97706">• 关键约束: [技术和业务约束]</text>
          <text x="620" y="410" className="text-xs" fill="#D97706">• 期望输出: [明确的交付物描述]</text>
          
          {/* 新增: 当前焦点 */}
          <rect x="610" y="440" width="470" height="100" rx="5" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1" />
          <text x="620" y="460" className="text-sm font-bold" fill="#1E40AF">🎯 当前焦点 (动态更新)</text>
          <text x="620" y="480" className="text-xs" fill="#1E40AF">• 主要目标: [本次任务的核心目标]</text>
          <text x="620" y="495" className="text-xs" fill="#1E40AF">• 当前阶段: [任务执行的当前阶段]</text>
          <text x="620" y="510" className="text-xs" fill="#1E40AF">• 下一步行动: [下一个具体步骤]</text>
          <text x="620" y="525" className="text-xs" fill="#1E40AF">• 注意力检查点: [防偏离验证点]</text>
          
          {/* 新增: 避免偏移提醒 */}
          <rect x="610" y="560" width="470" height="80" rx="5" fill="#FDF2F8" stroke="#EC4899" strokeWidth="1" />
          <text x="620" y="580" className="text-sm font-bold" fill="#BE185D">🚫 避免偏移提醒</text>
          <text x="620" y="600" className="text-xs" fill="#BE185D">• 不要做的事情: [明确列出容易偏离的行为]</text>
          <text x="620" y="615" className="text-xs" fill="#BE185D">• 保持专注于: [需要始终关注的核心要素]</text>
          <text x="620" y="630" className="text-xs" fill="#BE185D">• 时间盒限制: [防止过度优化的时间约束]</text>

          {/* 新增: EARS语法支持  */}
          <rect x="610" y="650" width="470" height="60" rx="5" fill="#F0F9FF" stroke="#0EA5E9" strokeWidth="1" />
          <text x="620" y="670" className="text-sm font-bold" fill="#0369A1">📝 EARS语法支持</text>
          <text x="620" y="690" className="text-xs" fill="#0369A1">• 结构化需求表达: 当...时，系统应当...</text>
          <text x="620" y="705" className="text-xs" fill="#0369A1">• 减少歧义，提升AI理解准确性</text>
        </g>

        {/* 核心改进亮点 */}
        <g>
          <ellipse cx="200" cy="820" rx="120" ry="60" fill="#ECFDF5" stroke="#10B981" strokeWidth="2" />
          <text x="200" y="810" textAnchor="middle" className="text-sm font-bold" fill="#047857">
            AI协作增强
          </text>
          <text x="200" y="830" textAnchor="middle" className="text-xs" fill="#047857">
            工具适配 + 注意力管理
          </text>
        </g>

        <g>
          <ellipse cx="450" cy="820" rx="120" ry="60" fill="#F0F9FF" stroke="#0EA5E9" strokeWidth="2" />
          <text x="450" y="810" textAnchor="middle" className="text-sm font-bold" fill="#0369A1">
            EARS语法
          </text>
          <text x="450" y="830" textAnchor="middle" className="text-xs" fill="#0369A1">
            结构化需求 + 减少歧义
          </text>
        </g>

        <g>
          <ellipse cx="700" cy="820" rx="120" ry="60" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
          <text x="700" y="810" textAnchor="middle" className="text-sm font-bold" fill="#D97706">
            标准化模板
          </text>
          <text x="700" y="830" textAnchor="middle" className="text-xs" fill="#D97706">
            开箱即用 + 分级支持
          </text>
        </g>

        <g>
          <ellipse cx="950" cy="820" rx="120" ry="60" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
          <text x="950" y="810" textAnchor="middle" className="text-sm font-bold" fill="#1E40AF">
            双模式
          </text>
          <text x="950" y="830" textAnchor="middle" className="text-xs" fill="#1E40AF">
            个体 + 团队协作
          </text>
        </g>

        {/* 顶部标题 */}
        <text x="600" y="50" textAnchor="middle" className="text-xl font-bold" fill="#1F2937">
          PACE 任务卡标准化融合演进
        </text>
        
        {/* 底部说明 */}
        <text x="600" y="920" textAnchor="middle" className="text-sm" fill="#6B7280">
          从传统人工任务卡升级为标准化融合版本，集成EARS语法和模板体系，显著提升协作效率
        </text>
      </svg>
    </div>
  );
};

export default TaskCardEvolution;