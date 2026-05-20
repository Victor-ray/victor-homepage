# Victor 个人网页设计文档

**日期:** 2026-05-20
**作者:** Victor (雷李胜)
**状态:** 已批准

---

## 1. 项目概述

**项目名称:** Victor 个人介绍网页
**项目类型:** 个人主页 / GitHub Pages 部署
**核心功能:** 展示个人技术背景、项目经历、联系方式的像素复古风格单页应用

---

## 2. 技术方案

| 项目 | 选择 |
|------|------|
| 构建工具 | Vite 5 |
| 前端框架 | Vue 3 (Composition API) |
| 样式方案 | 原生 CSS + CSS 变量 |
| 部署方式 | GitHub Pages (新建仓库 `victor-homepage`) |

**选择理由:** Vue 3 上手简单，Vite 提供极速开发体验，组件化便于维护像素化 UI 组件。

---

## 3. 目录结构

```
victor-homepage/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.js
│   ├── App.vue
│   ├── assets/
│   │   └── styles/
│   │       ├── pixel.css
│   │       └── scanlines.css
│   ├── components/
│   │   ├── PixelHeader.vue
│   │   ├── PixelNav.vue
│   │   ├── PixelAbout.vue
│   │   ├── PixelProjects.vue
│   │   └── PixelContact.vue
│   └── data/
│       └── profile.js
└── public/
    └── favicon.ico
```

---

## 4. 页面结构

### Tab 导航
- **About** - 个人介绍 + 技术栈
- **Projects** - 核心项目展示
- **Contact** - 联系方式

### 视觉风格
- 像素复古风 (8-bit 风格)
- 深色背景 (#0f0f23)
- 霓虹配色：绿色 (#39ff14)、品红 (#ff00ff)、青色 (#00ffff)
- CRT 扫描线叠加效果
- 像素化边框和阴影

---

## 5. 动画效果

| 效果 | 描述 |
|------|------|
| CRT 扫描线 | 全屏扫描线叠加层 |
| 霓虹按钮 | hover 时发光闪烁 |
| 像素光标 | 鼠标跟随像素效果 |
| Tab 切换 | 像素化过渡动画 |
| 头像呼吸 | 轻微缩放动画 |
| 打字机 | 页面加载时打字机效果 |

---

## 6. 内容来源

基于 `个人简介.md` 内容提取:
- 基本信息：姓名、学校、专业、职位
- 技术栈：AI/LLM、后端开发、开发环境
- 项目：空巢老人Agent、多厂商算法网关、遗留系统升级
- 联系方式（待补充）

---

## 7. 部署计划

1. 创建 GitHub 仓库 `victor-homepage`
2. 本地初始化 Vite + Vue 项目
3. 实现所有组件和样式
4. 配置 GitHub Actions 或手动部署到 gh-pages
5. 访问 `https://[username].github.io/victor-homepage/`

---

## 8. 待完成

- [ ] 初始化 Vite + Vue 项目
- [ ] 实现像素风基础样式
- [ ] 实现各 Tab 组件
- [ ] 添加动画效果
- [ ] 内容填充（基于个人简介.md）
- [ ] GitHub 仓库创建与部署配置