import Layout from '@/components/Layout';

export default function ContactPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            联系我们
          </h1>
          <p className="text-xl text-gray-600">
            与 PACE 1.0 团队建立联系
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>参与社区</h2>
          <p>
            PACE 1.0 是一个开放的方法论，我们欢迎更多的开发者和团队参与到这个项目中来，共同完善和发展这套协作体系。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">GitHub</h3>
              <p className="text-blue-700 mb-4">
                查看源代码、提交问题和参与开发
              </p>
              <a 
                href="https://github.com/pace-eng" 
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                访问 GitHub
              </a>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-lg font-semibold text-green-900 mb-3">讨论社区</h3>
              <p className="text-green-700 mb-4">
                分享经验、讨论最佳实践和获取帮助
              </p>
              <a 
                href="https://github.com/pace-eng/discussions" 
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
              >
                加入讨论
              </a>
            </div>
          </div>

          <h2>贡献方式</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900">分享实践经验</h4>
              <p className="text-blue-700">
                将你在PACE 1.0实施过程中的经验和案例分享给社区
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900">完善文档</h4>
              <p className="text-green-700">
                帮助改进和完善PACE 1.0的文档和指南
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900">开发工具</h4>
              <p className="text-purple-700">
                开发支持PACE 1.0工作流的工具和插件
              </p>
            </div>
          </div>

          <h2>联系信息</h2>
          <p>
            如果你有任何问题、建议或合作意向，欢迎通过以下方式与我们联系：
          </p>
          <ul>
            <li>邮箱：contact@pace-eng.org</li>
            <li>GitHub Issues：反馈问题和建议</li>
            <li>GitHub Discussions：参与社区讨论</li>
          </ul>

          <div className="bg-yellow-50 p-6 rounded-lg my-8 border-l-4 border-yellow-500">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">企业合作</h3>
            <p className="text-yellow-800">
              如果你的团队希望获得PACE 1.0的专业培训、咨询服务或定制化解决方案，
              请通过邮箱联系我们，我们将为你提供专业的支持。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}