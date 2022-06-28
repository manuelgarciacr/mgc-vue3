import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { createI18n } from 'vue-i18n'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import './assets/css/main.scss';
// Fontawesome
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faLinkedin)

const i18n = createI18n({
    legacy: false, // you must set `false`, to use Composition API
    globalInjection: true,
    locale: 'en', 
    fallbackLocale: 'en',
    messages: {
        en: {
            nav: {
                home: 'Home',
                vue3: 'Vue 3',
                about: 'About me'
            }
        },
        es: {
            nav: {
                home: 'Inicio',
                about: 'Sobre mí'
            }
        }
    },
})

loadFonts()

createApp(App)
    .use(router)
    .use(createPinia())
    .use(vuetify)
    .use(i18n)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')

