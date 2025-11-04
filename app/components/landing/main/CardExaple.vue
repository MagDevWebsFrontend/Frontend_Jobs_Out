<template>
    <h1>Explora millones de ofertas</h1>
    <div class="container-opcions">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
        <div class="item">7</div>
        <div class="item">8</div>
        <div class="item">9</div>
        <div class="item">10</div>
    </div>
    </template>

<style>
.container-opcions {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  padding: 30px;
  min-height: 50vh;
}

.item {
  flex: 0 0 calc(20% - 20px); /* No grow, no shrink, basis 20% - gap */
  min-width: 120px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background-color: white;
  padding: 15px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  box-sizing: border-box;
  text-align: center;
}

.item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  border-color: #0A66C2;
}

/* Responsive para tablets */
@media (max-width: 1024px) {
  .item {
    flex: 0 0 calc(33.333% - 20px); /* 3 por fila en tablets */
  }
}

/* Responsive para móviles */
@media (max-width: 768px) {
  .item {
    flex: 0 0 calc(50% - 20px); /* 2 por fila en móviles */
  }
}
</style>