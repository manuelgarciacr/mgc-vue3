// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import colors from 'vuetify/lib/util/colors'
//import { refDebounced } from '@vueuse/core'
console.log(colors)
const light = {
    dark: false,
    colors: {
        background: '#e0fcef',
        surface: '#41B883',
        primary: colors.deepPurple.base,
        'primary-lighten-4': colors.deepPurple.lighten4,
        secondary: colors.teal.base,
        accent: colors.yellow.base,
        error: colors.red.base,
        info: colors.cyan.base,
        success: colors.green.base,
        warning: colors.amber.base,
        'on-surface-accent': colors.shades.black,
        'on-select': '#551A88'
    }
}

export default createVuetify({
    theme: {
        options: {
            customProperties: true,
        },
        variations: {
            colors: ['primary', 'surface'],
            lighten: 2,
            darken: 2,
          },
        defaultTheme: 'light',
        themes: {
            light,
            dark: {
                dark: true,
                colors: {
                //primary: colors.red.darken1, // #E53935
                secondary: colors.indigo.base,
                accent: colors.orange.base,
                'on-background': colors.indigo.lighten4,
                'on-surface-accent': colors.shades.white,
                'on-select': '#D0ADF0'
            }
        },
        },
    },
})
