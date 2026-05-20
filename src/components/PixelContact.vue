<template>
  <section class="section contact">
    <h2 class="section-title">联系我</h2>

    <div class="pixel-box contact-box">
      <p>📧 Email: {{ profile.contact.email }}</p>
      <p>💻 GitHub: @{{ profile.contact.github }}</p>
    </div>

    <div class="pixel-box motto-box">
      <p>"{{ profile.motto }}"</p>
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

.contact-box p {
  font-size: 12px;
  margin-bottom: 15px;
}

.motto-box {
  text-align: center;
  border-color: #ff00ff;
  box-shadow: 4px 4px 0 #ff00ff;
}

.motto-box p {
  font-size: 11px;
  color: #ff00ff;
  font-style: italic;
}
</style>