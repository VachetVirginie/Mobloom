<template>
  <section class="text-gray-200 body-font bg-primary">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Ajouter un element</h1>
      <div class="w-full bg-secondary rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Nom</label>
          <input v-model="name" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-grey placeholder-gray-500 dark:text-white" placeholder="nom site" required="">
        </div>
        <div>
          <label for="identifiant" class="block mb-2 text-sm font-medium text-gray-900">Identifiant</label>
          <input v-model="identifiant" type="email" name="identifiant" id="identifiant" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-grey placeholder-gray-500 dark:text-white" placeholder="name@company.com" required="">
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
          <input v-model="password" type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-grey placeholder-gray-500 dark:text-white" placeholder="********" required="">
        </div>
        <div class="text-center">
          <button @click="createDoc" class="w-1/3 align-center text-white bg-pink hover:bg-primary-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Save</button>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { doc, setDoc } from "firebase/firestore";
import {db} from "@/firebase";
import { auth } from "@/firebase";

const name = ref("");
const identifiant = ref("");
const password = ref("");

function createDoc() {
  try {
    setDoc(doc(db, "users",  (Math.random() + 1).toString(36).substring(4)), {
      siteTitle: name.value,
      auth: identifiant.value,
      psw: password.value,
      user: auth.currentUser.email
    }
    )
    .then(() => {
      window.location.href = "/home";
    })
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
</script>
