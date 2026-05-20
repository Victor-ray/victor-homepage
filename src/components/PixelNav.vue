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