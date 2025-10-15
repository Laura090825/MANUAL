<template>
  <div class="container">
    <h1 class="title">Importación de Componentes en Vue.js</h1>
    <div class="content">
      <p>
        En Vue, la componentización es clave. Para usar un componente dentro de otro, primero necesitas importarlo y luego registrarlo. Hay dos formas de registrar componentes: local y global.
      </p>
      
      <h2 class="subtitle">Registro Local</h2>
      <p>
        El registro local hace que un componente esté disponible solo dentro del componente que lo importa. Esta es la práctica recomendada, ya que ayuda a mantener las dependencias de cada componente explícitas y el árbol de componentes más organizado.
      </p>
      <pre v-pre><code>&lt;!-- En tu componente padre (por ejemplo, App.vue) --&gt;
&lt;script setup&gt;
import { ref } from 'vue';
import BotonSimple from './BotonSimple.vue';

const contador = ref(0);

const incrementar = () =&gt; {
  contador.value++;
};
&lt;/script&gt;

&lt;template&gt;
  &lt;BotonSimple :onClick="incrementar"&gt;Clics: {{ contador }}&lt;/BotonSimple&gt;
&lt;/template&gt;</code></pre>
      <p>
        Si no usas <code>&lt;script setup&gt;</code>, debes registrar el componente en la opción <code>components</code>:
      </p>
      <pre v-pre><code>&lt;script&gt;
import MiComponente from './components/MiComponente.vue';

export default {
  components: {
    MiComponente
  }
};
&lt;/script&gt;</code></pre>

      <h2 class="subtitle">Registro Global</h2>
      <p>
        El registro global hace que un componente esté disponible en toda la aplicación, en cualquier plantilla de componente. Esto puede ser útil para componentes base que se usan con mucha frecuencia (como botones, inputs, etc.).
      </p>
      <p>
        El registro global se realiza generalmente en el archivo de entrada de tu aplicación (<code>main.js</code>):
      </p>
      <pre v-pre><code>// main.js
import { createApp } from 'vue';
import App from './App.vue';
import MiComponenteGlobal from './components/MiComponenteGlobal.vue';

const app = createApp(App);

// Registrando el componente globalmente
app.component('MiComponenteGlobal', MiComponenteGlobal);

app.mount('#app');</code></pre>
      <p>
        Una vez registrado globalmente, puedes usar <code>&lt;MiComponenteGlobal /&gt;</code> en cualquier plantilla de tu aplicación sin necesidad de importarlo localmente.
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
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;
}

.subtitle {
  color: #444;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

p {
  line-height: 1.6;
  color: #555;
}

pre {
  background-color: #f4f4f4;
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
  margin: 1rem 0;
}

code {
  font-family: "Courier New", Courier, monospace;
  color: #333;
}
</style>