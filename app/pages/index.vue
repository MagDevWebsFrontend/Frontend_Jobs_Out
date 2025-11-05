<template>
  <div class="home">
    <div class="container">
      <CardInit />
      <CardExampleComponent />
      <CardGuide />
      <CardUserOpinion />
    </div>
  </div>
</template>

<script setup>
//imports
import CardInit from '@/components/landing/main/CardInit.vue'
import CardExampleComponent from '@/components/landing/main/CardExaple.vue'
import CardGuide from '@/components/landing/main/CardGuide.vue'
import CardUserOpinion from '@/components/landing/main/CardUserOpinion.vue'
import LandingLayout from '@/Layouts/default.vue'
</script>

<style scoped>
.home {
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

h1 {
  color: #0A66C2;
  margin-bottom: 1rem;
}
</style>