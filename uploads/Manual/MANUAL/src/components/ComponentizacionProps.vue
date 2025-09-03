<template>
  <div class="container">
    <h1 class="title">Componentización y Props en Vue.js</h1>
    <div class="content">
      <p>
        La componentización es uno de los conceptos fundamentales en Vue.js. Permite dividir la interfaz de usuario en piezas independientes y reutilizables, cada una con su propio estado y lógica. Las <strong>props</strong> (propiedades) son el mecanismo principal para pasar datos desde un componente padre a un componente hijo.
      </p>
      
      <h2 class="subtitle">¿Qué son las Props?</h2>
      <p>
        Las "props" (propiedades) son atributos personalizados que puedes registrar en un componente. Permiten que un componente padre pase datos a sus componentes hijos. El flujo de datos es unidireccional: de padres a hijos.
      </p>
      
      <h2 class="subtitle">Definiendo Props</h2>
      <p>
        Puedes definir las props de un componente de varias maneras.
      </p>
      
      <h3>Con <code>&lt;script setup&gt;</code> (Composition API)</h3>
      <p>La forma más sencilla es usando <code>defineProps</code>:</p>
      <pre v-pre><code>&lt;script setup&gt;
const props = defineProps({
  titulo: String,
  likes: Number
});
&lt;/script&gt;</code></pre>

      <h3>Con Options API</h3>
      <p>En la Options API, las props se definen en la opción <code>props</code>:</p>
      <pre v-pre><code>&lt;script&gt;
export default {
  props: {
    titulo: String,
    likes: Number
  }
};
&lt;/script&gt;</code></pre>

      <h2 class="subtitle">Pasando Props</h2>
      <p>
        Una vez que un componente ha definido sus props, el componente padre puede pasarle datos como si fueran atributos HTML.
      </p>
      <pre v-pre><code>&lt;!-- En el componente padre --&gt;
&lt;template&gt;
  &lt;ArticuloDeBlog
    titulo="Mi primer post en Vue"
    :likes="50"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import ArticuloDeBlog from './ArticuloDeBlog.vue';
&lt;/script&gt;</code></pre>
      <p>
        Nota el uso de <code>v-bind</code> (o su atajo <code>:</code>) para pasar datos dinámicos o no-strings, como números, booleanos u objetos.
      </p>
      
      <h2 class="subtitle">Validación de Props</h2>
      <p>
        Es una buena práctica validar las props que un componente recibe. Puedes especificar el tipo, si es requerida, un valor por defecto, y más.
      </p>
      <pre v-pre><code>&lt;script setup&gt;
defineProps({
  titulo: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  publicado: {
    type: Boolean,
    default: false
  }
});
&lt;/script&gt;</code></pre>
      <p>
        Si una prop no cumple con la validación, Vue mostrará una advertencia en la consola del navegador, lo que ayuda a prevenir errores.
      </p>
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
  margin-top: 1rem;
}

code {
  font-family: 'Courier New', Courier, monospace;
  color: #35495e;
}
</style>