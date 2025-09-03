<template>
  <button class="boton-simple" @click="onClick">
    <slot>Botón</slot>
  </button>
</template>

<script setup>
defineProps({
  onClick: {
    type: Function,
    default: () => {}
  }
});
</script>

<style scoped>
.boton-simple {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.boton-simple:hover {
  background-color: #35495e;
}
</style>