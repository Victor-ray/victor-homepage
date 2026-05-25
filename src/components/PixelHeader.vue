<template>
  <header class="header">
    <div class="header-bg"></div>
    <div class="header-content">
      <div class="avatar-wrapper">
        <div class="avatar">{{ initials }}</div>
        <div class="avatar-glow"></div>
      </div>

      <div class="intro">
        <h1 class="name">Hi, I'm <span class="highlight">{{ profile.name }}</span></h1>
        <p class="title">{{ profile.title }}</p>

        <div class="tags">
          <span class="tag tag-school">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5"/>
            </svg>
            {{ profile.school }}
          </span>
          <span class="tag tag-major">{{ profile.major }}</span>
          <span class="tag tag-personality">{{ profile.personality }}</span>
        </div>

        <div class="highlights">
          <span v-for="item in profile.highlights" :key="item" class="highlight-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { profile } from '../data/profile.js'

const initials = computed(() => {
  return profile.name.charAt(0)
})
</script>

<style scoped>
.header {
  position: relative;
  padding: 80px 24px 60px;
  overflow: hidden;
}

.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 320px;
  background: linear-gradient(165deg, #faf9f7 0%, #f3ebe3 50%, #e8e0d5 100%);
  z-index: 0;
}

.header-content {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 48px;
}

.avatar-wrapper {
  position: relative;
  flex-shrink: 0;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e07850 0%, #c4613a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Cormorant Garamond', serif;
  font-size: 3.5rem;
  font-weight: 500;
  color: white;
  box-shadow: 0 12px 40px rgba(224, 120, 80, 0.3);
}

.avatar-glow {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(224, 120, 80, 0.2), transparent);
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
}

.intro {
  flex: 1;
}

.name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.8rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 8px;
  letter-spacing: -0.02em;
}

.name .highlight {
  color: var(--accent-primary);
}

.title {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 24px;
  font-weight: 400;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 500;
}

.tag svg {
  flex-shrink: 0;
}

.tag-school {
  background: #f0ebe4;
  color: #7a6652;
}

.tag-major {
  background: #e8f0ed;
  color: #2d5a4a;
}

.tag-personality {
  background: #f5ebe6;
  color: #a65d3f;
}

.highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.highlight-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.highlight-item svg {
  color: #f0b429;
}

@media (max-width: 700px) {
  .header-content {
    flex-direction: column;
    text-align: center;
  }

  .tags, .highlights {
    justify-content: center;
  }

  .name {
    font-size: 2.2rem;
  }
}
</style>