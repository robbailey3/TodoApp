<script setup lang="ts">
import { onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import type { Task } from "./models/task";

import useTaskStore from "./stores/tasks";

const store = useTaskStore();

onMounted(async () => {
  console.log("mounted");
  await store.loadTasks();
});

const toggleTaskStatus = async (task: Task) => {
  task.completed = !task.completed;
  await store.updateTask(task);
};
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <div v-for="task of store.tasks" :key="task.id">
    <pre>{{ task }}</pre>
    <button @click="() => toggleTaskStatus(task)">Toggle Status</button>
  </div>

  <RouterView />
</template>

<style></style>
