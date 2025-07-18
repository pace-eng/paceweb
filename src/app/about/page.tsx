import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            关于 PACE 1.0
          </h1>
          <p className="text-xl text-gray-600">
            了解 PACE 方法论的发展历程和愿景
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>方法论起源</h2>
          <p>
            PACE 1.0方法论诞生于软件工程领域对AI协作实践的深度思考。随着大型语言模型技术的快速发展，
            传统的软件开发方法论已经无法满足AI时代的需求。PACE 1.0应运而生，
            旨在建立一套系统化、可持续的人机协作开发体系。
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">核心愿景</h3>
            <p className="text-blue-800">
              让每一个软件开发团队都能够高效、安全、可持续地与AI协作，
              在保证软件质量的前提下显著提升开发效率，释放人类创造力，
              专注于真正有价值的创新工作。
            </p>
          </div>

          <h2>方法论特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">科学严谨</h3>
              <p className="text-gray-600">
                基于对AI本质局限性的深度分析，从第一性原理出发，
                构建了完整的理论基础和实践框架。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">实践导向</h3>
              <p className="text-gray-600">
                所有理论都经过真实项目的验证，提供具体可操作的工具、
                模板和最佳实践。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">持续进化</h3>
              <p className="text-gray-600">
                建立了完善的反馈机制和改进体系，随着AI技术的发展
                持续优化和完善方法论。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">开放共享</h3>
              <p className="text-gray-600">
                秉承开放的理念，鼓励社区参与，共同推动方法论的
                发展和推广应用。
              </p>
            </div>
          </div>

          <h2>发展历程</h2>
          <div className="space-y-6 my-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-blue-800">2024年 - 理论奠基</h3>
              <p className="text-blue-700 text-sm mt-1">
                深入研究AI的本质局限性，提出上下文工程的核心概念，
                建立了PACE方法论的理论基础。
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-green-800">2024年下半年 - 实践验证</h3>
              <p className="text-green-700 text-sm mt-1">
                在多个真实项目中应用和验证方法论，不断优化工作流程
                和工具链，积累了丰富的实践经验。
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-purple-800">2025年 - 正式发布</h3>
              <p className="text-purple-700 text-sm mt-1">
                发布PACE 1.0正式版本，建立官方网站和社区，
                开始向更广泛的开发者群体推广。
              </p>
            </div>
          </div>

          <h2>研究团队</h2>
          <p>
            PACE方法论由一支多元化的研究团队开发，团队成员来自软件工程、
            人工智能、用户体验设计等多个领域，具有丰富的理论研究和实践经验。
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">团队构成</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-gray-800">软件工程专家</h4>
                <p className="text-sm text-gray-600 mt-1">
                  负责方法论的工程实践设计和验证
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-800">AI技术专家</h4>
                <p className="text-sm text-gray-600 mt-1">
                  研究AI技术特性和协作模式优化
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-800">产品设计专家</h4>
                <p className="text-sm text-gray-600 mt-1">
                  关注用户体验和工具易用性设计
                </p>
              </div>
            </div>
          </div>

          <h2>社区生态</h2>
          <p>
            PACE 1.0致力于建设一个开放、包容、互助的开发者社区，
            通过知识分享、经验交流、工具开发等方式，共同推动方法论的发展。
          </p>

          <h3>参与方式</h3>
          <ul>
            <li><strong>实践分享</strong>：分享您的PACE 1.0实施经验和案例</li>
            <li><strong>工具贡献</strong>：开发和分享支持PACE 1.0的工具和插件</li>
            <li><strong>文档完善</strong>：帮助改进和翻译方法论文档</li>
            <li><strong>社区建设</strong>：参与社区活动和线下聚会</li>
          </ul>

          <h2>未来展望</h2>
          <p>
            随着AI技术的不断发展，PACE方法论也将持续演进。我们计划在以下方面
            继续深入研究和开发：
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">技术增强</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• 更智能的任务卡生成</li>
                <li>• 自动化的代码质量评估</li>
                <li>• 实时的架构健康监控</li>
                <li>• 个性化的开发助手</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">生态拓展</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• 多语言和框架支持</li>
                <li>• 企业级工具平台</li>
                <li>• 教育培训体系</li>
                <li>• 认证标准制定</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">加入我们</h3>
            <p className="text-lg mb-6">
              一起塑造AI时代软件开发的未来
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                联系我们
              </a>
              <a 
                href="/community" 
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                加入社区
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}