<template>
  <div class="container">
    <h1 class="title">Ciclo de Vida de un Componente en Vue.js</h1>
    <div class="content">
      <p>
        Cada componente en Vue pasa por una serie de etapas desde su creación hasta su destrucción. Vue proporciona "hooks" (ganchos) del ciclo de vida, que son funciones que nos permiten ejecutar código en momentos específicos de la vida de un componente.
      </p>
      
      <h2 class="subtitle">Diagrama del Ciclo de Vida</h2>
      <p>
        El ciclo de vida de un componente de Vue se puede dividir en cuatro fases principales: Creación, Montaje, Actualización y Destrucción.
      </p>
      <img src="https://vuejs.org/images/lifecycle.png" alt="Diagrama del Ciclo de Vida de Vue" style="max-width: 100%; border-radius: 8px; margin-top: 1rem;">
      
      <h2 class="subtitle">Hooks del Ciclo de Vida</h2>
      <p>
        A continuación se describen los hooks más comunes, tanto para la Options API como para la Composition API.
      </p>
      
      <h3>Creación</h3>
      <ul>
        <li><strong><code>beforeCreate</code> / <code>setup</code></strong>: Se ejecuta antes de que la instancia del componente sea creada. En la Composition API, el código que iría aquí se coloca directamente en la función <code>setup</code>.</li>
        <li><strong><code>created</code> / <code>setup</code></strong>: Se ejecuta después de que la instancia ha sido creada. Aquí tienes acceso a <code>data</code> y <code>methods</code>. En la Composition API, también se maneja dentro de <code>setup</code>.</li>
      </ul>
      
      <h3>Montaje</h3>
      <ul>
        <li><strong><code>beforeMount</code> / <code>onBeforeMount</code></strong>: Se ejecuta justo antes de que el componente se inserte en el DOM.</li>
        <li><strong><code>mounted</code> / <code>onMounted</code></strong>: Se ejecuta después de que el componente ha sido insertado en el DOM. Es útil para acceder al DOM, por ejemplo, para integrar librerías de terceros.</li>
      </ul>
      
      <h3>Actualización</h3>
      <ul>
        <li><strong><code>beforeUpdate</code> / <code>onBeforeUpdate</code></strong>: Se ejecuta cuando los datos cambian y justo antes de que el DOM se vuelva a renderizar.</li>
        <li><strong><code>updated</code> / <code>onUpdated</code></strong>: Se ejecuta después de que el DOM ha sido actualizado debido a un cambio en los datos.</li>
      </ul>
      
      <h3>Destrucción</h3>
      <ul>
        <li><strong><code>beforeUnmount</code> / <code>onBeforeUnmount</code></strong>: Se ejecuta justo antes de que un componente sea desmontado y destruido.</li>
        <li><strong><code>unmounted</code> / <code>onUnmounted</code></strong>: Se ejecuta después de que el componente ha sido completamente destruido. Es útil para limpiar recursos, como temporizadores o eventos.</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// No se necesita lógica de script para este componente de demostración.
</script>

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

img {
  display: block;
  margin: 1.5rem auto;
}
</style>