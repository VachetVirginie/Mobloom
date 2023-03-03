<template>
  <section class="text-gray-200 body-font bg-primary">
    <AlertBase v-if="action.isActive" :title="action.title" :text="action.text" :color="action.color"/>
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
          <input v-model="identifiant" type="email" name="identifiant" id="identifiant" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-grey placeholder-gray-500" placeholder="identifiant" required="">
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 relative">
            <div class="pb-2">Password</div>
              <svg @click="show = !show" v-if="show" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute right-3 mt-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            <svg @click="show = !show" v-if="!show" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute right-3 mt-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>
            <input v-model="password" :type="show ? 'password' : 'text'" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 bg-grey placeholder-gray-500" placeholder="password" required="">
          </label>
        </div>
        <div class="text-center">
          <ButtonBase @click="createDoc" color="bg-pink" text="Ajouter"/>
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
import AlertBase from "@/components/Base/AlertBase";

const name = ref("");
const identifiant = ref("");
const password = ref("");
const action = ref({
  isActive: false,
  title: "",
  text: "",
  color: ""
});
const show = ref(true);

const createDoc = () => {
  try {
    setDoc(doc(db, "users",  (Math.random() + 1).toString(36).substring(4)), {
      siteTitle: name.value,
      auth: identifiant.value,
      psw: password.value,
      user: auth.currentUser.email
    }
    )
    .then(() => {
      action.value = {
        isActive: true,
        title: "Ajouté",
        text: "Votre element a été ajouté avec succès",
        color: "text-green-500"
      }
      setTimeout(() => {
        window.location.href = "/home";
      }, 1000);
    })
  } catch (e) {
    console.error("Error adding document: ", e);
    action.value = {
      isActive: true,
      title: "Erreur",
      text: "Une erreur est survenue lors de l'ajout de votre element",
      color: "text-red-500"
    }
  }
}
</script>
