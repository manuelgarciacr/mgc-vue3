<template>
    <I18nSwitch :style="{ 'margin-right': isCollapsed ? '50px!important' : '0' }"></I18nSwitch>
    <ThemeSwitch :style="{ 'margin-right': isCollapsed ? '50px!important' : '0' }"></ThemeSwitch>
    <v-btn
        v-bind="$attrs"
        width="36"
        height="36"
        dark
        class="header-fixed d-none d-md-block"
        :class="{ fixed: isHeaderFixed }"
        :style="{ display: isCollapsed ? 'block!important' : 'none!important' }"
        @click="onBtnClick"
    >
        <!-- <span class="material-icons">double_arrow</span> -->
    </v-btn>
    <v-container
        v-bind="$attrs"
        fluid
        class="header-component"
        :class="[
            { xs: $vuetify.display.xs, 'sm-and-up': $vuetify.display.smAndUp },
        ]"
        :style="cssVars"
    >
        <v-row class="flex-row-reverse" justify="space-between">
            <v-col cols="12" sm="8" class="title-container">
                <NavLineal :tabs="props.tabs"></NavLineal>
                <div>
                    <h2 class="text-h4 text-sm-h4 mt-2 title1" ref="title1">
                        Manuel García Criado
                    </h2>
                    <h3
                        class="text-h5 text-sm-h5 my-5 title2"
                        :class="{
                            status1: titleStatus.length > 0,
                            status3: titleStatus.length > 2,
                        }"
                    >
                        Analista-programador multiplataforma
                    </h3>
                    <a
                        class="text-h5 text-sm-h5 mb-2 title3"
                        :class="{ status2: titleStatus.length > 1 }"
                        target="_blank"
                        href="https://www.linkedin.com/in/manuelgacr/"
                    >
                        <font-awesome-icon :icon="['fab', 'linkedin']" />
                        Linkedin
                    </a>
                </div>
            </v-col>
            <v-col cols="12" sm="4" class="foto-container">
                <img
                    :src="require('@/assets/foto.png')"
                    position="bottom -50px center"
                />
            </v-col>
        </v-row>
    </v-container>
    <div
        class="header-size d-none d-md-block"
        :style="{ height: headerSize }"
    ></div>
</template>

<script setup lang="ts">
    import { useMain } from "@/stores/mainStore"
    import { useElementBounding } from "@vueuse/core"
    import { storeToRefs } from "pinia"
    import { ref, reactive, watch } from "vue"
    import NavLineal from "./NavLineal.vue"
    import ThemeSwitch from "./ThemeSwitch.vue"
    import I18nSwitch from "./I18nSwitch.vue"

    interface Props {
        tabs: { path: string; name: string }[];
    }

    const props = defineProps<Props>();
    const store = useMain();
    const {
        headerHeightPx,
        navHeight,
        minHeaderHeight,
        minHeaderHeightPx,
        isHeaderFixed,
        headerSize,
    } = storeToRefs(store);
    const title1 = ref<HTMLDivElement | null>(null);
    const titleStatus = ref<number[]>([]);
    const { top } = useElementBounding(title1);
    const isCollapsed = ref(false);
    const cssVars = reactive({
        "--headerHeight": headerHeightPx,
        "--minHeaderHeight": minHeaderHeightPx,
        "--navHeight": navHeight,
    });

    watch(top, () => {
        if (top.value < 5) {
            const len = titleStatus.value.length;
            // if ( len <= 2 ){
            //     titleStatus.value.push(parseInt(headerHeightPx.value));
            // }
            if (len == 2) titleStatus.value.push(149);
            if (len == 1) titleStatus.value.push(187);
            if (len == 0) titleStatus.value.push(210);
        }
    });

    watch(headerHeightPx, () => {
        const hh = parseInt(headerHeightPx.value);

        if (hh <= minHeaderHeight.value) {
            isCollapsed.value = true;
            titleStatus.value = [210, 187, 149];
            return;
        }

        isCollapsed.value = false;

        let len = titleStatus.value.length;
        while (len && titleStatus.value[len - 1] < hh) {
            len--;
            titleStatus.value.pop();
        }
    });

    const onBtnClick = () => {
        isHeaderFixed.value = !isHeaderFixed.value;
    };
</script>

<style scoped lang="scss">
    .i18n-switch {
        position: fixed;
        top: 10px;
        right: 55px;
        height: 36px;
        width:60px;
        z-index: 250!important;
    }
    .theme-switch {
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 250!important;
    }
    .header-fixed {
        position: fixed;
        min-width: 0;
        padding: 4px 2px 0 0;
        top: 10px;
        right: 10px;
        z-index: 250 !important;
        box-shadow: none;
        background-size: cover;
        background-image: url("~@/assets/pushpin.png");
        &.fixed {
            background-image: url("~@/assets/pushpin-on.png");
        }
    }
    .header-component {
        background-color: rgb(var(--v-theme-surface));
        top: 0;
        width: 100%;
        text-align: center;
        height: auto;
        padding: 0;
        z-index: 100;
        &.xs {
            > .v-row {
                .v-img {
                    max-width: 300px;
                    margin: 0 auto;
                }
            }
        }
        //&.sm-and-up {
        position: fixed;
        height: var(--headerHeight);
        // &.fixed {
        //     height: var(--minHeaderHeight)
        // }
        > .v-row {
            .title-container {
                display: flex;
                flex-direction: column-reverse;
                padding-top: 3rem;
                justify-content: space-between;
                padding-bottom: 0;
                .nav {
                    position: relative;
                }
            }
            .foto-container {
                // align-items: flex-end;
                display: flex;
                justify-content: center;
                padding-bottom: 0;
                align-items: center;
                padding-left: 7rem;
                img {
                    height: 100%;
                }
            }
        }
        // }
        & > .v-row {
            height: 100%;
            & > * {
                height: 100%;
            }
            .title1 {
                font-family: "Pacifico", cursive !important;
                // margin-top: var(--navHeight) !important;
                padding-top: 1rem;
                margin-bottom: 1rem;
            }
            .title2 {
                display: block;
                &.status1 {
                    margin: 0 !important;
                }
                &.status3 {
                    display: none !important;
                }
            }
            .title3 {
                display: block;
                text-decoration: none;
                &.status2 {
                    display: none !important;
                }
            }
        }
    }
    .header-size {
        height: var(--headerSize);
    }
</style>
