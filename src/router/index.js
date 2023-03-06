import { createRouter, createWebHistory } from "vue-router";
import TopMovies from "@/components/TopMovies";

const routes = [
  { path: "/", name: "Top Movies", component: TopMovies },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
