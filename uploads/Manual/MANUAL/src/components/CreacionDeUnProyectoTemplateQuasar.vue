<template>
  <div class="container">
    <h1 class="title">Creación de un Proyecto con Quasar</h1>
    <div class="content">
      <p>
        Quasar es un framework basado en Vue.js que permite crear aplicaciones multiplataforma (web, móvil, escritorio) con un solo código base. Vamos a ver cómo crear un nuevo proyecto con Quasar.
      </p>
      
      <h2 class="subtitle">Requisitos Previos</h2>
      <ul>
        <li>Node.js instalado (versión 16.0.0 o superior)</li>
        <li>npm o yarn como gestor de paquetes</li>
      </ul>
      
      <h2 class="subtitle">Instalación de Quasar CLI</h2>
      <p>
        Primero, necesitas instalar Quasar CLI globalmente en tu sistema:
      </p>
      <pre><code># Usando npm
npm install -g @quasar/cli

# O usando yarn
yarn global add @quasar/cli</code></pre>
      
      <h2 class="subtitle">Creación del Proyecto</h2>
      <p>
        Para crear un nuevo proyecto, ejecuta el siguiente comando y sigue las instrucciones:
      </p>
      <pre><code>quasar create mi-proyecto-quasar</code></pre>
      
      <h3>Opciones de Configuración</h3>
      <p>
        Durante la creación del proyecto, se te presentarán varias opciones:
      </p>
      <ul>
        <li><strong>CLI Type</strong>: Elige entre Vite (más rápido, recomendado) o Webpack.</li>
        <li><strong>Package manager</strong>: npm o yarn.</li>
        <li><strong>TypeScript</strong>: Si deseas usar TypeScript en tu proyecto.</li>
        <li><strong>Sass/SCSS</strong>: Para el preprocesamiento de CSS.</li>
        <li><strong>ESLint</strong>: Para el linting del código.</li>
        <li><strong>State Management</strong>: Pinia (recomendado) o Vuex.</li>
        <li><strong>Vue Router</strong>: Para la navegación en la aplicación.</li>
      </ul>
      
      <h2 class="subtitle">Estructura del Proyecto</h2>
      <p>
        Una vez creado, tu proyecto tendrá la siguiente estructura básica:
      </p>
      <pre><code>.
├── public/          # archivos estáticos
├── src/
│   ├── assets/      # imágenes, fuentes, etc.
│   ├── boot/        # archivos de inicialización
│   ├── components/  # componentes Vue
│   ├── css/         # estilos globales
│   ├── layouts/     # layouts de la aplicación
│   ├── pages/       # páginas de la aplicación
│   ├── router/      # configuración de Vue Router
│   └── stores/      # stores de Pinia/Vuex
├── quasar.config.js # configuración de Quasar
└── package.json     # dependencias y scripts</code></pre>
      
      <h2 class="subtitle">Ejecutar el Proyecto</h2>
      <p>
        Para iniciar el servidor de desarrollo, navega a la carpeta del proyecto y ejecuta:
      </p>
      <pre><code># Entrar al directorio del proyecto
cd mi-proyecto-quasar

# Iniciar el servidor de desarrollo
quasar dev</code></pre>
      <p>
        Tu aplicación estará disponible en <code>http://localhost:9000</code> (o el puerto que se indique en la consola).
      </p>
      
      <h2 class="subtitle">Modos de Construcción</h2>
      <p>
        Quasar permite construir tu aplicación para diferentes plataformas:
      </p>
      <ul>
        <li><code>quasar dev</code> - Desarrollo web (SPA)</li>
        <li><code>quasar build</code> - Construcción para producción web</li>
        <li><code>quasar dev -m electron</code> - Desarrollo para escritorio</li>
        <li><code>quasar dev -m cordova -T android</code> - Desarrollo para Android</li>
        <li><code>quasar dev -m cordova -T ios</code> - Desarrollo para iOS</li>
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