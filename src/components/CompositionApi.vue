<template>
  <div class="composition-api">
    <h1 class="title">Vue 3 - Composition API</h1>

    <p>
      La Composition API en Vue 3 permite organizar y reutilizar la lógica de los componentes de una manera más flexible que la Options API. 
      Está basada en el uso de funciones reactivas y es especialmente útil en proyectos grandes donde la reutilización de lógica es importante.
    </p>

    <h2 class="subtitle">Uso de <code>&lt;script setup&gt;</code></h2>
    <p>
      La forma más común y recomendada de usar la Composition API es con la sintaxis 
      <code>&lt;script setup&gt;</code> en Componentes de un Solo Archivo (SFCs). Este enfoque proporciona 
      una sintaxis más concisa y ergonómica.
    </p>

    <h2 class="subtitle">Ejemplos Prácticos</h2>

    <!-- Ejemplo 1: Contador -->
    <div class="example">
      <h3 class="example-title">Ejemplo 1: Contador con <code>ref</code></h3>
      <p>Este contador utiliza <code>ref</code> para mantener un estado reactivo.</p>
      <button @click="increment">Contador: {{ count }}</button>
    </div>

    <!-- Ejemplo 2: Lista de Tareas -->
    <div class="example">
      <h3 class="example-title">Ejemplo 2: Lista de Tareas</h3>
      <p>Una lista de tareas simple para demostrar la reactividad con arrays.</p>
      <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Añadir nueva tarea">
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          {{ todo }}
          <button @click="removeTodo(index)">Eliminar</button>
        </li>
      </ul>
    </div>

    <h2 class="subtitle">Ejemplo básico</h2>
    <pre v-pre><code>&lt;script setup&gt;
import { ref } from 'vue'

const count = ref(0)
const increment = () =&gt; {
  count.value++
}
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="increment"&gt;{{ count }}&lt;/button&gt;
&lt;/template&gt;
</code></pre>

    <h2 class="subtitle">Ejemplo con Props</h2>
    <pre v-pre><code>&lt;script setup&gt;
const props = defineProps({
  titulo: String,
  likes: Number
})
&lt;/script&gt;

&lt;template&gt;
  &lt;h1&gt;{{ props.titulo }}&lt;/h1&gt;
  &lt;p&gt;Likes: {{ props.likes }}&lt;/p&gt;
&lt;/template&gt;
</code></pre>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Ejemplo 1: Contador
const count = ref(0);
const increment = () => {
  count.value++;
};

// Ejemplo 2: Lista de Tareas
const newTodo = ref('');
const todos = ref([]);

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push(newTodo.value.trim());
    newTodo.value = '';
  }
};

const removeTodo = (index) => {
  todos.value.splice(index, 1);
};
</script>

<style scoped>
.composition-api {
  padding: 20px;
  max-width: 800px;
  margin: auto;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.title {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #42b883;
}

.subtitle {
  font-size: 1.5rem;
  margin: 20px 0 10px;
  color: #35495e;
}

pre {
  background: #2d2d2d;
  color: #f8f8f2;
  padding: 15px;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 0.9rem;
}

code {
  font-family: 'Fira Code', monospace;
}
.example {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.example-title {
  font-size: 1.3rem;
  color: #35495e;
  margin-top: 0;
  margin-bottom: 1rem;
  border-bottom: 2px solid #42b883;
  padding-bottom: 0.5rem;
}

.example button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.example button:hover {
  background-color: #35495e;
}

.example input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 0.5rem;
  width: calc(100% - 120px);
}

.example ul {
  list-style: none;
  padding: 0;
}

.example li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

</style>