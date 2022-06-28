import { defineStore } from 'pinia'

export type Theme = 'light'|'dark'

export type mainState = {
    theme: Theme
    dark: boolean
    maxHeaderHeight: number
    minHeaderHeight: number
    isHeaderFixed: boolean
    scrollTop: number
    navHeight: string
    sideMenuWidth: number
    sideMenuDefaultWidth: number
    size: {width: number, height: number}
    isSideMenuOpen: boolean
};

export const useMain = defineStore('main', {
    state: () => ({
        /** @type { Theme } */
        theme: 'light',
        // type will be automatically inferred to boolean
        dark: false,
        maxHeaderHeight: 500,
        minHeaderHeight: 120,
        isHeaderFixed: false,
        scrollTop: 0,
        navHeight: "1.5rem",
        sideMenuWidth: 200,
        size: {width: 0, height:0},
        isSideMenuOpen: true
    } as mainState),
    getters: {
        /**
        * @returns { Theme }
        */
        isDark(state) {
            return state.dark
        },
        headerHeight: (state) => {
            const h = state.maxHeaderHeight - state.scrollTop

            if (state.scrollTop <= 0 && !state.isHeaderFixed)
                return state.maxHeaderHeight;

            if (h <= state.minHeaderHeight || state.isHeaderFixed)
                return state.minHeaderHeight;

            return h
        },
        headerSize(): string {
            if (this.isHeaderFixed)
                return this.minHeaderHeightPx;
            return this.maxHeaderHeightPx;
        },
        headerHeightPx() { return this.headerHeight + "px"},
        maxHeaderHeightPx: (state) => state.maxHeaderHeight + "px",
        minHeaderHeightPx: (state) => state.minHeaderHeight + "px",
        sideMenuWidthPx: (state) => state.sideMenuWidth + "px",
        // isSideMenuClosed: (state) => state.sideMenuWidth < state.sideMenuDefaultWidth
    },
    actions: {
        // any amount of arguments, return a promise or not
        // setTheme(newTheme: Theme) {
        //     // you can directly mutate the state
        //     this.theme = newTheme
        // },
        toggleTheme() {
            this.dark = !this.dark
        },
    }
})
