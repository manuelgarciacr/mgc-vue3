import { useMain } from "@/stores/mainStore"
import { storeToRefs } from "pinia"
import { computed, onMounted, reactive, ref, watch } from "vue"
import { useElementVisibility } from "@vueuse/core"
import { useDisplay } from "vuetify"
import SideMenu from "./SideMenu.vue"
import Label from "@/composables/label"

export function useDefaultView() {
    const store = useMain()
    const { isSideMenuOpen, minHeaderHeight, headerHeight, headerHeightPx, sideMenuWidthPx, size } = storeToRefs(store)
    const labels: Label[] = []
    const windowHeightPx = ref("0")
    const buttonTopPx = computed(() => headerHeight.value - 18 + "px")
    const cssVars = reactive({
        "--sideTop": headerHeightPx,
        "--sideMargin": "-" + sideMenuWidthPx.value,
        "--sideMenuWidth": sideMenuWidthPx.value,
        "--contentMargin": sideMenuWidthPx.value,
        "--windowHeightPx": windowHeightPx,
        "--buttonTop": buttonTopPx
    })
    const { smAndDown } = useDisplay()
    // const isOpen = ref(isSideMenuOpen)
    const isMounted = ref(false)
    
    onMounted(() => {
        isMounted.value = true
        const arr = labels
        if (arr.length) {
            setOffsets();
            arr[arr.length - 1].element.classList.add("last");
        }
    });

    const setItemRef = (el: HTMLElement) => {
        const r = ref(el);
        if (el && !isMounted.value) {
            labels.push({
                element: el,
                isVisible: useElementVisibility(r),
                offset: el.offsetTop,
                type: el.attributes.getNamedItem("type")?.value || "",
            });
        }
        return r;
    };

    const setOffsets = () => {
        labels.forEach(label => {
            const el = label.element;
            label.offset = el.offsetTop - 16;
        });
        windowHeightPx.value =
            window.innerHeight - minHeaderHeight.value + 16 + "px";
    };

    watch(size, () => {
        setOffsets();
    });

    const onBtnClick = () => {
        isSideMenuOpen.value = !isSideMenuOpen.value;
    };

    return {SideMenu, isSideMenuOpen, cssVars, onBtnClick, labels, smAndDown, setItemRef}
}