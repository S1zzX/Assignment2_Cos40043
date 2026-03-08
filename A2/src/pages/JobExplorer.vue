<template>
  <div class="job-explorer-page">
    <div class="container-centered">
      <h2 class="mb-4 pt-4">Job Explorer</h2>
      <div class="row align-items-stretch">
        <div class="col-md-3 pe-0 d-flex flex-column">
          <JobList class="flex-grow-1" />
        </div>
        <div class="col-md-9 ps-3 d-flex flex-column">
          <router-view class="flex-grow-1"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import JobList from "../components/jobs/JobList.vue";
</script>

<style scoped>
.job-explorer-page {
  width: 100%;
  display: flex;
  justify-content: center;
}

.container-centered {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

h2 {
  font-weight: 600;
  text-align: center;
}

.row {
  margin: 0;
}
</style>
