<script setup lang="ts">
import { ref } from 'vue';

const newTask = ref<HTMLInputElement>();

</script>
<template>
  <div id="newTask" class="flex flex-row gap-10 items-center justify-center">
      <input type="text" ref="newTask" placeholder="New task" class="py-2 px-2 bg-slate-100 rounded-lg"/>
      <button class="bg-slate-200 py-2 px-6 rounded-lg">Add</button>
    </div>
</template>
<style scoped></style>