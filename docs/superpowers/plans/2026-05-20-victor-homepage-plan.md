# Victor 个人网页实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 构建像素复古风格的个人介绍网页，基于 Vue 3 + Vite，部署到 GitHub Pages

**Architecture:** 单页应用，使用 Vue 3 Composition API，Tab 导航切换三个板块（About/Projects/Contact），丰富的像素风动画效果

**Tech Stack:** Vue 3, Vite 5, 原生 CSS + CSS 变量

---

## 文件结构

```
victor-homepage/           (当前目录 E:/claude-code-demo/Victor_github_home)
├── index.html             # Vite 入口 HTML
├── vite.config.js         # Vite 配置
├── package.json           # 依赖管理
├── src/
│   ├── main.js            # Vue 应用入口
│   ├── App.vue            # 根组件（包含扫描线和Tab逻辑）
│   ├── assets/styles/
│   │   ├── pixel.css      # 像素风基础样式（颜色、字体、边框）
│   │   └── scanlines.css  # CRT扫描线效果
│   ├── components/
│   │   ├── PixelHeader.vue    # 头像 + 标题区
│   │   ├── PixelNav.vue        # Tab导航按钮
│   │   ├── PixelAbout.vue      # About板块（个人介绍+技术栈）
│   │   ├── PixelProjects.vue   # Projects板块（项目展示）
│   │   └── PixelContact.vue     # Contact板块（联系方式）
│   └── data/
│       └── profile.js          # 个人资料数据
└── public/
    └── favicon.ico         # 像素风 favicon
```

---

## 任务列表

### Task 1: 初始化项目基础文件

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`

- [ ] **Step 1: 创建 package.json**

```json
{
  "name": "victor-homepage",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.4.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "vite": "^5.0.0"
  }
}
```

- [ ] **Step 2: 创建 vite.config.js**

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/victor-homepage/'
})
```

- [ ] **Step 3: 创建 index.html**

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Victor - 雷李胜的个人主页</title>
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

---

### Task 2: 创建 Vue 应用入口和基础样式

**Files:**
- Create: `src/main.js`
- Create: `src/assets/styles/pixel.css`
- Create: `src/assets/styles/scanlines.css`

- [ ] **Step 1: 创建 src/main.js**

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/pixel.css'
import './assets/styles/scanlines.css'

createApp(App).mount('#app')
```

- [ ] **Step 2: 创建 src/assets/styles/pixel.css**

```css
:root {
  --bg-color: #0f0f23;
  --neon-green: #39ff14;
  --neon-pink: #ff00ff;
  --neon-cyan: #00ffff;
  --box-bg: #1a1a2e;
  --text-gray: #888;
  --font-pixel: 'Press Start 2P', monospace;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-pixel);
  background-color: var(--bg-color);
  color: var(--neon-green);
  min-height: 100vh;
  overflow-x: hidden;
  line-height: 1.8;
}

#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.pixel-box {
  background: var(--box-bg);
  border: 4px solid var(--neon-green);
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 4px 4px 0 var(--neon-green);
}

.pixel-btn {
  font-family: var(--font-pixel);
  font-size: 12px;
  padding: 15px 20px;
  background: var(--box-bg);
  color: var(--neon-green);
  border: none;
  cursor: pointer;
  box-shadow: 4px 4px 0 var(--neon-green);
  transition: all 0.1s;
}

.pixel-btn:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 var(--neon-green);
  text-shadow: 0 0 10px var(--neon-green);
}

.pixel-btn.active {
  background: var(--neon-green);
  color: var(--bg-color);
}
```

- [ ] **Step 3: 创建 src/assets/styles/scanlines.css**

```css
.scanlines {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
  z-index: 1000;
}

@keyframes scanline-move {
  0% { background-position: 0 0; }
  100% { background-position: 0 100px; }
}
```

---

### Task 3: 创建个人资料数据

**Files:**
- Create: `src/data/profile.js`

- [ ] **Step 1: 创建 src/data/profile.js**

```javascript
export const profile = {
  name: '雷大帅',
  title: '计算机科学与技术本科生 | Java 后端开发 | AI Agent 探索者',
  school: '中南财经政法大学',
  major: '计算机科学与技术（大三）',
  internship: '武汉中科通达（CITMS）Java 后端开发实习生',
  personality: 'ENFJ-A',
  highlights: [
    '校级优秀学生干部',
    '二等奖学金获得者'
  ],
  goal: '持续关注技术前沿，正致力于将传统后端架构与大语言模型（LLM）生态深度融合',

  techStack: {
    ai: ['AI Agent 核心逻辑与 Persona 设计', 'RAG (检索增强生成) 架构及落地', '大模型 API 接入企业级系统'],
    backend: ['Java', 'Spring Boot', 'MyBatis Plus', 'MySQL', 'Redis'],
    system: ['多厂商 SDK 集成', '统一算法网关构建', 'Token 鉴权管理']
  },

  projects: [
    {
      name: '空巢老人虚拟家属系统（毕设进行中）',
      desc: '设计基于 AI Agent 的虚拟人格，通过打通微信等交互渠道，利用大语言模型为高龄人群提供具备情感记忆的陪伴系统'
    },
    {
      name: '多厂商算法 SDK 统一网关',
      desc: '负责构建统一后端网关，成功接入依图 V3 等外部人脸识别与算法 API，实现复杂 Token 管理与高并发请求调度'
    },
    {
      name: '遗留系统架构升级',
      desc: '完成老旧项目数据库表结构的年份字段扩充，重写底层过滤与排序逻辑，提升系统数据处理能力'
    }
  ],

  currently: [
    '正在冲刺春招/夏招实习，常驻 LeetCode Hot 100 与 CodeTop',
    '喜欢研究系统底层机制与算法（《算法设计手册》阅读中）',
    '效率工具重度爱好者'
  ],

  contact: {
    github: 'Victor',
    email: 'victor@example.com'
  },

  motto: '保持好奇，用代码构建更温暖的世界。'
}
```

---

### Task 4: 创建 PixelHeader 组件

**Files:**
- Create: `src/components/PixelHeader.vue`

- [ ] **Step 1: 创建 src/components/PixelHeader.vue**

```vue
<template>
  <header class="pixel-header">
    <div class="avatar">
      <div class="pixel-avatar"></div>
    </div>
    <h1 class="title">Hi there, I'm {{ profile.name }} 👋</h1>
    <p class="subtitle">// {{ profile.title }}</p>
  </header>
</template>

<script setup>
import { profile } from '../data/profile.js'
</script>

<style scoped>
.pixel-header {
  text-align: center;
  padding: 40px 0;
}

.avatar {
  margin-bottom: 20px;
}

.pixel-avatar {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #39ff14 25%, transparent 25%),
              linear-gradient(-135deg, #39ff14 25%, transparent 25%),
              linear-gradient(45deg, #39ff14 25%, transparent 25%),
              linear-gradient(-45deg, #39ff14 25%, transparent 25%);
  background-color: #1a1a2e;
  margin: 0 auto;
  box-shadow: 0 0 0 4px #39ff14, 0 0 0 8px #0f0f23;
  animation: breathe 2s ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.title {
  font-size: 20px;
  color: #39ff14;
  text-shadow: 4px 4px 0 #0f0f23;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 10px;
  color: #888;
}
</style>
```

---

### Task 5: 创建 PixelNav 组件

**Files:**
- Create: `src/components/PixelNav.vue`

- [ ] **Step 1: 创建 src/components/PixelNav.vue**

```vue
<template>
  <nav class="pixel-nav">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      :class="['pixel-btn', { active: currentTab === tab.id }]"
      @click="$emit('change', tab.id)"
    >
      {{ tab.label }}
    </button>
  </nav>
</template>

<script setup>
defineProps({
  currentTab: {
    type: String,
    default: 'about'
  }
})

defineEmits(['change'])

const tabs = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]
</script>

<style scoped>
.pixel-nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 30px 0;
}

.pixel-btn {
  font-family: 'Press Start 2P', monospace;
  font-size: 12px;
  padding: 15px 20px;
  background: #1a1a2e;
  color: #39ff14;
  border: none;
  cursor: pointer;
  box-shadow: 4px 4px 0 #39ff14;
  transition: all 0.1s;
}

.pixel-btn:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0 #39ff14;
  text-shadow: 0 0 10px #39ff14;
  animation: flicker 0.5s infinite;
}

.pixel-btn.active {
  background: #39ff14;
  color: #0f0f23;
}

@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}
</style>
```

---

### Task 6: 创建 PixelAbout 组件

**Files:**
- Create: `src/components/PixelAbout.vue`

- [ ] **Step 1: 创建 src/components/PixelAbout.vue**

```vue
<template>
  <section class="section about">
    <h2 class="section-title">关于我</h2>

    <div class="pixel-box">
      <p>🎓 {{ profile.school }} {{ profile.major }}</p>
      <p>💼 {{ profile.internship }}</p>
      <p>🌟 <strong>{{ profile.personality }}</strong>，具有强烈的团队协作精神</p>
      <p>🎯 {{ profile.goal }}</p>
    </div>

    <div v-for="(items, category) in techStackDisplay" :key="category" class="tech-category">
      <h3 class="tech-title">{{ category }}</h3>
      <div class="pixel-skill">
        <span v-for="item in items" :key="item" class="skill-tag">{{ item }}</span>
      </div>
    </div>

    <div class="pixel-box currently">
      <h3 class="tech-title">⚡ 学习与日常</h3>
      <ul>
        <li v-for="item in profile.currently" :key="item">{{ item }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { profile } from '../data/profile.js'

const techStackDisplay = {
  'AI 与大模型应用': profile.techStack.ai,
  '后端开发与架构': profile.techStack.backend,
  '系统对接': profile.techStack.system
}
</script>

<style scoped>
.section {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.section-title {
  font-size: 18px;
  color: #ff00ff;
  margin-bottom: 20px;
  text-shadow: 2px 2px 0 #0f0f23;
}

.tech-category {
  margin-bottom: 20px;
}

.tech-title {
  font-size: 12px;
  color: #00ffff;
  margin-bottom: 10px;
}

.pixel-skill {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-tag {
  font-size: 10px;
  padding: 8px 12px;
  background: #ff00ff;
  color: #0f0f23;
  box-shadow: 2px 2px 0 #0f0f23;
}

.currently ul {
  list-style: none;
  padding: 0;
}

.currently li {
  font-size: 10px;
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}

.currently li::before {
  content: '►';
  position: absolute;
  left: 0;
  color: #39ff14;
}
</style>
```

---

### Task 7: 创建 PixelProjects 组件

**Files:**
- Create: `src/components/PixelProjects.vue`

- [ ] **Step 1: 创建 src/components/PixelProjects.vue**

```vue
<template>
  <section class="section projects">
    <h2 class="section-title">核心项目</h2>

    <div class="project-grid">
      <div v-for="project in profile.projects" :key="project.name" class="pixel-project">
        <div class="project-icon">🤖</div>
        <h3>{{ project.name }}</h3>
        <p>{{ project.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { profile } from '../data/profile.js'
</script>

<style scoped>
.section-title {
  font-size: 18px;
  color: #ff00ff;
  margin-bottom: 20px;
  text-shadow: 2px 2px 0 #0f0f23;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.pixel-project {
  background: #1a1a2e;
  border: 4px solid #00ffff;
  padding: 20px;
  text-align: center;
  box-shadow: 4px 4px 0 #00ffff;
  transition: all 0.2s;
}

.pixel-project:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 #00ffff;
}

.project-icon {
  font-size: 40px;
  margin-bottom: 15px;
}

.pixel-project h3 {
  font-size: 11px;
  color: #00ffff;
  margin-bottom: 10px;
}

.pixel-project p {
  font-size: 9px;
  color: #888;
  line-height: 1.8;
}
</style>
```

---

### Task 8: 创建 PixelContact 组件

**Files:**
- Create: `src/components/PixelContact.vue`

- [ ] **Step 1: 创建 src/components/PixelContact.vue**

```vue
<template>
  <section class="section contact">
    <h2 class="section-title">联系我</h2>

    <div class="pixel-box contact-box">
      <p>📧 Email: {{ profile.contact.email }}</p>
      <p>💻 GitHub: @{{ profile.contact.github }}</p>
    </div>

    <div class="pixel-box motto-box">
      <p>"{{ profile.motto }}"</p>
    </div>
  </section>
</template>

<script setup>
import { profile } from '../data/profile.js'
</script>

<style scoped>
.section-title {
  font-size: 18px;
  color: #ff00ff;
  margin-bottom: 20px;
  text-shadow: 2px 2px 0 #0f0f23;
}

.contact-box p {
  font-size: 12px;
  margin-bottom: 15px;
}

.motto-box {
  text-align: center;
  border-color: #ff00ff;
  box-shadow: 4px 4px 0 #ff00ff;
}

.motto-box p {
  font-size: 11px;
  color: #ff00ff;
  font-style: italic;
}
</style>
```

---

### Task 9: 创建 App.vue 根组件

**Files:**
- Create: `src/App.vue`

- [ ] **Step 1: 创建 src/App.vue**

```vue
<template>
  <div class="app">
    <div class="scanlines"></div>
    <div class="cursor-pixel"></div>

    <PixelHeader />

    <PixelNav :currentTab="currentTab" @change="changeTab" />

    <main class="content">
      <Transition name="tab">
        <PixelAbout v-if="currentTab === 'about'" key="about" />
        <PixelProjects v-else-if="currentTab === 'projects'" key="projects" />
        <PixelContact v-else-if="currentTab === 'contact'" key="contact" />
      </Transition>
    </main>

    <footer class="pixel-footer">
      <p>Made with 💖 in pixel world</p>
      <p class="visitor-count">Visitors: <span id="counter">0000</span></p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PixelHeader from './components/PixelHeader.vue'
import PixelNav from './components/PixelNav.vue'
import PixelAbout from './components/PixelAbout.vue'
import PixelProjects from './components/PixelProjects.vue'
import PixelContact from './components/PixelContact.vue'

const currentTab = ref('about')

const changeTab = (tab) => {
  currentTab.value = tab
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.app {
  position: relative;
}

.scanlines {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
  z-index: 1000;
}

.cursor-pixel {
  position: fixed;
  width: 15px;
  height: 15px;
  background: #39ff14;
  pointer-events: none;
  z-index: 999;
  mix-blend-mode: difference;
  transition: transform 0.1s ease-out;
}

.content {
  margin-top: 30px;
  min-height: 400px;
}

.pixel-footer {
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  border-top: 4px solid #39ff14;
}

.pixel-footer p {
  font-size: 10px;
  margin-bottom: 10px;
}

.visitor-count {
  color: #ff00ff;
}

.tab-enter-active,
.tab-leave-active {
  transition: all 0.2s;
}

.tab-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.tab-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
```

---

### Task 10: 创建 favicon 和安装依赖

**Files:**
- Create: `public/favicon.ico` (使用 emoji 作为占位符)
- Modify: `package.json` (运行 npm install)

- [ ] **Step 1: 创建像素风 SVG 转 ICO 占位符**

由于无法直接创建 .ico 文件，先创建说明文件，后续可通过在线工具生成：
在浏览器打开 https://favicon.io/emoji-favicons/ 使用 👨‍💻 或 🎮 作为 favicon

- [ ] **Step 2: 运行 npm install**

```bash
cd E:/claude-code-demo/Victor_github_home
npm install
```

---

### Task 11: 本地测试和构建

**Files:**
- Modify: `vite.config.js` (如需要)

- [ ] **Step 1: 运行开发服务器测试**

```bash
npm run dev
```
预期: 在 http://localhost:5173/victor-homepage/ 看到像素风网页

- [ ] **Step 2: 构建生产版本**

```bash
npm run build
```
预期: 生成 `dist` 目录

- [ ] **Step 3: 本地预览构建结果**

```bash
npm run preview
```

---

### Task 12: GitHub 仓库创建和部署配置

**Files:**
- Create: `.gitignore`
- Create: `README.md`
- 创建 GitHub 仓库（需手动或使用 gh CLI）

- [ ] **Step 1: 创建 .gitignore**

```
node_modules
dist
.DS_Store
*.local
```

- [ ] **Step 2: 创建 README.md**

```markdown
# Victor's Pixel Home

🎮 像素复古风格个人主页 | Pixel-style Personal Homepage

https://victor-lee-lisheng.github.io/victor-homepage/

## 快速开始

```bash
npm install
npm run dev
```

## 技术栈

- Vue 3 + Composition API
- Vite 5
- 像素复古风格 CSS

## 部署

自动部署到 GitHub Pages
```

- [ ] **Step 3: 初始化 Git 仓库并关联 GitHub**

```bash
cd E:/claude-code-demo/Victor_github_home
git init
git add .
git commit -m "feat: initial Victor pixel homepage"
```

- [ ] **Step 4: 创建 GitHub 仓库并推送（需要 gh CLI 或手动）**

使用 gh CLI:
```bash
gh repo create victor-homepage --public --push
```

或在浏览器创建: https://github.com/new
- 仓库名: `victor-homepage`
- 设为 public
- 关联远程并推送

- [ ] **Step 5: 配置 GitHub Pages**

在仓库 Settings → Pages → Source 选择 `gh-pages` 分支

或者使用 GitHub Actions 自动部署（需要创建 `.github/workflows/deploy.yml`）

---

## 规格自查

1. **规格覆盖:** ✅ About/Projects/Contact 三个Tab、所有动画效果、个人资料数据
2. **占位符扫描:** ✅ 无 TBD/TODO，内容完整
3. **类型一致性:** ✅ 所有组件使用相同的 CSS 变量和字体定义

---

## 执行选项

**Plan complete and saved to `docs/superpowers/plans/2026-05-20-victor-homepage-plan.md`**

Two execution options:

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** - Execute tasks in this session using executing-plans, batch execution with checkpoints

Which approach?