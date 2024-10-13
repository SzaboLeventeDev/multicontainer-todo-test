<script setup lang="ts">
import TaskList from '@/components/ui/TaskList.vue';
import { useApi } from '@/composables/useApi';
import type { Task } from '@/types';
import { onMounted, provide, ref } from 'vue';

const { getData, data, loading, error, updateData } = useApi();
const initialTasks = ref<Task[] | null>(null);

onMounted(async () => {
  await getData('/tasks')
  initialTasks.value = data.value? [...data.value] : null  
})
const updateTaskState = async (task: Task) => {
  await updateData("/update-task", task)

  if(data.value && initialTasks.value) {
    const updatedTaskIndex = initialTasks.value?.findIndex(t => t.id === task.id)
    if(updatedTaskIndex !== -1 && data.value) initialTasks.value[updatedTaskIndex] = data.value
  }
};
provide('updateTaskState', updateTaskState);
</script>
<template>
  <div id="tasks">
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <TaskList v-if="initialTasks" :tasks="initialTasks"/>
    </div>
</template>