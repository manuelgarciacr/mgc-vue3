<template>
    <v-btn
        class="sidemenu-btn d-none d-md-block"
        :class="{ open: isSideMenuOpen }"
        :style="cssVars"
        @click="onBtnClick"
    >
        <span class="material-icons">double_arrow</span>
    </v-btn>
    <SideMenu
        side-menu
        class="d-none d-md-block"
        :labels="labels"
        :style="cssVars"
        :class="{ open: isSideMenuOpen }"
    ></SideMenu>
    <div
        class="default-view"
        :style="cssVars"
        :class="{ open: isSideMenuOpen, hidden: smAndDown }"
    >
        <section>
            <article id="Vue 3" data-title="Vue 3" type="section" :ref="setItemRef">
                <h3>Vue 3</h3>
                <hr />
                <p>This page is intended to be a compilation of my notes on Vue 3, the Composition API and SFCs.</p>
            </article>
            <article id="10" data-title="SFC" type="article" :ref="setItemRef">
                <h4>SFC</h4>
                <hr />
                <code>
                   <p>&lt;script&gt; &lt;/script&gt;</p>
                </code>
            </article>
        </section>
    </div>
</template>

<script setup lang="ts">
    import { useDefaultView } from "../composables/defaultView"
    import { computed, onMounted } from "vue"
    import { useContent } from "@/stores/contentStore"

    const store = useContent()
    const articles = computed(() => {
        return store.articles
    })

    onMounted(() => {
        store.fetchArticles();
    })

    const getArticle = (id: number): string => {
        const art = articles.value[id]

        return art.code.join("\n")
    }

    const {
        SideMenu,
        isSideMenuOpen,
        cssVars,
        onBtnClick,
        labels,
        smAndDown,
        setItemRef,
    } = useDefaultView();
</script>

<style scoped lang="scss">
    @import "../composables/defaultView.scss";
    textarea {
        .code {
            background-color: #252525;
            color: #F0F0F0;
            user-select: all;
        }
    }
</style>
