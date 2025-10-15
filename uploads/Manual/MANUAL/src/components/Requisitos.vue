<template>
  <div class="container">
    <h1 class="title">Requisitos para Empezar con Vue.js</h1>
    <div class="content">
      <p>
        Antes de sumergirte en el desarrollo con Vue.js, es importante que te asegures de tener un entorno de desarrollo adecuado. A continuación, se detallan los requisitos y herramientas esenciales que necesitarás.
      </p>
      
      <h2 class="subtitle">Conocimientos Previos</h2>
      <ul>
        <li><strong>HTML, CSS y JavaScript (ES6+):</strong> Es fundamental tener una comprensión sólida de las tecnologías web básicas. Vue.js se basa en ellas, por lo que un buen dominio te permitirá aprender y construir de manera más eficiente.</li>
      </ul>
      
      <h2 class="subtitle">Software y Herramientas</h2>
      <ul>
        <li>
          <strong>Node.js y npm:</strong> Vue.js y su ecosistema de herramientas se basan en Node.js. Necesitarás instalar Node.js para tener acceso a npm (Node Package Manager), que se utiliza para gestionar las dependencias del proyecto.
          <ul class="sub-list">
            <li>Puedes descargar la última versión de <a href="https://nodejs.org/" target="_blank">Node.js</a> desde su sitio web oficial.</li>
          </ul>
        </li>
        <li>
          <strong>Vue CLI (Command Line Interface):</strong> Es la herramienta de línea de comandos estándar para el desarrollo rápido de Vue.js. Facilita la creación, configuración y gestión de proyectos.
          <ul class="sub-list">
            <li>Para instalar Vue CLI globalmente, abre tu terminal y ejecuta: <code>npm install -g @vue/cli</code></li>
          </ul>
        </li>
        <li>
          <strong>Editor de Código:</strong> Se recomienda un editor de código moderno como <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>, que cuenta con excelentes extensiones para el desarrollo con Vue.js, como Vetur o Volar.
        </li>
      </ul>
      
      <p>
        Una vez que hayas cumplido con estos requisitos, estarás listo para crear tu primer proyecto en Vue.js y comenzar a construir aplicaciones web increíbles.
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

.content strong {
  color: #35495e;
}

.sub-list {
  margin-top: 0.5rem;
  padding-left: 1rem;
  font-size: 1rem;
}

.sub-list code {
  background-color: #f0f2f5;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  color: #35495e;
}

a {
  color: #42b883;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>