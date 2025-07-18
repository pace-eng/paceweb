import Layout from '@/components/Layout';
import Link from 'next/link';

export default function ImplementationPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            实施指南
          </h1>
          <p className="text-xl text-gray-600">
            如何在您的团队中成功实施 PACE 1.0 方法论
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>渐进式实施策略</h2>
          <p>
            PACE 1.0的实施应该采用渐进式策略，避免激进变革带来的风险。我们建议分三个阶段进行：
          </p>

          <div className="space-y-8 my-12">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                阶段一：基础建设（1-2个月）
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">关键活动</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• 团队培训：AI工具使用和提示工程基础</li>
                    <li>• 工具链搭建：开发环境、任务管理系统</li>
                    <li>• 标准制定：任务卡模板、代码规范</li>
                    <li>• 试点项目：选择1-2个小型项目</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">成功指标</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• 团队掌握基本AI协作技能</li>
                    <li>• 完成基础工具链搭建</li>
                    <li>• 制定完整标准和流程文档</li>
                    <li>• 试点项目成功交付</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                阶段二：能力提升（2-3个月）
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">关键活动</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• 进阶培训：上下文设计、质量评估</li>
                    <li>• 流程优化：基于试点经验优化</li>
                    <li>• 工具集成：集成更多AI工具</li>
                    <li>• 规模扩展：应用到更多项目</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">成功指标</h4>
                  <ul className="text-sm text-blue-600 space-y-1">
                    <li>• 任务卡质量显著提升</li>
                    <li>• AI生成代码质量稳定</li>
                    <li>• 开发效率提升20-30%</li>
                    <li>• 团队协作更加顺畅</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">
                阶段三：规模化应用（3-6个月）
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">关键活动</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• 组织级推广：制定推广计划</li>
                    <li>• 平台建设：支持PACE 1.0的统一平台</li>
                    <li>• 知识管理：最佳实践库建设</li>
                    <li>• 持续改进：反馈机制建立</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">成功指标</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• 80%以上项目采用PACE 1.0</li>
                    <li>• 完善的知识管理体系</li>
                    <li>• 持续改进的文化</li>
                    <li>• 整体效率提升50%以上</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>PACE 1.0 工作流程</h2>
          <p>
            PACE 1.0 的核心工作流程分为两个主要阶段：蓝图规划和切片循环。
          </p>

          <h3>阶段 0：蓝图规划</h3>
          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">从想法到可执行路线图</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                <div>
                  <h5 className="font-semibold">输入原始材料</h5>
                  <p className="text-sm text-gray-600">初始想法、用户故事、访谈记录、竞品分析</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                <div>
                  <h5 className="font-semibold">AI辅助分析</h5>
                  <p className="text-sm text-gray-600">提炼核心用户故事，按用户旅程分组</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                <div>
                  <h5 className="font-semibold">HTML原型生成</h5>
                  <p className="text-sm text-gray-600">可交互的HTML原型，包含主要页面和功能</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                <div>
                  <h5 className="font-semibold">PRD验证与优化</h5>
                  <p className="text-sm text-gray-600">通过原型验证用户体验和功能完整性</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">5</div>
                <div>
                  <h5 className="font-semibold">垂直切片路线图</h5>
                  <p className="text-sm text-gray-600">生成包含多个垂直切片的开发路线图</p>
                </div>
              </div>
            </div>
          </div>

          <h3>阶段 1：切片循环</h3>
          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">四步迭代循环</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-green-600">1. 定义（DEFINE）</h5>
                  <p className="text-sm text-gray-600">创建引用式任务卡，包含完整的上下文信息</p>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-600">2. 评审（REVIEW）</h5>
                  <p className="text-sm text-gray-600">团队评审任务卡，确保引用文档的正确性</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-orange-600">3. 实现（IMPLEMENT）</h5>
                  <p className="text-sm text-gray-600">AI驱动编码，人类验证和反馈</p>
                </div>
                <div>
                  <h5 className="font-semibold text-purple-600">4. 验证（VERIFY）</h5>
                  <p className="text-sm text-gray-600">最终代码评审、测试和集成</p>
                </div>
              </div>
            </div>
          </div>

          <h2>项目结构建议</h2>
          <p>
            为了支持PACE 1.0方法论的高效执行，建议采用以下项目结构：
          </p>

          <div className="bg-gray-100 p-4 rounded-lg my-6 font-mono text-sm">
            <pre>{`project-root/
├── docs/                           # 项目文档
│   ├── architecture.md            # 架构设计文档
│   ├── roadmap.md                 # 产品路线图
│   └── shared-kernel/             # 共享核心库文档
├── specs/                          # 任务卡规格文档
│   ├── slice-1.1-user-auth.spec.md
│   ├── slice-1.2-product-list.spec.md
│   └── refactor-1.0-data-models.spec.md
├── src/                           # 源代码
│   ├── shared-kernel/             # 共享核心库
│   ├── features/                  # 功能模块
│   └── config/                    # 配置文件
└── tests/                         # 测试代码`}</pre>
          </div>

          <h2>风险管理策略</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-4">技术风险</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm">AI代码质量不稳定</h4>
                  <p className="text-xs text-gray-600">建立多层质量检查机制，制定代码质量标准</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">技术债务积累</h4>
                  <p className="text-xs text-gray-600">建立债务识别机制，制定渐进式偿还计划</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-800 mb-4">组织风险</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm">团队抗拒变化</h4>
                  <p className="text-xs text-gray-600">充分沟通培训，渐进式推进，展示成功案例</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">技能差距</h4>
                  <p className="text-xs text-gray-600">制定分层培训计划，建立导师制度</p>
                </div>
              </div>
            </div>
          </div>

          <h2>关键成功因素</h2>
          <ul>
            <li><strong>领导层支持</strong>：获得管理层的明确支持和资源投入</li>
            <li><strong>团队培训</strong>：投资于团队的AI协作能力建设</li>
            <li><strong>工具链完备</strong>：建立完整的工具链支持</li>
            <li><strong>质量保障</strong>：建立多层次的质量保障体系</li>
            <li><strong>持续改进</strong>：建立反馈机制和持续改进文化</li>
          </ul>

          <h2>下一步行动</h2>
          <p>
            准备开始实施PACE 1.0？建议您：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <Link href="/best-practices" className="block p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <h4 className="font-semibold text-green-800">学习最佳实践</h4>
              <p className="text-sm text-green-600 mt-1">了解经过验证的实践方法和经验总结</p>
            </Link>
            <Link href="/case-studies" className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <h4 className="font-semibold text-blue-800">查看成功案例</h4>
              <p className="text-sm text-blue-600 mt-1">学习其他团队的成功实施经验</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}