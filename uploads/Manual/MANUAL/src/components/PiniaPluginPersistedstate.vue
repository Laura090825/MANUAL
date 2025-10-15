<template>
  <div class="container">
    <h1 class="title">Pinia Plugin: Persisted State</h1>
    <div class="content">
      <p>
        <code>pinia-plugin-persistedstate</code> es un plugin para Pinia que permite guardar el estado de tus almacenes (stores) en el almacenamiento local (como <code>localStorage</code> o <code>sessionStorage</code>). Esto es útil para mantener el estado de la aplicación entre sesiones de usuario, por ejemplo, para recordar las preferencias de un usuario o el contenido de un carrito de compras.
      </p>
      
      <h2 class="subtitle">Características</h2>
      <ul>
        <li><strong>Fácil de usar</strong>: Se integra con Pinia con una configuración mínima.</li>
        <li><strong>Altamente configurable</strong>: Puedes especificar qué almacenamiento usar (<code>localStorage</code>, <code>sessionStorage</code>, o uno personalizado), qué partes del estado persistir, y cómo serializar los datos.</li>
        <li><strong>Soporte para SSR</strong>: Funciona bien con el renderizado del lado del servidor, especialmente con Nuxt.</li>
      </ul>
      
      <h2 class="subtitle">Instalación</h2>
      <p>
        Primero, instala el plugin usando npm o yarn:
      </p>
      <pre><code>npm install pinia-plugin-persistedstate</code></pre>
      <p>o</p>
      <pre><code>yarn add pinia-plugin-persistedstate</code></pre>
      
      <p>
        Luego, registra el plugin en tu instancia de Pinia en <code>main.js</code>:
      </p>
      <pre><code>// src/main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(pinia);
app.mount('#app');</code></pre>

      <h2 class="subtitle">Uso Básico</h2>
      <p>
        Para hacer que un almacén persista, simplemente añade la opción <code>persist: true</code> en su definición.
      </p>
      <pre><code>// src/stores/settings.js
import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    theme: 'light',
    language: 'en'
  }),
  persist: true
});</code></pre>
      <p>
        Con esta configuración, todo el estado del almacén <code>settings</code> se guardará en <code>localStorage</code> por defecto.
      </p>

      <h2 class="subtitle">Configuración Avanzada</h2>
      <p>
        Puedes personalizar el comportamiento de la persistencia para cada almacén.
      </p>
      <pre><code>// src/stores/cart.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    lastUpdated: null
  }),
  actions: {
    addItem(item) {
      this.items.push(item);
      this.lastUpdated = Date.now();
    }
  },
  persist: {
    // Usar sessionStorage en lugar de localStorage
    storage: sessionStorage,
    
    // Solo persistir una parte del estado (usando paths)
    paths: ['items']
  }
});</code></pre>
      <p>
        En este ejemplo, solo la propiedad <code>items</code> del estado se guardará en <code>sessionStorage</code>. La propiedad <code>lastUpdated</code> no será persistida.
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 2.5rem;
  color: #35495e;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.8rem;
  color: #42b883;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.content p,
.content ul {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

.content ul {
  padding-left: 1.5rem;
}

.content li {
  margin-bottom: 0.5rem;
}

pre {
  background-color: #f0f2f5;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  margin-top: 1rem;
}

code {
  font-family: 'Courier New', Courier, monospace;
  color: #35495e;
}
</style>