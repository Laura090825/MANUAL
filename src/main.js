import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import InputSimple from './components/InputSimple.vue';

const app = createApp(App);

app.component('InputSimple', InputSimple);

app.mount('#app');