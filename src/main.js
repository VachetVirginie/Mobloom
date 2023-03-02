import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router"
import HomeForm from '@/components/LogForm.vue'
import HomePage from '@/views/HomePage.vue'
import AddPage from '@/views/AddPage.vue'
import './assets/tailwind.css'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: HomeForm
    },
    {
        path: '/home',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/add',
        name: 'Add',
        component: AddPage
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
});
const app = createApp(App);
app.use(router);

app.mount('#app');
