# PACE 官方网站

> PACE 1.2 方法论的官方网站 - 程序化AI协作工程体系

## 📖 关于

这是 [PACE 1.2 方法论](https://github.com/pace-eng/pace) 的官方网站，基于 Next.js 构建。网站提供了完整的方法论文档、实施指南、最佳实践和案例研究。

## 🌐 访问地址

- 官方网站：[https://pace.150404.xyz/](https://pace.150404.xyz/)
- 主仓库：[https://github.com/pace-eng/pace](https://github.com/pace-eng/pace)
- 社区讨论：[https://github.com/pace-eng/pace/discussions](https://github.com/pace-eng/pace/discussions)

## 🚀 快速开始

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/pace-eng/pace.git
cd pace/paceweb

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建和部署

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 部署到 Cloudflare Pages
npm run deploy
```

## 📁 项目结构

```
paceweb/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # 首页
│   │   ├── about/             # 关于页面
│   │   ├── methodology/       # 方法论概述
│   │   ├── concepts/          # 核心概念
│   │   ├── implementation/    # 实施指南
│   │   ├── best-practices/    # 最佳实践
│   │   └── case-studies/      # 案例研究
│   └── components/            # 共享组件
│       ├── Layout.tsx         # 布局组件
│       ├── Header.tsx         # 头部组件
│       └── Footer.tsx         # 底部组件
├── public/                    # 静态资源
└── package.json
```

## 🛠️ 技术栈

- **框架**: Next.js 15.4.1
- **运行时**: React 19.1.0
- **样式**: Tailwind CSS 4.0
- **语言**: TypeScript 5.0
- **部署**: Cloudflare Pages

## 🤝 贡献指南

我们欢迎所有形式的贡献：

### 内容贡献
- 改进网站内容和文档
- 修复错误和更新信息
- 增加新的页面和功能

### 技术贡献
- 优化网站性能
- 改进用户体验
- 添加新功能

### 提交流程
1. Fork 本仓库
2. 创建功能分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m "Add your feature"`
4. 推送分支：`git push origin feature/your-feature`
5. 创建 Pull Request

## 📄 许可证

本项目采用 [MIT 许可证](https://github.com/pace-eng/pace/blob/main/LICENSE)。

## 📞 联系我们

- 📧 邮箱：pace-methodology@example.com
- 💬 讨论：[GitHub Discussions](https://github.com/pace-eng/pace/discussions)
- 🐛 问题反馈：[GitHub Issues](https://github.com/pace-eng/pace/issues)

## 🌟 相关项目

- [PACE 方法论主仓库](https://github.com/pace-eng/pace) - 完整的方法论文档和工具
- [任务卡生成器](https://github.com/pace-eng/pace/tree/main/工具/任务卡生成器) - 自动生成标准化任务卡
- [项目模板](https://github.com/pace-eng/pace/tree/main/模板) - 各种项目结构模板

---

**用PACE方法论开启软件工程的新篇章！**
