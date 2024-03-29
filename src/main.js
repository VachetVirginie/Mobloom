import { createApp } from 'vue'
import { auth } from "@/composables/useFirebase";
import { onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router"

import AddPage from '@/views/AddPage.vue'
import App from './App.vue'
import Aos from '@/composables/useAos'
import DatasPage from "@/views/StrongboxPage";
import HomePage from '@/views/HomePage.vue'
import LogPage from "@/views/LogPage";

import './assets/tailwind.css'
import 'aos/dist/aos.css'

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
            authenticated: true
        }
    },
    {
        path: '/add',
        name: 'Add',
        component: AddPage
    },
    {
        path: '/strongBox',
        name: 'StrongBox',
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
app.use(Aos);
app.mount('#app');
