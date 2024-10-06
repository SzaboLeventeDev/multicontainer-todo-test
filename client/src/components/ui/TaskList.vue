<script setup lang="ts">
import type { Task } from '@/types';
import ToDoCard from './ToDoCard.vue';

defineProps<{tasks: Task[]}>()</script>

<template>
  <div class="flex flex-col gap-[1rem] mt-[2rem]">
    <ToDoCard v-for="task in tasks" :task="task"/>
  </div>
</template>