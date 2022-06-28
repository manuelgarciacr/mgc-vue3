<template>
    <v-app>
        <v-app-bar app density="comfortable" :model-value="smAndDown" class="d-md-none">
            <v-app-bar-nav-icon
                variant="text"
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <!-- <v-btn variant="text" icon="mdi-magnify"></v-btn>
            <v-btn variant="text" icon="mdi-filter"></v-btn>
            <v-btn variant="text" icon="mdi-dots-vertical"></v-btn> -->
            <I18nSwitch></I18nSwitch>
            <ThemeSwitch></ThemeSwitch>    
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" bottom temporary class="d-md-none">
            <template v-slot:prepend>
                <v-list-item
                    two-line
                    :prepend-avatar="require('@/assets/foto.png')"
                >
                <v-list-item-header>
                    <v-list-item-title>Manuel García</v-list-item-title>
                    <v-list-item-subtitle>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/manuelgacr/"
                        >
                            <v-icon icon="mdi-linkedin"></v-icon>
                            Linkedin
                        </a>
                    </v-list-item-subtitle>
                </v-list-item-header>
                </v-list-item>
            </template>
            <v-list density="compact" nav>
                <v-list-item v-for="(item, idx)  in tabs"
                    :key="idx"
                    :prepend-icon="item.icon"
                    :title="t(item.name)"
                    :value="item.name"
                    :to="item.path"
                ></v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main class="main" v-scroll="onScroll" ref="el" :style="cssVars">
            <HeaderComponent :tabs="tabs" class="d-none d-md-block"></HeaderComponent>
            <!-- <div class="header-size d-none d-md-block"></div> -->
            <router-view />
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
    import { useMain } from "./stores/mainStore"
    import HeaderComponent from "./components/HeaderComponent.vue"
    import { storeToRefs } from "pinia"
    import { reactive, ref } from "vue"
    import { useResizeObserver } from "@vueuse/core"
    import { useDisplay } from 'vuetify'
    import ThemeSwitch from "./components/ThemeSwitch.vue"
    import I18nSwitch from "./components/I18nSwitch.vue"
    import { useI18n } from "vue-i18n"

    const store = useMain();
    const el = ref(null);
    const { maxHeaderHeightPx } = storeToRefs(store);
    const cssVars = reactive({
        "--maxHeaderHeight": maxHeaderHeightPx,
    });
    const drawer = ref(false);
    const { smAndDown } = useDisplay()
    const { t } = useI18n()
    const tabs = [
        { path: "/", name: "nav.home", icon: "mdi-home-city" },
        { path: "/vue3", name: "nav.vue3", icon: "mdi-vuejs" },
        { path: "/about", name: "nav.about", icon: "mdi-information" },
    ];
    
    store.maxHeaderHeight = Math.round(window.screen.height / 2);
    
    useResizeObserver(el, (entries) => {
        const [entry] = entries;
        const { width, height } = entry.contentRect;
        store.size = { width: width, height: height };
    });

    const onScroll = (ev: Event) => {
        store.scrollTop = (ev.currentTarget as Window)?.scrollY;
    };

    // watch(smAndDown, () => {
    //     if (smAndDown)
    //         store.sideMenuWidth = 0;
    //     else
    //         store.sideMenuWidth = store.sideMenuDefaultWidth;
    // })
</script>

<style scoped lang="scss">
    // .main {

    // }
    .header-size {
        height: var(--headerSize);
    }

    .i18n-switch {
        margin-right: 10px;
    }
</style>
