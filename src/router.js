import MyTask from "./components/MyTask.vue";
import AddTask from "./components/AddTask.vue";
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: MyTask },
  { path: "/AddTask", component: AddTask },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
