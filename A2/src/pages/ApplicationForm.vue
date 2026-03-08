<template>
  <div class="application-page py-4">
    <div class="container-centered">
      <h2 class="mb-4 text-center">Job Application Form</h2>
      <form
        method="post"
        action="http://mercury.swin.edu.au/104950199/formtest.php"
        @submit="handleSubmit"
        novalidate
      >
        <!-- Personal Information -->
        <fieldset class="border rounded p-4 mb-4 bg-light">
          <legend class="float-none w-auto px-3 fw-bold text-primary">
            <i class="bi bi-person-fill me-2"></i>Personal Information
          </legend>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="firstName" class="form-label fw-semibold">
                <i class="bi bi-person me-1"></i>First Name *
              </label>
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.firstName }"
                id="firstName"
                name="firstName"
                v-model="formData.firstName"
                @blur="validateField('firstName')"
              />
              <div class="invalid-feedback">{{ errors.firstName }}</div>
            </div>

            <div class="col-md-6 mb-3">
              <label for="lastName" class="form-label fw-semibold">
                <i class="bi bi-person me-1"></i>Last Name *
              </label>
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.lastName }"
                id="lastName"
                name="lastName"
                v-model="formData.lastName"
                @blur="validateField('lastName')"
              />
              <div class="invalid-feedback">{{ errors.lastName }}</div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="username" class="form-label fw-semibold">
                <i class="bi bi-at me-1"></i>Username *
              </label>
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.username }"
                id="username"
                name="username"
                v-model="formData.username"
                @blur="validateField('username')"
              />
              <div class="invalid-feedback">{{ errors.username }}</div>
            </div>

            <div class="col-md-6 mb-3">
              <label for="email" class="form-label fw-semibold">
                <i class="bi bi-envelope me-1"></i>Email *
              </label>
              <input
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors.email }"
                id="email"
                name="email"
                v-model="formData.email"
                @blur="validateField('email')"
              />
              <div class="invalid-feedback">{{ errors.email }}</div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="password" class="form-label fw-semibold">
                <i class="bi bi-lock me-1"></i>Password *
              </label>
              <input
                type="password"
                class="form-control"
                :class="{ 'is-invalid': errors.password }"
                id="password"
                name="password"
                v-model="formData.password"
                @blur="validateField('password')"
              />
              <div class="invalid-feedback">{{ errors.password }}</div>
              <small class="form-text text-muted"
                >Minimum 8 characters, must include at least one special
                character ($, %, ^, &, *)</small
              >
            </div>

            <div class="col-md-6 mb-3">
              <label for="confirmPassword" class="form-label fw-semibold">
                <i class="bi bi-lock-fill me-1"></i>Confirm Password *
              </label>
              <input
                type="password"
                class="form-control"
                :class="{ 'is-invalid': errors.confirmPassword }"
                id="confirmPassword"
                name="confirmPassword"
                v-model="formData.confirmPassword"
                @blur="validateField('confirmPassword')"
              />
              <div class="invalid-feedback">{{ errors.confirmPassword }}</div>
            </div>
          </div>

          <div class="mb-3">
            <label for="dob" class="form-label fw-semibold">
              <i class="bi bi-calendar me-1"></i>Date of Birth *
            </label>
            <input
              type="date"
              class="form-control"
              :class="{ 'is-invalid': errors.dob }"
              id="dob"
              name="dob"
              v-model="formData.dob"
              @blur="validateField('dob')"
            />
            <div class="invalid-feedback">{{ errors.dob }}</div>
            <small class="form-text text-muted"
              >You must be at least 16 years old</small
            >
          </div>

          <div class="mb-3">
            <label for="mobile" class="form-label fw-semibold">
              <i class="bi bi-phone me-1"></i>Mobile Number *
            </label>
            <input
              type="tel"
              class="form-control"
              :class="{ 'is-invalid': errors.mobile }"
              id="mobile"
              name="mobile"
              v-model="formData.mobile"
              @blur="validateField('mobile')"
              placeholder="04XXXXXXXX"
            />
            <div class="invalid-feedback">{{ errors.mobile }}</div>
            <small class="form-text text-muted"
              >10 digits starting with 04</small
            >
          </div>
        </fieldset>

        <!-- Address Information -->
        <fieldset class="border rounded p-4 mb-4 bg-light">
          <legend class="float-none w-auto px-3 fw-bold text-primary">
            <i class="bi bi-geo-alt-fill me-2"></i>Address Information
          </legend>

          <div class="mb-3">
            <label for="streetAddress" class="form-label fw-semibold">
              <i class="bi bi-house me-1"></i>Street Address
            </label>
            <input
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors.streetAddress }"
              id="streetAddress"
              name="streetAddress"
              v-model="formData.streetAddress"
              @blur="validateField('streetAddress')"
              maxlength="40"
            />
            <div class="invalid-feedback">{{ errors.streetAddress }}</div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="suburb" class="form-label fw-semibold">
                <i class="bi bi-building me-1"></i>Suburb
              </label>
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.suburb }"
                id="suburb"
                name="suburb"
                v-model="formData.suburb"
                @blur="validateField('suburb')"
                maxlength="20"
              />
              <div class="invalid-feedback">{{ errors.suburb }}</div>
            </div>

            <div class="col-md-6 mb-3">
              <label for="postcode" class="form-label fw-semibold">
                <i class="bi bi-mailbox me-1"></i>Postcode *
              </label>
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.postcode }"
                id="postcode"
                name="postcode"
                v-model="formData.postcode"
                @blur="validateField('postcode')"
                maxlength="4"
              />
              <div class="invalid-feedback">{{ errors.postcode }}</div>
              <small class="form-text text-muted">Exactly 4 digits</small>
            </div>
          </div>
        </fieldset>

        <!-- Job Preferences -->
        <fieldset class="border rounded p-4 mb-4 bg-light">
          <legend class="float-none w-auto px-3 fw-bold text-primary">
            <i class="bi bi-briefcase-fill me-2"></i>Job Preferences
          </legend>

          <div class="mb-3">
            <label for="jobCategory" class="form-label fw-semibold">
              <i class="bi bi-tag me-1"></i>Preferred Job Category *
            </label>
            <select
              class="form-select"
              :class="{ 'is-invalid': errors.jobCategory }"
              id="jobCategory"
              name="jobCategory"
              v-model="formData.jobCategory"
              @blur="validateField('jobCategory')"
            >
              <option value="">Select a category</option>
              <option value="AI">Artificial Intelligence</option>
              <option value="Data Science">Data Science</option>
              <option value="Web Development">Web Development</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Software Development">Software Development</option>
            </select>
            <div class="invalid-feedback">{{ errors.jobCategory }}</div>
          </div>
        </fieldset>

        <!-- Terms and Conditions -->
        <div class="mb-4">
          <button
            type="button"
            class="btn btn-outline-info w-100"
            @click="showTerms = !showTerms"
          >
            <i
              :class="showTerms ? 'bi bi-eye-slash' : 'bi bi-eye'"
              class="me-2"
            ></i>
            {{ showTerms ? "Hide" : "Show" }} Terms and Conditions
          </button>
        </div>

        <div v-if="showTerms" class="card border-info mb-4">
          <div class="card-header bg-info text-white">
            <h5 class="mb-0">
              <i class="bi bi-file-text me-2"></i>Terms and Conditions
            </h5>
          </div>
          <div class="card-body">
            <p class="card-text">
              By submitting this application, you agree to the following terms
              and conditions:
            </p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <i class="bi bi-check-circle text-success me-2"></i>
                All information provided is accurate and truthful
              </li>
              <li class="list-group-item">
                <i class="bi bi-check-circle text-success me-2"></i>
                You authorize us to verify the information provided
              </li>
              <li class="list-group-item">
                <i class="bi bi-check-circle text-success me-2"></i>
                You understand that false information may result in
                disqualification
              </li>
              <li class="list-group-item">
                <i class="bi bi-check-circle text-success me-2"></i>
                You agree to our privacy policy and data handling procedures
              </li>
              <li class="list-group-item">
                <i class="bi bi-check-circle text-success me-2"></i>
                You consent to being contacted regarding your application
              </li>
            </ul>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="d-grid gap-2">
          <button type="submit" class="btn btn-primary btn-lg py-3">
            <i class="bi bi-send-fill me-2"></i>Submit Application
          </button>
        </div>

        <!-- Error Summary -->
        <div
          v-if="showErrorSummary"
          class="alert alert-danger mt-4"
          role="alert"
        >
          <h5 class="alert-heading">
            <i class="bi bi-exclamation-triangle-fill me-2"></i>Please correct
            the following errors:
          </h5>
          <hr />
          <ul class="mb-0">
            <li v-for="(error, field) in errors" :key="field" v-show="error">
              {{ error }}
            </li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const formData = reactive({
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  dob: "",
  mobile: "",
  streetAddress: "",
  suburb: "",
  postcode: "",
  jobCategory: "",
});

const errors = reactive({
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  dob: "",
  mobile: "",
  streetAddress: "",
  suburb: "",
  postcode: "",
  jobCategory: "",
});

const showTerms = ref(false);
const showErrorSummary = ref(false);

function validateField(fieldName) {
  errors[fieldName] = "";

  switch (fieldName) {
    case "firstName":
      if (!formData.firstName.trim()) {
        errors.firstName = "First name is required";
      } else if (!/^[A-Za-z]+$/.test(formData.firstName)) {
        errors.firstName = "First name must contain only letters";
      }
      break;

    case "lastName":
      if (!formData.lastName.trim()) {
        errors.lastName = "Last name is required";
      } else if (!/^[A-Za-z]+$/.test(formData.lastName)) {
        errors.lastName = "Last name must contain only letters";
      }
      break;

    case "username":
      if (!formData.username.trim()) {
        errors.username = "Username is required";
      } else if (formData.username.length < 3) {
        errors.username = "Username must be at least 3 characters";
      }
      break;

    case "email":
      if (!formData.email.trim()) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = "Please enter a valid email address";
      }
      break;

    case "password":
      if (!formData.password) {
        errors.password = "Password is required";
      } else if (formData.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
      } else if (!/[$%^&*]/.test(formData.password)) {
        errors.password =
          "Password must include at least one special character ($, %, ^, &, *)";
      }
      break;

    case "confirmPassword":
      if (!formData.confirmPassword) {
        errors.confirmPassword = "Please confirm your password";
      } else if (formData.confirmPassword !== formData.password) {
        errors.confirmPassword = "Passwords do not match";
      }
      break;

    case "dob":
      if (!formData.dob) {
        errors.dob = "Date of birth is required";
      } else {
        const birthDate = new Date(formData.dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (
          monthDiff < 0 ||
          (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
          age--;
        }
        if (age < 16) {
          errors.dob = "You must be at least 16 years old";
        }
      }
      break;

    case "mobile":
      if (!formData.mobile) {
        errors.mobile = "Mobile number is required";
      } else if (!/^04\d{8}$/.test(formData.mobile)) {
        errors.mobile = "Mobile number must be 10 digits starting with 04";
      }
      break;

    case "streetAddress":
      if (formData.streetAddress && formData.streetAddress.length > 40) {
        errors.streetAddress = "Street address must not exceed 40 characters";
      }
      break;

    case "suburb":
      if (formData.suburb && formData.suburb.length > 20) {
        errors.suburb = "Suburb must not exceed 20 characters";
      }
      break;

    case "postcode":
      if (!formData.postcode) {
        errors.postcode = "Postcode is required";
      } else if (!/^\d{4}$/.test(formData.postcode)) {
        errors.postcode = "Postcode must be exactly 4 digits";
      }
      break;

    case "jobCategory":
      if (!formData.jobCategory) {
        errors.jobCategory = "Please select a job category";
      }
      break;
  }
}

function validateAllFields() {
  const fields = [
    "firstName",
    "lastName",
    "username",
    "email",
    "password",
    "confirmPassword",
    "dob",
    "mobile",
    "streetAddress",
    "suburb",
    "postcode",
    "jobCategory",
  ];

  fields.forEach((field) => validateField(field));

  // Check if there are any errors
  return Object.values(errors).every((error) => error === "");
}

function handleSubmit(event) {
  showErrorSummary.value = false;

  if (!validateAllFields()) {
    event.preventDefault();
    showErrorSummary.value = true;
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  }

  // If validation passes, form will submit normally to the action URL
  return true;
}
</script>

<style scoped>
.application-page {
  width: 100%;
  display: flex;
  justify-content: center;
}

.container-centered {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Bootstrap handles most styling */
fieldset {
  border-color: #dee2e6 !important;
}
legend {
  font-size: 1rem;
}
</style>
