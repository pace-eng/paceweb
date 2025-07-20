'use client';

import { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { Card, CardHeader, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ProgressIndicator } from '@/components/ui/ProgressIndicator';
import { HeroSection } from '@/components/ui/HeroSection';
import { 
  SettingsIcon, 
  RocketIcon, 
  ChartIcon, 
  CheckIcon, 
  ArrowRightIcon, 
  LightbulbIcon 
} from '@/components/ui/Icons';

export default function ImplementationPage() {
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);

  const phases = [
    {
      id: 'phase1',
      title: '基础建设',
      duration: '1-2个月',
      description: '建立团队AI协作能力，搭建基础工具链，制定标准流程，配置标准化模板',
      icon: <SettingsIcon className="text-white" size={24} />,
      color: 'bg-emerald-500',
      activities: [
        '团队培训：AI工具使用和提示工程基础',
        'AI工具配置：Claude Code和Cursor深度集成',
        '标准化配置：EARS语法和三文档架构设置',
        '双模式设置：个体和团队模式配置',
        '任务卡模板：标准化增强版模板制定',
        '试点项目：选择1-2个小型项目'
      ],
      outcomes: [
        '团队掌握基本AI协作技能',
        '完成基础工具链搭建',
        '制定完整标准和流程文档',
        '试点项目成功交付'
      ]
    },
    {
      id: 'phase2',
      title: '能力提升',
      duration: '2-3个月',
      description: '深化AI协作技能，优化工作流程，扩大应用范围',
      icon: <RocketIcon className="text-white" size={24} />,
      color: 'bg-blue-500',
      activities: [
        '进阶培训：注意力管理、目标聚焦机制',
        '标准化实践：深化EARS语法和三文档架构应用',
        '错误学习：建立AI协作错误学习系统',
        '模式切换：练习个体与团队模式切换',
        '工具链集成：建立统一的开发工具链',
        '规模扩展：应用到更多项目'
      ],
      outcomes: [
        '任务卡质量显著提升',
        'AI生成代码质量稳定',
        '开发效率提升20-30%',
        '团队协作更加顺畅'
      ]
    },
    {
      id: 'phase3',
      title: '规模化应用',
      duration: '3-6个月',
      description: '组织级推广应用，建立平台化支撑，形成持续改进机制',
      icon: <ChartIcon className="text-white" size={24} />,
      color: 'bg-purple-500',
      activities: [
        '组织级推广：制定推广计划',
        '平台建设：支持PACE 1.2的统一平台',
        '知识管理：最佳实践库建设',
        '模板生态：建设丰富的标准化模板库',
        '持续改进：反馈机制建立'
      ],
      outcomes: [
        '80%以上项目采用PACE 1.2',
        '完善的知识管理体系',
        '灵活的双模式操作能力',
        '标准化与灵活性的完美平衡',
        '整体效率提升50%以上'
      ]
    }
  ];

  const progressSteps = [
    { id: 'step1', title: '基础建设', status: 'completed' as const },
    { id: 'step2', title: '能力提升', status: 'current' as const },
    { id: 'step3', title: '规模化应用', status: 'upcoming' as const }
  ];

  const workflow = [
    {
      phase: "阶段 0: 蓝图规划",
      description: "从想法到可执行路线图",
      steps: [
        { title: "输入原始材料", desc: "初始想法、用户故事、访谈记录、竞品分析" },
        { title: "AI辅助分析", desc: "提炼核心用户故事，按用户旅程分组" },
        { title: "HTML原型生成", desc: "可交互的HTML原型，包含主要页面和功能" },
        { title: "PRD验证与优化", desc: "通过原型验证用户体验和功能完整性" },
        { title: "垂直切片路线图", desc: "生成包含多个垂直切片的开发路线图" }
      ]
    },
    {
      phase: "阶段 1: 切片循环",
      description: "四步迭代循环",
      steps: [
        { title: "定义（DEFINE）", desc: "创建标准化任务卡，采用EARS语法和三文档架构" },
        { title: "评审（REVIEW）", desc: "团队评审任务卡，确保引用文档和标准的正确性" },
        { title: "实现（IMPLEMENT）", desc: "AI驱动编码，模式识别和质量检查" },
        { title: "验证（VERIFY）", desc: "最终代码评审、测试和集成，遵循标准化流程" }
      ]
    }
  ];

  return (
    <Layout>
      <HeroSection
        subtitle="PACE 1.2 方法论"
        title="实施指南"
        description="通过结构化的三阶段方法，在您的团队中成功实施PACE 1.2方法论，融合标准化实践，支持个体与团队双模式操作"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/best-practices"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <LightbulbIcon className="mr-2" size={20} />
            最佳实践
          </Link>
          <Link 
            href="/case-studies"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            查看案例
          </Link>
        </div>
      </HeroSection>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 进度指示器 */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">实施进度</h2>
          <ProgressIndicator steps={progressSteps} className="max-w-2xl mx-auto" />
        </div>

        {/* 渐进式实施策略 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">渐进式实施策略</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              PACE 1.1的实施应该采用渐进式策略，避免激进变革带来的风险。支持从个体模式平滑过渡到团队模式。我们建议分三个阶段进行
            </p>
          </div>

          <div className="space-y-8">
            {phases.map((phase) => (
              <Card key={phase.id} className="overflow-hidden">
                <CardHeader className="cursor-pointer" onClick={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${phase.color}`}>
                        {phase.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                        <p className="text-sm text-gray-500">{phase.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="hidden sm:block text-sm text-gray-600 max-w-md">
                        {phase.description}
                      </div>
                      <ArrowRightIcon 
                        className={`text-gray-400 transition-transform duration-200 ${
                          expandedPhase === phase.id ? 'rotate-90' : ''
                        }`} 
                        size={20} 
                      />
                    </div>
                  </div>
                </CardHeader>

                {expandedPhase === phase.id && (
                  <CardContent>
                    <div className="sm:hidden mb-4">
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          关键活动
                        </h4>
                        <ul className="space-y-3">
                          {phase.activities.map((activity, index) => (
                            <li key={index} className="flex items-start text-gray-700">
                              <CheckIcon className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                              <span className="text-sm">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          预期成果
                        </h4>
                        <ul className="space-y-3">
                          {phase.outcomes.map((outcome, index) => (
                            <li key={index} className="flex items-start text-gray-700">
                              <CheckIcon className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                              <span className="text-sm">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* PACE 1.2 工作流程 */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">PACE 1.2 工作流程</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              PACE 1.2 的核心工作流程分为两个主要阶段：蓝图规划和切片循环，融合标准化实践，增强了AI工具协作和注意力管理
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {workflow.map((section, sectionIndex) => (
              <Card key={sectionIndex} className="h-full">
                <CardHeader>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{section.phase}</h3>
                    <p className="text-gray-600 mt-2">{section.description}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {section.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white mr-4 mt-1 flex-shrink-0 ${
                          sectionIndex === 0 ? 'bg-blue-500' : 'bg-purple-500'
                        }`}>
                          {stepIndex + 1}
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900">{step.title}</h5>
                          <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 标准化实施路径 (v1.2新增) */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">标准化实施路径</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              PACE 1.2 新增的标准化实施路径，提供开箱即用的体验，同时保持核心灵活性
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="border-purple-200">
              <CardHeader>
                <h3 className="text-xl font-semibold text-purple-800 flex items-center">
                  <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm mr-3">📝</span>
                  EARS语法集成
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">核心模式</h4>
                    <div className="text-sm text-purple-700 space-y-1">
                      <p>• 通用需求：系统应当...</p>
                      <p>• 事件驱动：当...发生时</p>
                      <p>• 状态驱动：当...状态时</p>
                      <p>• 可选特性：如果...则...</p>
                    </div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">实施步骤</h4>
                    <div className="text-sm text-purple-700 space-y-1">
                      <p>1. 配置EARS模板库</p>
                      <p>2. 团队培训和练习</p>
                      <p>3. 工具链集成</p>
                      <p>4. 质量检查自动化</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <h3 className="text-xl font-semibold text-green-800 flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3">📁</span>
                  三文档架构
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">文档结构</h4>
                    <div className="text-sm text-green-700 space-y-1">
                      <p>• requirements.md (EARS)</p>
                      <p>• design.md (技术设计)</p>
                      <p>• tasks.md (实现任务)</p>
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">融合策略</h4>
                    <div className="text-sm text-green-700 space-y-1">
                      <p>1. 现有项目渐进迁移</p>
                      <p>2. 新项目直接采用</p>
                      <p>3. 引用式任务卡集成</p>
                      <p>4. 自动化生成工具</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <h3 className="text-xl font-semibold text-orange-800 flex items-center">
                  <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm mr-3">🔧</span>
                  工具链标准化
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">核心工具</h4>
                    <div className="text-sm text-orange-700 space-y-1">
                      <p>• pace-gen (模板生成器)</p>
                      <p>• pace-pack (任务卡打包)</p>
                      <p>• pace-lint (质量检查)</p>
                      <p>• pace-sync (文档同步)</p>
                    </div>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">集成方式</h4>
                    <div className="text-sm text-orange-700 space-y-1">
                      <p>1. CLI工具安装配置</p>
                      <p>2. 项目初始化设置</p>
                      <p>3. CI/CD流程集成</p>
                      <p>4. 团队协作配置</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 双模式配置指南 */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">双模式配置指南</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              PACE 1.2 支持个体和团队双模式操作，融合标准化实践，根据项目规模和需求灵活选择
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-blue-200">
              <CardHeader>
                <h3 className="text-xl font-semibold text-blue-800 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-3">👤</span>
                  个体模式配置
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">工具配置</h4>
                    <div className="text-sm text-blue-700 space-y-1">
                      <p>• ~/.claude/CLAUDE.md (个人配置)</p>
                      <p>• 个人代码风格和偏好设置</p>
                      <p>• 轻量EARS模板库</p>
                      <p>• 常用提示模板库</p>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">任务卡模板</h4>
                    <div className="text-sm text-blue-700 space-y-1">
                      <p>• 简化版标准化格式</p>
                      <p>• 可选三文档架构</p>
                      <p>• 个人笔记区域</p>
                      <p>• 快速原型开发模式</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <h3 className="text-xl font-semibold text-green-800 flex items-center">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3">👥</span>
                  团队模式配置
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">统一配置</h4>
                    <div className="text-sm text-green-700 space-y-1">
                      <p>• CLAUDE.md (团队项目配置)</p>
                      <p>• @.pace/team-standards.md</p>
                      <p>• 完整EARS语法模板库</p>
                      <p>• 统一的架构约束和规范</p>
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">协作流程</h4>
                    <div className="text-sm text-green-700 space-y-1">
                      <p>• 完整版标准化格式</p>
                      <p>• 强制三文档架构</p>
                      <p>• 团队评审和质量要求</p>
                      <p>• 标准化验收清单</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 项目结构建议 */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">项目结构建议</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              为了支持PACE 1.2方法论的高效执行，融合标准化实践，建议采用以下项目结构
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                <pre className="whitespace-pre">{`project-root/
├── .pace/                          # PACE 1.2 配置目录
│   ├── memory/                    # 项目记忆库
│   │   ├── decisions/            # 架构决策记录(ADR)
│   │   ├── patterns/             # 代码模式和最佳实践
│   │   └── lessons/              # 经验教训
│   ├── current/                   # 当前状态
│   │   ├── focus.md             # 当前焦点和目标
│   │   └── progress.md          # 进度跟踪
│   ├── templates/                 # 标准化任务卡模板
│   │   ├── level-1.md           # Level 1 任务模板
│   │   ├── level-2.md           # Level 2 任务模板
│   │   ├── level-3.md           # Level 3 任务模板
│   │   └── level-4.md           # Level 4 任务模板
│   └── standards/                 # 标准化配置
│       ├── ears-patterns.md      # EARS语法模式库
│       └── three-doc-arch.md     # 三文档架构规范
├── docs/                          # 项目文档 (三文档架构)
│   ├── requirements.md           # 需求文档 (EARS语法)
│   ├── design.md                 # 设计文档
│   ├── tasks.md                  # 任务分解文档
│   ├── architecture.md           # 架构设计文档
│   ├── roadmap.md                # 产品路线图
│   └── shared-kernel/            # 共享核心库文档
├── specs/                         # 任务卡规格文档
│   ├── slice-1.1-user-auth.spec.md
│   ├── slice-1.2-product-list.spec.md
│   └── refactor-1.0-data-models.spec.md
├── src/                          # 源代码
│   ├── shared-kernel/            # 共享核心库
│   ├── features/                 # 功能模块
│   └── config/                   # 配置文件
├── CLAUDE.md                     # Claude Code 项目记忆
└── tests/                        # 测试代码`}</pre>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 风险管理策略 */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">风险管理策略</h2>
            <p className="text-lg text-gray-600">识别和应对实施过程中的潜在风险</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-red-200">
              <CardHeader>
                <h3 className="text-xl font-semibold text-red-800 flex items-center">
                  <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm mr-3">⚠️</span>
                  技术风险
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-900 mb-2">AI代码质量不稳定</h4>
                    <p className="text-sm text-red-700">建立多层质量检查机制，制定代码质量标准</p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-900 mb-2">技术债务积累</h4>
                    <p className="text-sm text-red-700">建立债务识别机制，制定渐进式偿还计划</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <h3 className="text-xl font-semibold text-orange-800 flex items-center">
                  <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm mr-3">👥</span>
                  组织风险
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-900 mb-2">团队抗拒变化</h4>
                    <p className="text-sm text-orange-700">充分沟通培训，渐进式推进，展示成功案例</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-900 mb-2">技能差距</h4>
                    <p className="text-sm text-orange-700">制定分层培训计划，建立导师制度</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 关键成功因素 */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900">关键成功因素</h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: '🎯', title: '领导层支持', desc: '获得管理层的明确支持和资源投入' },
                  { icon: '📚', title: '团队培训', desc: '投资于团队的AI协作能力建设' },
                  { icon: '🔧', title: '工具链完备', desc: '建立完整的工具链支持' },
                  { icon: '✅', title: '质量保障', desc: '建立多层次的质量保障体系' },
                  { icon: '🔄', title: '持续改进', desc: '建立反馈机制和持续改进文化' }
                ].map((factor, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-2xl">{factor.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{factor.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{factor.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 下一步行动 */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">准备开始实施PACE 1.2？</h2>
          <p className="text-lg text-gray-600 mb-8">选择适合您的学习路径</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Button 
              href="/best-practices" 
              variant="primary" 
              size="lg"
              className="h-auto p-6 flex flex-col items-center space-y-2"
            >
              <span className="text-2xl">📋</span>
              <span className="font-semibold">学习最佳实践</span>
              <span className="text-sm opacity-90">了解经过验证的实践方法和经验总结</span>
            </Button>
            
            <Button 
              href="/case-studies" 
              variant="outline" 
              size="lg"
              className="h-auto p-6 flex flex-col items-center space-y-2"
            >
              <span className="text-2xl">📊</span>
              <span className="font-semibold">查看成功案例</span>
              <span className="text-sm opacity-90">学习其他团队的成功实施经验</span>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}