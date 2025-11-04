<template>
    <div class="cont-welcome">
        <div class="items-general cont-text">
            <h2 class="title">Jobs Out</h2>
            <p class="textAlt">Encuentra tu trabajo ideal!<br>En cuba, desde cualquier ciudad!</p>
        </div>
        <div class="items-general cont-button">
            <button class="btn-start">Get Started</button>
        </div>
    </div>
</template>

<style>
.cont-welcome{
  background-color: #0A66C2;
  display: flex;
  flex-direction: column; /* Cambiado a columna */
  justify-content: space-between; /* Separa contenido arriba y abajo */
  align-items: flex-start;
  padding: 60px 40px;
  min-height: 400px;
  height: 50vh;
  max-height: 500px;
  box-sizing: border-box;
  width: 100%;
  position: relative; /* Para posicionamiento absoluto si prefieres */
  border-radius: 16px;
}

.items-general{
  background: transparent;
}

.cont-text{
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: left;
}

.cont-button{
  width: 100%;
  display: flex;
  justify-content: flex-end; /* Botón a la derecha */
  align-items: flex-end; /* Botón al fondo */
  margin-top: auto; /* Empuja el botón hacia abajo */
}

.title{
  color: white;
  font-size: 3.5rem;
  margin: 0;
  font-weight: bold;
}
.textAlt{
  color: white;
  font-size: 1.5rem;
  margin: 0;
  font-weight: bold;
  padding: 50px;
}

.btn-start{
  background-color: #13A863;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 150px;
}

.btn-start:hover {
  background-color: #0f8a4f;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
</style>