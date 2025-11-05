<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <!-- Logo -->
        <div class="logo">
          <h1 @click="handleHome">Jobs Out</h1>
        </div>

        <!-- Menú de navegación -->
        <nav class="navigation">
          <ul class="nav-list">
            <li class="nav-item">
              <a href="/" class="nav-link">Inicio</a>
            </li>
            <li class="nav-item">
              <a href="/nosotros" class="nav-link">Nosotros</a>
            </li>
            <li class="nav-item">
              <a href="/contacto" class="nav-link">Contacto</a>
            </li>
          </ul>
        </nav>

        <!-- Botones de autenticación -->
        <div class="auth-buttons">
          <button class="btn btn-login" @click="handleLogin">
            Iniciar Sesión
          </button>
          <button class="btn btn-signup" @click="handleSignup">
            Registrarse
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const handleLogin = () => {
  navigateTo("/auth")
  console.log('Login clicked')
}

const handleSignup = () => {
  navigateTo("/auth/register")
  console.log('Signup clicked')
}

const handleHome = () =>{
  navigateTo("/")
}

// imports manales
</script>

<style scoped>
.header {
  background-color: #0A66C2;
  padding: 1rem 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo h1 {
  color: white;
  font-size: 1.5rem;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
}

.auth-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-login {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-signup {
  background: #13A863;
  color: white;
}
</style>
