<template>
  <div class="portada">
    <div class="hero-background">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
    </div>
    
    <div class="portada-content">
      <div class="hero-badge">
        <span class="badge-text">✨ Framework Moderno</span>
      </div>
      
      <h1 class="portada-title">
        <span class="title-line">Manual de</span>
        <span class="title-highlight">Vue.js</span>
      </h1>
      
      <p class="portada-subtitle">
        Una guía completa y moderna para el desarrollo de aplicaciones web 
        <span class="highlight-text">reactivas y escalables</span>
      </p>
      
      <div class="portada-icon">
        <div class="icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="120" height="120">
            <path fill="url(#vue-main-gradient)" d="M12 2L2 7l10 15L22 7z"/>
            <path fill="url(#vue-secondary-gradient)" d="M12 2L2 7l10 5.5L22 7z"/>
            <defs>
              <linearGradient id="vue-main-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#42b883"/>
                <stop offset="100%" style="stop-color:#35495e"/>
              </linearGradient>
              <linearGradient id="vue-secondary-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#35495e"/>
                <stop offset="100%" style="stop-color:#2c3e50"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      <div class="features-grid">
        <div class="feature-card" v-for="(feature, index) in features" :key="index" :style="{ '--delay': index * 0.1 + 's' }">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
      
      <div class="cta-section">
        <button class="cta-button primary">
          <span>Comenzar Tutorial</span>
          <div class="button-glow"></div>
        </button>
        <button class="cta-button secondary">
          <span>Explorar Componentes</span>
        </button>
      </div>
    </div>
    
    <div class="scroll-indicator">
      <div class="scroll-arrow"></div>
      <span>Explora el contenido</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const features = ref([
  {
    icon: '⚡',
    title: 'Reactivo',
    description: 'Sistema de reactividad avanzado'
  },
  {
    icon: '🧩',
    title: 'Modular',
    description: 'Arquitectura basada en componentes'
  },
  {
    icon: '🚀',
    title: 'Performante',
    description: 'Optimizado para velocidad'
  },
  {
    icon: '📱',
    title: 'Responsive',
    description: 'Adaptable a cualquier dispositivo'
  }
]);

onMounted(() => {
  // Add entrance animations
  const elements = document.querySelectorAll('.feature-card');
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('animate-in');
    }, index * 100);
  });
});
</script>

<style scoped>
.portada {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  overflow: hidden;
  background: linear-gradient(135deg, 
    rgba(102, 126, 234, 0.1) 0%, 
    rgba(118, 75, 162, 0.1) 100%);
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  animation: float 8s ease-in-out infinite;
}

.orb-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(66, 184, 131, 0.3) 0%, transparent 70%);
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%);
  bottom: 10%;
  right: 10%;
  animation-delay: 3s;
}

.orb-3 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(118, 75, 162, 0.25) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 6s;
}

.portada-content {
  text-align: center;
  max-width: 1200px;
  z-index: 2;
  animation: fadeInUp 1s ease-out;
}

.hero-badge {
  display: inline-block;
  margin-bottom: 2rem;
  padding: 0.5rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  animation: slideDown 0.8s ease-out 0.2s both;
}

.badge-text {
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
}

.portada-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.title-line {
  display: block;
  color: white;
  opacity: 0;
  animation: slideInLeft 0.8s ease-out 0.4s both;
}

.title-highlight {
  display: block;
  background: linear-gradient(135deg, #42b883, #35495e, #667eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  opacity: 0;
  animation: slideInRight 0.8s ease-out 0.6s both;
}

.title-highlight::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #42b883, #35495e);
  border-radius: 2px;
  animation: expandWidth 0.8s ease-out 1.2s both;
}

.portada-subtitle {
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.8s both;
}

.highlight-text {
  color: #42b883;
  font-weight: 600;
}

.portada-icon {
  margin-bottom: 4rem;
  opacity: 0;
  animation: bounceIn 1s ease-out 1s both;
}

.icon-container {
  display: inline-block;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  animation: rotate 10s linear infinite;
  position: relative;
}

.icon-container::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 50%;
  background: linear-gradient(45deg, #42b883, #35495e, #667eea, #42b883);
  z-index: -1;
  animation: spin 3s linear infinite;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  max-width: 1000px;
}

.feature-card {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 0.6s ease-out forwards;
  animation-delay: var(--delay);
}

.feature-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: bounce 2s infinite;
}

.feature-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
}

.feature-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  line-height: 1.5;
}

.cta-section {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 1.4s both;
}

.cta-button {
  position: relative;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.cta-button.primary {
  background: linear-gradient(135deg, #42b883, #35495e);
  color: white;
  box-shadow: 0 10px 30px rgba(66, 184, 131, 0.3);
}

.cta-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(66, 184, 131, 0.4);
}

.cta-button.secondary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.cta-button.secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.button-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s ease;
}

.cta-button.primary:hover .button-glow {
  left: 100%;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  animation: fadeIn 2s ease-out 2s both;
}

.scroll-arrow {
  width: 20px;
  height: 20px;
  border-right: 2px solid rgba(255, 255, 255, 0.6);
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  transform: rotate(45deg);
  animation: bounce 2s infinite;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes expandWidth {
  from { width: 0; }
  to { width: 100px; }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-30px) rotate(120deg); }
  66% { transform: translateY(15px) rotate(240deg); }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .cta-section {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-button {
    width: 100%;
    max-width: 300px;
  }
}
</style>