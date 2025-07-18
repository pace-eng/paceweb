import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">PACE 1.0 方法论</h3>
            <p className="text-gray-300 text-sm">
              程序化AI协作工程体系，重新定义软件开发的协作模式，让人机协作更加高效和可持续。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/methodology" className="text-gray-300 hover:text-white transition-colors">方法论概述</Link></li>
              <li><Link href="/concepts" className="text-gray-300 hover:text-white transition-colors">核心概念</Link></li>
              <li><Link href="/implementation" className="text-gray-300 hover:text-white transition-colors">实施指南</Link></li>
              <li><Link href="/best-practices" className="text-gray-300 hover:text-white transition-colors">最佳实践</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">开源项目</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/pace-eng/pace" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">GitHub 仓库</a></li>
              <li><a href="https://github.com/pace-eng/pace/discussions" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">社区讨论</a></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">关于PACE</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">联系我们</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2025 PACE 方法论研究小组. 采用 MIT 开源许可证.</p>
          <p className="mt-2">
            <a href="https://github.com/pace-eng/pace" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
              访问 GitHub 仓库
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}