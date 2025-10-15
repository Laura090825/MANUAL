<template>
  <div class="portada">
    <div class="portada-content">
      <h1 class="portada-title">Manual de Vue.js</h1>
      <p class="portada-subtitle">Una guía completa para el desarrollo de aplicaciones web modernas</p>
      <div class="portada-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100">
          <path fill="#42b883" d="M12 2L2 7l10 15L22 7z"/>
          <path fill="#35495e" d="M12 2L2 7l10 5.5L22 7z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.portada {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.portada-content {
  text-align: center;
}

.portada-title {
  font-size: 4rem;
  font-weight: bold;
  color: #35495e;
  margin-bottom: 1rem;
}

.portada-subtitle {
  font-size: 1.5rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
}

.portada-icon {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
</style>