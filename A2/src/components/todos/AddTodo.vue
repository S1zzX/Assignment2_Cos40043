<template>
  <div class="card bg-light border-0 mb-3">
    <div class="card-body">
      <div class="input-group input-group-lg">
        <span class="input-group-text bg-white border-end-0">
          <i class="bi bi-plus-circle text-primary"></i>
        </span>
        <input
          type="text"
          class="form-control border-start-0 ps-0"
          placeholder="Enter a new task..."
          v-model="newTask"
          @keyup.enter="addTask"
        />
        <button class="btn btn-primary px-4" @click="addTask" type="button">
          <i class="bi bi-plus-lg me-1"></i>Add Task
        </button>
      </div>
      <small class="text-muted d-block mt-2">
        <i class="bi bi-info-circle me-1"></i>Press Enter or click "Add Task" to
        add a new task
      </small>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["add-task"]);
const newTask = ref("");

function addTask() {
  const trimmed = newTask.value.trim();
  if (!trimmed) return;
  emit("add-task", trimmed);
  newTask.value = "";
}
</script>

<style scoped>
/* Bootstrap handles all styling */
.input-group-text {
  border-right: none;
}
.form-control:focus {
  border-color: #ced4da;
  box-shadow: none;
}
</style>
