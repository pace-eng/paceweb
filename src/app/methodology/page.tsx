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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 -mx-4 px-4 py-20 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              程序化AI协作工程体系
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              PACE 方法论
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              基于 <span className="text-blue-600 font-semibold">Prompting + Architecture + Collaboration + Engineering</span> 的双核心体系
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-10">
              业界首个系统化的规范化编程与上下文工程实践方法论，重新定义AI时代的软件工程标准
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#dual-core" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                了解双核心体系
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="#challenges" className="inline-flex items-center border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                查看解决方案
              </a>
            </div>
          </div>
        </div>

        {/* 方法论名称解释 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">方法论名称解释</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <strong className="text-blue-600">PACE</strong> 是 <strong className="text-green-600">Prompting Architecture Collaboration Engineering</strong> 的缩写
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Prompting</h3>
              <p className="text-sm text-gray-600 mb-3">提示工程</p>
              <p className="text-sm text-gray-700">上下文工程的核心，通过精准的提示设计和注意力管理，确保AI理解和执行复杂任务</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Architecture</h3>
              <p className="text-sm text-gray-600 mb-3">架构化</p>
              <p className="text-sm text-gray-700">Spec-Writing的核心，将需求转化为可执行的规范文档，建立系统化的架构约束和设计模式</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-sm text-gray-600 mb-3">协作化</p>
              <p className="text-sm text-gray-700">人机AI协作的最优化，建立人类创造力、判断力与AI执行力、计算力的完美分工和深度融合</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Engineering</h3>
              <p className="text-sm text-gray-600 mb-3">工程化</p>
              <p className="text-sm text-gray-700">体现严谨的工程实践本质，注重质量、效率和可持续发展</p>
            </div>
          </div>
        </section>

        {/* 双核心技术体系 */}
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
                将需求转化为可执行的规范文档。从一次性提示转向可沉淀、可复用的长期资产。
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

          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-2xl border border-orange-200 shadow-lg">
            <div className="text-center mb-6">
              <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                范式转变
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">从Prompt到Specification</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                正如OpenAI顶级研究员肖恩·格罗夫指出：代码只占价值的10-20%，其余80-90%体现在结构化沟通。
                提示词工程因其&ldquo;一时的、散的&rdquo;特性而价值有限，未来属于&ldquo;规范化编程&rdquo;。
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border-l-4 border-red-400 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-red-800">旧范式：Prompt Engineering</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-red-700">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-sm">一次性的提示词</span>
                  </div>
                  <div className="flex items-center text-red-700">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-sm">难以复用和沉淀</span>
                  </div>
                  <div className="flex items-center text-red-700">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-sm">容易产生误解</span>
                  </div>
                  <div className="flex items-center text-red-700">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-sm">缺乏系统性</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border-l-4 border-green-400 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-green-800">新范式：Spec-Writing + Context Engineering</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-green-700">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-sm">可执行的规范文档</span>
                  </div>
                  <div className="flex items-center text-green-700">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-sm">可沉淀、可复用的长期资产</span>
                  </div>
                  <div className="flex items-center text-green-700">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-sm">结构化的上下文传递</span>
                  </div>
                  <div className="flex items-center text-green-700">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-sm">系统化的工程方法</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI协作的四大经典挑战 */}
        <section id="challenges" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI协作的四大经典挑战</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              要理解双核心体系的必要性，我们必须深入分析AI协作中的典型&ldquo;翻车&rdquo;场景。这些问题的根源在于LLM的本质特性：它是一个基于概率的序列预测引擎，与软件工程所需的确定性、状态感知存在根本性冲突。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border-l-4 border-red-500 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.99-.833-2.76 0L4.054 16.5C3.284 18.333 4.246 20 5.786 20z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-900">致命&ldquo;想当然&rdquo;</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-white bg-opacity-70 p-3 rounded-lg">
                  <p className="text-sm text-red-800 font-medium mb-1">场景：</p>
                  <p className="text-sm text-red-700">项目已使用testify测试库，AI却引入功能重叠的依赖</p>
                </div>
                <div className="bg-white bg-opacity-70 p-3 rounded-lg">
                  <p className="text-sm text-red-800 font-medium mb-1">根因：</p>
                  <p className="text-sm text-red-700">AI缺乏结构化感知，无法理解架构约束</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <p className="text-sm text-green-800 font-medium mb-1">解决：</p>
                  <p className="text-sm text-green-700">架构规范显式化 + Context Engineering</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-l-4 border-orange-500 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-orange-900">优雅的&ldquo;幻觉&rdquo;</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-white bg-opacity-70 p-3 rounded-lg">
                  <p className="text-sm text-orange-800 font-medium mb-1">场景：</p>
                  <p className="text-sm text-orange-700">AI使用不存在的user.email字段，代码精美却完全错误</p>
                </div>
                <div className="bg-white bg-opacity-70 p-3 rounded-lg">
                  <p className="text-sm text-orange-800 font-medium mb-1">根因：</p>
                  <p className="text-sm text-orange-700">概率模式匹配覆盖项目事实</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <p className="text-sm text-green-800 font-medium mb-1">解决：</p>
                  <p className="text-sm text-green-700">事实规范强化 + 精准上下文注入</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900">经常性&ldquo;失忆&rdquo;</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-white bg-opacity-70 p-3 rounded-lg">
                  <p className="text-sm text-blue-800 font-medium mb-1">场景：</p>
                  <p className="text-sm text-blue-700">Chat A写的UserRepository，Chat B完全忘记</p>
                </div>
                <div className="bg-white bg-opacity-70 p-3 rounded-lg">
                  <p className="text-sm text-blue-800 font-medium mb-1">根因：</p>
                  <p className="text-sm text-blue-700">LLM无状态本质，每次交互都是独立事务</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <p className="text-sm text-green-800 font-medium mb-1">解决：</p>
                  <p className="text-sm text-green-700">外部记忆系统 + 规范文档化</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-l-4 border-purple-500 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-purple-900">上下文失焦</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-white bg-opacity-70 p-3 rounded-lg">
                  <p className="text-sm text-purple-800 font-medium mb-1">场景：</p>
                  <p className="text-sm text-purple-700">一次性提供大量信息，AI被&ldquo;淹没&rdquo;忽略核心指令</p>
                </div>
                <div className="bg-white bg-opacity-70 p-3 rounded-lg">
                  <p className="text-sm text-purple-800 font-medium mb-1">根因：</p>
                  <p className="text-sm text-purple-700">注意力机制的有限性和偏见</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <p className="text-sm text-green-800 font-medium mb-1">解决：</p>
                  <p className="text-sm text-green-700">注意力精准管理 + 结构化上下文设计</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PACE 工作流程可视化 */}
        <div className="my-16">
          <WorkflowSwimlane />
        </div>

        {/* AI工具集成可视化 */}
        <div className="my-16">
          <AiToolsIntegration />
        </div>

        {/* 任务卡演进可视化 */}
        <div className="my-16">
          <TaskCardEvolution />
        </div>

        {/* 注意力管理可视化 */}
        <div className="my-16">
          <AttentionManagement />
        </div>

        {/* 双模式框架可视化 */}
        <div className="my-16">
          <DualModeFramework />
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            开始使用 PACE 方法论
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            掌握双核心体系，重新定义AI时代的软件工程标准
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/concepts"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              核心概念
            </Link>
            <Link
              href="/implementation"
              className="inline-flex items-center border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              实施指南
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              成功案例
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}