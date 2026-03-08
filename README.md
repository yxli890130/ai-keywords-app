# AI绘画关键词宝库 PWA

一个精美的新中式风格AI绘画关键词生成工具，现已转换为PWA（渐进式Web应用），可安装到iPhone主屏幕使用！

## ✨ 功能特点

- 📱 **PWA支持**：可添加到iPhone主屏幕，像原生App一样使用
- 🎨 **33类关键词**：涵盖艺术风格、灯光效果、色调调性等多个维度
- 🖼️ **风格模板**：6种预设风格模板，一键生成提示词
- 🎲 **随机生成**：智能随机组合关键词，激发创作灵感
- 📋 **一键复制**：生成后可直接复制使用
- 💾 **离线支持**：支持离线使用，无需网络
- 🌈 **字号调节**：支持4种字号，适应不同需求

## 📦 项目结构

```
AI关键词宝库PWA/
├── index.html              # 主应用文件
├── manifest.json           # PWA配置文件
├── service-worker.js       # Service Worker（离线支持）
├── icon-generator.html     # 图标生成工具
├── icons/                  # 应用图标目录（需要生成）
├── splash/                 # 启动画面目录（可选）
└── README.md              # 本文件
```

## 🚀 快速开始

### 1. 生成应用图标

打开 `icon-generator.html` 文件：
1. 在浏览器中打开此文件
2. 点击"下载所有图标"按钮
3. 将下载的图标文件复制到项目的 `icons` 文件夹中

### 2. 本地测试

由于iOS Safari的限制，需要通过HTTPS协议访问才能使用PWA功能。推荐使用以下方式测试：

#### 方式一：使用本地服务器（推荐）

```bash
# 使用Python启动本地服务器
python -m http.server 8000

# 或使用Node.js
npx http-server -p 8000
```

然后在浏览器中访问：`http://localhost:8000`

#### 方式二：使用在线托管

将项目上传到以下任意平台：
- GitHub Pages（免费）
- Vercel（免费）
- Netlify（免费）
- Cloudflare Pages（免费）

### 3. 在iPhone上安装

1. 在iPhone的Safari浏览器中打开应用链接
2. 点击底部的"分享"按钮（方框加向上箭头）
3. 向下滚动，找到并点击"添加到主屏幕"
4. 点击右上角的"添加"按钮
5. 返回主屏幕，即可看到应用图标

## 📱 家人使用说明

### 通过微信分享

由于微信内置浏览器的限制，建议按以下步骤操作：

1. **准备分享链接**
   - 将项目部署到在线托管平台（如GitHub Pages）
   - 获取可访问的HTTPS链接

2. **发送给家人**
   - 通过微信发送链接给家人
   - 提醒家人：**点击链接后，选择"在Safari中打开"**

3. **添加到主屏幕**
   - 在Safari中打开后
   - 点击分享按钮 → 添加到主屏幕
   - 之后就可以像普通App一样使用了！

### 简化操作流程图

```
微信接收链接
    ↓
点击链接 → 选择"在Safari中打开"
    ↓
Safari打开网页
    ↓
点击分享按钮 → 添加到主屏幕
    ↓
完成！像App一样使用
```

## 🛠️ 部署到GitHub Pages（免费）

1. 将整个项目文件夹上传到GitHub仓库
2. 进入仓库的 Settings → Pages
3. 在 Source 中选择 `main` 分支
4. 点击 Save
5. 等待几分钟后，访问 `https://你的用户名.github.io/仓库名`

## 🎨 自定义配置

### 修改应用名称

编辑 `manifest.json` 文件：
```json
{
  "name": "你的应用名称",
  "short_name": "简称",
  ...
}
```

### 修改主题颜色

编辑 `manifest.json` 和 `index.html` 中的颜色值：
- 主题色：`#C83030`（红色）
- 辅助色：`#2C4C6E`（蓝色）
- 背景色：`#FAF8F3`（米白）

## 📋 注意事项

1. **HTTPS要求**：iOS Safari要求通过HTTPS访问才能使用PWA功能
2. **图标尺寸**：确保生成所有必需的图标尺寸
3. **Service Worker**：首次访问需要联网才能缓存资源
4. **微信限制**：微信内置浏览器不支持PWA，需要在Safari中打开

## 🌐 推荐的免费托管平台

| 平台 | 地址 | 特点 |
|------|------|------|
| GitHub Pages | pages.github.com | 免费稳定，支持自定义域名 |
| Vercel | vercel.com | 部署快速，全球CDN |
| Netlify | netlify.com | 拖拽部署，操作简单 |
| Cloudflare Pages | pages.cloudflare.com | 全球加速，免费SSL |

## 💡 常见问题

### Q：为什么提示"无法添加到主屏幕"？
A：请确保：
- 使用Safari浏览器（不是微信或其他浏览器）
- 通过HTTPS协议访问
- 网站已正确配置manifest.json

### Q：图标显示不出来怎么办？
A：
1. 使用icon-generator.html生成所有图标
2. 确保图标文件路径正确
3. 清除Safari缓存后重试

### Q：如何在微信中分享？
A：
1. 先分享HTTPS链接
2. 提醒家人点击"在Safari中打开"
3. 在Safari中添加到主屏幕

## 📄 许可证

本项目仅供个人学习和家庭使用。

## 🤝 支持

如有问题，请检查：
1. 浏览器控制台是否有错误
2. Service Worker是否成功注册
3. manifest.json路径是否正确

---

**享受使用AI绘画关键词宝库！** 🎨✨
