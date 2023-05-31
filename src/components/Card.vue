<template>
  <div
    class="h-full min-w-[128px] rounded-2xl bg-[#FDFFFD] flex flex-col justify-center px-2 py-4 shadow-lg"
  >
    <div class="text-[#A6B1D1]">{{subtitle}}</div>
    <h1 class="font-bold text-[#314062]">{{title}}</h1>
    <div :class="`h-1 w-full ${color}`"></div>
  </div>
</template>

<script setup>
defineProps({
  subtitle: {
    type: String,
  },
  title: {
    type: String,
  },
  color: {
    type: String,
    default: 'bg-pink-500'
  }  
});
</script>