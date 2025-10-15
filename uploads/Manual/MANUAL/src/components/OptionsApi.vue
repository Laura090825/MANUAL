<script setup>
import { ref, computed } from 'vue';

const counter = ref(0);
const text = ref('');

function increment() {
  counter.value++;
}

const remaining = computed(() => 100 - text.value.length);
</script>

<template>
  <div class="container">
    <h1 class="title">Options API en Vue.js</h1>
    <div class="content">
      <p>
        La Options API es una de las dos formas de escribir componentes en Vue.js. Organiza la lógica de un componente utilizando un objeto de opciones. Cada propiedad de este objeto (como <code>data</code>, <code>methods</code>, y <code>computed</code>) corresponde a una característica del componente.
      </p>
      
      <h2 class="subtitle">Estructura de un Componente con Options API</h2>
      <p>
        Un componente escrito con la Options API se define como un objeto con varias propiedades. Vue procesa estas opciones para construir el comportamiento del componente.
      </p>
      <pre v-pre><code>&lt;script&gt;
export default {
  // Estado reactivo del componente
  data() {
    return {
      message: 'Hola desde Options API'
    };
  },
  
  // Métodos para ser usados en el componente
  methods: {
    updateMessage() {
      this.message = 'Mensaje actualizado';
    }
  },
  
  // Propiedades computadas
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    }
  },
  
  // Hooks del ciclo de vida
  mounted() {
    console.log('Componente montado');
  }
};
&lt;/script&gt;</code></pre>
      
      <h2 class="subtitle">Propiedades Comunes</h2>
      <ul>
        <li><strong><code>data</code></strong>: Una función que retorna el estado reactivo inicial para la instancia del componente.</li>
        <li><strong><code>methods</code></strong>: Un objeto que contiene los métodos que se pueden usar dentro del componente.</li>
        <li><strong><code>computed</code></strong>: Un objeto para definir propiedades computadas, que son valores derivados del estado que se actualizan automáticamente.</li>
        <li><strong><code>watch</code></strong>: Un objeto para observar y reaccionar a cambios en los datos.</li>
        <li><strong>Hooks del ciclo de vida</strong> (<code>created</code>, <code>mounted</code>, <code>updated</code>, <code>unmounted</code>): Funciones que se ejecutan en momentos específicos del ciclo de vida de un componente.</li>
      </ul>
      
      <p>
        La Options API es ideal para principiantes y para proyectos con una complejidad baja a media, ya que proporciona una estructura clara y guiada para organizar el código.
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
}

code {
  font-family: 'Courier New', Courier, monospace;
  color: #35495e;
}
</style>