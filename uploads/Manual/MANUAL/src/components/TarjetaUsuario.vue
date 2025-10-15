<template>
  <div class="tarjeta-usuario" :class="{ 'usuario-activo': activo }">
    <div class="info">
      <h3 class="nombre">{{ nombre }}</h3>
      <p class="email">{{ email }}</p>
    </div>
    <span class="estado">{{ activo ? 'Activo' : 'Inactivo' }}</span>
  </div>
</template>

<script setup>
defineProps({
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  activo: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.tarjeta-usuario {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 1rem;
  background-color: #f9f9f9;
}

.tarjeta-usuario.usuario-activo {
  border-left: 5px solid #42b883;
}

.info {
  display: flex;
  flex-direction: column;
}

.nombre {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
}

.email {
  color: #555;
  margin: 0;
}

.estado {
  font-weight: bold;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  background-color: #eee;
  color: #333;
}

.usuario-activo .estado {
  background-color: #42b883;
  color: white;
}
</style>