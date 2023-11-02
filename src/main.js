import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./assets/style.css"
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'glightbox/dist/js/glightbox.min.js'
import 'boxicons/css/boxicons.min.css'
import 'boxicons/dist/boxicons.js'
import router from './router'
import store from './store'



createApp(App).use(store).use(router).mount('#app')