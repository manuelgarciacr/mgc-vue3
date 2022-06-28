<template>
    <nav class="nav-lineal" ref="el">
        <router-link
            v-for="(link, idx) in props.tabs"
            :to="link.path"
            :key="idx"
            >{{ t(link.name) }}</router-link
        >
        <!-- <router-link to="/about">About</router-link> -->
    </nav>
</template>

<script setup lang="ts">
    import { ref } from "vue"
    import { useI18n } from "vue-i18n"

    interface Props {
        tabs?: { path: string; name: string }[];
        fontSize?: string;
    }

    const props = defineProps<Props>();

    const el = ref<HTMLDivElement | null>(null);
    const { t } = useI18n()
</script>

<style scoped lang="scss">
    .v-theme--light .nav-lineal ::before{
        --border-color: yellow; // --v-theme-accent
    }
    .v-theme--dark .nav-lineal ::before{
        --border-color: orange; // --v-theme-accent
    }
    .nav-lineal {
        height: var(--navHeight);
        margin-bottom: 5px;
        text-align: center;
        z-index: 100;
        font-size: 1rem;
        a {
            font-weight: bold;
            margin-left: 1rem;
            text-decoration: none;
            position: relative;
            &::before {
                content: "\00a0";
                position: absolute;
                border-bottom: 6px solid var(--border-color);
                margin-right: -50%;
                width: 0%;
                animation: border-off 500ms linear;
            }
            &.router-link-exact-active {
                color: rgb(var(--v-theme-on-surface-accent));
                &::before {
                    animation: border-on 250ms linear;
                    width: 100%;
                }
            }
            @keyframes border-on {
                0% {
                    width: 0%;
                }
                100% {
                    width: 100%;
                }
            }
            @keyframes border-off {
                0% {
                    margin-left: 0%;
                    width: 100%;
                }
                100% {
                    margin-left: 100%;
                    width: 0%;
                }
            }
        }
    }
</style>
