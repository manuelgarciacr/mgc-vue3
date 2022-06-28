<template>
    <v-btn
        class="theme-switch"
        variant="text"
        icon="mdi-White-Balance-Sunny"
        color="blue-lighten-2"
        @click="toggleTheme"
      ></v-btn>
</template>

<script setup lang="ts">
    import { useTheme } from 'vuetify'
    
    const theme = useTheme()

    const toggleTheme = () =>
        theme.global.name.value = (theme.global.name.value === 'dark') ? 'light' : 'dark'
    
</script>

<style scoped>
    .theme-switch {
        height: 36px;
        width:36px;
        background-size:contain;
        background-repeat:no-repeat;
        background-image: url("~@/assets/white-balance-sunny.svg");
    }
</style>