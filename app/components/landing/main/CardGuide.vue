<template>
    <h1>Como funciona</h1>
    <div class="container-card-guide">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>
</template>

<style scoped>
.container-card-guide {
  display: flex;
  gap: 40px; /* Gap aún más grande */
  padding: 40px;
  justify-content: center;
  align-items: stretch;
}

.item {
  flex: 0 1 400px; /* No grow, sí shrink, base 400px */
  min-height: 300px; /* Altura mínima aún más grande */
  background-color: white;
  border: 2px solid #e0e0e0;
  border-radius: 16px; /* Bordes muy redondeados */
  padding: 40px; /* Mucho padding interno */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center; /* Centrar texto */
}

.item:hover {
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  transform: translateY(-8px);
  border-color: #0A66C2;
}
</style>