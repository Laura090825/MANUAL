<template>
  <div class="container">
    <h1 class="title">¿Qué es Vue.js?</h1>
    <div class="content">
      <p>
        Vue.js es un <strong>framework de JavaScript de código abierto</strong> utilizado para construir interfaces de usuario (UI) y aplicaciones de una sola página (Single-Page Applications - SPAs). Creado por Evan You, se destaca por su arquitectura incrementalmente adaptable que se enfoca en la renderización declarativa y la composición de componentes. La biblioteca principal se centra solo en la capa de vista, lo que la hace fácil de integrar con otras bibliotecas o proyectos existentes.
      </p>
      <h2 class="subtitle">Características Principales</h2>
      <ul>
        <li><strong>Reactividad:</strong> Vue.js cuenta con un sistema de reactividad que actualiza automáticamente la interfaz de usuario cuando cambian los datos subyacentes.</li>
        <li><strong>Componentes:</strong> Permite construir aplicaciones encapsuladas y reutilizables a través de un sistema de componentes.</li>
        <li><strong>Sistema de Plantillas:</strong> Utiliza una sintaxis de plantillas basada en HTML que permite vincular el DOM renderizado con los datos de la instancia de Vue.</li>
        <li><strong>Enrutamiento y Gestión de Estado:</strong> Aunque la biblioteca principal es minimalista, Vue.js ofrece bibliotecas complementarias como Vue Router para el enrutamiento y Pinia (anteriormente Vuex) para la gestión de estado centralizada.</li>
        <li><strong>Progresivo:</strong> Puedes empezar a usar Vue.js en una pequeña parte de tu proyecto existente y escalarlo según sea necesario.</li>
      </ul>
      <p>
        Vue.js es conocido por su curva de aprendizaje suave, su excelente documentación y su rendimiento. Estas características lo convierten en una opción popular tanto para principiantes como para desarrolladores experimentados.
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
</style>