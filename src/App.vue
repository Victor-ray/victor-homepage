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