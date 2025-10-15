<template>
  <input class="input-simple" :value="modelValue" @input="onInput" :placeholder="placeholder">
</template>

<script setup>
defineProps({
  modelValue: String,
  placeholder: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue']);

const onInput = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>

<style scoped>
.input-simple {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
}
</style>