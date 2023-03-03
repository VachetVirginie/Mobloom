import { createApp } from 'vue'
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router"
import App from './App.vue'
import HomePage from '@/views/HomePage.vue'
import AddPage from '@/views/AddPage.vue'
import LogPage from "@/views/LogPage";
import DatasPage from "@/views/DatasPage";
import './assets/tailwind.css'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: LogPage
    },
    {
        path: '/home',
        name: 'Home',
        component: HomePage,
        meta: {
            autenticado: true
        }
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

onAuthStateChanged(auth, (user) => {
    if (!user) {
        router.push('/');
    }
});

const app = createApp(App);
app.use(router);

app.mount('#app');
