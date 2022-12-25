<template>
  <div class="font-mono font-bold flex  justify-center items-center w-full h-96">
    <h1 class="text-dark w-3/6 text-2xl lg:text-8xl">Welcome {{ name }}</h1>
    <Scoreboard></Scoreboard>
  </div>
</template>

<script>
import Scoreboard from '@/components/Scoreboard.vue';

// @ is an alias to /src


export default {
  name: "HomeView",
  components: {
    Scoreboard
  },
  data(){
    return {
      'name':'Pedro'
    }
  }
};
</script>
