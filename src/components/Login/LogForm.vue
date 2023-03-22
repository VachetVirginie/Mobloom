<template>
  <section>
    <AlertBase
      v-if="action.isActive"
      :title="action.title"
      :text="action.text"
      :color="action.color"
    />
    <div class="mx-auto flex h-screen flex-col items-center justify-center px-6 py-8 sm:h-full md:h-screen lg:py-0">
      <a
        href="#"
        class="mb-6 flex items-center text-4xl font-semibold text-secondary"
      >
        <img
          class="mr-2 h-8 w-8"
          src="@/assets/psw.png"
          alt="logo Mobloom"
        >
        Mobloom
      </a>
      <div class="w-full rounded-lg bg-white shadow dark:border sm:max-w-md md:mt-0 xl:p-0">
        <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
          <InputBase
            v-model="user"
            type="text"
            label="Your email"
            placeholder="name@company.com"
          />
          <InputBase
            v-model="password"
            type="password"
            label="Your password"
            placeholder="••••••••"
          />
          <div class="flex justify-center gap-4">
            <ButtonBase
              color="bg-pink"
              text="Sign in"
              @click="onLoginUser"
            />
            <ButtonBase
              color="bg-pink"
              text="Register"
              @click="onCreateUser"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import useFirebase from "@/composables/useFirebase";
import ButtonBase from "@/components/Base/ButtonBase";
import AlertBase from "@/components/Base/AlertBase";
import InputBase from "@/components/Base/InputBase";

const { createUser, loginUser, password, user, action } = useFirebase();

const onCreateUser = () => {
  createUser();
}

const onLoginUser = () => {
  loginUser();
}


</script>
