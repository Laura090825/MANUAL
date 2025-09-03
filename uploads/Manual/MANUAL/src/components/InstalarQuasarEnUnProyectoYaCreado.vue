<template>
  <div class="container">
    <h1 class="title">Instalar Quasar en un Proyecto Existente de Vue</h1>
    <div class="content">
      <p>
        Si ya tienes un proyecto creado con Vue CLI y quieres añadir Quasar, puedes hacerlo utilizando el plugin de Vue CLI para Quasar. Sin embargo, para una experiencia de desarrollo óptima y acceso a todas las funcionalidades de Quasar, se recomienda crear un proyecto desde cero con Quasar CLI.
      </p>
      
      <h2 class="subtitle">Requisitos Previos</h2>
      <ul>
        <li>Un proyecto existente creado con Vue CLI (<code>@vue/cli</code>).</li>
        <li>Asegúrate de haber guardado tus cambios en el control de versiones (ej. Git) antes de proceder.</li>
      </ul>
      
      <h2 class="subtitle">Instalación con Vue CLI</h2>
      <p>
        Navega a la carpeta de tu proyecto de Vue y ejecuta el siguiente comando:
      </p>
      <pre><code>vue add quasar</code></pre>
      
      <p>
        Este comando instalará Quasar y sus dependencias. Durante la instalación, se te harán algunas preguntas para configurar Quasar en tu proyecto:
      </p>
      <ul>
        <li><strong>Permitir al plugin sobreescribir archivos</strong>: Es probable que necesites permitir que el plugin modifique algunos archivos existentes, como <code>main.js</code>.</li>
        <li><strong>Auto-importación de componentes</strong>: Puedes configurar Quasar para que importe automáticamente los componentes que uses, lo que simplifica el desarrollo.</li>
        <li><strong>Sass/SCSS</strong>: Elige si quieres usar Sass/SCSS para tus estilos.</li>
      </ul>
      
      <h2 class="subtitle">¿Qué hace el Plugin?</h2>
      <p>
        El plugin <code>vue-cli-plugin-quasar</code> realiza las siguientes acciones:
      </p>
      <ul>
        <li>Instala las dependencias de Quasar.</li>
        <li>Crea un archivo de configuración para Quasar (<code>quasar.config.js</code> o similar).</li>
        <li>Modifica tu archivo <code>main.js</code> para inicializar Quasar.</li>
        <li>Opcionalmente, puede reemplazar tu archivo <code>App.vue</code> y otros archivos para darte un punto de partida con Quasar.</li>
      </ul>
      
      <h2 class="subtitle">Limitaciones</h2>
      <p>
        Aunque esta es una forma viable de usar los componentes de UI de Quasar, ten en cuenta que la integración con Vue CLI tiene algunas limitaciones en comparación con usar Quasar CLI desde el principio. Por ejemplo, el soporte para compilar en diferentes plataformas (Electron, Cordova, etc.) no está tan integrado y puede requerir configuración adicional.
      </p>
      
      <p>
        Por lo tanto, si planeas construir una aplicación multiplataforma, la mejor opción es comenzar con <code>quasar create</code>.
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