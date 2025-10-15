<template>
  <div class="container">
    <h1 class="title">Creación de un Proyecto Vue.js</h1>
    <div class="content">
      <p>
        Una vez que tienes tu entorno de desarrollo configurado, crear un nuevo proyecto en Vue.js es un proceso sencillo gracias a Vue CLI. Sigue estos pasos para generar la estructura inicial de tu aplicación.
      </p>
      
      <h2 class="subtitle">1. Abrir la Terminal</h2>
      <p>
        Abre tu terminal o línea de comandos. Puedes usar la terminal integrada de tu editor de código (como VS Code) o la terminal de tu sistema operativo.
      </p>
      
      <h2 class="subtitle">2. Usar Vue CLI para Crear el Proyecto</h2>
      <p>
        Navega hasta el directorio donde deseas crear tu proyecto y ejecuta el siguiente comando:
      </p>
      <pre><code>vue create nombre-de-tu-proyecto</code></pre>
      <p>
        Reemplaza <code>nombre-de-tu-proyecto</code> con el nombre que desees para tu aplicación.
      </p>
      
      <h2 class="subtitle">3. Seleccionar una Configuración (Preset)</h2>
      <p>
        Vue CLI te ofrecerá varias configuraciones predeterminadas (presets). Para empezar, puedes elegir la opción por defecto, que incluye Babel y ESLint. Si prefieres personalizar la configuración, selecciona "Manually select features" para añadir herramientas como Vue Router, Pinia (o Vuex), pre-procesadores de CSS, etc.
      </p>
      
      <h2 class="subtitle">4. Navegar al Directorio del Proyecto</h2>
      <p>
        Una vez que la instalación se complete, navega al directorio de tu nuevo proyecto:
      </p>
      <pre><code>cd nombre-de-tu-proyecto</code></pre>
      
      <h2 class="subtitle">5. Iniciar el Servidor de Desarrollo</h2>
      <p>
        Finalmente, para ver tu aplicación en acción, inicia el servidor de desarrollo con el siguiente comando:
      </p>
      <pre><code>npm run serve</code></pre>
      <p>
        Este comando compilará tu aplicación y la servirá en una dirección local (generalmente <code>http://localhost:8080</code>). Abre esta URL in tu navegador para ver la página de bienvenida de Vue.js.
      </p>
      
      <p>
        ¡Y eso es todo! Ahora tienes un proyecto de Vue.js funcional y listo para que empieces a construir tu aplicación.
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

.content p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

pre {
  background-color: #f0f2f5;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
}

code {
  font-family: 'Courier New', Courier, monospace;
  color: #35495e;
}
</style>