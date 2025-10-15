<script setup>
import { ref, computed } from 'vue';
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

const currentView = computed(() => {
  return components[currentComponent.value];
});

const menuItems = [
  { key: 'Portada', title: 'Portada' },
  { key: 'QueEsVue', title: '¿Qué es Vue?' },
  { key: 'Requisitos', title: 'Requisitos' },
  { key: 'CreacionDeProyecto', title: 'Creación de Proyecto' },
  { key: 'Interpolacion', title: 'Interpolación' },
  { key: 'DirectivasDeVue', title: 'Directivas de Vue' },
  { key: 'OptionsApi', title: 'Options API' },
  { key: 'CompositionApi', title: 'Composition API' },
  { key: 'CicloDeVidaDeVue', title: 'Ciclo de Vida de Vue' },
  { key: 'ComponentesImportacion', title: 'Importación de Componentes' },
  { key: 'ComponentizacionProps', title: 'Props de Componentes' },
  { key: 'CreacionDeUnProyectoTemplateQuasar', title: 'Crear Proyecto Quasar' },
  { key: 'InstalarQuasarEnUnProyectoYaCreado', title: 'Instalar Quasar en Proyecto Existente' },
  { key: 'VueRouter', title: 'Vue Router' },
  { key: 'Pinia', title: 'Pinia' },
  { key: 'PiniaPluginPersistedstate', title: 'Pinia Persisted State' },
];

function changeComponent(component) {
  currentComponent.value = component;
}
</script>

<template>
  <div id="app-container">
    <aside class="sidebar">
      <h2 class="sidebar-title">Manual de Vue.js</h2>
      <nav>
        <ul>
          <li v-for="item in menuItems" :key="item.key">
            <a href="#" @click.prevent="changeComponent(item.key)" :class="{ active: currentComponent === item.key }">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </nav>
    </aside>
    <main class="content-area">
      <component :is="currentView" />
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background-color: #f0f2f5;
}

#app-container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 280px;
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 2rem;
  overflow-y: auto;
}

.sidebar-title {
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;
}

.sidebar nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar nav li a {
  display: block;
  padding: 0.8rem 1.2rem;
  color: #ecf0f1;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.sidebar nav li a:hover {
  background-color: #34495e;
}

.sidebar nav li a.active {
  background-color: #42b883;
  color: #fff;
  font-weight: bold;
}

.content-area {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}
</style>