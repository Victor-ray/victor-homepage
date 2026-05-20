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