<template>
  <template v-for="task of store.tasks" :key="task.id">
    <TaskItem :task="task" />
  </template>
</template>

<script lang="ts" setup>
import TaskItem from './TaskItem.vue';
import useTaskStore from '@/stores/tasks';
import { onMounted } from 'vue';

const store = useTaskStore();

onMounted(async () => {
  await store.loadTasks();
});
</script>
