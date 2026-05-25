<template>
  <div class="app">
    <PixelHeader />

    <PixelNav :currentTab="currentTab" @change="changeTab" />

    <main class="content">
      <Transition name="fade-slide">
        <PixelAbout v-if="currentTab === 'about'" key="about" />
        <PixelProjects v-else-if="currentTab === 'projects'" key="projects" />
        <PixelContact v-else-if="currentTab === 'contact'" key="contact" />
      </Transition>
    </main>

    <footer class="footer">
      <p class="motto">"{{ profile.motto }}"</p>
      <p class="copyright">© 2024 {{ profile.name }} · Made with passion</p>
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
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@400;500;600&display=swap');

:root {
  --bg-primary: #faf9f7;
  --bg-secondary: #ffffff;
  --bg-tertiary: #f3f1ed;
  --text-primary: #1a1a1a;
  --text-secondary: #5c5c5c;
  --text-muted: #8a8a8a;
  --accent-primary: #e07850;
  --accent-secondary: #2d5a4a;
  --border-color: #e8e5df;
  --shadow-soft: 0 2px 20px rgba(0, 0, 0, 0.06);
  --shadow-medium: 0 8px 40px rgba(0, 0, 0, 0.1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 24px;
  width: 100%;
}

.footer {
  text-align: center;
  padding: 60px 24px;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  margin-top: auto;
}

.footer .motto {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  font-style: italic;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.footer .copyright {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>