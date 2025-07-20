import Layout from '@/components/Layout';
import Link from 'next/link';
import ContextEngineeringFlow from '@/components/svg/ContextEngineeringFlow';
import TaskLevelPyramid from '@/components/svg/TaskLevelPyramid';
import PaceConceptDiagram from '@/components/svg/PaceConceptDiagram';
import HumanAiRadarChart from '@/components/svg/HumanAiRadarChart';
import LlmPainPoints from '@/components/svg/LlmPainPoints';

export default function ConceptsPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 -mx-4 px-4 py-20 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              核心概念解析
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              深入理解 PACE
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              掌握 <span className="text-blue-600 font-semibold">双核心体系</span> 和 <span className="text-green-600 font-semibold">四级分类</span> 的核心原理
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-10">
              从AI协作挑战到系统性解决方案，全面解析PACE方法论的理论基础和实践指导
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#dual-core" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                双核心体系
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="#challenges" className="inline-flex items-center border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                四大挑战
              </a>
            </div>
          </div>
        </div>

        {/* PACE 概念图解 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">PACE 四大核心概念</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <strong className="text-blue-600">Prompting</strong> + <strong className="text-purple-600">Architecture</strong> + <strong className="text-green-600">Collaboration</strong> + <strong className="text-orange-600">Engineering</strong>
            </p>
          </div>
          
          <div className="my-16">
            <PaceConceptDiagram />
          </div>
        </section>

        {/* 双核心体系 */}
        <section id="dual-core" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">双核心技术体系</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              PACE 建立在两大核心技术之上：<span className="text-green-600 font-semibold">Spec-Writing（规范化编程）</span> 和 <span className="text-blue-600 font-semibold">Context Engineering（上下文工程）</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-900 mb-1">第一核心：Spec-Writing</h3>
                  <p className="text-green-700 font-medium">规范化编程</p>
                </div>
              </div>
              <p className="text-green-800 mb-6 leading-relaxed">
                将需求转化为可执行的规范文档，从一次性提示转向可沉淀、可复用的长期资产。
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-green-700">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">EARS语法标准化需求表达</span>
                </div>
                <div className="flex items-center text-green-700">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">三文档架构(requirements/design/tasks)</span>
                </div>
                <div className="flex items-center text-green-700">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Level 1-4分级规范模板</span>
                </div>
                <div className="flex items-center text-green-700">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">消除&ldquo;优雅幻觉&rdquo;和&ldquo;想当然&rdquo;</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-1">第二核心：Context Engineering</h3>
                  <p className="text-blue-700 font-medium">上下文工程</p>
                </div>
              </div>
              <p className="text-blue-800 mb-6 leading-relaxed">
                精准管理AI的注意力资源，确保规范被准确理解和执行。
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-blue-700">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">三明治提示法管理注意力</span>
                </div>
                <div className="flex items-center text-blue-700">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">结构化标记划分信息层次</span>
                </div>
                <div className="flex items-center text-blue-700">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">RAG记忆系统解决&ldquo;失忆&rdquo;</span>
                </div>
                <div className="flex items-center text-blue-700">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">防止&ldquo;上下文失焦&rdquo;</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 四大经典挑战 */}
        <section id="challenges" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI协作的四大经典挑战</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              要理解双核心体系的必要性，我们必须深入分析AI协作中的典型&ldquo;翻车&rdquo;场景
            </p>
          </div>

          <div className="my-16">
            <LlmPainPoints />
          </div>
        </section>

        {/* 人机协作能力对比 */}
        <section className="mb-20">
          <div className="my-16">
            <HumanAiRadarChart />
          </div>
        </section>

        {/* 四级分类体系 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">双核心驱动的任务分级体系</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              基于Spec-Writing复杂度和Context Engineering需求，建立四级分类体系
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-green-900">Level 1 - 简单规范</h4>
                  <p className="text-sm text-green-700">AI参与度：85-95%</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-white bg-opacity-70 p-3 rounded-lg">
                  <p className="text-xs text-green-800 font-medium mb-1">规范特征：</p>
                  <p className="text-xs text-green-700">标准EARS语法，明确输入输出</p>
                </div>
                <div className="bg-white bg-opacity-70 p-3 rounded-lg">
                  <p className="text-xs text-green-800 font-medium mb-1">典型任务：</p>
                  <p className="text-xs text-green-700">CRUD操作、数据转换、单元测试</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-900">Level 2 - 标准规范</h4>
                  <p className="text-sm text-blue-700">AI参与度：60-80%</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-white bg-opacity-70 p-3 rounded-lg">
                  <p className="text-xs text-blue-800 font-medium mb-1">规范特征：</p>
                  <p className="text-xs text-blue-700">多模块接口规范，约束条件</p>
                </div>
                <div className="bg-white bg-opacity-70 p-3 rounded-lg">
                  <p className="text-xs text-blue-800 font-medium mb-1">典型任务：</p>
                  <p className="text-xs text-blue-700">API集成、状态管理、数据流设计</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-orange-900">Level 3 - 复杂规范</h4>
                  <p className="text-sm text-orange-700">AI参与度：30-50%</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-white bg-opacity-70 p-3 rounded-lg">
                  <p className="text-xs text-orange-800 font-medium mb-1">规范特征：</p>
                  <p className="text-xs text-orange-700">多维度约束，权衡决策规范</p>
                </div>
                <div className="bg-white bg-opacity-70 p-3 rounded-lg">
                  <p className="text-xs text-orange-800 font-medium mb-1">典型任务：</p>
                  <p className="text-xs text-orange-700">系统架构、性能优化、技术选型</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-purple-900">Level 4 - 动态规范</h4>
                  <p className="text-sm text-purple-700">AI参与度：10-30%</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-white bg-opacity-70 p-3 rounded-lg">
                  <p className="text-xs text-purple-800 font-medium mb-1">规范特征：</p>
                  <p className="text-xs text-purple-700">探索性规范，迭代演进</p>
                </div>
                <div className="bg-white bg-opacity-70 p-3 rounded-lg">
                  <p className="text-xs text-purple-800 font-medium mb-1">典型任务：</p>
                  <p className="text-xs text-purple-700">新技术验证、算法创新、架构重构</p>
                </div>
              </div>
            </div>
          </div>

          {/* 任务分级立体金字塔可视化 */}
          <div className="my-16">
            <TaskLevelPyramid />
          </div>
        </section>

        {/* 垂直切片策略 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">垂直切片策略</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              摒弃传统瀑布式开发，采用迭代策略，从第一天起就交付价值
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">垂直切片的四个特征</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">功能完整性</h4>
                    <p className="text-sm text-gray-600">每个切片都是一个可独立交付的功能单元</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">端到端覆盖</h4>
                    <p className="text-sm text-gray-600">从用户界面到数据存储的完整技术栈</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">价值导向</h4>
                    <p className="text-sm text-gray-600">每个切片都能为用户创造可感知的价值</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">风险分散</h4>
                    <p className="text-sm text-gray-600">通过小粒度迭代降低项目风险</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 shadow-xl">
              <h3 className="text-2xl font-bold text-green-900 mb-6">切片演进示例</h3>
              <p className="text-green-700 mb-6">
                我们不试图一次性造出一辆完美的汽车，而是通过构建一系列功能上持续完善、但始终可用的产品来逐步实现目标：
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <span className="bg-green-200 text-green-900 px-4 py-2 rounded-full text-sm font-medium">滑板</span>
                  <div className="flex-1 mx-4 h-px bg-green-300"></div>
                  <span className="text-green-600 text-sm">基础移动</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-green-300 text-green-900 px-4 py-2 rounded-full text-sm font-medium">踏板车</span>
                  <div className="flex-1 mx-4 h-px bg-green-300"></div>
                  <span className="text-green-600 text-sm">操控改进</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-green-400 text-white px-4 py-2 rounded-full text-sm font-medium">自行车</span>
                  <div className="flex-1 mx-4 h-px bg-green-300"></div>
                  <span className="text-green-600 text-sm">效率提升</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">汽车</span>
                  <div className="flex-1 mx-4 h-px bg-green-300"></div>
                  <span className="text-green-600 text-sm">完整体验</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Context Engineering 核心要素 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Context Engineering 核心要素</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              不仅仅是信息传递，更是一门设计和构建动态系统的学科
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-blue-900 mb-3">信息的结构化组织</h4>
              <p className="text-sm text-blue-700">
                将复杂的业务需求转化为AI可理解的结构化描述
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 shadow-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-purple-900 mb-3">认知负荷的管理</h4>
              <p className="text-sm text-purple-700">
                在有限的上下文窗口内传递最关键的信息
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 shadow-lg">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-orange-900 mb-3">意图的精确传达</h4>
              <p className="text-sm text-orange-700">
                确保AI理解人类的真实意图而非表面需求
              </p>
            </div>
          </div>

          {/* 上下文工程可视化 */}
          <div className="my-16">
            <ContextEngineeringFlow />
          </div>
        </section>

        {/* 标准化实践融合 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">标准化实践融合</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              PACE 融合了业界优秀的标准化实践，为团队提供开箱即用的体验
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* EARS语法 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 shadow-xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">EARS语法集成</h3>
              <p className="text-blue-800 mb-6">
                通过结构化的自然语言模式，显著减少需求歧义，提升AI理解准确性
              </p>
              <div className="space-y-3">
                <div className="bg-white bg-opacity-70 p-3 rounded-lg">
                  <span className="text-blue-900 font-semibold">通用需求：</span>
                  <span className="text-blue-700">系统应当...</span>
                </div>
                <div className="bg-white bg-opacity-70 p-3 rounded-lg">
                  <span className="text-blue-900 font-semibold">事件驱动：</span>
                  <span className="text-blue-700">当...发生时，系统应当...</span>
                </div>
                <div className="bg-white bg-opacity-70 p-3 rounded-lg">
                  <span className="text-blue-900 font-semibold">状态驱动：</span>
                  <span className="text-blue-700">当系统处于...状态时，应当...</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-blue-200">
                <Link href="/ears" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  查看完整的 EARS 语法指南 →
                </Link>
              </div>
            </div>

            {/* 三文档架构 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 shadow-xl">
              <h3 className="text-2xl font-bold text-green-900 mb-6">三文档架构融合</h3>
              <p className="text-green-800 mb-6">
                通过观察Kiro等工具的成功实践，与引用式任务卡完美融合
              </p>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-70 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-900">requirements.md</h4>
                  <p className="text-sm text-green-700 mt-1">使用EARS语法的结构化需求描述</p>
                </div>
                <div className="bg-white bg-opacity-70 p-4 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-900">design.md</h4>
                  <p className="text-sm text-purple-700 mt-1">技术架构和设计决策文档</p>
                </div>
                <div className="bg-white bg-opacity-70 p-4 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-900">tasks.md</h4>
                  <p className="text-sm text-orange-700 mt-1">具体实现任务的分解</p>
                </div>
              </div>
            </div>
          </div>

          {/* 双模式操作框架 */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-2xl border border-orange-200 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">双模式操作框架</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                支持超级个体模式和团队协作模式的灵活切换，满足不同场景需求
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border-l-4 border-indigo-400 shadow-md">
                <h4 className="text-lg font-bold text-indigo-800 mb-4">超级个体模式</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-indigo-700">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-sm">个人项目、原型开发</span>
                  </div>
                  <div className="flex items-center text-indigo-700">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-sm">灵活性优先，快速迭代</span>
                  </div>
                  <div className="flex items-center text-indigo-700">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-sm">简化任务卡模板</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border-l-4 border-teal-400 shadow-md">
                <h4 className="text-lg font-bold text-teal-800 mb-4">团队协作模式</h4>
                <div className="space-y-2">
                  <div className="flex items-center text-teal-700">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-sm">生产项目、长期维护</span>
                  </div>
                  <div className="flex items-center text-teal-700">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-sm">一致性优先，标准化流程</span>
                  </div>
                  <div className="flex items-center text-teal-700">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-sm">完整标准化模板</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            深入学习 PACE 核心概念
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            掌握理论基础，开始实践之旅
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/ears"
              className="block p-6 bg-white rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">EARS 语法</h4>
              <p className="text-sm text-gray-600">掌握结构化需求表达方法</p>
            </Link>
            <Link
              href="/implementation"
              className="block p-6 bg-white rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">实施指南</h4>
              <p className="text-sm text-gray-600">了解如何在项目中实施PACE</p>
            </Link>
            <Link
              href="/best-practices"
              className="block p-6 bg-white rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">最佳实践</h4>
              <p className="text-sm text-gray-600">学习经过验证的实践方法</p>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}