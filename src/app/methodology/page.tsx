import Layout from '@/components/Layout';
import Link from 'next/link';

export default function MethodologyPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            PACE 1.0 方法论概述
          </h1>
          <p className="text-xl text-gray-600">
            程序化AI协作工程体系的完整介绍
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>方法论名称解释</h2>
          <p>
            <strong>PACE</strong> 是 <strong>Programmatic AI Collaboration Engineering</strong> 的缩写，中文译为"程序化AI协作工程"，其含义为：
          </p>
          <ul>
            <li><strong>Programmatic（程序化）</strong>：强调系统化、结构化的工程方法，通过明确的流程、规范和工具来管理复杂的开发过程</li>
            <li><strong>AI Collaboration（AI协作）</strong>：突出人类工程师与AI系统之间的深度协作，而非简单的工具使用关系</li>
            <li><strong>Engineering（工程）</strong>：体现严谨的工程实践本质，注重质量、效率和可持续发展</li>
          </ul>

          <h2>核心理念</h2>
          <p>
            PACE 1.0的核心洞察是：<strong>成功的AI协作不在于让AI完全替代人类，而在于找到最优的人机分工模式</strong>，让每一方都能发挥自己的独特优势。
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">人机协作的核心原则</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-800">人类擅长：</h4>
                <ul className="text-sm text-blue-700 mt-2 space-y-1">
                  <li>• 创造性思维</li>
                  <li>• 复杂决策</li>
                  <li>• 价值判断</li>
                  <li>• 架构设计</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800">AI擅长：</h4>
                <ul className="text-sm text-blue-700 mt-2 space-y-1">
                  <li>• 模式识别</li>
                  <li>• 代码生成</li>
                  <li>• 重复性工作</li>
                  <li>• 数据处理</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>AI的本质局限性</h2>
          <p>
            要理解PACE 1.0的必要性，我们必须深入理解大型语言模型（LLM）的本质。LLM并非像人类一样理解代码逻辑，它的核心是一个基于概率的高度复杂的序列预测引擎。
          </p>

          <h3>三大根本性冲突</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">状态管理不对称</h4>
              <p className="text-sm text-red-700">
                AI的无状态内核与软件项目的持久化状态之间存在根本矛盾。
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-2">推理范式冲突</h4>
              <p className="text-sm text-yellow-700">
                生成式推理与工程所要求的确定性逻辑之间存在冲突。
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">注意力局限性</h4>
              <p className="text-sm text-green-700">
                局部注意力与分布式知识的矛盾，难以理解超距依赖。
              </p>
            </div>
          </div>

          <h2>解决方案：上下文工程</h2>
          <p>
            PACE 1.0通过引入"上下文工程"来解决这些问题——一门设计和构建动态系统的学科，能够在正确的时间，以正确的格式，为AI提供恰当的信息和工具。
          </p>

          <h3>上下文工程的核心要素</h3>
          <ul>
            <li><strong>信息的结构化组织</strong>：将复杂的业务需求转化为AI可理解的结构化描述</li>
            <li><strong>认知负荷的管理</strong>：在有限的上下文窗口内传递最关键的信息</li>
            <li><strong>意图的精确传达</strong>：确保AI理解人类的真实意图而非表面需求</li>
          </ul>

          <h2>垂直切片策略</h2>
          <p>
            垂直切片是PACE 1.0的核心工作模式，它强调功能完整性、端到端覆盖、价值导向和风险分散。
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold mb-4">垂直切片 vs MVP</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800">MVP（最小可行产品）</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>• 关注产品层面的市场验证</li>
                  <li>• 目标是验证商业假设</li>
                  <li>• 允许"脏快"的实现方式</li>
                  <li>• 验证完毕后可能被重写</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">垂直切片</h4>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>• 关注工程层面的技术实现</li>
                  <li>• 目标是降低技术风险</li>
                  <li>• 要求符合生产标准</li>
                  <li>• 持续累积成为最终产品</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>任务复杂度分级</h2>
          <p>
            基于任务的复杂度和AI的适用性，PACE 1.0建立了四级分类体系：
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="border border-green-200 p-6 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Level 1 - 标准化实现</h4>
              <p className="text-sm text-green-700 mb-2">AI参与度：85-95%</p>
              <p className="text-sm text-green-600">
                明确的输入输出，标准化的实现模式。如CRUD操作、数据转换等。
              </p>
            </div>
            <div className="border border-blue-200 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Level 2 - 集成协调</h4>
              <p className="text-sm text-blue-700 mb-2">AI参与度：60-80%</p>
              <p className="text-sm text-blue-600">
                多模块交互，需要考虑系统一致性。如API集成、状态管理等。
              </p>
            </div>
            <div className="border border-orange-200 p-6 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-2">Level 3 - 架构设计</h4>
              <p className="text-sm text-orange-700 mb-2">AI参与度：30-50%</p>
              <p className="text-sm text-orange-600">
                需要权衡多个因素，涉及技术选型。如系统架构、性能优化等。
              </p>
            </div>
            <div className="border border-purple-200 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Level 4 - 创新探索</h4>
              <p className="text-sm text-purple-700 mb-2">AI参与度：10-30%</p>
              <p className="text-sm text-purple-600">
                高度不确定性，需要创造性思维。如新技术验证、算法创新等。
              </p>
            </div>
          </div>

          <h2>下一步</h2>
          <p>
            了解了方法论的基本概念后，你可以：
          </p>
          <ul>
            <li>深入学习<Link href="/concepts" className="text-blue-600 hover:underline">核心概念</Link></li>
            <li>查看<Link href="/implementation" className="text-blue-600 hover:underline">实施指南</Link></li>
            <li>参考<Link href="/best-practices" className="text-blue-600 hover:underline">最佳实践</Link></li>
            <li>研究<Link href="/case-studies" className="text-blue-600 hover:underline">成功案例</Link></li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}