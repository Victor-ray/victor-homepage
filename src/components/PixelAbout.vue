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
