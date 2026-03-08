<template>
  <div class="job-detail h-100" v-if="job">
    <h3 class="text-primary mb-3">{{ job.job_title }} ({{ job.job_id }})</h3>

    <div class="row">
      <div class="col-md-6">
        <p><strong>Company:</strong> {{ job.company }}</p>
        <p><strong>Category:</strong> {{ job.category }}</p>
        <p><strong>Salary Range:</strong> {{ job.salary_range }}</p>
        <p><strong>Supervisor:</strong> {{ job.supervisor }}</p>
        <p>
          <strong>Application Deadline:</strong> {{ job.application_deadline }}
        </p>
      </div>
      <div class="col-md-6">
        <p><strong>Location:</strong> {{ job.location }}</p>
        <p><strong>Employment Type:</strong> {{ job.employment_type }}</p>
        <p><strong>Job Level:</strong> {{ job.job_level }}</p>
        <p>
          <strong>Positions Available:</strong> {{ job.positions_available }}
        </p>
        <p><strong>Posted Date:</strong> {{ job.posted_date }}</p>
        <p><strong>Start Date:</strong> {{ job.start_date }}</p>
      </div>
    </div>

    <div class="mt-3">
      <strong>Required Skills:</strong>
      <div class="d-inline ms-2">
        <span
          v-for="skill in job.required_skills"
          :key="skill"
          class="badge bg-primary me-1"
        >
          {{ skill }}
        </span>
      </div>
    </div>

    <div class="mt-3">
      <strong>Preferred Qualifications:</strong>
      <div class="d-inline ms-2">
        <span
          v-for="qual in job.preferred_qualifications"
          :key="qual"
          class="badge bg-secondary me-1"
        >
          {{ qual }}
        </span>
      </div>
    </div>

    <div class="mt-3">
      <strong>Description:</strong>
      <p class="mt-2">{{ job.job_description }}</p>
    </div>

    <div class="mt-3">
      <strong>Tags:</strong>
      <div class="d-inline ms-2">
        <span
          v-for="tag in job.tags"
          :key="tag"
          class="badge bg-info text-dark me-1"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
  <div v-else>
    <p class="text-muted">Job not found.</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { jobs } from "../../data/Jobs.js";

const route = useRoute();
const job = computed(() => {
  return jobs.find((j) => j.job_id === route.params.id) || null;
});
</script>

<style scoped>
.job-detail {
  background: white;
  padding: 2rem;
  border-radius: 0.25rem;
  border: 1px solid #dee2e6;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.job-detail p {
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

.job-detail .mt-3 {
  margin-top: 1.5rem !important;
}
</style>
