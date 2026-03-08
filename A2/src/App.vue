<template>
  <div id="app">
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <router-link to="/" class="navbar-brand">
        <strong>Insight Hire</strong>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/job-explorer" class="nav-link"
              >Job Explorer</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/job-application" class="nav-link"
              >Job Application</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/todo-list" class="nav-link"
              >To-Do List</router-link
            >
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
// No imports needed - router-view handles everything
</script>

<style>
/* Global styles using Bootstrap utilities */
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
  background-color: #f8f9fa;
  width: 100%;
  margin: 0;
  padding: 0;
}

.navbar {
  width: 100%;
  margin: 0;
}

.main-content {
  padding: 0;
  margin: 0;
  width: 100%;
}

.navbar-brand {
  font-size: 1.5rem;
}

.nav-link {
  color: rgba(255, 255, 255, 0.7) !important;
  transition: color 0.2s;
}

.nav-link:hover {
  color: rgba(255, 255, 255, 1) !important;
}

.router-link-active {
  color: white !important;
  font-weight: 500;
}

/* Additional custom styles */
.gap-2 {
  gap: 0.5rem !important;
}

.gap-3 {
  gap: 1rem !important;
}
</style>
