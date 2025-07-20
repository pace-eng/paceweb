import Layout from '@/components/Layout';

export default function CaseStudiesPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                成功案例分享
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                真实项目，<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">显著成效</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                探索 PACE 方法论在不同规模、不同类型项目中的实际应用效果，
                <br className="hidden sm:block" />
                从电商平台到移动应用，从创业公司到企业级系统
              </p>
            </div>
          </div>
        </div>

        {/* Cases Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Case 1 */}
          <div className="mb-32">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">1</span>
                      </div>
                      <span className="text-blue-100 text-sm font-medium">大型电商平台</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">用户认证系统重构</h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-500/30 text-blue-100 px-3 py-1 rounded-full text-sm">系统重构</span>
                      <span className="bg-blue-500/30 text-blue-100 px-3 py-1 rounded-full text-sm">安全提升</span>
                      <span className="bg-blue-500/30 text-blue-100 px-3 py-1 rounded-full text-sm">7周完成</span>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 mb-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <span className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">!</span>
                    </span>
                    项目背景
                  </h3>
                  <p className="text-blue-800 leading-relaxed">
                    某大型电商平台需要重构老旧的用户认证系统，支持多种登录方式（邮箱、手机、第三方登录），
                    同时提升系统安全性和用户体验。原系统技术债务严重，维护困难。
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <span className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </span>
                      实施过程
                    </h3>
                    
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                      <h4 className="font-bold text-green-800 text-lg mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 bg-green-500 rounded-full text-white text-xs flex items-center justify-center font-bold">0</span>
                        蓝图规划（1周）
                      </h4>
                      <ul className="space-y-3 text-green-700">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          分析现有系统痛点和用户需求
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          AI辅助生成用户认证流程原型
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          设计新认证系统的整体架构
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          制定包含8个垂直切片的路线图
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                      <h4 className="font-bold text-blue-800 text-lg mb-4 flex items-center gap-2">
                        <span className="w-6 h-6 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center font-bold">1</span>
                        切片实施（6周）
                      </h4>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100">
                          <h5 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                            <span className="w-4 h-4 bg-purple-500 rounded text-white text-xs flex items-center justify-center">1-4</span>
                            基础功能切片
                          </h5>
                          <div className="grid grid-cols-2 gap-2">
                            <span className="text-xs text-purple-700 bg-purple-50 px-2 py-1 rounded">邮箱密码登录</span>
                            <span className="text-xs text-purple-700 bg-purple-50 px-2 py-1 rounded">手机验证码</span>
                            <span className="text-xs text-purple-700 bg-purple-50 px-2 py-1 rounded">用户注册</span>
                            <span className="text-xs text-purple-700 bg-purple-50 px-2 py-1 rounded">密码重置</span>
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-orange-100">
                          <h5 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                            <span className="w-4 h-4 bg-orange-500 rounded text-white text-xs flex items-center justify-center">5-8</span>
                            高级功能切片
                          </h5>
                          <div className="grid grid-cols-2 gap-2">
                            <span className="text-xs text-orange-700 bg-orange-50 px-2 py-1 rounded">第三方登录</span>
                            <span className="text-xs text-orange-700 bg-orange-50 px-2 py-1 rounded">两步验证</span>
                            <span className="text-xs text-orange-700 bg-orange-50 px-2 py-1 rounded">设备管理</span>
                            <span className="text-xs text-orange-700 bg-orange-50 px-2 py-1 rounded">安全日志</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <span className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                      关键成果
                    </h3>
                    
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-2xl border border-emerald-200">
                      <h4 className="font-bold text-emerald-800 text-lg mb-4">效率提升</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-emerald-700">开发效率提升</span>
                          <span className="font-bold text-2xl text-emerald-600">60%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-emerald-700">代码生成自动化率</span>
                          <span className="font-bold text-2xl text-emerald-600">85%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-emerald-700">单元测试覆盖率</span>
                          <span className="font-bold text-2xl text-emerald-600">95%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-emerald-700">集成时间缩短</span>
                          <span className="font-bold text-2xl text-emerald-600">70%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                      <h4 className="font-bold text-blue-800 text-lg mb-4">质量改善</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-blue-700">生产环境缺陷率降低</span>
                          <span className="font-bold text-2xl text-blue-600">80%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-blue-700">代码重复度降低</span>
                          <span className="font-bold text-2xl text-blue-600">65%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-blue-700">系统响应时间改善</span>
                          <span className="font-bold text-2xl text-blue-600">40%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-blue-700">用户登录成功率</span>
                          <span className="font-bold text-2xl text-blue-600">99.8%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl border border-gray-200 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="w-6 h-6 bg-gray-600 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    关键成功因素
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <h4 className="font-bold text-gray-800 mb-2">充分的前期规划</h4>
                      <p className="text-sm text-gray-600">花费1周时间进行详细的架构设计和切片规划</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <h4 className="font-bold text-gray-800 mb-2">高质量任务卡</h4>
                      <p className="text-sm text-gray-600">每个任务卡包含完整的上下文和明确的验收标准</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <h4 className="font-bold text-gray-800 mb-2">有效的AI协作</h4>
                      <p className="text-sm text-gray-600">合理的人机分工，AI负责代码生成，人类负责架构设计</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <h4 className="font-bold text-gray-800 mb-2">严格的质量保障</h4>
                      <p className="text-sm text-gray-600">建立了三层质量检查机制</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl border border-amber-200">
                  <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 bg-amber-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </span>
                    客户感言
                  </h3>
                  <blockquote className="text-amber-800 mb-4 italic text-lg leading-relaxed">
                    &ldquo;PACE 让我们在保证质量的前提下，显著提升了开发效率。最重要的是，团队对AI协作的信心大大增强。&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center">
                      <span className="text-amber-800 font-bold">张</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-amber-900">张工程师</p>
                      <p className="text-xs text-amber-700">项目技术负责人</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative my-20">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 rounded-full">
                <span className="text-white font-semibold">更多成功案例</span>
              </div>
            </div>
          </div>

        {/* Case Study 2 */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6">
              <h2 className="text-3xl font-bold text-white mb-2">案例二：移动应用快速原型开发</h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-500/20 text-purple-100 px-3 py-1 rounded-full text-sm">创业公司</span>
                <span className="bg-purple-500/20 text-purple-100 px-3 py-1 rounded-full text-sm">MVP开发</span>
                <span className="bg-purple-500/20 text-purple-100 px-3 py-1 rounded-full text-sm">10周完成</span>
              </div>
            </div>
            
            <div className="p-8">
              <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500 mb-8">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">项目背景</h3>
                <p className="text-purple-800 leading-relaxed">
                  某创业公司需要在3个月内开发一款社交类移动应用的MVP版本，用于验证商业模式和获取种子用户。
                  团队规模小（4人），需要快速验证产品假设。
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">实施策略</h3>
                  
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                    <h4 className="font-bold text-purple-800 text-lg mb-3">快速蓝图（3天）</h4>
                    <ul className="text-sm text-purple-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        用户访谈和需求分析
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        AI辅助生成交互原型
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        技术架构快速决策
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        12个微切片的敏捷路线图
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                    <h4 className="font-bold text-orange-800 text-lg mb-4">敏捷切片（2-3天/切片）</h4>
                    <p className="text-sm text-orange-700 mb-3">采用极短的切片周期，每个切片专注于一个核心用户场景：</p>
                    <div className="grid grid-cols-1 gap-2">
                      <span className="text-xs text-orange-700 bg-white px-2 py-1 rounded">用户注册/登录（2天）</span>
                      <span className="text-xs text-orange-700 bg-white px-2 py-1 rounded">个人资料设置（2天）</span>
                      <span className="text-xs text-orange-700 bg-white px-2 py-1 rounded">内容发布（3天）</span>
                      <span className="text-xs text-orange-700 bg-white px-2 py-1 rounded">社交互动（3天）</span>
                      <span className="text-xs text-orange-700 bg-white px-2 py-1 rounded">消息通知（2天）</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">AI协作亮点</h3>
                  
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h4 className="font-bold text-blue-800 text-lg mb-4">UI组件生成</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-blue-700">React Native组件生成</span>
                        <span className="font-bold text-blue-600 text-lg">90%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="text-sm text-blue-700">自动适配iOS和Android样式</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="text-sm text-blue-700">响应式设计自动优化</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="text-sm text-blue-700">无障碍功能自动添加</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h4 className="font-bold text-green-800 text-lg mb-4">业务逻辑开发</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-sm text-green-700">状态管理代码自动生成</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-sm text-green-700">API调用逻辑批量创建</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-sm text-green-700">数据验证规则自动实现</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-sm text-green-700">错误处理机制统一添加</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">项目成果</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-green-600 mb-2">10周</div>
                    <p className="text-sm font-semibold text-green-700">实际开发时间</p>
                    <p className="text-xs text-green-600">（计划12周）</p>
                  </div>
                  <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-green-600 mb-2">70%</div>
                    <p className="text-sm font-semibold text-green-700">开发时间节省</p>
                    <p className="text-xs text-green-600">（相比传统开发）</p>
                  </div>
                  <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-3xl font-bold text-green-600 mb-2">4.2/5</div>
                    <p className="text-sm font-semibold text-green-700">用户体验评分</p>
                    <p className="text-xs text-green-600">（种子用户反馈）</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">商业价值</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">快速市场验证</h4>
                        <p className="text-sm text-gray-600">提前2个月进入市场，抢占先发优势</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">降低开发成本</h4>
                        <p className="text-sm text-gray-600">节省开发成本约40万元</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">用户反馈积累</h4>
                        <p className="text-sm text-gray-600">获得500+种子用户的真实反馈</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">投资吸引</h4>
                        <p className="text-sm text-gray-600">基于MVP成功获得天使轮融资</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <h3 className="text-xl font-bold text-green-900 mb-4">创始人感言</h3>
                  <blockquote className="text-green-800 mb-4 italic text-lg leading-relaxed">
                    &ldquo;PACE 让我们这样的小团队也能快速构建高质量的产品。AI协作不仅提升了效率，更重要的是让我们能专注于产品创新和用户体验。&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                      <span className="text-green-800 font-bold">李</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-900">李总</p>
                      <p className="text-xs text-green-700">产品创始人</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Case 3 */}
          <div className="mb-32">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">3</span>
                      </div>
                      <span className="text-orange-100 text-sm font-medium">制造业企业</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">内部管理系统现代化</h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-orange-500/30 text-orange-100 px-3 py-1 rounded-full text-sm">系统现代化</span>
                      <span className="bg-orange-500/30 text-orange-100 px-3 py-1 rounded-full text-sm">技术栈升级</span>
                      <span className="bg-orange-500/30 text-orange-100 px-3 py-1 rounded-full text-sm">18个月</span>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100 mb-8">
                  <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-2">
                    <span className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">!</span>
                    </span>
                    项目背景
                  </h3>
                  <p className="text-orange-800 leading-relaxed">
                    某制造业企业需要将10年前开发的内部管理系统进行现代化改造，包括技术栈升级、
                    用户体验改善、移动端支持等。系统复杂，涉及多个业务模块。
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="w-6 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </span>
                    挑战与解决方案
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl border border-red-200">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                        <span className="w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">1</span>
                        遗留系统复杂度高
                      </h4>
                      <p className="text-sm text-red-700 mb-3">系统包含20多个模块，业务逻辑复杂，文档不完整</p>
                      <div className="bg-white p-3 rounded-lg border border-red-100">
                        <p className="text-xs text-red-600"><strong>解决方案：</strong>采用渐进式迁移策略，每个切片专注于1-2个模块的现代化</p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-2xl border border-yellow-200">
                      <h4 className="font-bold text-yellow-800 mb-3 flex items-center gap-2">
                        <span className="w-5 h-5 bg-yellow-500 rounded-full text-white text-xs flex items-center justify-center">2</span>
                        业务不能中断
                      </h4>
                      <p className="text-sm text-yellow-700 mb-3">系统24/7运行，不能停机进行大规模改造</p>
                      <div className="bg-white p-3 rounded-lg border border-yellow-100">
                        <p className="text-xs text-yellow-600"><strong>解决方案：</strong>采用双轨并行策略，新旧系统逐步切换</p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                      <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                        <span className="w-5 h-5 bg-green-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
                        团队技能转型
                      </h4>
                      <p className="text-sm text-green-700 mb-3">团队主要使用传统技术，需要学习现代前端框架</p>
                      <div className="bg-white p-3 rounded-lg border border-green-100">
                        <p className="text-xs text-green-600"><strong>解决方案：</strong>AI协作降低学习门槛，边做边学</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-8 rounded-2xl border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </span>
                    实施成果
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                      <div className="text-3xl font-bold text-blue-600 mb-2">18个月</div>
                      <p className="text-sm font-semibold text-blue-700">完成时间</p>
                    </div>
                    <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                      <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                      <p className="text-sm font-semibold text-green-700">用户满意度</p>
                    </div>
                    <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                      <div className="text-3xl font-bold text-purple-600 mb-2">50%</div>
                      <p className="text-sm font-semibold text-purple-700">操作效率提升</p>
                    </div>
                    <div className="text-center bg-white p-6 rounded-xl shadow-sm">
                      <div className="text-3xl font-bold text-orange-600 mb-2">0</div>
                      <p className="text-sm font-semibold text-orange-700">业务中断时间</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-3xl p-12 border border-gray-200">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">总体经验总结</h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </span>
                共同成功要素
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-4 text-lg flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </span>
                    技术层面
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-blue-700">高质量的任务卡设计</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-blue-700">合理的AI工具选择和配置</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-blue-700">严格的代码质量检查</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-blue-700">持续的架构治理</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                  <h4 className="font-bold text-green-900 mb-4 text-lg flex items-center gap-2">
                    <span className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </span>
                    组织层面
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-green-700">领导层的支持和推动</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-green-700">充分的团队培训</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-green-700">渐进式的文化变革</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-green-700">及时的反馈和调整</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </span>
                量化收益统计
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 border-b border-gray-200">指标</th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-blue-700 border-b border-gray-200">电商认证系统</th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-purple-700 border-b border-gray-200">移动应用MVP</th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-orange-700 border-b border-gray-200">企业系统现代化</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b border-gray-100">开发效率提升</td>
                      <td className="px-6 py-4 text-center text-lg font-bold text-blue-600 border-b border-gray-100">60%</td>
                      <td className="px-6 py-4 text-center text-lg font-bold text-purple-600 border-b border-gray-100">70%</td>
                      <td className="px-6 py-4 text-center text-lg font-bold text-orange-600 border-b border-gray-100">45%</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b border-gray-100">代码质量改善</td>
                      <td className="px-6 py-4 text-center text-lg font-bold text-blue-600 border-b border-gray-100">85%</td>
                      <td className="px-6 py-4 text-center text-lg font-bold text-purple-600 border-b border-gray-100">80%</td>
                      <td className="px-6 py-4 text-center text-lg font-bold text-orange-600 border-b border-gray-100">75%</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b border-gray-100">缺陷率降低</td>
                      <td className="px-6 py-4 text-center text-lg font-bold text-blue-600 border-b border-gray-100">80%</td>
                      <td className="px-6 py-4 text-center text-lg font-bold text-purple-600 border-b border-gray-100">75%</td>
                      <td className="px-6 py-4 text-center text-lg font-bold text-orange-600 border-b border-gray-100">65%</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">团队满意度</td>
                      <td className="px-6 py-4 text-center text-lg font-bold text-blue-600">90%</td>
                      <td className="px-6 py-4 text-center text-lg font-bold text-purple-600">95%</td>
                      <td className="px-6 py-4 text-center text-lg font-bold text-orange-600">85%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-200">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </span>
                下一步建议
              </h2>
              <p className="text-indigo-800 mb-6 text-lg">
                如果您正在考虑实施 PACE，我们建议：
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100">
                  <h4 className="font-bold text-indigo-800 mb-3 flex items-center gap-2">
                    <span className="w-5 h-5 bg-indigo-500 rounded-full text-white text-xs flex items-center justify-center">1</span>
                    从小型试点项目开始
                  </h4>
                  <p className="text-sm text-indigo-700">积累经验，降低风险，建立团队信心</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100">
                  <h4 className="font-bold text-indigo-800 mb-3 flex items-center gap-2">
                    <span className="w-5 h-5 bg-indigo-500 rounded-full text-white text-xs flex items-center justify-center">2</span>
                    重视团队培训和能力建设
                  </h4>
                  <p className="text-sm text-indigo-700">投资于人员技能提升，确保方法论的有效执行</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100">
                  <h4 className="font-bold text-indigo-800 mb-3 flex items-center gap-2">
                    <span className="w-5 h-5 bg-indigo-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
                    建立完善的质量保障体系
                  </h4>
                  <p className="text-sm text-indigo-700">确保代码质量和项目交付标准</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100">
                  <h4 className="font-bold text-indigo-800 mb-3 flex items-center gap-2">
                    <span className="w-5 h-5 bg-indigo-500 rounded-full text-white text-xs flex items-center justify-center">4</span>
                    保持开放心态，持续学习改进
                  </h4>
                  <p className="text-sm text-indigo-700">拥抱变化，不断优化流程和方法</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}