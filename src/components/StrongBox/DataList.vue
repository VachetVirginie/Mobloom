<template>
  <section>
    <div v-if="areDatasLoaded" class="text-gray-200 body-font bg-primary h-full py-4 px-2">
      <h1 class="text-center text-4xl mb-4">Mes datas</h1>
      <div class="relative overflow-x-auto rounded">
        <table class="w-full text-sm text-left text-gray-500 table-auto">
          <thead class="text-xs text-gray-700 uppercase bg-gray-200">
          <tr>
            <th scope="col" class="px-6 py-3">
              Nom
            </th>
            <th scope="col" class="px-6 py-3">
              Identifiant
            </th>
            <th scope="col" class="px-6 py-3">
              Mot de passe
            </th>
            <th scope="col" class="px-6 py-3">
              Actions
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="data in datas" :key="data" class="bg-white border-b">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              {{ data.siteTitle }}
            </th>
            <td class="px-6 py-4 flex gap-2">
             <p>{{ data.auth }}</p>
              <svg @click="copy(data.auth)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
              </svg>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
               <p>{{ data.psw }}</p>
                <svg @click="onCopy(data.psw)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                </svg>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <svg @click="onDelete(data)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <LoaderBase v-else />
  </section>
</template>

<script setup>
import LoaderBase from "@/components/Base/LoaderBase";
import usePassword from "@/composables/usePassword";
import useFirebase from "@/composables/useFirebase";

import { onMounted } from "vue";

const { getDatas, areDatasLoaded, datas, deleteSelectedDoc } = useFirebase()
const { copy } = usePassword();


const onCopy = (data) => {
  copy(data)
}

const onDelete = (data) => {
  deleteSelectedDoc(data.id)
}

onMounted(() => {
  getDatas();
})
</script>
