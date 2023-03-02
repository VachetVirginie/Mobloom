<template>
  <section class="text-gray-200 body-font bg-primary sm:h-full h-screen py-4">
    <div class="container mx-auto flex items-center justify-center flex-col">
      <div class="lg:w-2/6 md:w-2x/6 w-5/6 mb-2 object-cover object-center rounded" alt="hero">
        <Illustration />
      </div>
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="title-font sm:text-4xl text-4xl mb-4 font-semibold text-white">Mobloom</h1>
        <p class="mb-8 leading-relaxed font-medium">Gestionnaire de mot de passe</p>
        <div class="flex justify-center">
          <button @click="goToAddPage" class="inline-flex text-white bg-pink  border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Ajouter</button>
          <button @click="getDatas" class="ml-4 inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Voir</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Illustration from "@/components/Hero/passwordIllustration.vue";

function goToAddPage() {
  window.location.href = "/add";
}
// async function getDatas() {
//   const querySnapshot = await getDocs(collection(db, "users"));
//   querySnapshot.forEach((doc) => {
//     if (doc.data().user === auth.currentUser.email) {
//       console.log(doc.data());
//     }
//   });
// }


</script>
