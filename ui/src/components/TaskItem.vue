<template>
  <div class="form-item flex w-full items-center">
    <StyledCheckbox
      :id="`checkbox-${task.id}`"
      :model-value="task.completed"
      :label="task.title"
      @update:model-value="(val) => handleChange({ ...task, completed: val })"
    />
    <EditableText
      :id="`task-title-${task.id}`"
      :model-value="task.title"
      @update:model-value="onTaskTitleUpdate"
    />
    <button
      class="text-gray-400 font-bold p-2 rounded-full ml-auto duration-300 px-3 hover:bg-gray-50 focus:bg-gray-50"
      @click="handleButtonClick(task)"
    >
      <font-awesome-icon icon="fa-solid fa-trash" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import type { Task } from '@/models/task';
import useTaskStore from '@/stores/tasks';
import EditableText from './EditableText.vue';
import StyledCheckbox from './StyledCheckbox.vue';

const props = defineProps<{ task: Task }>();

const { updateTask, deleteTask } = useTaskStore();

async function handleChange(task: Task) {
  task.completed = !task.completed;
  updateTask(task);
}

async function handleButtonClick(task: Task) {
  await deleteTask(task.id);
}

function onTaskTitleUpdate(newTitle: string) {
  if (newTitle === props.task.title) {
    return;
  }
  updateTask({ ...props.task, title: newTitle });
}
</script>
