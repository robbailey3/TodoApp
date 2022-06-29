<template>
  <div class="flex gap-2 pb-8 border-b border-gray-300">
    <div class="grow">
      <label class="sr-only" for="add-task">Add a task</label>
      <input
        type="text"
        id="add-task"
        @keyup.enter="onEnter"
        class="border border-gray-200 rounded px-4 py-2 w-full"
        v-model="value"
      />
    </div>
    <button class="bg-teal-600 px-4 py-2 rounded shadow text-white">
      Add Task
    </button>
  </div>
</template>

<script setup lang="ts">
import useTaskStore from '@/stores/tasks';
import { ref } from 'vue';

const store = useTaskStore();

const value = ref('');

async function onEnter($event: KeyboardEvent): Promise<void> {
  await store.createTask(value.value);
  value.value = '';
}
</script>
