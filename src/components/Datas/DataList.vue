<template>
  <section class="text-gray-200 body-font bg-primary sm:h-full h-screen py-4">
    <div class="container px-5 py-24 mx-auto flex">
    <div v-for="data in datas" :key="data" class="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80">
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">{{ data.siteTitle }}</h2>
            <p class="text-gray-500">{{ data.auth }}</p>
            <p class="text-gray-500">{{ data.psw }}</p>
          </div>
        </div>
      </div>
      </div>
  </section>
</template>

<script setup>
import { collection, getDocs } from "firebase/firestore";
import {db} from "@/firebase";
import { auth } from "@/firebase";
import {onMounted, ref} from "vue";

const datas = ref([]);

async function getDatas() {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    if (doc.data().user === auth.currentUser.email) {
      datas.value.push(doc.data());
      console.log(datas.value)
    }
  });
}

onMounted(() => {
  getDatas();
});
</script>
