<template>
    <div class="auth-container">
        <h1>LogIn</h1>
        <Options></Options>
        <Campos />
        <button class="btn-init">Iniciar</button>
    </div>
</template>

<script>
// imports
import Options from '@/components/auth/Options.vue'
import Campos from '~/components/auth/Campos.vue'
</script>

<style>
.container-general-auth{
    background-color: transparent;
    border: 2px solid black;
    border-radius: 16px;
}

.auth-container{
    background-color: burlywood;
}
</style>