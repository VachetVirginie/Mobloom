import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router"
import HomePage from '@/views/HomePage.vue'
import AddPage from '@/views/AddPage.vue'
import './assets/tailwind.css'
import LogPage from "@/views/LogPage";

const routes = [
    {
        path: '/',
        name: 'Login',
        component: LogPage
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
