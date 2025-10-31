<template>
  <div class="layout">
    <HeaderComponent />
    <main class="main-content">
      <slot />
    </main>
    <FooterComponent />
  </div>
</template>

<script setup>
// IMPORTACIÓN MANUAL - 100% seguro
import HeaderComponent from '@/components/landing/header/Header.vue'
import FooterComponent from '@/components/landing/footer/Footer.vue'
</script>

<style>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 2rem 0;
}
</style>