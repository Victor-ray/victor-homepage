<template>
  <section class="section">
    <div class="about-grid">
      <div class="card card-main">
        <div class="card-label">About Me</div>
        <h2 class="card-title">探索技术与创意的交汇点</h2>

        <div class="info-list">
          <div class="info-item">
            <span class="info-label">Education</span>
            <span class="info-value">{{ profile.school }} · {{ profile.major }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Experience</span>
            <span class="info-value">{{ profile.internship }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Personality</span>
            <span class="info-value">{{ profile.personality }} — 具有强烈的团队协作精神</span>
          </div>
        </div>

        <p class="bio">{{ profile.goal }}</p>
      </div>

      <div class="card card-goal">
        <div class="card-label">Current Focus</div>
        <ul class="focus-list">
          <li v-for="item in profile.currently" :key="item" class="focus-item">
            <span class="focus-dot"></span>
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <div class="tech-section">
      <h3 class="section-heading">Technical Skills</h3>

      <div class="tech-grid">
        <div v-for="(items, category) in techStackDisplay" :key="category" class="tech-card">
          <h4 class="tech-category">{{ category }}</h4>
          <div class="tech-tags">
            <span v-for="item in items" :key="item" class="tech-tag">{{ item }}</span>
          </div>
        </div>
      </div>
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

.about-grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 24px;
  margin-bottom: 48px;
}

.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-soft);
}

.card-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent-primary);
  margin-bottom: 12px;
}

.card-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 28px;
  line-height: 1.3;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid var(--border-color);
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
}

.info-value {
  font-size: 0.95rem;
  color: var(--text-primary);
}

.bio {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

.card-goal {
  display: flex;
  flex-direction: column;
}

.focus-list {
  list-style: none;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.focus-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.focus-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-secondary);
  flex-shrink: 0;
  margin-top: 8px;
}

.section-heading {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 24px;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.tech-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-soft);
  transition: box-shadow 0.2s;
}

.tech-card:hover {
  box-shadow: var(--shadow-medium);
}

.tech-category {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent-secondary);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  font-size: 0.8rem;
  padding: 6px 12px;
  background: var(--bg-tertiary);
  border-radius: 6px;
  color: var(--text-secondary);
  font-weight: 500;
}

@media (max-width: 800px) {
  .about-grid {
    grid-template-columns: 1fr;
  }

  .tech-grid {
    grid-template-columns: 1fr;
  }
}
</style>