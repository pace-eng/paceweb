import Layout from '@/components/Layout';
import Link from 'next/link';

export default function BestPracticesPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 -mx-4 px-4 py-20 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              经验实践指南
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              PACE 最佳实践
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              经过验证的 <span className="text-green-600 font-semibold">实践方法</span> 和 <span className="text-blue-600 font-semibold">经验总结</span>
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-10">
              从任务卡设计到团队协作，全面覆盖PACE实施中的关键实践要点
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#task-cards" className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                任务卡实践
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="#quality" className="inline-flex items-center border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                质量保障
              </a>
            </div>
          </div>
        </div>

        {/* 任务卡设计最佳实践 */}
        <section id="task-cards" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">任务卡设计最佳实践</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              高质量的任务卡是PACE成功的基础，掌握核心要点确保实施效果
            </p>
          </div>

          {/* 质量检查清单 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 shadow-xl mb-12">
            <h3 className="text-2xl font-bold text-green-900 mb-8 text-center">任务卡质量检查清单</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-70 p-6 rounded-xl border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-green-900">上下文完整性</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded mr-3" />
                    <span className="text-sm text-green-700">包含足够的背景信息</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded mr-3" />
                    <span className="text-sm text-green-700">明确的业务目标和用户价值</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded mr-3" />
                    <span className="text-sm text-green-700">完整的技术规格说明</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded mr-3" />
                    <span className="text-sm text-green-700">相关文件清单完备</span>
                  </div>
                </div>
              </div>

              <div className="bg-white bg-opacity-70 p-6 rounded-xl border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-blue-900">可执行性</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded mr-3" />
                    <span className="text-sm text-blue-700">清晰的验收标准</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded mr-3" />
                    <span className="text-sm text-blue-700">具体的实施步骤</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded mr-3" />
                    <span className="text-sm text-blue-700">明确的输入输出</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded mr-3" />
                    <span className="text-sm text-blue-700">可验证的完成标准</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 任务卡模板使用指南 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">分级任务卡使用指南</h3>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-500 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h4 className="text-lg font-bold text-blue-900">Level 1 任务卡要点</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-blue-700">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">重点描述标准化的实现模式</span>
                    </div>
                    <div className="flex items-center text-blue-700">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">提供完整的代码示例和参考</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-blue-700">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">明确输入输出格式和数据结构</span>
                    </div>
                    <div className="flex items-center text-blue-700">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">包含详细的测试用例</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border-l-4 border-green-500 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="text-lg font-bold text-green-900">Level 2 任务卡要点</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-green-700">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">强调模块间的集成关系</span>
                    </div>
                    <div className="flex items-center text-green-700">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">明确接口设计和约定</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-green-700">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">描述数据流和状态管理</span>
                    </div>
                    <div className="flex items-center text-green-700">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">提供架构上下文信息</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl border-l-4 border-orange-500 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="text-lg font-bold text-orange-900">Level 3 任务卡要点</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-orange-700">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">描述技术选型的考虑因素</span>
                    </div>
                    <div className="flex items-center text-orange-700">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">提供多种方案的对比分析</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-orange-700">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">明确架构约束和非功能性需求</span>
                    </div>
                    <div className="flex items-center text-orange-700">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">包含风险评估和缓解策略</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI协作效率优化 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI协作效率优化</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              通过优化提示工程和迭代反馈，显著提升AI协作的效率和质量
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 提示工程最佳实践 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 shadow-xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">高效提示词模板</h3>
              <div className="space-y-6">
                <div className="bg-white bg-opacity-70 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-3">代码生成提示</h4>
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <code className="text-sm text-blue-900 block">
                      请基于以下任务卡生成代码：<br/>
                      [任务背景] + [技术要求] + [代码规范] + [测试要求]<br/>
                      确保代码符合最佳实践并包含错误处理
                    </code>
                  </div>
                </div>
                <div className="bg-white bg-opacity-70 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-3">代码审查提示</h4>
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <code className="text-sm text-blue-900 block">
                      请审查以下代码的：<br/>
                      功能正确性 + 代码质量 + 安全性 + 性能
                    </code>
                  </div>
                </div>
              </div>
            </div>

            {/* 迭代反馈优化 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 shadow-xl">
              <h3 className="text-2xl font-bold text-purple-900 mb-6">迭代反馈优化</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-900">快速反馈循环</h4>
                    <p className="text-sm text-purple-700">建立5-10分钟的快速验证周期</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-900">增量改进</h4>
                    <p className="text-sm text-purple-700">每次迭代专注于解决1-2个主要问题</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-900">上下文保持</h4>
                    <p className="text-sm text-purple-700">在同一对话中保持相关上下文信息</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-900">明确指令</h4>
                    <p className="text-sm text-purple-700">使用具体、可操作的修改指令</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 质量保障体系 */}
        <section id="quality" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">质量保障体系</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              建立多层次的质量保障体系是PACE成功的关键
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border border-yellow-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-yellow-900 mb-3">任务卡质量</h4>
              <div className="space-y-2">
                <div className="flex items-center text-yellow-700">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-sm">同行评审制度</span>
                </div>
                <div className="flex items-center text-yellow-700">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-sm">模板一致性检查</span>
                </div>
                <div className="flex items-center text-yellow-700">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-sm">上下文完整性验证</span>
                </div>
                <div className="flex items-center text-yellow-700">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-sm">可执行性测试</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-blue-900 mb-3">代码质量</h4>
              <div className="space-y-2">
                <div className="flex items-center text-blue-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-sm">静态代码分析</span>
                </div>
                <div className="flex items-center text-blue-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-sm">人工代码审查</span>
                </div>
                <div className="flex items-center text-blue-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-sm">单元测试覆盖</span>
                </div>
                <div className="flex items-center text-blue-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-sm">集成测试验证</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-green-900 mb-3">架构质量</h4>
              <div className="space-y-2">
                <div className="flex items-center text-green-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-sm">架构一致性检查</span>
                </div>
                <div className="flex items-center text-green-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-sm">依赖关系分析</span>
                </div>
                <div className="flex items-center text-green-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-sm">性能指标监控</span>
                </div>
                <div className="flex items-center text-green-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-sm">技术债务跟踪</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 团队协作优化 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">团队协作优化</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              有效的团队协作是PACE实施成功的重要保障
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 角色分工建议 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">角色分工建议</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold text-sm">PM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">产品负责人</h4>
                    <p className="text-sm text-gray-600 mt-1">负责业务需求定义、用户价值确认、路线图规划</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold text-xs">架构师</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">技术架构师</h4>
                    <p className="text-sm text-gray-600 mt-1">负责技术架构设计、技术选型决策、架构治理</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold text-sm">Dev</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">开发工程师</h4>
                    <p className="text-sm text-gray-600 mt-1">负责任务卡设计、AI协作开发、代码质量保障</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold text-sm">QA</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">质量工程师</h4>
                    <p className="text-sm text-gray-600 mt-1">负责测试策略制定、质量监控、自动化测试</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 协作流程优化 */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl border border-indigo-200 shadow-xl">
              <h3 className="text-2xl font-bold text-indigo-900 mb-6">协作流程优化</h3>
              <div className="space-y-4">
                <div className="bg-white bg-opacity-70 p-4 rounded-lg border border-indigo-200">
                  <h4 className="font-semibold text-indigo-900 mb-2">每日同步</h4>
                  <p className="text-sm text-indigo-700">10分钟快速同步，重点关注阻塞问题</p>
                </div>
                <div className="bg-white bg-opacity-70 p-4 rounded-lg border border-indigo-200">
                  <h4 className="font-semibold text-indigo-900 mb-2">任务卡评审</h4>
                  <p className="text-sm text-indigo-700">每个任务卡在实施前必须经过同行评审</p>
                </div>
                <div className="bg-white bg-opacity-70 p-4 rounded-lg border border-indigo-200">
                  <h4 className="font-semibold text-indigo-900 mb-2">代码配对</h4>
                  <p className="text-sm text-indigo-700">复杂任务采用配对编程模式</p>
                </div>
                <div className="bg-white bg-opacity-70 p-4 rounded-lg border border-indigo-200">
                  <h4 className="font-semibold text-indigo-900 mb-2">知识分享</h4>
                  <p className="text-sm text-indigo-700">每周分享AI协作的新发现和最佳实践</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 工具链最佳实践 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">工具链最佳实践</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              选择和配置合适的工具链对PACE的成功至关重要
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">开发工具</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-16 text-sm font-semibold text-gray-800">IDE:</span>
                  <span className="text-sm text-gray-600">VS Code + AI插件</span>
                </div>
                <div className="flex items-center">
                  <span className="w-16 text-sm font-semibold text-gray-800">版本控制:</span>
                  <span className="text-sm text-gray-600">Git + GitHub/GitLab</span>
                </div>
                <div className="flex items-center">
                  <span className="w-16 text-sm font-semibold text-gray-800">AI助手:</span>
                  <span className="text-sm text-gray-600">Claude Code, GPT-o3, Copilot</span>
                </div>
                <div className="flex items-center">
                  <span className="w-16 text-sm font-semibold text-gray-800">代码质量:</span>
                  <span className="text-sm text-gray-600">ESLint, Prettier, SonarQube</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl border border-teal-200 shadow-xl">
              <h3 className="text-2xl font-bold text-teal-900 mb-6">协作工具</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-16 text-sm font-semibold text-teal-800">项目管理:</span>
                  <span className="text-sm text-teal-600">Notion, Linear, Jira</span>
                </div>
                <div className="flex items-center">
                  <span className="w-16 text-sm font-semibold text-teal-800">文档协作:</span>
                  <span className="text-sm text-teal-600">Notion, Confluence</span>
                </div>
                <div className="flex items-center">
                  <span className="w-16 text-sm font-semibold text-teal-800">沟通协作:</span>
                  <span className="text-sm text-teal-600">Slack, Discord</span>
                </div>
                <div className="flex items-center">
                  <span className="w-16 text-sm font-semibold text-teal-800">设计工具:</span>
                  <span className="text-sm text-teal-600">Figma, Miro</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 常见陷阱与规避策略 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">常见陷阱与规避策略</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              识别并避免PACE实施中的常见问题
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border border-red-200 shadow-xl">
            <h3 className="text-2xl font-bold text-red-900 mb-8 text-center">⚠️ 常见陷阱警示</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-70 p-6 rounded-xl border border-red-200">
                <h4 className="text-lg font-bold text-red-900 mb-3">过度依赖AI</h4>
                <p className="text-sm text-red-700 mb-3">盲目相信AI生成的代码，缺乏人工审查</p>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <p className="text-xs text-green-800 font-semibold mb-1">规避策略：</p>
                  <p className="text-xs text-green-700">建立严格的代码审查流程，保持人工把关</p>
                </div>
              </div>

              <div className="bg-white bg-opacity-70 p-6 rounded-xl border border-red-200">
                <h4 className="text-lg font-bold text-red-900 mb-3">任务卡质量不高</h4>
                <p className="text-sm text-red-700 mb-3">任务卡描述模糊，上下文信息不足</p>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <p className="text-xs text-green-800 font-semibold mb-1">规避策略：</p>
                  <p className="text-xs text-green-700">制定任务卡质量标准，建立评审机制</p>
                </div>
              </div>

              <div className="bg-white bg-opacity-70 p-6 rounded-xl border border-red-200">
                <h4 className="text-lg font-bold text-red-900 mb-3">忽视架构治理</h4>
                <p className="text-sm text-red-700 mb-3">只关注功能实现，忽视架构一致性</p>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <p className="text-xs text-green-800 font-semibold mb-1">规避策略：</p>
                  <p className="text-xs text-green-700">建立架构守护者机制，定期架构评审</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 成功指标与度量 */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">成功指标与度量</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              建立合适的指标体系来度量PACE的实施效果
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 shadow-xl text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-4">效率指标</h4>
              <div className="space-y-2">
                <div className="text-sm text-blue-700">开发速度提升</div>
                <div className="text-sm text-blue-700">任务完成率</div>
                <div className="text-sm text-blue-700">资源利用率</div>
                <div className="text-sm text-blue-700">自动化程度</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200 shadow-xl text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-green-900 mb-4">质量指标</h4>
              <div className="space-y-2">
                <div className="text-sm text-green-700">代码质量评分</div>
                <div className="text-sm text-green-700">缺陷率下降</div>
                <div className="text-sm text-green-700">测试覆盖率</div>
                <div className="text-sm text-green-700">用户满意度</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 shadow-xl text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-purple-900 mb-4">创新指标</h4>
              <div className="space-y-2">
                <div className="text-sm text-purple-700">新技术采用</div>
                <div className="text-sm text-purple-700">创新项目数</div>
                <div className="text-sm text-purple-700">知识积累</div>
                <div className="text-sm text-purple-700">方法论改进</div>
              </div>
            </div>
          </div>
        </section>

        {/* 持续改进建议 */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-2xl border border-orange-200 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">持续改进建议</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                PACE是一个持续演进的方法论，需要在实践中不断优化和改进
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border-l-4 border-orange-400 shadow-md">
                <h4 className="text-lg font-bold text-orange-800 mb-4">持续优化</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-orange-700">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-sm">定期回顾：每月进行一次PACE实施效果回顾</span>
                  </div>
                  <div className="flex items-center text-orange-700">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-sm">最佳实践分享：建立团队内部的最佳实践分享机制</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border-l-4 border-yellow-400 shadow-md">
                <h4 className="text-lg font-bold text-yellow-800 mb-4">方法论进化</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-yellow-700">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-sm">工具优化：持续评估和优化工具链配置</span>
                  </div>
                  <div className="flex items-center text-yellow-700">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-sm">方法论进化：基于实践反馈持续改进方法论</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gray-900 to-green-900 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            开始实践 PACE 最佳方法
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            将理论转化为实践，在项目中应用这些经验
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <p className="text-sm text-gray-600">从理论到实践的完整指导</p>
            </Link>
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
              <p className="text-sm text-gray-600">掌握结构化需求表达</p>
            </Link>
            <Link
              href="/case-studies"
              className="block p-6 bg-white rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">案例研究</h4>
              <p className="text-sm text-gray-600">学习成功的实际案例</p>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}