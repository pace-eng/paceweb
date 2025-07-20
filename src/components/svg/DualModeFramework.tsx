import React from 'react';

const DualModeFramework: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto my-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">个体与团队双模式操作框架</h2>
        <p className="text-lg text-gray-600">
          平衡个体效率和团队一致性，支持不同规模和需求的开发场景
        </p>
      </div>
      
      <svg viewBox="0 0 1000 600" className="w-full h-auto">
        {/* 背景渐变 */}
        <defs>
          <linearGradient id="individualGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.1} />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="teamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" stopOpacity={0.1} />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="bridgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.3} />
            <stop offset="50%" stopColor="#6366F1" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#10B981" stopOpacity={0.3} />
          </linearGradient>
        </defs>

        {/* 个体模式区域 */}
        <rect x="50" y="100" width="380" height="400" rx="20" fill="url(#individualGradient)" stroke="#3B82F6" strokeWidth="2" />
        
        {/* 团队模式区域 */}
        <rect x="570" y="100" width="380" height="400" rx="20" fill="url(#teamGradient)" stroke="#10B981" strokeWidth="2" />
        
        {/* 连接桥梁 */}
        <rect x="430" y="280" width="140" height="40" rx="20" fill="url(#bridgeGradient)" stroke="#6366F1" strokeWidth="2" />
        
        {/* 个体模式标题 */}
        <text x="240" y="140" textAnchor="middle" className="text-lg font-bold" fill="#1E40AF">
          超级个体模式
        </text>
        
        {/* 团队模式标题 */}
        <text x="760" y="140" textAnchor="middle" className="text-lg font-bold" fill="#047857">
          团队协作模式
        </text>
        
        {/* 桥梁标题 */}
        <text x="500" y="275" textAnchor="middle" className="text-sm font-semibold" fill="#4338CA">
          混合模式
        </text>
        <text x="500" y="315" textAnchor="middle" className="text-sm font-semibold" fill="#4338CA">
          渐进转换
        </text>

        {/* 个体模式特征 */}
        <g>
          <circle cx="120" cy="190" r="6" fill="#3B82F6" />
          <text x="140" y="196" className="text-sm" fill="#1E40AF">灵活性优先</text>
          
          <circle cx="120" cy="220" r="6" fill="#3B82F6" />
          <text x="140" y="226" className="text-sm" fill="#1E40AF">快速迭代</text>
          
          <circle cx="120" cy="250" r="6" fill="#3B82F6" />
          <text x="140" y="256" className="text-sm" fill="#1E40AF">个人决策</text>
          
          <circle cx="120" cy="280" r="6" fill="#3B82F6" />
          <text x="140" y="286" className="text-sm" fill="#1E40AF">创新导向</text>
          
          <circle cx="120" cy="310" r="6" fill="#3B82F6" />
          <text x="140" y="316" className="text-sm" fill="#1E40AF">简化任务卡</text>
          
          <circle cx="120" cy="340" r="6" fill="#3B82F6" />
          <text x="140" y="346" className="text-sm" fill="#1E40AF">个人配置</text>
        </g>

        {/* 团队模式特征 */}
        <g>
          <circle cx="640" cy="190" r="6" fill="#10B981" />
          <text x="660" y="196" className="text-sm" fill="#047857">一致性优先</text>
          
          <circle cx="640" cy="220" r="6" fill="#10B981" />
          <text x="660" y="226" className="text-sm" fill="#047857">标准化流程</text>
          
          <circle cx="640" cy="250" r="6" fill="#10B981" />
          <text x="660" y="256" className="text-sm" fill="#047857">团队决策</text>
          
          <circle cx="640" cy="280" r="6" fill="#10B981" />
          <text x="660" y="286" className="text-sm" fill="#047857">质量导向</text>
          
          <circle cx="640" cy="310" r="6" fill="#10B981" />
          <text x="660" y="316" className="text-sm" fill="#047857">完整任务卡</text>
          
          <circle cx="640" cy="340" r="6" fill="#10B981" />
          <text x="660" y="346" className="text-sm" fill="#047857">统一配置</text>
        </g>

        {/* 适用场景标签 */}
        <rect x="80" y="380" width="320" height="80" rx="10" fill="#EBF4FF" stroke="#3B82F6" strokeWidth="1" />
        <text x="240" y="400" textAnchor="middle" className="text-sm font-semibold" fill="#1E40AF">
          适用场景
        </text>
        <text x="90" y="420" className="text-xs" fill="#1E40AF">• 个人项目、原型开发</text>
        <text x="90" y="435" className="text-xs" fill="#1E40AF">• 技术探索、学习实验</text>
        <text x="90" y="450" className="text-xs" fill="#1E40AF">• 快速MVP验证</text>

        <rect x="600" y="380" width="320" height="80" rx="10" fill="#ECFDF5" stroke="#10B981" strokeWidth="1" />
        <text x="760" y="400" textAnchor="middle" className="text-sm font-semibold" fill="#047857">
          适用场景
        </text>
        <text x="610" y="420" className="text-xs" fill="#047857">• 生产项目、长期维护</text>
        <text x="610" y="435" className="text-xs" fill="#047857">• 质量要求、知识传承</text>
        <text x="610" y="450" className="text-xs" fill="#047857">• 多人协作开发</text>

        {/* 顶部说明 */}
        <text x="500" y="60" textAnchor="middle" className="text-lg font-semibold" fill="#374151">
          PACE 支持不同开发模式的灵活切换
        </text>
      </svg>
    </div>
  );
};

export default DualModeFramework;