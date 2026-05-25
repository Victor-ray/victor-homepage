<template>
  <nav class="nav">
    <div class="nav-inner">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="['nav-btn', { active: currentTab === tab.id }]"
        @click="$emit('change', tab.id)"
      >
        <component :is="tab.icon" class="nav-icon" />
        {{ tab.label }}
      </button>
    </div>
  </nav>
</template>

<script setup>
import { h } from 'vue'

defineProps({
  currentTab: {
    type: String,
    default: 'about'
  }
})

defineEmits(['change'])

const AboutIcon = () => h('svg', {
  width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.8
}, [
  h('circle', { cx: 12, cy: 8, r: 4 }),
  h('path', { d: 'M4 20c0-4 4-6 8-6s8 2 8 6' })
])

const ProjectsIcon = () => h('svg', {
  width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.8
}, [
  h('rect', { x: 3, y: 3, width: 7, height: 7, rx: 1 }),
  h('rect', { x: 14, y: 3, width: 7, height: 7, rx: 1 }),
  h('rect', { x: 3, y: 14, width: 7, height: 7, rx: 1 }),
  h('rect', { x: 14, y: 14, width: 7, height: 7, rx: 1 })
])

const ContactIcon = () => h('svg', {
  width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.8
}, [
  h('path', { d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' })
])

const tabs = [
  { id: 'about', label: 'About', icon: AboutIcon },
  { id: 'projects', label: 'Projects', icon: ProjectsIcon },
  { id: 'contact', label: 'Contact', icon: ContactIcon }
]
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(250, 249, 247, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);
}

.nav-inner {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  gap: 8px;
}

.nav-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  background: none;
  border: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-muted);
  cursor: pointer;
  position: relative;
  transition: color 0.2s;
}

.nav-btn::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 24px;
  right: 24px;
  height: 2px;
  background: var(--accent-primary);
  transform: scaleX(0);
  transition: transform 0.2s ease;
}

.nav-btn:hover {
  color: var(--text-primary);
}

.nav-btn.active {
  color: var(--accent-primary);
}

.nav-btn.active::after {
  transform: scaleX(1);
}

.nav-icon {
  flex-shrink: 0;
}
</style>