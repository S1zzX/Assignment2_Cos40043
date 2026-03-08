<template>
  <div class="todo-page py-4">
    <div class="container-centered">
      <h2 class="mb-4 text-center">To-Do List</h2>
      <AddTodo @add-task="handleAddTask" />
      <div class="list-group mt-3">
        <TodoItem
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @toggle-priority="handleTogglePriority"
          @delete-task="handleDeleteTask"
        />
        <div v-if="tasks.length === 0" class="list-group-item text-center py-5">
          <p class="text-muted mt-3 mb-0">
            No tasks yet. Add one above to get started!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AddTodo from "../components/todos/AddTodo.vue";
import TodoItem from "../components/todos/TodoItem.vue";

const tasks = ref([
  { id: 1, text: "Prepare for the interview", priority: null },
  { id: 2, text: "Submit job application form", priority: null },
]);
let nextId = 3;

function handleAddTask(taskText) {
  tasks.value.unshift({ id: nextId++, text: taskText, priority: null });
}

function handleDeleteTask(id) {
  tasks.value = tasks.value.filter((t) => t.id !== id);
}

function handleTogglePriority(id) {
  const task = tasks.value.find((t) => t.id === id);
  if (!task) return;

  if (task.priority === "high") {
    task.priority = "low";
  } else if (task.priority === "low") {
    task.priority = "high";
  } else {
    task.priority = "high";
  }
}
</script>

<style scoped>
.todo-page {
  width: 100%;
  display: flex;
  justify-content: center;
}

.container-centered {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
}

h2 {
  font-weight: 600;
}
</style>
