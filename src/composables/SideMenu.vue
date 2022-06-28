<template>
    <div class="side-menu" ref="el">
        <ul>
            <li
                v-for="label in props.labels"
                :key="label.element.id"
                :class="{
                    active: labelId === label.element.id,
                    article: label.type === 'article',
                }"
            >
                <span @click="onLabelClick(label.offset)">{{
                    t(label.element.dataset.title  || label.element.id)
                }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref, watch } from "vue"
    import { storeToRefs } from "pinia"
    import { useMain } from "@/stores/mainStore"
    import Label from "@/composables/label"
    import { useI18n } from "vue-i18n";

    interface Props {
        labels: Label[];
    }

    const props = defineProps<Props>()
    const store = useMain()
    const { scrollTop, headerHeight } = storeToRefs(store)
    const el = ref<HTMLDivElement | null>(null)
    const labelId = ref("")
    const { t } = useI18n()

    const onLabelClick = (offset: number) => {
        let newOffset = offset - headerHeight.value + 1;
        let top = scrollTop.value;
        const dif = Math.abs(newOffset - top);
        const rise = (Math.abs(newOffset - top) * 10) / 300;
        if (dif <= 10) {
            //window.scrollTo(0, newOffset);
            return;
        }
        let timer = setInterval(() => {
            if (newOffset == top) {
                timer = 0;
                return;
            } else if (newOffset > top) {
                top += rise;
                if (newOffset < top) top = newOffset;
            } else if (newOffset < top) {
                top -= rise;
                if (newOffset > top) top = newOffset;
            }
            window.scrollTo(0, top);
            newOffset = offset - headerHeight.value + 1;
        }, 10);
    };

    const getStatus = () => {
        const label = props.labels.find(l => {
            const bottom = l.element.getBoundingClientRect().bottom;
            return l.isVisible && bottom > headerHeight.value;
        });

        return label?.element.id;
    };

    onMounted(() => {
        labelId.value = getStatus() || "";
    });

    watch(scrollTop, () => {
        labelId.value = getStatus() || "";
    });
</script>

<style scoped lang="scss">
    .v-theme--light .side-menu ::before{
        --border-color: yellow; // --v-theme-accent
    }
    .v-theme--dark .side-menu ::before{
        --border-color: orange; // --v-theme-accent
    }
    .side-menu {
        height: 100%;
        color: rgb(var(--v-theme-primary));
        background: rgb(125, 241, 184);
        // background: linear-gradient(
        //     90deg,
        //     rgba(125, 241, 184, 1) 0%,
        //     rgba(125, 241, 184, 1) 89%,
        //     rgba(224, 252, 239, 1) 100%
        // );
        background: linear-gradient(
            90deg,
            rgba(var(--v-theme-surface-lighten-2), 1) 0%,
            rgba(var(--v-theme-surface-lighten-2), 1) 89%,
            rgba(var(--v-theme-background), 1) 100%
        );
        // background-color: rgb(var(--v-theme-surface-lighten-2));
        left: 0;
        padding-top: 2rem;
        font-size: 1rem;
        font-weight: bold;
        overflow-x: hidden;
        padding-right: 1rem;
        z-index: 100;
        li {
            list-style-type: disc;
            margin: 0 1rem .25rem 2rem;
            span {
                cursor: pointer;
            }
            &.active {
                border-bottom: 6px solid rgb(var(--v-theme-accent));
                color: rgb(var(--v-theme-on-surface-accent));
                &::after {
                    content: " >";
                }
            }
            &.article {
                margin-left: 4rem;
                list-style-type: square;
            }
        }
        // &.closed {
        //     animation: left 500ms linear;
        //     left: -100%;
        //     @keyframes left {
        //         0% {
        //             left: 0;
        //         }
        //         100% {
        //             left: -100%;
        //         }
        //     }
        // }
    }
</style>
