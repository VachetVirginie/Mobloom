<template>
  <section>
    <div v-if="areDatasLoaded" class="m-2">
      <h1 class="text-center text-white text-4xl mb-4">Mon coffre</h1>
      <div class="flex justify-center mb-4 mt-4">
        <input v-model="searchTerm" class="px-4 py-2 border rounded-lg w-96 text-gray-700" type="text" placeholder="Rechercher...">
      </div>
      <table v-for="data in datas" :key="data" class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
        <thead class="text-gray-300">
        <tr class="bg-gray-800 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
          <th class="p-3 text-left">Nom</th>
          <th class="p-3 text-left">Email</th>
          <th class="p-3 text-left">Mot de passe</th>
          <th class="p-3 text-left" width="110px">Actions</th>
        </tr>
        </thead>
        <tbody class="flex-1 sm:flex-none">
        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
          <td class="border-grey-light border bg-white hover:bg-gray-100 p-3">{{ data.siteTitle }}</td>
          <td class="border-grey-light border bg-white hover:bg-gray-100 p-3">
            <p class="flex">{{ data.auth }}
              <svg @click="onCopy(data.auth)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
              </svg>
            </p>
          </td>
          <td class="border-grey-light border hover:bg-gray-100 p-3 bg-white truncate">
            <p class="flex">{{ decodedPassword(data.psw) }}
              <svg @click="onCopy(data.psw)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
              </svg>
            </p>
          </td>
          <td class="border-grey-light border hover:bg-gray-100 p-3 bg-white text-pink hover:text-red-600 hover:font-medium cursor-pointer">
          <span @click="onDelete(data)">
           Delete
          </span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <LoaderBase v-else />
  </section>
</template>

<script setup>
import LoaderBase from "@/components/Base/LoaderBase";
import usePassword from "@/composables/usePassword";
import useFirebase from "@/composables/useFirebase";

import { onMounted, ref, watch } from "vue";

const { getDatas, areDatasLoaded, datas, deleteSelectedDoc } = useFirebase()
const { copy } = usePassword();
const searchTerm = ref('')


const onCopy = (data) => {
  copy(data)
}

const onDelete = (data) => {
  deleteSelectedDoc(data.id)
}

const decodedPassword =  (encodedPassword) => {
  return window.atob(encodedPassword)
}

watch(searchTerm, (value) => {
  if (value !== "") {
    datas.value = datas.value.filter((data) => {
      return data.siteTitle.toLowerCase().includes(value.toLowerCase())
    })
  } else {
    getDatas()
  }
})

onMounted(() => {
  getDatas();
})
</script>

<style>
@media (min-width: 640px) {
  table {
    display: inline-table !important;
  }

  thead tr:not(:first-child) {
    display: none;
  }
}

td:not(:last-child) {
  border-bottom: 0;
}

th:not(:last-child) {
  border-bottom: 2px solid rgba(0, 0, 0, .1);
}
</style>
