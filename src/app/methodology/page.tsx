import Layout from '@/components/Layout';
import Link from 'next/link';
import WorkflowSwimlane from '@/components/svg/WorkflowSwimlane';
import AiToolsIntegration from '@/components/svg/AiToolsIntegration';
import AttentionManagement from '@/components/svg/AttentionManagement';
import DualModeFramework from '@/components/svg/DualModeFramework';
import TaskCardEvolution from '@/components/svg/TaskCardEvolution';

export default function MethodologyPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            PACE 方法论概述
          </h1>
          <p className="text-xl text-gray-600">
            程序化AI协作工程体系的完整介绍 · 标准化融合版
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>方法论名称解释</h2>
          <p>
            <strong>PACE</strong> 是 <strong>Programmatic AI Collaboration Engineering</strong> 的缩写，中文译为&ldquo;程序化AI协作工程&rdquo;，其含义为：
          </p>
          <ul>
            <li><strong>Programmatic（程序化）</strong>：强调系统化、结构化的工程方法，通过明确的流程、规范和工具来管理复杂的开发过程</li>
            <li><strong>AI Collaboration（AI协作）</strong>：突出人类工程师与AI系统之间的深度协作，而非简单的工具使用关系</li>
            <li><strong>Engineering（工程）</strong>：体现严谨的工程实践本质，注重质量、效率和可持续发展</li>
          </ul>

          <h2>双核心技术体系</h2>
          <p>
            PACE 建立在两大核心技术之上：<strong>Spec-Writing（规范化编程）</strong> 和 <strong>Context Engineering（上下文工程）</strong>。这一双核心体系解决了AI协作中的根本性挑战：如何让AI理解&ldquo;要什么&rdquo;以及如何高效传达&ldquo;怎么做&rdquo;。
          </p>

          <div className="bg-yellow-50 p-6 rounded-lg my-8 border border-yellow-200">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">范式转变：从Prompt到Specification</h3>
            <p className="text-yellow-800 mb-4">
              正如OpenAI顶级研究员肖恩·格罗夫指出：代码只占价值的10-20%，其余80-90%体现在结构化沟通。
              提示词工程因其&ldquo;一时的、散的&rdquo;特性而价值有限，未来属于&ldquo;规范化编程&rdquo;。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800">旧范式：Prompt Engineering</h4>
                <ul className="text-sm text-red-700 mt-2 space-y-1">
                  <li>• 一次性的提示词</li>
                  <li>• 难以复用和沉淀</li>
                  <li>• 容易产生误解</li>
                  <li>• 缺乏系统性</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800">新范式：Spec-Writing + Context Engineering</h4>
                <ul className="text-sm text-green-700 mt-2 space-y-1">
                  <li>• 可执行的规范文档</li>
                  <li>• 可沉淀、可复用的长期资产</li>
                  <li>• 结构化的上下文传递</li>
                  <li>• 系统化的工程方法</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>核心理念</h2>
          <p>
            PACE的核心洞察是：<strong>成功的AI协作不在于让AI完全替代人类，而在于构建高效的Spec-Writing和Context Engineering体系</strong>，实现精准的人机协作分工。
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-8 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">双核心分工模式</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800">人类负责：Spec-Writing</h4>
                <ul className="text-sm text-green-700 mt-2 space-y-1">
                  <li>• 需求分析和规范设计</li>
                  <li>• 架构决策和约束定义</li>
                  <li>• 质量标准和验收标准</li>
                  <li>• 上下文结构设计</li>
                  <li>• 系统一致性保障</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-800">AI负责：规范执行</h4>
                <ul className="text-sm text-purple-700 mt-2 space-y-1">
                  <li>• 根据规范生成代码</li>
                  <li>• 模式识别和补全</li>
                  <li>• 重复性实现工作</li>
                  <li>• 代码重构和优化</li>
                  <li>• 测试用例生成</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-white rounded-lg border border-blue-300">
              <h4 className="font-semibold text-blue-900 mb-2">Context Engineering：两者协同的桥梁</h4>
              <p className="text-sm text-blue-700">
                通过精准的上下文工程，确保AI准确理解人类的规范意图，实现高质量的规范执行。
              </p>
            </div>
          </div>

          <h2>AI协作的四大经典挑战</h2>
          <p>
            要理解双核心体系的必要性，我们必须深入分析AI协作中的典型&ldquo;翻车&rdquo;场景。这些问题的根源在于LLM的本质特性：它是一个基于概率的序列预测引擎，与软件工程所需的确定性、状态感知存在根本性冲突。
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

          <h2>双核心解决方案</h2>
          <p>
            PACE 通过Spec-Writing + Context Engineering的双核心体系系统性地解决这四大挑战。
            这不是简单的工具使用，而是一门完整的工程学科——如何在AI时代重新定义软件开发的规范化和协作模式。
          </p>

          <div className="bg-green-50 p-6 rounded-lg my-8 border border-green-200">
            <h3 className="text-lg font-semibold text-green-900 mb-4">第一核心：Spec-Writing（规范化编程）</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-green-300">
                <h4 className="font-semibold text-green-800 mb-2">战略规范</h4>
                <p className="text-sm text-green-700">项目级架构约束和设计原则，解决&ldquo;想当然&rdquo;问题</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-300">
                <h4 className="font-semibold text-green-800 mb-2">战术规范</h4>
                <p className="text-sm text-green-700">模块级接口定义和行为规范，防止&ldquo;优雅幻觉&rdquo;</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-300">
                <h4 className="font-semibold text-green-800 mb-2">操作规范</h4>
                <p className="text-sm text-green-700">任务级执行标准和质量要求，建立外部记忆</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg my-8 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">第二核心：Context Engineering（上下文工程）</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg border border-blue-300">
                <h4 className="font-semibold text-blue-800 mb-2">上下文采集</h4>
                <p className="text-xs text-blue-700">从项目中提取关键信息</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-300">
                <h4 className="font-semibold text-blue-800 mb-2">结构化组织</h4>
                <p className="text-xs text-blue-700">三明治提示法、层级标记</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-300">
                <h4 className="font-semibold text-blue-800 mb-2">精准注入</h4>
                <p className="text-xs text-blue-700">注意力管理、重点突出</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-300">
                <h4 className="font-semibold text-blue-800 mb-2">效果验证</h4>
                <p className="text-xs text-blue-700">确保AI理解准确性</p>
              </div>
            </div>
          </div>

          <h3>上下文工程的核心要素</h3>
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

          <h2>垂直切片策略</h2>
          <p>
            垂直切片是PACE的核心工作模式，它强调功能完整性、端到端覆盖、价值导向和风险分散。
          </p>

          <div className="bg-yellow-50 p-6 rounded-lg my-8 border border-yellow-200">
            <h3 className="text-lg font-semibold text-yellow-900 mb-4">垂直切片 vs MVP</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800">MVP（最小可行产品）</h4>
                <ul className="text-sm text-orange-700 mt-2 space-y-1">
                  <li>• 关注产品层面的市场验证</li>
                  <li>• 目标是验证商业假设</li>
                  <li>• 允许&ldquo;脏快&rdquo;的实现方式</li>
                  <li>• 验证完毕后可能被重写</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800">垂直切片</h4>
                <ul className="text-sm text-green-700 mt-2 space-y-1">
                  <li>• 关注工程层面的技术实现</li>
                  <li>• 目标是降低技术风险</li>
                  <li>• 要求符合生产标准</li>
                  <li>• 持续累积成为最终产品</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>双核心驱动的任务分级体系</h2>
          <p>
            基于Spec-Writing复杂度和Context Engineering需求，PACE建立了四级分类体系。
            每个级别都有对应的规范编写策略和上下文管理方法：
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

          {/* PACE 工作流程可视化 */}
          <div className="my-16">
            <WorkflowSwimlane />
          </div>

          <h2>AI协作工具深度集成 (v1.2增强)</h2>
          <p>
            PACE 针对现代AI编程工具进行了深度优化，特别是对Claude Code和Cursor等主流工具的协作策略进行了系统化设计。
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-8 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">工具协作策略</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-100 p-4 rounded-lg border border-blue-300">
                <h4 className="font-semibold text-blue-800">深度规划 + 快速执行</h4>
                <p className="text-sm text-blue-700 mt-2">Claude Code负责整体设计，Cursor负责具体实现</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg border border-purple-300">
                <h4 className="font-semibold text-purple-800">阶段性工具切换</h4>
                <p className="text-sm text-purple-700 mt-2">复杂逻辑使用Claude Code，重复性工作使用Cursor</p>
              </div>
            </div>
          </div>

          {/* AI工具集成可视化 */}
          <div className="my-16">
            <AiToolsIntegration />
          </div>

          <h2>任务卡AI适配增强</h2>
          <p>
            传统任务卡主要面向人类理解，而AI协作需要更结构化、更精确的信息传递。PACE 引入了专门的AI协作指导部分。
          </p>

          {/* 任务卡演进可视化 */}
          <div className="my-16">
            <TaskCardEvolution />
          </div>

          <h2>注意力管理与目标聚焦</h2>
          <p>
            长任务执行中最大的风险是目标偏移。PACE 建立了系统性的注意力管理机制，确保AI协作始终聚焦核心目标。
          </p>

          {/* 注意力管理可视化 */}
          <div className="my-16">
            <AttentionManagement />
          </div>

          <h2>双核心实践工具体系</h2>
          <p>
            PACE 提供完整的工具和模板体系，支持Spec-Writing和Context Engineering的系统化实践。
            这些工具不是简单的模板库，而是经过AI协作优化的规范化工程方法。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Spec-Writing 工具链</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border border-green-300">
                  <h4 className="font-semibold text-green-800 text-sm">EARS语法标准</h4>
                  <p className="text-xs text-green-700 mt-1">结构化需求表达，消除&ldquo;优雅幻觉&rdquo;</p>
                  <Link href="/ears" className="text-xs text-green-600 hover:text-green-800 hover:underline block mt-1">
                    完整语法指南 →
                  </Link>
                </div>
                <div className="bg-white p-3 rounded-lg border border-green-300">
                  <h4 className="font-semibold text-green-800 text-sm">三文档架构</h4>
                  <p className="text-xs text-green-700 mt-1">requirements.md、design.md、tasks.md规范</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-green-300">
                  <h4 className="font-semibold text-green-800 text-sm">分级模板体系</h4>
                  <p className="text-xs text-green-700 mt-1">Level 1-4对应的规范模板库</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Context Engineering 技术栈</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border border-blue-300">
                  <h4 className="font-semibold text-blue-800 text-sm">三明治提示法</h4>
                  <p className="text-xs text-blue-700 mt-1">核心指令置于开头和结尾，避免&ldquo;失焦&rdquo;</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-blue-300">
                  <h4 className="font-semibold text-blue-800 text-sm">结构化标记</h4>
                  <p className="text-xs text-blue-700 mt-1">XML/Markdown标签划分信息层次</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-blue-300">
                  <h4 className="font-semibold text-blue-800 text-sm">RAG记忆系统</h4>
                  <p className="text-xs text-blue-700 mt-1">外部记忆构建，解决&ldquo;失忆&rdquo;问题</p>
                </div>
              </div>
            </div>
          </div>

          <h2>个体与团队双模式支持</h2>
          <p>
            PACE 支持从&ldquo;超级个体&rdquo;到&ldquo;团队协作&rdquo;的无缝切换，平衡个体效率和团队一致性。
          </p>

          {/* 双模式框架可视化 */}
          <div className="my-16">
            <DualModeFramework />
          </div>

          <h2>工程师角色的历史性升级</h2>
          <p>
            PACE 不仅是一套方法论，更代表了软件工程师角色的历史性升级。
            在AI时代，工程师的核心价值从&ldquo;写代码&rdquo;转向&ldquo;设计规范&rdquo;和&ldquo;管理上下文&rdquo;。
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg my-8 border border-blue-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">新时代的核心能力</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-blue-300">
                <h4 className="font-semibold text-blue-900 mb-2">Spec Designer</h4>
                <p className="text-sm text-blue-700">设计高质量、可执行的规范文档，定义AI的工作边界</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-300">
                <h4 className="font-semibold text-purple-900 mb-2">Context Engineer</h4>
                <p className="text-sm text-purple-700">精准管理上下文流，确保AI准确理解人类意图</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-300">
                <h4 className="font-semibold text-green-900 mb-2">Quality Guardian</h4>
                <p className="text-sm text-green-700">保障系统一致性，验证AI输出的质量和正确性</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg my-8 border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">价值重新定义</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-yellow-800">传统价值（10-20%）</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• 编写具体代码</li>
                  <li>• 调试语法错误</li>
                  <li>• 重复性实现</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-yellow-800">新时代价值（80-90%）</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• 架构决策和约束设计</li>
                  <li>• 规范编写和演进</li>
                  <li>• 上下文工程和优化</li>
                  <li>• 人机协作系统治理</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>下一步学习路径</h2>
          <p>
            掌握PACE双核心体系，开启AI时代的工程师进化之路：
          </p>
          <ul>
            <li>深入学习<Link href="/concepts" className="text-blue-600 hover:underline">核心概念</Link></li>
            <li>掌握<Link href="/ears" className="text-blue-600 hover:underline">EARS 语法</Link></li>
            <li>查看<Link href="/implementation" className="text-blue-600 hover:underline">实施指南</Link></li>
            <li>参考<Link href="/best-practices" className="text-blue-600 hover:underline">最佳实践</Link></li>
            <li>研究<Link href="/case-studies" className="text-blue-600 hover:underline">成功案例</Link></li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}