<template>
  <header v-if="route !== 'Login'">
    <nav class="border-gray-200 bg-gray-800 px-4 py-2.5 lg:px-6">
      <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
        <a
          href="/home"
          class="flex items-center"
        >
          <img
            src="@/assets/psw.png"
            class="mr-3 h-6 sm:h-9"
            alt="Mobloom Logo"
          >
          <span class="self-center whitespace-nowrap text-xl font-semibold text-white">Mobloom</span>
        </a>
        <div class="flex items-center lg:order-2">
          <a
            class="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-800 lg:px-5 lg:py-2.5"
            @click="logOutSession"
          >Log out</a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
            @click="openMenu = !openMenu"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
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
          <ul class="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
            <li @click="goTo('/home')">
              <a
                href="#"
                class="block rounded py-2 pr-4 pl-3 text-white lg:bg-transparent lg:p-0"
                aria-current="page"
              >Accueil</a>
            </li>
            <li @click="goTo('/add')">
              <a
                href="#"
                class="block border-b border-gray-100 py-2 pr-4 pl-3 text-white hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white"
              >Ajouter identifiants</a>
            </li>
            <li @click="goTo('/strongBox')">
              <a
                href="#"
                class="block border-b border-gray-100 py-2 pr-4 pl-3 text-white hover:bg-gray-50 dark:border-gray-700 lg:border-0 lg:p-0 lg:hover:bg-transparent"
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
import { auth } from "@/composables/useFirebase";
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
