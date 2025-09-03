<template>
  <div class="container">
    <h1 class="title">Vue Router</h1>
    <div class="content">
      <p>
        Vue Router es la biblioteca de enrutamiento oficial para Vue.js. Permite crear aplicaciones de una sola página (SPA) con navegación sin recargar la página. Con Vue Router, puedes mapear diferentes URLs a componentes específicos, lo que facilita la organización de tu aplicación en distintas "páginas" o vistas.
      </p>
      
      <h2 class="subtitle">Instalación</h2>
      <p>
        Para añadir Vue Router a tu proyecto, puedes usar npm o yarn:
      </p>
      <pre><code>npm install vue-router@4</code></pre>
      <p>o</p>
      <pre><code>yarn add vue-router@4</code></pre>
      <p>
        La versión 4 es para Vue 3. Si estás usando Vue 2, deberías instalar la versión 3 de Vue Router.
      </p>
      
      <h2 class="subtitle">Configuración Básica</h2>
      <p>
        Después de la instalación, necesitas crear una instancia del router y configurar las rutas. Normalmente, esto se hace en un archivo dedicado, como <code>src/router/index.js</code>.
      </p>
      
      <pre><code>// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;</code></pre>

      <p>
        Luego, debes registrar el router en tu aplicación principal de Vue (<code>main.js</code>):
      </p>
      <pre><code>// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');</code></pre>

      <h2 class="subtitle">Uso en Componentes</h2>
      <p>
        Para mostrar el componente correspondiente a la ruta actual, usa el componente <code>&lt;router-view&gt;</code>. Para la navegación, usa <code>&lt;router-link&gt;</code>:
      </p>
      <pre><code><!-- App.vue -->
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template></code></pre>

      <h2 class="subtitle">Modos de Historial</h2>
      <p>
        Vue Router ofrece diferentes modos de historial:
      </p>
      <ul>
        <li><strong>HTML5 (<code>createWebHistory</code>)</strong>: El modo recomendado. Utiliza la API <code>history.pushState</code> para lograr la navegación sin recargar la página. Las URLs se ven limpias (ej. <code>https://example.com/user/id</code>), pero requiere configuración del servidor para que las rutas funcionen correctamente al recargar la página.</li>
        <li><strong>Hash (<code>createWebHashHistory</code>)</strong>: Usa el hash de la URL (<code>#</code>) para la navegación (ej. <code>https://example.com/#/user/id</code>). No requiere configuración especial del servidor.</li>
        <li><strong>Memory (<code>createMemoryHistory</code>)</strong>: No interactúa con la URL del navegador. Es útil para entornos que no son de navegador (ej. renderizado del lado del servidor).</li>
      </ul>
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