# 🚀 快速部署指南

## 📱 本地测试

✅ **已完成！本地服务器正在运行**

访问 http://localhost:8000 查看效果

---

## 🎨 生成应用图标

1. 在浏览器中打开 `generate-icons.html`
2. 等待所有图标自动下载到浏览器下载文件夹
3. 将下载的图标文件移动到 `icons` 文件夹（可选）

---

## 🌐 部署到 GitHub Pages（获取 HTTPS 链接）

### 方式一：网页上传（最简单，推荐）

1. **创建仓库**
   - 打开 https://github.com/new
   - 仓库名称：`ai-keywords-app`
   - 选择 **Public**（公开）
   - 点击 "Create repository"

2. **上传文件**
   - 点击 "uploading an existing file"
   - 拖入以下文件：
     - `index.html`
     - `manifest.json`
     - `service-worker.js`
     - `browserconfig.xml`
     - `install.html`
     - `deploy.html`
     - `README.md`
   - 点击 "Commit changes"

3. **启用 Pages**
   - 进入 Settings → Pages
   - Source: `Deploy from a branch`
   - Branch: `main` 或 `master`, `/ (root)`
   - 点击 "Save"

4. **获取链接**
   - 等待 1-2 分钟，刷新页面
   - 你会看到：`https://你的用户名.github.io/ai-keywords-app/`
   - **复制这个链接，通过微信发送给家人！**

### 方式二：使用命令行（如果你已配置 GitHub）

```bash
# 1. 在 GitHub 创建仓库后，运行以下命令：
git remote add origin https://github.com/你的用户名/ai-keywords-app.git
git branch -M main
git push -u origin main

# 2. 在 GitHub 启用 Pages
# Settings → Pages → Source: main branch → Save
```

---

## 📲 家人使用方法

### 微信分享流程

```
发送 HTTPS 链接给家人
    ↓
家人点击链接 → 选择"在 Safari 中打开"
    ↓
Safari 打开 → 点击底部分享按钮 ⬆️
    ↓
点击"添加到主屏幕"
    ↓
点击"添加" → 完成！
```

### 发送时记得提醒家人

```
🎨 AI绘画关键词宝库

点击链接后，请选择"在Safari中打开"，
然后点击底部分享按钮，选择"添加到主屏幕"即可！

链接：https://你的用户名.github.io/ai-keywords-app/
```

---

## ✅ 检查清单

- [ ] 本地测试成功（访问 http://localhost:8000）
- [ ] 打开 `generate-icons.html` 生成图标（可选）
- [ ] 在 GitHub 创建仓库
- [ ] 上传所有文件到 GitHub
- [ ] 启用 GitHub Pages
- [ ] 获得 HTTPS 链接
- [ ] 通过微信发送给家人
- [ ] 家人成功添加到主屏幕

---

## 🎉 完成！

现在家人可以通过 HTTPS 链接访问应用，并添加到 iPhone 主屏幕使用了！

---

**需要帮助？** 打开 `deploy.html` 查看详细图文教程
