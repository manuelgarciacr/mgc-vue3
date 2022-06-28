<template>
    <div class="not-found" ref="el">
        <h1>This page does not exist</h1>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const el = ref<HTMLDivElement | null>(null);

</script>

<style scoped lang="scss">
    .not-found {
        width: 100%;
        text-align: center;
        margin-top: 5rem;
    }
</style>
