<template>
  <section class="py-4 text-gray-200">
    <div class="container mx-auto flex flex-col items-center justify-center">
      <div
        class="mb-2 w-5/6 rounded object-cover object-center md:w-2/6 lg:w-2/6"
        alt="hero"
      >
        <Illustration />
      </div>
      <div class="w-full text-center lg:w-2/3">
        <h1 class="mb-4 text-4xl font-semibold text-white sm:text-4xl">
          Mobloom
        </h1>
        <p class="mb-8 font-medium leading-relaxed">
          Gestionnaire de mot de passe
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import Illustration from "@/components/Hero/passwordIllustration.vue";
</script>
