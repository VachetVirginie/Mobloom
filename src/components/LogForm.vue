<template>
  <div>
    <h1>S'enregistrer / Se connecter</h1>
    <label for="user">Mail: </label>
    <input type="text" v-model="user" placeholder="user" id="user" name="user"> <br>
    <label for="password">Password: </label>
    <input type="password" v-model="password" placeholder="password" id="password" name="password"> <br>
    <button @click="createUser">S'enregistrer</button>
    <button @click="loginUser">Se connecter</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
let user = ref(""), password = ref("");

console.log('tototototototo')
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
        console.log(errorCode, errorMessage)
      });
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
button {
  margin: 10px;
}
</style>
