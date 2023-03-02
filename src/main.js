import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router"
import HomePage from '@/views/HomePage.vue'
import AddPage from '@/views/AddPage.vue'
import './assets/tailwind.css'
import LogPage from "@/views/LogPage";
import DatasPage from "@/views/DatasPage";

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
    },
    {
        path: '/datas',
        name: 'Datas',
        component: DatasPage
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
});
const app = createApp(App);
app.use(router);

app.mount('#app');
