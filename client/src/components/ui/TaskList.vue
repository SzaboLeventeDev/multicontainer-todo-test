<script setup lang="ts">
import type { Task } from '@/types';
import ToDoCard from './ToDoCard.vue';

defineProps<{tasks: Task[]}>()

</script>

<template>
  <div class="flex flex-col gap-[1rem] mt-[2rem]">
    <ToDoCard v-if='tasks.length > 0' v-for="task in tasks" :task="task"/>
      <h2 v-if="tasks.length === 0">
        There are not any task added yet.
      </h2>
  </div>
</template>