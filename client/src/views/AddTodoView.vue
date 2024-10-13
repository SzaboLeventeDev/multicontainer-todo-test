<script setup lang="ts">
import { ref } from 'vue';
import { useApi } from '@/composables/useApi';
import { type Task } from '@/types';
import {ToDoState} from '@/types';
import router from '@/router';

const { postData } = useApi();
const newTask = ref<HTMLInputElement | null>(null);

const handleAddTask = async () => {
  if(!newTask.value) return
  const newTaskDto: Task = {
    id: new Date().toLocaleDateString(),
    name: newTask.value.value,
    state: ToDoState.ToDo
  };
  await postData('/new-task', newTaskDto)
  router.push({name: "MyTaskList"})
};
</script>
<template>
  <div id="newTask" class="flex flex-row gap-10 items-center justify-center">
      <input type="text" ref="newTask" placeholder="New task" class="py-2 px-2 bg-slate-100 rounded-lg"/>
      <button class="bg-slate-200 py-2 px-6 rounded-lg" @click="handleAddTask">Add</button>
    </div>
</template>