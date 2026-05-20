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