<template>
  <div class="form-item flex gap-4 w-full items-center">
    <label :for="task.id.toString()">
      <input
        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        type="checkbox"
        @change="handleChange(task)"
        :checked="task.completed"
        :id="task.id.toString()"
      />{{ task.title }}
    </label>
    <button
      @click="handleButtonClick(task)"
      class="bg-red-800 text-white font-bold p-4 rounded-xl shadow ml-auto"
    >
      DELETE
    </button>
  </div>
  <pre>
    {{ task }}
  </pre>
</template>

<script lang="ts" setup>
import type { Task } from '@/models/task';
import useTaskStore from '@/stores/tasks';

const props = defineProps<{ task: Task }>();

const { updateTask, deleteTask } = useTaskStore();

async function handleChange(task: Task) {
  task.completed = !task.completed;
  updateTask(task);
}

async function handleButtonClick(task: Task) {
  await deleteTask(task.id);
}
</script>
