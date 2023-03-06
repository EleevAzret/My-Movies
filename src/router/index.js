import { createRouter, createWebHistory } from "vue-router";
import TopMovies from "@/components/TopMovies";
import SearchingMovies from "@/components/SearchingMovies";

const routes = [
  { path: "/topMovies", name: "Top Movies", component: TopMovies, alias: "/" },
  { path: "/search", name: "Searching Movies", component: SearchingMovies },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
