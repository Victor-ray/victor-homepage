<template>
  <section class="section">
    <div class="section-header">
      <h2 class="section-title">Featured Projects</h2>
      <p class="section-subtitle">Some of my recent work and contributions</p>
    </div>

    <div class="projects-list">
      <article v-for="project in profile.projects" :key="project.name" class="project-card">
        <div class="project-content">
          <h3 class="project-name">{{ project.name }}</h3>
          <p class="project-desc">{{ project.desc }}</p>
        </div>
        <div class="project-arrow">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { profile } from '../data/profile.js'
</script>

<style scoped>
.section {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.section-header {
  margin-bottom: 36px;
}

.section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.section-subtitle {
  font-size: 1rem;
  color: var(--text-muted);
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.project-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 28px 32px;
  box-shadow: var(--shadow-soft);
  transition: all 0.25s ease;
  cursor: pointer;
}

.project-card:hover {
  box-shadow: var(--shadow-medium);
  transform: translateY(-2px);
  border-color: var(--accent-primary);
}

.project-content {
  flex: 1;
}

.project-name {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.project-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.project-arrow {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  transition: all 0.25s ease;
}

.project-card:hover .project-arrow {
  background: var(--accent-primary);
  color: white;
  transform: translateX(4px);
}

@media (max-width: 600px) {
  .project-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .project-arrow {
    align-self: flex-end;
  }
}
</style>