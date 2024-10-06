<script setup lang="ts">
import { ToDoState, type Task } from '@/types';
import { computed } from 'vue';
import TrashIcon from 'vue-material-design-icons/TrashCan.vue';
import ProgressClockIcon from 'vue-material-design-icons/ProgressClock.vue';
import CheckIcon from 'vue-material-design-icons/Check.vue';
import NoteAlertIcon from 'vue-material-design-icons/NoteAlert.vue'

const props = defineProps<{task: Task}>();
const cardStyle='py-4 px-4 flex justify-between bg-blue-300 w-[80%] m-auto rounded-lg'

const taskStateIcon = computed(() => {
  switch(props.task.state) {
    case ToDoState.ToDo:
      return NoteAlertIcon;
    case ToDoState.InProgress:
      return  ProgressClockIcon;
    case ToDoState.Done:
      return CheckIcon;
    case ToDoState.Deleted:
      return TrashIcon;
    default:
      return null;
  }
});

const cardColorByState = computed(() => {
  switch (props.task.state) {
    case ToDoState.ToDo:
      return 'bg-orange-300';
    case ToDoState.InProgress:
      return 'bg-blue-300'; 
    case ToDoState.Done:
      return 'bg-green-300';
    case ToDoState.Deleted:
      return 'bg-red-300';
    default:
      return 'bg-gray-300';
  }
});
</script>
<template>
  <div :class="[cardStyle, cardColorByState]">
    <h2 class="text-base">{{ props.task.name }}</h2>
    <component :is="taskStateIcon" />
  </div>

</template>
