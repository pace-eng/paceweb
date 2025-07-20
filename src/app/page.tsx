import Layout from '@/components/Layout';
import Link from 'next/link';
import PaceConceptDiagram from '@/components/svg/PaceConceptDiagram';
import HumanAiRadarChart from '@/components/svg/HumanAiRadarChart';
import LlmPainPoints from '@/components/svg/LlmPainPoints';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              PACE 方法论
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Spec-Writing + Context Engineering 双核心体系
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto opacity-80">
              业界首个系统化的规范化编程与上下文工程实践方法论。解决AI协作中的四大经典挑战，重新定义工程师在AI时代的核心价值
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/methodology"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                了解方法论
              </Link>
              <Link
                href="/implementation"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                实施指南
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              双核心技术体系
            </h2>
            <p className="text-xl text-gray-600">
              PACE 基于 Spec-Writing + Context Engineering 解决AI协作的根本性挑战
            </p>
          </div>
          
          {/* 双核心体系介绍 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-900">第一核心：Spec-Writing</h3>
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

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">第二核心：Context Engineering</h3>
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

          {/* 四大挑战解决方案 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-red-50 p-6 rounded-lg shadow-md border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.99-.833-2.76 0L4.054 16.5C3.284 18.333 4.246 20 5.786 20z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-red-900">致命&ldquo;想当然&rdquo;</h3>
              <p className="text-red-700 text-sm">
                AI缺乏架构感知 → 架构规范显式化
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg shadow-md border-l-4 border-purple-500">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-purple-900">优雅&ldquo;幻觉&rdquo;</h3>
              <p className="text-purple-700 text-sm">
                AI生成不存在字段 → 事实规范强化
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-green-900">经常性&ldquo;失忆&rdquo;</h3>
              <p className="text-green-700 text-sm">
                AI无状态特性 → 外部记忆系统
              </p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg shadow-md border-l-4 border-orange-500">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-orange-900">上下文失焦</h3>
              <p className="text-orange-700 text-sm">
                注意力机制限制 → 精准注意力管理
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-900">AI工具集成</h3>
              <p className="text-indigo-700">
                深度集成Claude Code、Cursor等现代AI工具，实现最优人机分工
              </p>
            </div>

            <div className="bg-cyan-50 p-6 rounded-lg shadow-md border-l-4 border-cyan-500">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-cyan-900">标准化融合</h3>
              <p className="text-cyan-700">
                融合EARS语法和三文档架构，提供开箱即用的标准化模板体系
              </p>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg shadow-md border-l-4 border-teal-500">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-teal-900">双模式支持</h3>
              <p className="text-teal-700">
                支持超级个体和团队协作双模式，平衡灵活性与一致性
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 为什么需要PACE - LLM协作痛点 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LlmPainPoints />
        </div>
      </section>

      {/* PACE 核心概念可视化 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PaceConceptDiagram />
        </div>
      </section>

      {/* 人机协作能力对比 */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HumanAiRadarChart />
        </div>
      </section>

      {/* Method Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              方法论概述
            </h2>
            <p className="text-xl text-gray-600">
              PACE 通过双核心体系，系统性解决AI协作开发中的核心挑战
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-red-900 mb-6">
                为什么需要 PACE？
              </h3>
              <ul className="space-y-4 text-red-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>致命&ldquo;想当然&rdquo;：</strong>AI缺乏架构感知，引入冲突依赖</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>优雅&ldquo;幻觉&rdquo;：</strong>生成不存在字段，代码精美却完全错误</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>经常性&ldquo;失忆&rdquo;：</strong>AI无状态本质与项目持续状态矛盾</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>上下文失焦：</strong>注意力机制限制导致核心指令被忽略</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-900 mb-4">
                PACE 双核心解决方案
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">S</div>
                  <span className="font-semibold text-green-800">Spec-Writing 规范化编程</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">C</div>
                  <span className="font-semibold text-blue-800">Context Engineering 上下文工程</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">E</div>
                  <span className="font-semibold text-purple-800">EARS语法 + 三文档架构</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">L</div>
                  <span className="font-semibold text-orange-800">Level 1-4 双核心分级</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            开始使用 PACE
          </h2>
          <p className="text-xl mb-8 opacity-90">
            掌握双核心体系，重新定义AI时代的软件工程
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/methodology"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              深入了解方法论
            </Link>
            <Link
              href="/case-studies"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              查看成功案例
            </Link>
            <a
              href="https://github.com/pace-eng/pace"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              GitHub 开源项目
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
