# WebNav Hub

![WebNav Hub Logo](assets/favicon.svg)

WebNav Hub 是一个现代化、美观且功能丰富的网站导航页面，旨在为用户提供快速访问常用网站的便捷方式。它具有响应式设计、暗色/亮色主题切换、实时搜索功能和流畅的动画效果。

**仓库地址**: https://github.com/bbylw3/nav

## ✨ 功能特点

- 🚀 **快速导航**：一键访问常用网站，包括 AI 搜索、社交媒体、实用工具、科技资讯、云存储和电子邮箱等
- 🔍 **实时搜索**：通过搜索框快速筛选和查找所需的网站链接
- 🌓 **主题切换**：支持暗色和亮色主题，自动保存用户偏好设置
- 📱 **响应式设计**：完美适配桌面、平板和移动设备
- 🎨 **现代化 UI**：采用渐变色彩、卡片式布局和流畅动画效果
- ⚡ **高性能**：优化的代码结构，确保快速加载和流畅体验
- 🔧 **易于定制**：模块化设计，方便添加新的网站链接和分类

## 📸 截图

### 暗色主题
![暗色主题截图](https://via.placeholder.com/800x450?text=Dark+Theme+Screenshot)

### 亮色主题
![亮色主题截图](https://via.placeholder.com/800x450?text=Light+Theme+Screenshot)

## 🛠️ 技术栈

- **HTML5**：语义化标签结构
- **CSS3**：现代 CSS 特性，包括 Grid、Flexbox、CSS 变量和动画
- **JavaScript**：原生 JavaScript 实现交互功能
- **Font Awesome**：图标库
- **响应式设计**：媒体查询和流式布局

## 📦 安装

### 克隆仓库

```bash
git clone https://github.com/bbylw3/nav.git
cd nav
```

### 本地运行

1. 直接在浏览器中打开 `index.html` 文件，或
2. 使用本地服务器运行（推荐）：

   ```bash
   # 使用 Python
   python -m http.server 8000
   
   # 使用 Node.js
   npx http-server
   
   # 使用 PHP
   php -S localhost:8000
   ```

3. 在浏览器中访问 `http://localhost:8000`

## 🚀 部署指南

WebNav Hub 是一个静态网站，可以轻松部署到各种免费静态托管平台。以下是几种常见的部署方式：

### 1. GitHub Pages

GitHub Pages 是 GitHub 提供的免费静态网站托管服务。

#### 步骤：

1. 将代码推送到 GitHub 仓库
2. 在仓库页面点击 "Settings"
3. 在左侧菜单中选择 "Pages"
4. 在 "Source" 部分选择 "Deploy from a branch"
5. 选择分支（通常是 `main` 或 `master`）和文件夹（`/root`）
6. 点击 "Save"
7. 几分钟后，您的网站将在 `https://bbylw3.github.io/nav` 上线

### 2. Cloudflare Pages

Cloudflare Pages 提供全球 CDN 加速和免费 SSL 证书。

#### 步骤：

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 选择 "Pages" 服务
3. 点击 "Create a project"
4. 选择 "Connect to Git"
5. 授权 GitHub 并选择您的仓库
6. 配置构建设置：
   - 构建命令：留空（静态网站无需构建）
   - 构建输出目录：`.`（根目录）
7. 点击 "Save and Deploy"
8. 几分钟后，您的网站将在 Cloudflare 提供的随机域名上线，您也可以配置自定义域名

### 3. Netlify

Netlify 提供持续部署、表单处理和函数服务。

#### 步骤：

1. 登录 [Netlify](https://app.netlify.com/)
2. 点击 "New site from Git"
3. 选择 GitHub 并授权
4. 选择您的仓库
5. 配置构建设置：
   - Build command：留空
   - Publish directory：`.`（根目录）
6. 点击 "Deploy site"
7. 几分钟后，您的网站将在 Netlify 提供的随机域名上线

### 4. Vercel

Vercel 是一个针对前端项目优化的部署平台。

#### 步骤：

1. 登录 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击 "New Project"
3. 选择 "Import Git Repository"
4. 选择您的仓库
5. 配置项目设置：
   - Framework Preset：Other
   - Build Command：留空
   - Output Directory：`.`（根目录）
6. 点击 "Deploy"
7. 几分钟后，您的网站将在 Vercel 提供的随机域名上线

### 5. 其他静态托管平台

您也可以选择以下平台部署：

- **GitLab Pages**：GitLab 提供的免费静态网站托管
- **Firebase Hosting**：Google 提供的静态网站托管服务
- **Surge.sh**：简单的静态网站部署工具
- **Tiiny Host**：简单的静态网站托管服务

## 📝 自定义指南

### 添加新的网站链接

1. 在 `index.html` 中找到相应的分类部分
2. 按照现有格式添加新的链接卡片：

```html
<div class="link-card">
  <a href="https://example.com" target="_blank"></a>
  <i class="fa-solid fa-icon"></i>
  <h3>网站名称</h3>
</div>
```

3. 替换 `href`、`icon class` 和 `网站名称` 为您需要的内容

### 添加新的分类

1. 在 `index.html` 中添加新的分类标题和链接网格：

```html
<h2 class="category-title" id="category-id">分类名称</h2>
<section class="link-grid">
  <!-- 在这里添加链接卡片 -->
</section>
```

2. 在导航栏中添加对应的链接：

```html
<li><a href="#category-id">分类名称</a></li>
```

### 修改颜色主题

编辑 `css/style.css` 文件中的 CSS 变量：

```css
:root {
  --primary-color: #ff9000; /* 主色调 */
  --primary-light: #ffb366; /* 主色调亮色 */
  --primary-dark: #cc7300; /* 主色调暗色 */
  /* 其他变量... */
}
```

## 🤝 贡献

欢迎贡献代码、报告问题或提出改进建议！请遵循以下步骤：

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Font Awesome](https://fontawesome.com/) - 提供精美的图标
- 所有被收录的网站 - 提供了优质的服务

## 📞 联系

如有问题或建议，请通过以下方式联系：

- 开启 Issue：[GitHub Issues](https://github.com/bbylw3/nav/issues)
- 邮箱：bbylw3@example.com

## ⭐ Star History

如果这个项目对您有帮助，请考虑给它一个星标！

[![Star History Chart](https://api.star-history.com/svg?repos=bbylw3/nav&type=Date)](https://star-history.com/#bbylw3/nav&Date)