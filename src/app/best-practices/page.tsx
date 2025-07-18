import Layout from '@/components/Layout';

export default function BestPracticesPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            最佳实践
          </h1>
          <p className="text-xl text-gray-600">
            经过验证的 PACE 1.0 实践方法和经验总结
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>任务卡设计最佳实践</h2>
          <p>
            高质量的任务卡是PACE 1.0成功的基础。以下是经过验证的任务卡设计最佳实践：
          </p>

          <div className="bg-green-50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold text-green-900 mb-4">任务卡质量检查清单</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-800 mb-2">上下文完整性</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>□ 包含足够的背景信息</li>
                  <li>□ 明确的业务目标和用户价值</li>
                  <li>□ 完整的技术规格说明</li>
                  <li>□ 相关文件清单完备</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-2">可执行性</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>□ 清晰的验收标准</li>
                  <li>□ 具体的实施步骤</li>
                  <li>□ 明确的输入输出</li>
                  <li>□ 可验证的完成标准</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>任务卡模板使用指南</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h4 className="font-semibold text-blue-800">Level 1 任务卡要点</h4>
              <ul className="text-sm text-blue-600 mt-2 space-y-1">
                <li>• 重点描述标准化的实现模式</li>
                <li>• 提供完整的代码示例和参考</li>
                <li>• 明确输入输出格式和数据结构</li>
                <li>• 包含详细的测试用例</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6">
              <h4 className="font-semibold text-green-800">Level 2 任务卡要点</h4>
              <ul className="text-sm text-green-600 mt-2 space-y-1">
                <li>• 强调模块间的集成关系</li>
                <li>• 明确接口设计和约定</li>
                <li>• 描述数据流和状态管理</li>
                <li>• 提供架构上下文信息</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-6">
              <h4 className="font-semibold text-orange-800">Level 3 任务卡要点</h4>
              <ul className="text-sm text-orange-600 mt-2 space-y-1">
                <li>• 描述技术选型的考虑因素</li>
                <li>• 提供多种方案的对比分析</li>
                <li>• 明确架构约束和非功能性需求</li>
                <li>• 包含风险评估和缓解策略</li>
              </ul>
            </div>
          </div>

          <h2>AI协作效率优化</h2>
          <p>
            通过以下实践，可以显著提升AI协作的效率和质量：
          </p>

          <h3>提示工程最佳实践</h3>
          <div className="bg-blue-50 p-6 rounded-lg my-8">
            <h4 className="font-semibold text-blue-900 mb-4">高效提示词模板</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-blue-800">代码生成提示</h5>
                <div className="bg-blue-100 p-3 rounded text-sm font-mono">
                  请基于以下任务卡生成代码：<br/>
                  [任务背景] + [技术要求] + [代码规范] + [测试要求]<br/>
                  确保代码符合最佳实践并包含错误处理
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-blue-800">代码审查提示</h5>
                <div className="bg-blue-100 p-3 rounded text-sm font-mono">
                  请审查以下代码的：<br/>
                  功能正确性 + 代码质量 + 安全性 + 性能
                </div>
              </div>
            </div>
          </div>

          <h3>迭代反馈优化</h3>
          <ul>
            <li><strong>快速反馈循环</strong>：建立5-10分钟的快速验证周期</li>
            <li><strong>增量改进</strong>：每次迭代专注于解决1-2个主要问题</li>
            <li><strong>上下文保持</strong>：在同一对话中保持相关上下文信息</li>
            <li><strong>明确指令</strong>：使用具体、可操作的修改指令</li>
          </ul>

          <h2>质量保障体系</h2>
          <p>
            建立多层次的质量保障体系是PACE 1.0成功的关键：
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-3">任务卡质量</h4>
              <ul className="text-sm text-yellow-700 space-y-2">
                <li>• 同行评审制度</li>
                <li>• 模板一致性检查</li>
                <li>• 上下文完整性验证</li>
                <li>• 可执行性测试</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3">代码质量</h4>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>• 静态代码分析</li>
                <li>• 人工代码审查</li>
                <li>• 单元测试覆盖</li>
                <li>• 集成测试验证</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3">架构质量</h4>
              <ul className="text-sm text-green-700 space-y-2">
                <li>• 架构一致性检查</li>
                <li>• 依赖关系分析</li>
                <li>• 性能指标监控</li>
                <li>• 技术债务跟踪</li>
              </ul>
            </div>
          </div>

          <h2>团队协作优化</h2>
          <p>
            有效的团队协作是PACE 1.0实施成功的重要保障：
          </p>

          <h3>角色分工建议</h3>
          <div className="space-y-4 my-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center mr-4">
                <span className="font-bold">PM</span>
              </div>
              <div>
                <h4 className="font-semibold">产品负责人</h4>
                <p className="text-sm text-gray-600">负责业务需求定义、用户价值确认、路线图规划</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-orange-600 text-white rounded-lg flex items-center justify-center mr-4">
                <span className="font-bold">架构师</span>
              </div>
              <div>
                <h4 className="font-semibold">技术架构师</h4>
                <p className="text-sm text-gray-600">负责技术架构设计、技术选型决策、架构治理</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-4">
                <span className="font-bold">Dev</span>
              </div>
              <div>
                <h4 className="font-semibold">开发工程师</h4>
                <p className="text-sm text-gray-600">负责任务卡设计、AI协作开发、代码质量保障</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center mr-4">
                <span className="font-bold">QA</span>
              </div>
              <div>
                <h4 className="font-semibold">质量工程师</h4>
                <p className="text-sm text-gray-600">负责测试策略制定、质量监控、自动化测试</p>
              </div>
            </div>
          </div>

          <h3>协作流程优化</h3>
          <ul>
            <li><strong>每日同步</strong>：10分钟快速同步，重点关注阻塞问题</li>
            <li><strong>任务卡评审</strong>：每个任务卡在实施前必须经过同行评审</li>
            <li><strong>代码配对</strong>：复杂任务采用配对编程模式</li>
            <li><strong>知识分享</strong>：每周分享AI协作的新发现和最佳实践</li>
          </ul>

          <h2>工具链最佳实践</h2>
          <p>
            选择和配置合适的工具链对PACE 1.0的成功至关重要：
          </p>

          <h3>推荐工具组合</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">开发工具</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>IDE</strong>: VS Code + AI插件</li>
                <li>• <strong>版本控制</strong>: Git + GitHub/GitLab</li>
                <li>• <strong>AI助手</strong>: Claude, GPT-4, Copilot</li>
                <li>• <strong>代码质量</strong>: ESLint, Prettier, SonarQube</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">协作工具</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>项目管理</strong>: Notion, Linear, Jira</li>
                <li>• <strong>文档协作</strong>: Notion, Confluence</li>
                <li>• <strong>沟通协作</strong>: Slack, Discord</li>
                <li>• <strong>设计工具</strong>: Figma, Miro</li>
              </ul>
            </div>
          </div>

          <h2>常见陷阱与规避策略</h2>
          <div className="bg-red-50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-semibold text-red-900 mb-4">常见陷阱</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-red-800">过度依赖AI</h4>
                <p className="text-sm text-red-700">盲目相信AI生成的代码，缺乏人工审查</p>
                <p className="text-sm text-red-600"><strong>规避策略：</strong>建立严格的代码审查流程，保持人工把关</p>
              </div>
              <div>
                <h4 className="font-semibold text-red-800">任务卡质量不高</h4>
                <p className="text-sm text-red-700">任务卡描述模糊，上下文信息不足</p>
                <p className="text-sm text-red-600"><strong>规避策略：</strong>制定任务卡质量标准，建立评审机制</p>
              </div>
              <div>
                <h4 className="font-semibold text-red-800">忽视架构治理</h4>
                <p className="text-sm text-red-700">只关注功能实现，忽视架构一致性</p>
                <p className="text-sm text-red-600"><strong>规避策略：</strong>建立架构守护者机制，定期架构评审</p>
              </div>
            </div>
          </div>

          <h2>成功指标与度量</h2>
          <p>
            建立合适的指标体系来度量PACE 1.0的实施效果：
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="text-center">
              <h4 className="font-semibold text-gray-800 mb-2">效率指标</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>开发速度提升</li>
                <li>任务完成率</li>
                <li>资源利用率</li>
                <li>自动化程度</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-800 mb-2">质量指标</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>代码质量评分</li>
                <li>缺陷率下降</li>
                <li>测试覆盖率</li>
                <li>用户满意度</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-800 mb-2">创新指标</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>新技术采用</li>
                <li>创新项目数</li>
                <li>知识积累</li>
                <li>方法论改进</li>
              </ul>
            </div>
          </div>

          <h2>持续改进建议</h2>
          <ul>
            <li><strong>定期回顾</strong>：每月进行一次PACE 1.0实施效果回顾</li>
            <li><strong>最佳实践分享</strong>：建立团队内部的最佳实践分享机制</li>
            <li><strong>工具优化</strong>：持续评估和优化工具链配置</li>
            <li><strong>方法论进化</strong>：基于实践反馈持续改进方法论</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}