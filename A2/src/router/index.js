import { createRouter, createWebHashHistory } from "vue-router";
import JobExplorer from "../pages/JobExplorer.vue";
import JobOverview from "../components/jobs/JobOverview.vue";
import JobDetail from "../components/jobs/JobDetail.vue";
import ApplicationForm from "../pages/ApplicationForm.vue";
import ToDoList from "../pages/ToDoList.vue";

const routes = [
  {
    path: "/",
    redirect: "/job-explorer",
  },
  {
    path: "/job-explorer",
    component: JobExplorer,
    children: [
      {
        path: "",
        name: "JobOverview",
        component: JobOverview,
      },
      {
        path: "job/:id",
        name: "JobDetail",
        component: JobDetail,
      },
    ],
  },
  {
    path: "/job-application",
    name: "ApplicationForm",
    component: ApplicationForm,
  },
  {
    path: "/todo-list",
    name: "ToDoList",
    component: ToDoList,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
