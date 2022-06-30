<template>
  <template v-if="!isEdit">
    <div
      role="button"
      class="inline-block px-4 py-2 grow"
      @dblclick="onDoubleClick"
    >
      {{ modelValue }}
    </div>
  </template>
  <template v-else>
    <label :for="id" class="sr-only">Edit task title</label>
    <input
      :id="id"
      type="text"
      :value="value"
      class="inline-block border border-gray-200 rounded px-4 py-2 grow"
      @change="onValueChange"
      @keyup.enter="onEnter"
      @keyup.escape="onEscape"
    />
  </template>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{ modelValue: string; id: string }>();

const isEdit = ref(false);

const value = ref('');

watch(
  () => props.modelValue,
  (val) => {
    value.value = val;
  },
  { immediate: true }
);

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

function onDoubleClick() {
  isEdit.value = true;
}

function onEnter($event: KeyboardEvent): void {
  isEdit.value = false;
  emit('update:modelValue', ($event.target as HTMLInputElement).value);
}

function onEscape(): void {
  isEdit.value = false;
  emit('update:modelValue', props.modelValue);
}

function onValueChange($event: Event): void {
  emit('update:modelValue', ($event.target as HTMLInputElement).value);
}
</script>
