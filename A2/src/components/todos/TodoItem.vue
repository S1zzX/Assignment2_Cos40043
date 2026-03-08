<template>
  <div
    class="list-group-item d-flex justify-content-between align-items-center py-3"
  >
    <div class="d-flex align-items-center flex-grow-1">
      <i
        :class="[
          'bi',
          'me-3',
          'fs-5',
          task.priority === 'high'
            ? 'bi-exclamation-circle-fill text-danger'
            : task.priority === 'low'
              ? 'bi-arrow-down-circle-fill text-success'
              : 'bi-circle text-secondary',
        ]"
      ></i>
      <span
        :class="{
          'fw-bold text-danger': task.priority === 'high',
          'text-success fw-semibold': task.priority === 'low',
          'text-dark': !task.priority,
        }"
      >
        {{ task.text }}<template v-if="task.priority"> ({{ task.priority === 'high' ? 'High Priority' : 'Low Priority' }})</template>
      </span>
    </div>
    <div class="btn-group" role="group">
      <button :class="toggleButtonClass" @click="togglePriority" type="button">
        <i :class="toggleButtonIcon"></i>
        <span class="d-none d-md-inline ms-1">{{ toggleButtonLabel }}</span>
      </button>
      <button
        class="btn btn-outline-danger btn-sm"
        @click="deleteTask"
        type="button"
      >
        <i class="bi bi-trash"></i>
        <span class="d-none d-md-inline ms-1">Delete</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["toggle-priority", "delete-task"]);

const toggleButtonLabel = computed(() => {
  if (props.task.priority === "high") return "Mark as Low Priority";
  if (props.task.priority === "low") return "Mark as High Priority";
  return "Mark as High Priority";
});

const toggleButtonClass = computed(() => {
  if (props.task.priority === "high") return "btn btn-outline-warning btn-sm";
  if (props.task.priority === "low") return "btn btn-outline-success btn-sm";
  return "btn btn-outline-warning btn-sm";
});

const toggleButtonIcon = computed(() => {
  if (props.task.priority === "high") return "bi bi-arrow-down-circle";
  if (props.task.priority === "low") return "bi bi-arrow-up-circle";
  return "bi bi-arrow-up-circle";
});

function togglePriority() {
  emit("toggle-priority", props.task.id);
}

function deleteTask() {
  emit("delete-task", props.task.id);
}
</script>

<style scoped>
/* Bootstrap handles all styling */
.btn-group {
  flex-shrink: 0;
}
</style>
