import Layout from '@/components/Layout';
import Link from 'next/link';

export default function ConceptsPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            核心概念
          </h1>
          <p className="text-xl text-gray-600">
            深入理解 PACE 1.0 的关键概念和原理
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>上下文工程（Context Engineering）</h2>
          <p>
            上下文工程是PACE 1.0的核心技术，它是一门设计和构建动态系统的学科，能够在正确的时间，以正确的格式，为AI提供恰当的信息和工具。
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">上下文的三个层次</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-blue-800">信息的结构化组织</h4>
                <p className="text-sm text-blue-700">如何将复杂的业务需求转化为AI可理解的结构化描述</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800">认知负荷的管理</h4>
                <p className="text-sm text-blue-700">如何在有限的上下文窗口内传递最关键的信息</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800">意图的精确传达</h4>
                <p className="text-sm text-blue-700">如何确保AI理解人类的真实意图而非表面需求</p>
              </div>
            </div>
          </div>

          <h3>分层上下文模型</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="border border-red-200 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800">核心上下文（必须）</h4>
              <p className="text-sm text-red-600">任务卡本身、直接依赖的接口</p>
            </div>
            <div className="border border-orange-200 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-800">关键上下文（重要）</h4>
              <p className="text-sm text-orange-600">相关架构文档、数据模型、业务规则</p>
            </div>
            <div className="border border-yellow-200 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800">辅助上下文（有用）</h4>
              <p className="text-sm text-yellow-600">代码示例、历史实现、最佳实践</p>
            </div>
            <div className="border border-green-200 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800">背景上下文（可选）</h4>
              <p className="text-sm text-green-600">详细需求、用户故事、业务背景</p>
            </div>
          </div>

          <h2>垂直切片策略（Vertical Slicing）</h2>
          <p>
            垂直切片是PACE 1.0的核心工作模式，它摒弃了传统的瀑布式开发阶段，转而采用迭代策略，专注于从第一天起就交付价值。
          </p>

          <h3>垂直切片的四个特征</h3>
          <ul>
            <li><strong>功能完整性</strong>：每个切片都是一个可独立交付的功能单元</li>
            <li><strong>端到端覆盖</strong>：从用户界面到数据存储的完整技术栈</li>
            <li><strong>价值导向</strong>：每个切片都能为用户创造可感知的价值</li>
            <li><strong>风险分散</strong>：通过小粒度迭代降低项目风险</li>
          </ul>

          <div className="bg-green-50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold text-green-900 mb-3">切片演进示例</h3>
            <p className="text-green-700 mb-4">
              我们不试图一次性造出一辆完美的汽车，而是通过构建一系列功能上持续完善、但始终可用的产品来逐步实现目标：
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">滑板</span>
              <span className="text-green-600">→</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">踏板车</span>
              <span className="text-green-600">→</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">自行车</span>
              <span className="text-green-600">→</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">汽车</span>
            </div>
          </div>

          <h2>任务复杂度分级</h2>
          <p>
            基于任务的复杂度和AI的适用性，PACE 1.0建立了四级分类体系，每个级别都有相应的协作模式。
          </p>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-green-800">Level 1 - 标准化实现任务</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                <div>
                  <h4 className="font-semibold text-sm">特征</h4>
                  <p className="text-sm text-gray-600">明确的输入输出，标准化的实现模式</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">AI参与度</h4>
                  <p className="text-sm text-gray-600">85-95%</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">协作模式</h4>
                  <p className="text-sm text-gray-600">AI主导执行，人类监督验证</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-blue-800">Level 2 - 集成协调任务</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                <div>
                  <h4 className="font-semibold text-sm">特征</h4>
                  <p className="text-sm text-gray-600">多模块交互，需要考虑系统一致性</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">AI参与度</h4>
                  <p className="text-sm text-gray-600">60-80%</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">协作模式</h4>
                  <p className="text-sm text-gray-600">人类设计框架，AI实现细节</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-semibold text-orange-800">Level 3 - 架构设计任务</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                <div>
                  <h4 className="font-semibold text-sm">特征</h4>
                  <p className="text-sm text-gray-600">需要权衡多个因素，涉及技术选型</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">AI参与度</h4>
                  <p className="text-sm text-gray-600">30-50%</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">协作模式</h4>
                  <p className="text-sm text-gray-600">人机深度协作，共同探索方案</p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-purple-800">Level 4 - 创新探索任务</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                <div>
                  <h4 className="font-semibold text-sm">特征</h4>
                  <p className="text-sm text-gray-600">高度不确定性，需要创造性思维</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">AI参与度</h4>
                  <p className="text-sm text-gray-600">10-30%</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">协作模式</h4>
                  <p className="text-sm text-gray-600">人类主导创新，AI提供支持</p>
                </div>
              </div>
            </div>
          </div>

          <h2>适应性架构治理</h2>
          <p>
            传统的架构治理往往过于刚性，PACE 1.0提出了适应性架构治理的概念，通过四个核心原则确保系统的长期健康。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">活的架构文档</h4>
              <p className="text-sm text-gray-600">与代码同步演进的架构描述</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">渐进式一致性</h4>
              <p className="text-sm text-gray-600">在演进中保持架构的整体一致性</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">智能化检查</h4>
              <p className="text-sm text-gray-600">通过自动化工具检测架构偏离</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">社区化治理</h4>
              <p className="text-sm text-gray-600">通过团队协作维护架构健康</p>
            </div>
          </div>

          <h2>智能化任务卡体系</h2>
          <p>
            任务卡不仅是项目管理的工具，更是为AI的Transformer架构量身定做的"AI友好"输入格式。
          </p>

          <h3>任务卡设计原则</h3>
          <ul>
            <li><strong>为"有限上下文"设计</strong>：包含执行任务所需的全部信息</li>
            <li><strong>为"概率性生成"设计</strong>：用确定性规格取代模糊描述</li>
            <li><strong>为"序列化输出"设计</strong>：提供清晰的思维脚手架</li>
          </ul>

          <div className="bg-yellow-50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">任务卡标准结构</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-yellow-800">基础信息</h4>
                <ul className="text-sm text-yellow-700 mt-2 space-y-1">
                  <li>• 任务标识与分类</li>
                  <li>• 业务上下文</li>
                  <li>• 技术规格</li>
                  <li>• 实现指导</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800">质量保障</h4>
                <ul className="text-sm text-yellow-700 mt-2 space-y-1">
                  <li>• 测试策略</li>
                  <li>• 验证清单</li>
                  <li>• 风险评估</li>
                  <li>• 回滚方案</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>下一步学习</h2>
          <p>
            理解了核心概念后，建议继续学习：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <Link href="/implementation" className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <h4 className="font-semibold text-blue-800">实施指南</h4>
              <p className="text-sm text-blue-600 mt-1">了解如何在项目中实施PACE 1.0</p>
            </Link>
            <Link href="/best-practices" className="block p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <h4 className="font-semibold text-green-800">最佳实践</h4>
              <p className="text-sm text-green-600 mt-1">学习经过验证的实践方法</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}