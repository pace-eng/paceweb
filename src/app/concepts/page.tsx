import Layout from '@/components/Layout';
import Link from 'next/link';
import ContextEngineeringFlow from '@/components/svg/ContextEngineeringFlow';
import TaskLevelPyramid from '@/components/svg/TaskLevelPyramid';

export default function ConceptsPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            核心概念
          </h1>
          <p className="text-xl text-gray-600">
            深入理解 PACE 的关键概念和原理
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>PACE 双核心体系</h2>
          <p>
            PACE 方法论的核心是 <strong>Spec-Writing（规范化编程）</strong> 和 <strong>Context Engineering（上下文工程）</strong> 双核心体系。这两大核心技术系统性地解决了AI协作中的四大经典挑战。
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-900 mb-4">第一核心：Spec-Writing</h3>
              <p className="text-green-800 mb-4">
                规范化编程 - 将需求转化为可执行的规范文档。从一次性提示转向可沉淀、可复用的长期资产。
              </p>
              <ul className="text-sm text-green-700 space-y-2">
                <li>• EARS语法标准化需求表达</li>
                <li>• 三文档架构(requirements/design/tasks)</li>
                <li>• Level 1-4分级规范模板</li>
                <li>• 消除&ldquo;优雅幻觉&rdquo;和&ldquo;想当然&rdquo;</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-900 mb-4">第二核心：Context Engineering</h3>
              <p className="text-blue-800 mb-4">
                上下文工程 - 精准管理AI的注意力资源，确保规范被准确理解和执行。
              </p>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• 三明治提示法管理注意力</li>
                <li>• 结构化标记划分信息层次</li>
                <li>• RAG记忆系统解决&ldquo;失忆&rdquo;</li>
                <li>• 防止&ldquo;上下文失焦&rdquo;</li>
              </ul>
            </div>
          </div>

          <h2>四大经典AI协作挑战</h2>
          <p>
            双核心体系的设计源于对AI协作中四大经典挑战的深度分析。这些问题的根源在于LLM的本质特性：它是一个基于概率的序列预测引擎，与软件工程所需的确定性、状态感知存在根本性冲突。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 mb-3">致命&ldquo;想当然&rdquo;</h4>
              <p className="text-sm text-red-700 mb-2">
                <strong>场景：</strong> 项目已使用testify测试库，AI却引入功能重叠的依赖
              </p>
              <p className="text-sm text-red-700 mb-2">
                <strong>根因：</strong> AI缺乏结构化感知，无法理解架构约束
              </p>
              <p className="text-xs text-red-600">
                <strong>解决：</strong> 架构规范显式化 + Context Engineering
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 mb-3">优雅的&ldquo;幻觉&rdquo;</h4>
              <p className="text-sm text-orange-700 mb-2">
                <strong>场景：</strong> AI使用不存在的user.email字段，代码精美却完全错误
              </p>
              <p className="text-sm text-orange-700 mb-2">
                <strong>根因：</strong> 概率模式匹配覆盖项目事实
              </p>
              <p className="text-xs text-orange-600">
                <strong>解决：</strong> 事实规范强化 + 精准上下文注入
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 mb-3">经常性&ldquo;失忆&rdquo;</h4>
              <p className="text-sm text-blue-700 mb-2">
                <strong>场景：</strong> Chat A写的UserRepository，Chat B完全忘记
              </p>
              <p className="text-sm text-blue-700 mb-2">
                <strong>根因：</strong> LLM无状态本质，每次交互都是独立事务
              </p>
              <p className="text-xs text-blue-600">
                <strong>解决：</strong> 外部记忆系统 + 规范文档化
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 mb-3">上下文失焦</h4>
              <p className="text-sm text-purple-700 mb-2">
                <strong>场景：</strong> 一次性提供大量信息，AI被&ldquo;淹没&rdquo;忽略核心指令
              </p>
              <p className="text-sm text-purple-700 mb-2">
                <strong>根因：</strong> 注意力机制的有限性和偏见
              </p>
              <p className="text-xs text-purple-600">
                <strong>解决：</strong> 注意力精准管理 + 结构化上下文设计
              </p>
            </div>
          </div>

          <h2>双核心驱动的任务分级体系</h2>
          <p>
            基于Spec-Writing复杂度和Context Engineering需求，PACE建立了四级分类体系。每个级别都有对应的规范编写策略和上下文管理方法。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Level 1 - 简单规范 + 基础上下文</h4>
              <p className="text-sm text-green-800 mb-2">AI参与度：85-95%</p>
              <div className="text-sm text-green-700 space-y-1">
                <p><strong>规范特征：</strong> 标准EARS语法，明确输入输出</p>
                <p><strong>上下文需求：</strong> 基本项目信息，少量依赖关系</p>
                <p><strong>典型任务：</strong> CRUD操作、数据转换、单元测试</p>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Level 2 - 标准规范 + 结构化上下文</h4>
              <p className="text-sm text-blue-800 mb-2">AI参与度：60-80%</p>
              <div className="text-sm text-blue-700 space-y-1">
                <p><strong>规范特征：</strong> 多模块接口规范，约束条件</p>
                <p><strong>上下文需求：</strong> 架构信息，依赖关系图</p>
                <p><strong>典型任务：</strong> API集成、状态管理、数据流设计</p>
              </div>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
              <h4 className="font-semibold text-orange-900 mb-2">Level 3 - 复杂规范 + 深度上下文工程</h4>
              <p className="text-sm text-orange-800 mb-2">AI参与度：30-50%</p>
              <div className="text-sm text-orange-700 space-y-1">
                <p><strong>规范特征：</strong> 多维度约束，权衡决策规范</p>
                <p><strong>上下文需求：</strong> 完整架构文档，历史决策记录</p>
                <p><strong>典型任务：</strong> 系统架构、性能优化、技术选型</p>
              </div>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">Level 4 - 动态规范 + 自适应上下文</h4>
              <p className="text-sm text-purple-800 mb-2">AI参与度：10-30%</p>
              <div className="text-sm text-purple-700 space-y-1">
                <p><strong>规范特征：</strong> 探索性规范，迭代演进</p>
                <p><strong>上下文需求：</strong> 动态更新，实验反馈循环</p>
                <p><strong>典型任务：</strong> 新技术验证、算法创新、架构重构</p>
              </div>
            </div>
          </div>

          {/* 任务分级立体金字塔可视化 */}
          <div className="my-16">
            <TaskLevelPyramid />
          </div>

          <h2>垂直切片策略</h2>
          <p>
            垂直切片是PACE的核心工作模式，它摒弃了传统的瀑布式开发阶段，转而采用迭代策略，专注于从第一天起就交付价值。
          </p>

          <h3>垂直切片的四个特征</h3>
          <ul>
            <li><strong>功能完整性</strong>：每个切片都是一个可独立交付的功能单元</li>
            <li><strong>端到端覆盖</strong>：从用户界面到数据存储的完整技术栈</li>
            <li><strong>价值导向</strong>：每个切片都能为用户创造可感知的价值</li>
            <li><strong>风险分散</strong>：通过小粒度迭代降低项目风险</li>
          </ul>

          <div className="bg-green-50 p-6 rounded-lg my-8 border-l-4 border-green-500">
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

          <h2>Context Engineering 核心要素</h2>
          <p>
            Context Engineering 不仅仅是信息传递，更是一门设计和构建动态系统的学科，能够在正确的时间，以正确的格式，为AI提供恰当的信息和工具。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 mb-2">信息的结构化组织</h4>
              <p className="text-sm text-blue-700">
                将复杂的业务需求转化为AI可理解的结构化描述
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 mb-2">认知负荷的管理</h4>
              <p className="text-sm text-purple-700">
                在有限的上下文窗口内传递最关键的信息
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 mb-2">意图的精确传达</h4>
              <p className="text-sm text-orange-700">
                确保AI理解人类的真实意图而非表面需求
              </p>
            </div>
          </div>

          {/* 上下文工程可视化 */}
          <div className="my-16">
            <ContextEngineeringFlow />
          </div>

          <h2>标准化实践融合</h2>
          <p>
            PACE 融合了业界优秀的标准化实践，为团队提供开箱即用的体验，同时保持核心灵活性。
          </p>

          <h3>EARS语法集成</h3>
          <p>
            EARS (Easy Approach to Requirements Syntax) 语法通过结构化的自然语言模式，显著减少需求歧义，提升AI理解准确性。
          </p>
          
          <div className="bg-blue-50 p-6 rounded-lg my-8 border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-900 mb-3">EARS语法核心模式</h4>
            <ul className="space-y-2 text-blue-700">
              <li><strong>通用需求</strong>：系统应当...</li>
              <li><strong>事件驱动需求</strong>：当...发生时，系统应当...</li>
              <li><strong>状态驱动需求</strong>：当系统处于...状态时，应当...</li>
              <li><strong>可选特性需求</strong>：如果...，则系统应当...</li>
              <li><strong>复杂需求</strong>：如果...，当...时，系统应当...</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-blue-200">
              <Link href="/ears" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                查看完整的 EARS 语法指南 →
              </Link>
            </div>
          </div>

          <h3>三文档架构融合</h3>
          <p>
            通过观察Kiro等工具的成功实践，PACE支持三文档架构模式，与引用式任务卡完美融合。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900">requirements.md</h4>
              <p className="text-sm text-green-700 mt-2">使用EARS语法的结构化需求描述</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900">design.md</h4>
              <p className="text-sm text-purple-700 mt-2">技术架构和设计决策文档</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900">tasks.md</h4>
              <p className="text-sm text-orange-700 mt-2">具体实现任务的分解</p>
            </div>
          </div>

          <h3>双模式操作框架</h3>
          <p>
            PACE 支持超级个体模式和团队协作模式的灵活切换，满足不同场景需求。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
              <h4 className="font-semibold text-indigo-900 mb-3">超级个体模式</h4>
              <ul className="text-sm text-indigo-700 space-y-1">
                <li>• 个人项目、原型开发</li>
                <li>• 灵活性优先，快速迭代</li>
                <li>• 简化任务卡模板</li>
                <li>• 个人偏好配置</li>
              </ul>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
              <h4 className="font-semibold text-teal-900 mb-3">团队协作模式</h4>
              <ul className="text-sm text-teal-700 space-y-1">
                <li>• 生产项目、长期维护</li>
                <li>• 一致性优先，标准化流程</li>
                <li>• 完整标准化模板</li>
                <li>• 统一配置管理</li>
              </ul>
            </div>
          </div>

          <h2>下一步学习</h2>
          <p>
            理解了核心概念后，建议继续学习：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Link href="/ears" className="block p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900">EARS 语法</h4>
              <p className="text-sm text-purple-700 mt-1">掌握结构化需求表达方法</p>
            </Link>
            <Link href="/implementation" className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900">实施指南</h4>
              <p className="text-sm text-blue-700 mt-1">了解如何在项目中实施PACE</p>
            </Link>
            <Link href="/best-practices" className="block p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900">最佳实践</h4>
              <p className="text-sm text-green-700 mt-1">学习经过验证的实践方法</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}