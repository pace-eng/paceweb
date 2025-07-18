import Layout from '@/components/Layout';

export default function CaseStudiesPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            成功案例
          </h1>
          <p className="text-xl text-gray-600">
            真实的 PACE 1.0 实施案例和经验分享
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>案例一：电商平台用户认证系统重构</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">项目背景</h3>
            <p className="text-blue-800">
              某大型电商平台需要重构老旧的用户认证系统，支持多种登录方式（邮箱、手机、第三方登录），
              同时提升系统安全性和用户体验。原系统技术债务严重，维护困难。
            </p>
          </div>

          <h3>实施过程</h3>
          <div className="space-y-6 my-8">
            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="font-semibold text-green-800">阶段0：蓝图规划（1周）</h4>
              <ul className="text-sm text-green-700 mt-2 space-y-1">
                <li>• 分析现有系统痛点和用户需求</li>
                <li>• AI辅助生成用户认证流程原型</li>
                <li>• 设计新认证系统的整体架构</li>
                <li>• 制定包含8个垂直切片的路线图</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-semibold text-blue-800">阶段1：切片实施（6周）</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div>
                  <h5 className="font-semibold text-sm">前4个切片（基础功能）</h5>
                  <ul className="text-xs text-blue-600 mt-1 space-y-1">
                    <li>• 邮箱密码登录</li>
                    <li>• 手机验证码登录</li>
                    <li>• 用户注册流程</li>
                    <li>• 密码重置功能</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-sm">后4个切片（高级功能）</h5>
                  <ul className="text-xs text-blue-600 mt-1 space-y-1">
                    <li>• 第三方登录（微信、支付宝）</li>
                    <li>• 两步验证</li>
                    <li>• 设备管理</li>
                    <li>• 安全日志</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h3>关键成果</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3">效率提升</h4>
              <ul className="text-sm text-green-700 space-y-2">
                <li>• 开发效率提升 <strong>60%</strong></li>
                <li>• 代码生成自动化率达到 <strong>85%</strong></li>
                <li>• 单元测试覆盖率提升至 <strong>95%</strong></li>
                <li>• 系统集成时间缩短 <strong>70%</strong></li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3">质量改善</h4>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• 生产环境缺陷率降低 <strong>80%</strong></li>
                <li>• 代码重复度降低 <strong>65%</strong></li>
                <li>• 系统响应时间改善 <strong>40%</strong></li>
                <li>• 用户登录成功率提升至 <strong>99.8%</strong></li>
              </ul>
            </div>
          </div>

          <h3>关键成功因素</h3>
          <ul>
            <li><strong>充分的前期规划</strong>：花费1周时间进行详细的架构设计和切片规划</li>
            <li><strong>高质量任务卡</strong>：每个任务卡包含完整的上下文和明确的验收标准</li>
            <li><strong>有效的AI协作</strong>：合理的人机分工，AI负责代码生成，人类负责架构设计</li>
            <li><strong>严格的质量保障</strong>：建立了三层质量检查机制</li>
          </ul>

          <div className="bg-yellow-50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">经验总结</h3>
            <p className="text-yellow-800 mb-3">
              &ldquo;PACE 1.0让我们在保证质量的前提下，显著提升了开发效率。最重要的是，团队对AI协作的信心大大增强。&rdquo;
            </p>
            <p className="text-sm text-yellow-700">
              —— 项目技术负责人 张工程师
            </p>
          </div>

          <hr className="my-12 border-gray-300" />

          <h2>案例二：移动应用快速原型开发</h2>
          
          <div className="bg-purple-50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold text-purple-900 mb-4">项目背景</h3>
            <p className="text-purple-800">
              某创业公司需要在3个月内开发一款社交类移动应用的MVP版本，用于验证商业模式和获取种子用户。
              团队规模小（4人），需要快速验证产品假设。
            </p>
          </div>

          <h3>实施策略</h3>
          <div className="space-y-6 my-8">
            <div className="border-l-4 border-purple-500 pl-6">
              <h4 className="font-semibold text-purple-800">快速蓝图（3天）</h4>
              <ul className="text-sm text-purple-700 mt-2 space-y-1">
                <li>• 用户访谈和需求分析</li>
                <li>• AI辅助生成交互原型</li>
                <li>• 技术架构快速决策</li>
                <li>• 12个微切片的敏捷路线图</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-6">
              <h4 className="font-semibold text-orange-800">敏捷切片（2-3天/切片）</h4>
              <div className="text-sm text-orange-700 mt-2">
                <p>采用极短的切片周期，每个切片专注于一个核心用户场景：</p>
                <ul className="mt-2 space-y-1">
                  <li>• 用户注册/登录（2天）</li>
                  <li>• 个人资料设置（2天）</li>
                  <li>• 内容发布（3天）</li>
                  <li>• 社交互动（3天）</li>
                  <li>• 消息通知（2天）</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>AI协作亮点</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">UI组件生成</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• AI生成90%的React Native组件</li>
                <li>• 自动适配iOS和Android样式</li>
                <li>• 响应式设计自动优化</li>
                <li>• 无障碍功能自动添加</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">业务逻辑开发</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• 状态管理代码自动生成</li>
                <li>• API调用逻辑批量创建</li>
                <li>• 数据验证规则自动实现</li>
                <li>• 错误处理机制统一添加</li>
              </ul>
            </div>
          </div>

          <h3>项目成果</h3>
          <div className="bg-green-50 p-6 rounded-lg my-8">
            <h4 className="font-semibold text-green-800 mb-3">交付成果</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">10周</div>
                <p className="text-sm text-green-700">实际开发时间</p>
                <p className="text-xs text-green-600">（计划12周）</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">70%</div>
                <p className="text-sm text-green-700">开发时间节省</p>
                <p className="text-xs text-green-600">（相比传统开发）</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">4.2/5</div>
                <p className="text-sm text-green-700">用户体验评分</p>
                <p className="text-xs text-green-600">（种子用户反馈）</p>
              </div>
            </div>
          </div>

          <h3>商业价值</h3>
          <ul>
            <li><strong>快速市场验证</strong>：提前2个月进入市场，抢占先发优势</li>
            <li><strong>降低开发成本</strong>：节省开发成本约40万元</li>
            <li><strong>用户反馈积累</strong>：获得500+种子用户的真实反馈</li>
            <li><strong>投资吸引</strong>：基于MVP成功获得天使轮融资</li>
          </ul>

          <div className="bg-green-50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold text-green-900 mb-3">创始人感言</h3>
            <p className="text-green-800 mb-3">
              &ldquo;PACE 1.0让我们这样的小团队也能快速构建高质量的产品。AI协作不仅提升了效率，更重要的是让我们能专注于产品创新和用户体验。&rdquo;
            </p>
            <p className="text-sm text-green-700">
              —— 产品创始人 李总
            </p>
          </div>

          <hr className="my-12 border-gray-300" />

          <h2>案例三：企业内部管理系统现代化</h2>
          
          <div className="bg-orange-50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold text-orange-900 mb-4">项目背景</h3>
            <p className="text-orange-800">
              某制造业企业需要将10年前开发的内部管理系统进行现代化改造，包括技术栈升级、
              用户体验改善、移动端支持等。系统复杂，涉及多个业务模块。
            </p>
          </div>

          <h3>挑战与解决方案</h3>
          <div className="space-y-6 my-8">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">挑战：遗留系统复杂度高</h4>
              <p className="text-sm text-red-700 mb-2">系统包含20多个模块，业务逻辑复杂，文档不完整</p>
              <p className="text-sm text-red-600"><strong>解决方案：</strong>采用渐进式迁移策略，每个切片专注于1-2个模块的现代化</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">挑战：业务不能中断</h4>
              <p className="text-sm text-yellow-700 mb-2">系统24/7运行，不能停机进行大规模改造</p>
              <p className="text-sm text-yellow-600"><strong>解决方案：</strong>采用双轨并行策略，新旧系统逐步切换</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">挑战：团队技能转型</h4>
              <p className="text-sm text-green-700 mb-2">团队主要使用传统技术，需要学习现代前端框架</p>
              <p className="text-sm text-green-600"><strong>解决方案：</strong>AI协作降低学习门槛，边做边学</p>
            </div>
          </div>

          <h3>实施成果</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-xl font-bold text-blue-600">18个月</div>
              <p className="text-sm text-blue-700">完成时间</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-xl font-bold text-green-600">85%</div>
              <p className="text-sm text-green-700">用户满意度</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-xl font-bold text-purple-600">50%</div>
              <p className="text-sm text-purple-700">操作效率提升</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-xl font-bold text-orange-600">0</div>
              <p className="text-sm text-orange-700">业务中断时间</p>
            </div>
          </div>

          <h2>总体经验总结</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">共同成功要素</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">技术层面</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 高质量的任务卡设计</li>
                  <li>• 合理的AI工具选择和配置</li>
                  <li>• 严格的代码质量检查</li>
                  <li>• 持续的架构治理</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">组织层面</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 领导层的支持和推动</li>
                  <li>• 充分的团队培训</li>
                  <li>• 渐进式的文化变革</li>
                  <li>• 及时的反馈和调整</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>量化收益统计</h3>
          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">指标</th>
                  <th className="px-4 py-2 border-b text-center text-sm font-semibold text-gray-700">案例一</th>
                  <th className="px-4 py-2 border-b text-center text-sm font-semibold text-gray-700">案例二</th>
                  <th className="px-4 py-2 border-b text-center text-sm font-semibold text-gray-700">案例三</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b text-sm">开发效率提升</td>
                  <td className="px-4 py-2 border-b text-center text-sm">60%</td>
                  <td className="px-4 py-2 border-b text-center text-sm">70%</td>
                  <td className="px-4 py-2 border-b text-center text-sm">45%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b text-sm">代码质量改善</td>
                  <td className="px-4 py-2 border-b text-center text-sm">85%</td>
                  <td className="px-4 py-2 border-b text-center text-sm">80%</td>
                  <td className="px-4 py-2 border-b text-center text-sm">75%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b text-sm">缺陷率降低</td>
                  <td className="px-4 py-2 border-b text-center text-sm">80%</td>
                  <td className="px-4 py-2 border-b text-center text-sm">75%</td>
                  <td className="px-4 py-2 border-b text-center text-sm">65%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b text-sm">团队满意度</td>
                  <td className="px-4 py-2 border-b text-center text-sm">90%</td>
                  <td className="px-4 py-2 border-b text-center text-sm">95%</td>
                  <td className="px-4 py-2 border-b text-center text-sm">85%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>下一步建议</h2>
          <p>
            如果您正在考虑实施PACE 1.0，建议：
          </p>
          <ul>
            <li>从小型试点项目开始，积累经验</li>
            <li>重视团队培训和能力建设</li>
            <li>建立完善的质量保障体系</li>
            <li>保持开放心态，持续学习改进</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}