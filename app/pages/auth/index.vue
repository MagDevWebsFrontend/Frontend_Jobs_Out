<template>
    <div>
        <AuthContainer>
        </AuthContainer>
    </div>
</template>

<script setup>
//imports
import AuthContainer from '@@/app/components/auth/Auth.vue'

//definir layout
definePageMeta({
    layout: 'auth'
})
</script>