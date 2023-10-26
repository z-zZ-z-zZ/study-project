import { createApp } from 'vue'
// import './style.css'
import "./utils/reset.css"
import App from './App.vue'
import CardVue from './components/card.vue'

// createApp(App).mount('#app')

const app = createApp(App)

app.component('Card',CardVue)

app.mount('#app')