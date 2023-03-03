<template>
  <section class="text-gray-200 body-font bg-primary h-screen py-4 px-2">
    <h1 class="text-center text-4xl mb-4">Mes datas</h1>
    <div class="relative overflow-x-auto rounded">
      <table class="w-full text-sm text-left text-gray-500">
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
        </tr>
        </thead>
        <tbody>
        <tr v-for="data in datas" :key="data" class="bg-white border-b">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {{ data.siteTitle }}
          </th>
          <td class="px-6 py-4">
            {{ data.auth }}
          </td>
          <td class="px-6 py-4">
            {{ data.psw }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
import { collection, getDocs } from "firebase/firestore";
import {db} from "@/firebase";
import { auth } from "@/firebase";
import {onMounted, ref} from "vue";

const datas = ref([]);

const getDatas = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    if (doc.data().user === auth.currentUser.email) {
      datas.value.push(doc.data());
    }
  });
}

onMounted(() => {
  getDatas();
});
</script>
