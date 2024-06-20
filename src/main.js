// FILE: main.js

import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import App from './App.vue'
import router from './router'
import quasarUserOptions from './quasar-user-options'

const myApp = createApp(App)

myApp.use(Quasar, quasarUserOptions)
myApp.use(router)

myApp.mount('#app')
