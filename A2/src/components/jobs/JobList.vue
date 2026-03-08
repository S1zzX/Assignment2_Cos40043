<template>
  <div class="list-group h-100">
    <router-link
      to="/job-explorer"
      class="list-group-item list-group-item-action"
    >
      Overview
    </router-link>
    <router-link
      v-for="job in jobs"
      :key="job.job_id"
      :to="'/job-explorer/job/' + job.job_id"
      class="list-group-item list-group-item-action"
    >
      {{ job.job_id }}
    </router-link>
  </div>
</template>

<script setup>
import { jobs } from "../../data/Jobs.js";
</script>

<style scoped>
.list-group {
  border-radius: 0.375rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.list-group-item {
  border-left: none;
  border-right: none;
  border-radius: 0 !important;
  padding: 0.6rem 1rem;
  color: #212529;
  transition: background-color 0.15s ease, color 0.15s ease;
}

.list-group-item:first-child {
  border-top: none;
}

.list-group-item:last-child {
  border-bottom: none;
}

/* Hover — white text on a blue background */
.list-group-item:hover {
  background-color: #0b5ed7;
  color: #ffffff !important;
  text-decoration: none;
}

/* Active / currently selected route */
.router-link-active,
.router-link-exact-active {
  background-color: #0d6efd !important;
  color: #ffffff !important;
  font-weight: 500;
  border-color: #0d6efd !important;
}
</style>

