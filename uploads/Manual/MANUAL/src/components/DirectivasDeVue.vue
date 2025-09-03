<template>
  <div class="container">
    <h1 class="title">Directivas en Vue.js</h1>
    <div class="content">
      <p>
        Las directivas son atributos especiales con el prefijo <code>v-</code> que puedes añadir a tus elementos HTML. 
        Su propósito es aplicar efectos reactivos al DOM cuando el valor de su expresión cambia.
      </p>

      <h2 class="subtitle">Referencia de Directivas</h2>

      <div class="directive-explanation">
        <h3>v-bind</h3>
        <p>
          <code>v-bind</code> permite vincular un atributo de un elemento a una expresión de JavaScript. Es útil para atributos como <code>href</code>, <code>class</code>, <code>style</code>, etc.
        </p>
        <pre v-pre><code>&lt;img v-bind:src="imageSrc"&gt;
&lt;!-- Sintaxis abreviada --&gt;
&lt;img :src="imageSrc"&gt;</code></pre>
      </div>

      <div class="directive-explanation">
        <h3>v-model</h3>
        <p>
          <code>v-model</code> crea un enlace bidireccional en elementos de formulario como <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code> y <code>&lt;select&gt;</code>.
        </p>
        <pre v-pre><code>&lt;input v-model="message" placeholder="edítame"&gt;
&lt;p&gt;El mensaje es: {{ message }}&lt;/p&gt;</code></pre>
      </div>

      <div class="directive-explanation">
        <h3>v-if, v-else, v-else-if</h3>
        <p>
          Estas directivas se utilizan para renderizar condicionalmente un bloque de código.
        </p>
        <pre v-pre><code>&lt;div v-if="type === 'A'"&gt;A&lt;/div&gt;
&lt;div v-else-if="type === 'B'"&gt;B&lt;/div&gt;
&lt;div v-else-if="type === 'C'"&gt;C&lt;/div&gt;
&lt;div v-else&gt;Ni A, B o C&lt;/div&gt;</code></pre>
      </div>

      <div class="directive-explanation">
        <h3>v-for</h3>
        <p>
          <code>v-for</code> se usa para renderizar una lista de elementos basada en un array.
        </p>
        <pre v-pre><code>&lt;ul id="example-1"&gt;
  &lt;li v-for="item in items" :key="item.id"&gt;
    {{ item.text }}
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
      </div>

      <div class="directive-explanation">
        <h3>v-show</h3>
        <p>
          <code>v-show</code> alterna la visibilidad de un elemento cambiando su propiedad CSS <code>display</code>.
        </p>
        <pre v-pre><code>&lt;h1 v-show="ok"&gt;¡Hola!&lt;/h1&gt;</code></pre>
      </div>

      <div class="directive-explanation">
        <h3>v-on</h3>
        <p>
          <code>v-on</code> adjunta un escuchador de eventos a un elemento.
        </p>
        <pre v-pre><code>&lt;!-- Sintaxis completa --&gt;
&lt;button v-on:click="doSomething"&gt;Haz algo&lt;/button&gt;
&lt;!-- Sintaxis abreviada --&gt;
&lt;button @click="doSomething"&gt;Haz algo&lt;/button&gt;</code></pre>
      </div>

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

.directive-explanation {
  margin-top: 2rem;
}

.directive-explanation h3 {
  font-size: 1.5rem;
  color: #35495e;
  margin-bottom: 0.5rem;
}

pre {
  background-color: #f4f4f4;
  padding: 1rem;
  border-radius: 4px;
  white-space: pre-wrap;
  word-wrap: break-word;
}

code {
  font-family: 'Courier New', Courier, monospace;
  color: #333;
}
</style>