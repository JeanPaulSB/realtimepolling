<template>
  <div class="font-mono font-bold flex bg-white justify-center text-center items-center w-full h-screen">
    <h1 class="text-dark w-full text-md text-md lg:text-2xl">Welcome to our page {{ userStore.getName }}</h1>
  </div>
</template>

<script>
import Scoreboard from '@/components/Scoreboard.vue';
import {useUserStore} from '@/store/userStore';
// @ is an alias to /src


export default {
  name: "HomeView",
  components: {
    Scoreboard
  },
  setup(){
    const userStore = useUserStore();
    return {
      userStore
    }
  },
};
</script>
