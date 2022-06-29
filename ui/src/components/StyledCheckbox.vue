<template>
  <div class="px-2 py-4">
    <div class="styled-checkbox">
      <input type="checkbox" :checked="checked" @change="onChange" :id="id" />
      <label :for="id"></label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  modelValue: boolean;
  id: string;
  label: string;
}>();

const checked = ref(false);

watch(
  () => props.modelValue,
  (val) => {
    checked.value = val;
  },
  { immediate: true }
);

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void;
}>();

function onChange() {
  emit('update:modelValue', checked.value);
}
</script>

<style lang="css">
.styled-checkbox {
  display: inline-block;
  position: relative;
  width: 2rem;
  height: 2rem;
}

.styled-checkbox label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border: 2px solid #0d9488;
  border-radius: 0.25rem;
  line-height: 1;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
}

.styled-checkbox input {
  position: absolute;
  top: -9999px;
  left: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
}

.styled-checkbox input:checked + label {
  background-color: #0d9488;
}

.styled-checkbox input:checked + label::before {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}
</style>
