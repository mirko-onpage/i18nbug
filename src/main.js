import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from "vue-i18n";

let i18n = createI18n({
    locale: "en",
    messages: {
        en: {
            "hi": "hello"
        },
        it: {
            "hi": "ciao"
        },
    },
})

let app = createApp(App);

// UNCOMMENT NEXT LINE TO USE THE PLUGIN
//app.use(i18n);

app.mount("#app");
