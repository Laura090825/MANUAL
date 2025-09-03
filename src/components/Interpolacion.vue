<script setup>
import { ref } from 'vue';

const message = ref('¡Hola, Vue!');
const rawHtml = ref('<span style="color: red">Esto es HTML renderizado</span>');
const count = ref(10);
const anotherHtml = ref('<ul><li>Item 1</li><li>Item 2</li></ul>');
</script>

<template>
  <div class="container">
    <h1 class="title">Interpolación en Vue.js</h1>
    <div class="content">
      <p>
        La forma más básica de vinculación de datos en Vue.js es la interpolación de texto, que utiliza la sintaxis de "mustache" (dobles llaves): <code>{{ '{{ ' }} }}</code>. Esto te permite mostrar datos del estado de tu componente directamente en el DOM.
      </p>
      
      <h2 class="subtitle">Interpolación de Texto</h2>
      <p>
        Para mostrar el valor de una propiedad de datos, simplemente envuélvela en dobles llaves dentro de tu plantilla:
      </p>
      <pre v-pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;{{ message }}&lt;/p&gt;
    &lt;p&gt;Contador: {{ count }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      message: '¡Hola, Vue!',
      count: 10
    };
  }
};
&lt;/script&gt;</code></pre>
      <p>
        En estos ejemplos, el contenido de las etiquetas <code>&lt;p&gt;</code> se reemplazará con los valores de las propiedades <code>message</code> y <code>count</code>.
      </p>
      
      <h2 class="subtitle">Expresiones de JavaScript</h2>
      <p>
        Vue.js admite expresiones de JavaScript dentro de las interpolaciones. Esto te permite realizar operaciones simples directamente en la plantilla.
      </p>
      <pre v-pre><code>&lt;p&gt;{{ 5 + 5 }}&lt;/p&gt;
&lt;p&gt;{{ message.split('').reverse().join('') }}&lt;/p&gt;</code></pre>
      <p>
        Sin embargo, es importante tener en cuenta que solo se pueden usar <strong>expresiones</strong>, no declaraciones. Por ejemplo, no puedes usar condicionales como <code>if</code> o bucles <code>for</code> dentro de las interpolaciones.
      </p>
      
      <h2 class="subtitle">Renderizado de HTML</h2>
      <p>
        La interpolación de texto siempre escapa el contenido HTML por defecto para prevenir ataques de Cross-Site Scripting (XSS). Si necesitas renderizar HTML real, debes usar la directiva <code>v-html</code>.
      </p>
      <pre v-pre><code>&lt;div v-html="rawHtml"&gt;&lt;/div&gt;
&lt;div v-html="anotherHtml"&gt;&lt;/div&gt;</code></pre>
      <p>
        <strong>Nota:</strong> Usar <code>v-html</code> puede ser peligroso si el contenido proviene de usuarios, ya que puede exponer tu aplicación a vulnerabilidades de seguridad. Úsalo solo con contenido de confianza.
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