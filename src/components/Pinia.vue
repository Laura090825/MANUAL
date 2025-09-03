<template>
  <div class="container">
    <h1 class="title">Pinia: El Almacén de Estado para Vue.js</h1>
    <div class="content">
      <p>
        Pinia es la biblioteca de gestión de estado recomendada oficialmente para Vue.js. Es ligera, intuitiva y está diseñada para ser fácil de usar tanto con la Options API como con la Composition API. Pinia te permite compartir un estado a través de componentes de una manera centralizada y eficiente.
      </p>
      
      <h2 class="subtitle">Características Principales</h2>
      <ul>
        <li><strong>Ligera</strong>: Pinia tiene un tamaño muy reducido (~1.5kb).</li>
        <li><strong>Intuitiva</strong>: Su API es simple y se siente natural para los desarrolladores de Vue.</li>
        <li><strong>Type-Safe</strong>: Ofrece un excelente soporte para TypeScript.</li>
        <li><strong>Extensible</strong>: Se puede ampliar con plugins para funcionalidades como el almacenamiento local.</li>
        <li><strong>Devtools</strong>: Se integra perfectamente con las herramientas de desarrollo de Vue.</li>
      </ul>
      
      <h2 class="subtitle">Instalación</h2>
      <p>
        Para añadir Pinia a tu proyecto, puedes usar npm o yarn:
      </p>
      <pre v-pre><code>npm install pinia</code></pre>
      <p>o</p>
      <pre v-pre><code>yarn add pinia</code></pre>
      
      <p>
        Después de la instalación, debes registrar Pinia en tu aplicación principal de Vue (<code>main.js</code>):
      </p>
      <pre v-pre><code>// src/main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);
app.use(createPinia());
app.mount('#app');</code></pre>

      <h2 class="subtitle">Creando un Almacén (Store)</h2>
      <p>
        Un "almacén" en Pinia es donde defines el estado, las acciones y los getters. Generalmente, se crea un archivo por cada almacén en un directorio <code>src/stores</code>.
      </p>
      <pre v-pre><code>// src/stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++;
    }
  }
});</code></pre>

      <h2 class="subtitle">Usando el Almacén en un Componente</h2>
      <p>
        Puedes usar el almacén en cualquier componente de tu aplicación.
      </p>
      
      <h3>Composition API (con <code>&lt;script setup&gt;</code>)</h3>
      <pre v-pre><code>&lt;script setup&gt;
import { useCounterStore } from '../stores/counter';

const counterStore = useCounterStore();
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;Contador: {{ counterStore.count }}&lt;/p&gt;
    &lt;p&gt;Doble: {{ counterStore.doubleCount }}&lt;/p&gt;
    &lt;button @click="counterStore.increment"&gt;Incrementar&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>

      <h3>Options API</h3>
      <pre v-pre><code>import { useCounterStore } from '../stores/counter';
import { mapState, mapActions } from 'pinia';

export default {
  computed: {
    ...mapState(useCounterStore, ['count', 'doubleCount'])
  },
  methods: {
    ...mapActions(useCounterStore, ['increment'])
  }
};
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;Contador: {{ count }}&lt;/p&gt;
    &lt;p&gt;Doble: {{ doubleCount }}&lt;/p&gt;
    &lt;button @click="increment"&gt;Incrementar&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
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