<script setup>
import { ref, computed, onMounted } from 'vue';
import Portada from './components/Portada.vue';
import QueEsVue from './components/QueEsVue.vue';
import Requisitos from './components/Requisitos.vue';
import CreacionDeProyecto from './components/CreacionDeProyecto.vue';
import Interpolacion from './components/Interpolacion.vue';
import DirectivasDeVue from './components/DirectivasDeVue.vue';
import OptionsApi from './components/OptionsApi.vue';
import CompositionApi from './components/CompositionApi.vue';
import CicloDeVidaDeVue from './components/CicloDeVidaDeVue.vue';
import ComponentesImportacion from './components/ComponentesImportacion.vue';
import ComponentizacionProps from './components/ComponentizacionProps.vue';
import CreacionDeUnProyectoTemplateQuasar from './components/CreacionDeUnProyectoTemplateQuasar.vue';
import InstalarQuasarEnUnProyectoYaCreado from './components/InstalarQuasarEnUnProyectoYaCreado.vue';
import VueRouter from './components/VueRouter.vue';
import Pinia from './components/Pinia.vue';
import PiniaPluginPersistedstate from './components/PiniaPluginPersistedstate.vue';

const components = {
  Portada,
  QueEsVue,
  Requisitos,
  CreacionDeProyecto,
  Interpolacion,
  DirectivasDeVue,
  OptionsApi,
  CompositionApi,
  CicloDeVidaDeVue,
  ComponentesImportacion,
  ComponentizacionProps,
  CreacionDeUnProyectoTemplateQuasar,
  InstalarQuasarEnUnProyectoYaCreado,
  VueRouter,
  Pinia,
  PiniaPluginPersistedstate
};

const currentComponent = ref('Portada');
const sidebarCollapsed = ref(false);
const isLoaded = ref(false);

const currentView = computed(() => {
  return components[currentComponent.value];
});

const menuItems = [
  { key: 'Portada', title: 'Portada', icon: '🏠' },
  { key: 'QueEsVue', title: '¿Qué es Vue?', icon: '❓' },
  { key: 'Requisitos', title: 'Requisitos', icon: '📋' },
  { key: 'CreacionDeProyecto', title: 'Creación de Proyecto', icon: '🚀' },
  { key: 'Interpolacion', title: 'Interpolación', icon: '🔗' },
  { key: 'DirectivasDeVue', title: 'Directivas de Vue', icon: '⚡' },
  { key: 'OptionsApi', title: 'Options API', icon: '⚙️' },
  { key: 'CompositionApi', title: 'Composition API', icon: '🧩' },
  { key: 'CicloDeVidaDeVue', title: 'Ciclo de Vida de Vue', icon: '🔄' },
  { key: 'ComponentesImportacion', title: 'Importación de Componentes', icon: '📦' },
  { key: 'ComponentizacionProps', title: 'Props de Componentes', icon: '🎯' },
  { key: 'CreacionDeUnProyectoTemplateQuasar', title: 'Crear Proyecto Quasar', icon: '💎' },
  { key: 'InstalarQuasarEnUnProyectoYaCreado', title: 'Instalar Quasar en Proyecto Existente', icon: '🔧' },
  { key: 'VueRouter', title: 'Vue Router', icon: '🗺️' },
  { key: 'Pinia', title: 'Pinia', icon: '🍍' },
  { key: 'PiniaPluginPersistedstate', title: 'Pinia Persisted State', icon: '💾' },
];

function changeComponent(component) {
  currentComponent.value = component;
}

function toggleSidebar() {
  sidebarCollapsed.value = !sidebarCollapsed.value;
}

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 100);
});
</script>

<template>
  <div id="app-container" :class="{ loaded: isLoaded }">
    <!-- Background Elements -->
    <div class="background-elements">
      <div class="floating-shape shape-1"></div>
      <div class="floating-shape shape-2"></div>
      <div class="floating-shape shape-3"></div>
      <div class="floating-shape shape-4"></div>
    </div>

    <!-- Sidebar -->
    <aside class="sidebar" :class="{ collapsed: sidebarCollapsed }">
      <div class="sidebar-header">
        <div class="logo-container">
          <div class="vue-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
              <path fill="url(#vue-gradient)" d="M12 2L2 7l10 15L22 7z"/>
              <path fill="url(#vue-gradient-dark)" d="M12 2L2 7l10 5.5L22 7z"/>
              <defs>
                <linearGradient id="vue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#42b883"/>
                  <stop offset="100%" style="stop-color:#35495e"/>
                </linearGradient>
                <linearGradient id="vue-gradient-dark" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#35495e"/>
                  <stop offset="100%" style="stop-color:#2c3e50"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 class="sidebar-title" v-if="!sidebarCollapsed">Manual de Vue.js</h2>
        </div>
        <button class="sidebar-toggle" @click="toggleSidebar">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
      
      <nav class="sidebar-nav">
        <ul>
          <li v-for="(item, index) in menuItems" :key="item.key" :style="{ '--delay': index * 0.05 + 's' }">
            <a href="#" 
               @click.prevent="changeComponent(item.key)" 
               :class="{ active: currentComponent === item.key }"
               :title="item.title">
              <span class="nav-icon">{{ item.icon }}</span>
              <span class="nav-text" v-if="!sidebarCollapsed">{{ item.title }}</span>
              <div class="nav-indicator" v-if="currentComponent === item.key"></div>
            </a>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="content-area" :class="{ 'sidebar-collapsed': sidebarCollapsed }">
      <div class="content-wrapper">
        <Transition name="fade" mode="out-in">
          <component :is="currentView" :key="currentComponent" />
        </Transition>
      </div>
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow-x: hidden;
}

#app-container {
  display: flex;
  height: 100vh;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

#app-container.loaded {
  opacity: 1;
  transform: translateY(0);
}

/* Background Elements */
.background-elements {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.floating-shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 80px;
  height: 80px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 60px;
  height: 60px;
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

.shape-4 {
  width: 100px;
  height: 100px;
  top: 30%;
  right: 30%;
  animation-delay: 1s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(120deg); }
  66% { transform: translateY(10px) rotate(240deg); }
}

/* Sidebar Styles */
.sidebar {
  width: 320px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0;
  overflow-y: auto;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
  position: relative;
}

.sidebar.collapsed {
  width: 80px;
}

.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.vue-logo {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.sidebar-title {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #42b883, #35495e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  white-space: nowrap;
}

.sidebar-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.sidebar-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
}

.hamburger-line {
  width: 20px;
  height: 2px;
  background: white;
  border-radius: 1px;
  transition: all 0.3s ease;
}

.sidebar.collapsed .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.sidebar.collapsed .hamburger-line:nth-child(2) {
  opacity: 0;
}

.sidebar.collapsed .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.sidebar-nav {
  padding: 1rem 0;
}

.sidebar-nav ul {
  list-style: none;
}

.sidebar-nav li {
  margin: 0.5rem 0;
  opacity: 0;
  transform: translateX(-20px);
  animation: slideInLeft 0.6s ease forwards;
  animation-delay: var(--delay);
}

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.sidebar-nav a {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  border-radius: 0 25px 25px 0;
  margin-right: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.sidebar-nav a::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.sidebar-nav a:hover::before {
  left: 100%;
}

.sidebar-nav a:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transform: translateX(5px);
}

.sidebar-nav a.active {
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.3), rgba(53, 73, 94, 0.3));
  color: white;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(66, 184, 131, 0.3);
}

.nav-icon {
  font-size: 1.2rem;
  margin-right: 1rem;
  min-width: 24px;
  text-align: center;
}

.nav-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nav-indicator {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 20px;
  background: linear-gradient(135deg, #42b883, #35495e);
  border-radius: 2px;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-50%) translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }
}

/* Content Area */
.content-area {
  flex: 1;
  padding: 0;
  overflow-y: auto;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.content-wrapper {
  min-height: 100vh;
  padding: 2rem;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

/* Scrollbar Styling */
.sidebar::-webkit-scrollbar,
.content-area::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-track,
.content-area::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

.sidebar::-webkit-scrollbar-thumb,
.content-area::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

.sidebar::-webkit-scrollbar-thumb:hover,
.content-area::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

/* Responsive Design */
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    left: -320px;
    height: 100vh;
    z-index: 1000;
  }
  
  .sidebar.collapsed {
    left: -80px;
  }
  
  .content-area {
    margin-left: 0;
  }
}
</style>