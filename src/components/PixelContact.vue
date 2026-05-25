<template>
  <section class="section">
    <div class="section-header">
      <h2 class="section-title">Get in Touch</h2>
      <p class="section-subtitle">Feel free to reach out for collaboration or just a friendly chat</p>
    </div>

    <div class="contact-grid">
      <a :href="`https://github.com/${profile.contact.github}`" target="_blank" class="contact-card">
        <div class="contact-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </div>
        <div class="contact-info">
          <span class="contact-label">GitHub</span>
          <span class="contact-value">@{{ profile.contact.github }}</span>
        </div>
        <div class="contact-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </a>

      <a :href="`mailto:${profile.contact.email}`" class="contact-card">
        <div class="contact-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <div class="contact-info">
          <span class="contact-label">Email</span>
          <span class="contact-value">{{ profile.contact.email }}</span>
        </div>
        <div class="contact-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </a>
    </div>

    <div class="motto-card">
      <p class="motto">"{{ profile.motto }}"</p>
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

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 32px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 20px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 24px 28px;
  box-shadow: var(--shadow-soft);
  text-decoration: none;
  transition: all 0.25s ease;
}

.contact-card:hover {
  box-shadow: var(--shadow-medium);
  transform: translateY(-2px);
  border-color: var(--accent-primary);
}

.contact-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  flex-shrink: 0;
  transition: all 0.25s ease;
}

.contact-card:hover .contact-icon {
  background: var(--accent-primary);
  color: white;
}

.contact-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contact-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
}

.contact-value {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-primary);
}

.contact-arrow {
  color: var(--text-muted);
  transition: all 0.25s ease;
}

.contact-card:hover .contact-arrow {
  color: var(--accent-primary);
  transform: translateX(4px);
}

.motto-card {
  background: linear-gradient(135deg, #faf9f7 0%, #f3ebe3 100%);
  border-radius: 16px;
  padding: 36px;
  text-align: center;
  border: 1px solid #e8e0d5;
}

.motto {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  font-style: italic;
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 600px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>