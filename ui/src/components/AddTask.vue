<template>
	<div class="flex gap-2 pb-8 border-b border-gray-300">
		<div class="grow">
			<label class="sr-only" for="add-task">Add a task</label>
			<input
				id="add-task"
				v-model="value"
				type="text"
				class="border border-gray-200 rounded px-4 py-2 w-full"
				@keyup.enter="onSubmit"
			/>
		</div>
		<button
			class="bg-teal-600 px-4 py-2 rounded shadow text-white"
			@click="onSubmit"
		>
			Add Task
		</button>
	</div>
</template>

<script setup lang="ts">
import useTaskStore from '@/stores/tasks';
import { ref } from 'vue';

const store = useTaskStore();

const value = ref('');

async function onSubmit(): Promise<void> {
	await store.createTask(value.value);
	value.value = '';
}
</script>
