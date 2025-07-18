const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  const svgPath = path.join(__dirname, '../public/favicon.svg');
  
  try {
    // 读取SVG文件
    const svgBuffer = fs.readFileSync(svgPath);
    
    // 生成不同尺寸的PNG文件
    const sizes = [16, 32, 48, 64, 128, 256];
    
    for (const size of sizes) {
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(path.join(__dirname, `../public/favicon-${size}x${size}.png`));
    }
    
    // 生成标准的favicon.ico (32x32)
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(path.join(__dirname, '../src/app/favicon.ico'));
      
    console.log('✅ Favicon生成成功');
    console.log('📁 生成的文件:');
    sizes.forEach(size => {
      console.log(`  - public/favicon-${size}x${size}.png`);
    });
    console.log('  - src/app/favicon.ico');
    console.log('  - public/favicon.svg');
    
  } catch (error) {
    console.error('❌ Favicon生成失败:', error);
  }
}

generateFavicon();