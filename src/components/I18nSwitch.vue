<template>
    <select v-model="$i18n.locale" class="i18n-switch">
        <option value="en">English</option>
        <option value="es">Español</option>
    </select>
</template>

<script setup lang="ts">
    import { useTheme } from 'vuetify'
    
    const theme = useTheme()

    // const toggleTheme = () =>
    //     theme.global.name.value = (theme.global.name.value === 'dark') ? 'light' : 'dark'
    
</script>
