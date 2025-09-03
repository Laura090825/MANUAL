<template>
  <div class="container">
    <div class="hero-section">
      <div class="hero-content">
        <div class="title-container">
          <h1 class="title">¿Qué es Vue.js?</h1>
          <div class="title-decoration"></div>
        </div>
        <p class="hero-description">
          Descubre el framework progresivo que está revolucionando el desarrollo web moderno
        </p>
      </div>
      <div class="hero-visual">
        <div class="vue-ecosystem">
          <div class="ecosystem-node main-node">
            <span class="node-icon">⚡</span>
            <span class="node-label">Vue.js</span>
          </div>
          <div class="ecosystem-node" style="--delay: 0.2s">
            <span class="node-icon">🗺️</span>
            <span class="node-label">Router</span>
          </div>
          <div class="ecosystem-node" style="--delay: 0.4s">
            <span class="node-icon">🍍</span>
            <span class="node-label">Pinia</span>
          </div>
          <div class="ecosystem-node" style="--delay: 0.6s">
            <span class="node-icon">🛠️</span>
            <span class="node-label">Vite</span>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <div class="definition-card">
        <div class="card-header">
          <div class="card-icon">🚀</div>
          <h2 class="card-title">Framework Progresivo</h2>
        </div>
        <div class="card-content">
          <p>
            Vue.js es un <strong>framework de JavaScript de código abierto</strong> utilizado para construir 
            interfaces de usuario (UI) y aplicaciones de una sola página (Single-Page Applications - SPAs). 
            Creado por Evan You, se destaca por su arquitectura incrementalmente adaptable que se enfoca en 
            la renderización declarativa y la composición de componentes.
          </p>
          <div class="highlight-box">
            <div class="highlight-icon">💡</div>
            <p>
              La biblioteca principal se centra solo en la capa de vista, lo que la hace 
              <span class="highlight-text">fácil de integrar</span> con otras bibliotecas o proyectos existentes.
            </p>
          </div>
        </div>
      </div>

      <div class="features-section">
        <h2 class="section-title">
          <span class="title-icon">✨</span>
          Características Principales
        </h2>
        
        <div class="features-grid">
          <div class="feature-card" v-for="(feature, index) in features" :key="index" :style="{ '--index': index }">
            <div class="feature-header">
              <div class="feature-icon" v-html="feature.icon"></div>
              <h3 class="feature-title">{{ feature.title }}</h3>
            </div>
            <p class="feature-description">{{ feature.description }}</p>
            <div class="feature-tags">
              <span v-for="tag in feature.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="advantages-section">
        <div class="advantages-header">
          <h2 class="section-title">
            <span class="title-icon">🎯</span>
            ¿Por qué elegir Vue.js?
          </h2>
          <p class="section-subtitle">
            Vue.js combina lo mejor de React y Angular en un package más simple y elegante
          </p>
        </div>
        
        <div class="advantages-grid">
          <div class="advantage-item" v-for="(advantage, index) in advantages" :key="index">
            <div class="advantage-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="advantage-content">
              <h4 class="advantage-title">{{ advantage.title }}</h4>
              <p class="advantage-description">{{ advantage.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="conclusion-section">
        <div class="conclusion-card">
          <div class="conclusion-background">
            <div class="bg-shape shape-1"></div>
            <div class="bg-shape shape-2"></div>
          </div>
          <div class="conclusion-content">
            <h3 class="conclusion-title">El Framework del Futuro</h3>
            <p class="conclusion-text">
              Vue.js es conocido por su <strong>curva de aprendizaje suave</strong>, su 
              <strong>excelente documentación</strong> y su <strong>rendimiento excepcional</strong>. 
              Estas características lo convierten en una opción popular tanto para principiantes 
              como para desarrolladores experimentados.
            </p>
            <div class="stats-row">
              <div class="stat-item">
                <div class="stat-number">3M+</div>
                <div class="stat-label">Descargas semanales</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">200K+</div>
                <div class="stat-label">Stars en GitHub</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">1.7M+</div>
                <div class="stat-label">Desarrolladores</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const features = ref([
  {
    icon: '🔄',
    title: 'Reactividad',
    description: 'Sistema de reactividad avanzado que actualiza automáticamente la interfaz cuando cambian los datos subyacentes.',
    tags: ['Automático', 'Eficiente', 'Proxy-based']
  },
  {
    icon: '🧩',
    title: 'Componentes',
    description: 'Arquitectura basada en componentes que permite construir aplicaciones encapsuladas y reutilizables.',
    tags: ['Modular', 'Reutilizable', 'Escalable']
  },
  {
    icon: '📝',
    title: 'Sistema de Plantillas',
    description: 'Sintaxis de plantillas basada en HTML que permite vincular el DOM renderizado con los datos de Vue.',
    tags: ['Declarativo', 'Intuitivo', 'HTML-based']
  },
  {
    icon: '🗺️',
    title: 'Enrutamiento y Estado',
    description: 'Bibliotecas complementarias como Vue Router para enrutamiento y Pinia para gestión de estado centralizada.',
    tags: ['Vue Router', 'Pinia', 'Centralizado']
  },
  {
    icon: '📈',
    title: 'Progresivo',
    description: 'Puedes empezar a usar Vue.js en una pequeña parte de tu proyecto y escalarlo según sea necesario.',
    tags: ['Incremental', 'Flexible', 'Adaptable']
  },
  {
    icon: '⚡',
    title: 'Rendimiento',
    description: 'Virtual DOM optimizado y compilación en tiempo de construcción para máximo rendimiento.',
    tags: ['Virtual DOM', 'Optimizado', 'Rápido']
  }
]);

const advantages = ref([
  {
    title: 'Curva de Aprendizaje Suave',
    description: 'Sintaxis familiar y documentación excepcional que facilita el aprendizaje para desarrolladores de todos los niveles.'
  },
  {
    title: 'Ecosistema Robusto',
    description: 'Herramientas oficiales y bibliotecas de terceros que cubren todas las necesidades del desarrollo moderno.'
  },
  {
    title: 'Comunidad Activa',
    description: 'Una comunidad vibrante que contribuye constantemente con plugins, herramientas y recursos educativos.'
  },
  {
    title: 'Flexibilidad Arquitectónica',
    description: 'Se adapta tanto a proyectos pequeños como a aplicaciones empresariales complejas sin comprometer la simplicidad.'
  }
]);

onMounted(() => {
  // Add intersection observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature-card, .advantage-item').forEach(el => {
    observer.observe(el);
  });
});
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Hero Section */
.hero-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 5rem;
  padding: 2rem 0;
}

.title-container {
  position: relative;
  margin-bottom: 1.5rem;
}

.title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.1;
  animation: slideInLeft 0.8s ease-out;
}

.title-decoration {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #42b883, #35495e);
  border-radius: 2px;
  animation: expandWidth 0.8s ease-out 0.5s both;
}

.hero-description {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  animation: fadeInUp 0.8s ease-out 0.3s both;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.vue-ecosystem {
  position: relative;
  width: 300px;
  height: 300px;
}

.ecosystem-node {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: fadeInScale 0.6s ease-out both;
  animation-delay: var(--delay, 0s);
}

.ecosystem-node:hover {
  transform: scale(1.1);
  background: rgba(255, 255, 255, 0.15);
}

.main-node {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.3), rgba(53, 73, 94, 0.3));
  z-index: 2;
}

.ecosystem-node:nth-child(2) {
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
}

.ecosystem-node:nth-child(3) {
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
}

.ecosystem-node:nth-child(4) {
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
}

.node-icon {
  font-size: 2rem;
}

.node-label {
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
}

/* Content Sections */
.content-section {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.definition-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
}

.definition-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #42b883, #35495e, #667eea);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.card-icon {
  font-size: 3rem;
  animation: bounce 2s infinite;
}

.card-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: white;
  margin: 0;
}

.card-content p {
  font-size: 1.2rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
}

.highlight-box {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(66, 184, 131, 0.1);
  border: 1px solid rgba(66, 184, 131, 0.3);
  border-radius: 12px;
  margin-top: 1.5rem;
}

.highlight-icon {
  font-size: 1.5rem;
  margin-top: 0.2rem;
}

.highlight-text {
  color: #42b883;
  font-weight: 600;
}

/* Features Section */
.features-section {
  margin: 4rem 0;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 3rem;
  text-align: center;
  justify-content: center;
}

.title-icon {
  font-size: 2rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 0.6s ease-out forwards;
  animation-delay: calc(var(--index) * 0.1s);
}

.feature-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.12);
}

.feature-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.feature-icon {
  font-size: 2.5rem;
}

.feature-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: white;
  margin: 0;
}

.feature-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.feature-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.3rem 0.8rem;
  background: rgba(66, 184, 131, 0.2);
  color: #42b883;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(66, 184, 131, 0.3);
}

/* Advantages Section */
.advantages-section {
  margin: 4rem 0;
}

.advantages-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 1rem;
}

.advantages-grid {
  display: grid;
  gap: 2rem;
}

.advantage-item {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateX(-30px);
}

.advantage-item.animate-in {
  opacity: 1;
  transform: translateX(0);
}

.advantage-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateX(10px);
}

.advantage-number {
  font-size: 2rem;
  font-weight: 900;
  color: #42b883;
  min-width: 60px;
}

.advantage-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
}

.advantage-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

/* Conclusion Section */
.conclusion-section {
  margin: 4rem 0;
}

.conclusion-card {
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  padding: 3rem;
  overflow: hidden;
}

.conclusion-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.bg-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
}

.shape-1 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(66, 184, 131, 0.2) 0%, transparent 70%);
  top: -50px;
  right: -50px;
}

.shape-2 {
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%);
  bottom: -30px;
  left: -30px;
}

.conclusion-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.conclusion-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 1.5rem;
}

.conclusion-text {
  font-size: 1.2rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 900;
  color: #42b883;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Animations */
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

@keyframes expandWidth {
  from { width: 0; }
  to { width: 100px; }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
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

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .advantage-item {
    flex-direction: column;
    text-align: center;
  }
  
  .stats-row {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>