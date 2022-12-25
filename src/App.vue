<template>
  <nav class="gap-10 font-bold text-white font-mono flex  bg-blue-900 h-16 justify-center items-center lg:gap-28 list-none">
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/about">About</router-link></li>
    <li><router-link to="/login">Login</router-link></li>
    <li><router-link to="/about">Signup</router-link></li>
  </nav>
  <router-view />
</template>

<style></style>
