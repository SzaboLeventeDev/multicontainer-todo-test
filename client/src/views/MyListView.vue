<script setup lang="ts">
import type { Task } from '../types';

import TaskList from '@/components/ui/TaskList.vue';
import { DUMMY_TASKS } from '@/DUMMY_TASKS';

const tasks: Task[] = []
</script>
<template>
  <div id="tasks">
    <TaskList :tasks="DUMMY_TASKS"/>
    </div>
</template>
<style scoped></style>