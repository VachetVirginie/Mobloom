<template>
  <header v-if="route !== 'Login'">
    <nav class="border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a
          href="/home"
          class="flex items-center"
        >
          <img
            src="@/assets/psw.png"
            class="mr-3 h-6 sm:h-9"
            alt="Mobloom Logo"
          >
          <span class="self-center text-xl font-semibold whitespace-nowrap text-white">Mobloom</span>
        </a>
        <div class="flex items-center lg:order-2">
          <a
            class="text-gray-300 text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800"
            @click="logOutSession"
          >Log out</a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            @click="openMenu = !openMenu"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            /></svg>
          </button>
        </div>
        <div
          class="w-full md:block md:w-auto"
          :class="openMenu ? 'block': 'hidden'"
        >
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li @click="goTo('/home')">
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 text-white"
                aria-current="page"
              >Accueil</a>
            </li>
            <li @click="goTo('/add')">
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-300 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >Ajouter identifiants</a>
            </li>
            <li @click="goTo('/strongBox')">
              <a
                href="#"
                class="block py-2 pr-4 pl-3 text-gray-300 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >Mon coffre</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from 'vue-router';
import { computed, ref } from "vue";

const router = useRouter()
const currentRouteName = computed(() => router.currentRoute.value.name )
const route = currentRouteName;
const openMenu = ref(false)

const logOutSession = () => {
  signOut(auth).then(() => {
    window.location.href = "/";
  }).catch((error) => {
    console.log(error);
  });
}

const goTo = (path) => {
  window.location.href = path;
}

</script>
