<template>
  <section class="bg-primary">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen sm:h-full h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-4xl font-semibold text-secondary">
        <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
        Mobloom
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-secondary">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input v-model="user" type="email" name="email" id="email" class="bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 bg-grey dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-grey dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
            </div>
            <div class="flex justify-center gap-4">
              <ButtonBase @click="loginUser" color="pink" text="Sign in"/>
              <ButtonBase @click="createUser" color="pink" text="Register"/>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import ButtonBase from "@/components/Base/ButtonBase";

let user = ref(""), password = ref("");

function createUser() {
  createUserWithEmailAndPassword(auth, user.value, password.value)
      .then(() => {
        window.location.href = "/home";
      })
      .catch((error) => {
        let errorType = error.message === 'Firebase: Error (auth/email-already-in-use).' ? "L'utilisateur existe déjà" : "Une erreur est survenue"
        console.log(errorType)
      });
}
function loginUser() {
  signInWithEmailAndPassword(auth, user.value, password.value)
      .then(() => {
        window.location.href = "/home";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message.includes('auth/wrong'))
        console.log(errorCode, errorMessage)
      });
}
</script>
