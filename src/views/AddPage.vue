<template>
  <section class="text-gray-200 body-font bg-primary">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Ajouter un element</h1>
      <div class="w-full bg-secondary rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Nom</label>
          <input v-model="name" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-grey placeholder-gray-500" placeholder="nom site" required="">
        </div>
        <div>
          <label for="identifiant" class="block mb-2 text-sm font-medium text-gray-900">Identifiant</label>
          <input v-model="identifiant" type="email" name="identifiant" id="identifiant" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-grey placeholder-gray-500" placeholder="name@company.com" required="">
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
          <input v-model="password" type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-grey placeholder-gray-500" placeholder="********" required="">
        </div>
        <div class="text-center">
          <ButtonBase @click="createDoc" color="pink" text="Ajouter"/>
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
import ButtonBase from "@/components/Base/ButtonBase";

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
