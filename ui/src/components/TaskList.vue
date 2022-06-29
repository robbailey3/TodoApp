<template>
  <div class="container mx-auto max-w-screen-md bg-white p-4 rounded shadow">
    <AddTask />
    <div class="pt-4">
      <template v-for="task of store.tasks" :key="task.id">
        <TaskItem :task="task" />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TaskItem from './TaskItem.vue';
import useTaskStore from '@/stores/tasks';
import { onMounted } from 'vue';
import AddTask from './AddTask.vue';

const store = useTaskStore();

onMounted(async () => {
  await store.loadTasks();
});
</script>
