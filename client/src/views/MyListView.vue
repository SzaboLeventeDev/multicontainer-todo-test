<script setup lang="ts">
import TaskList from '@/components/ui/TaskList.vue';
import { useApi } from '@/composables/useApi';
import { onMounted } from 'vue';

const { getData, data, loading, error } = useApi();

onMounted(async () => {
  await getData('/tasks')
})
</script>
<template>
  <div id="tasks">
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <TaskList v-if='data' :tasks="data"/>
    </div>
</template>
<style scoped></style>