import { createRouter, createWebHistory } from 'vue-router';

import MainPicture from "../components/MainPicture/MainPicture.vue"
import PicturesHistory from "../components/History/PicturesHistory.vue"

const routes = [
  {
    path: "",
    component: MainPicture
  },
  {
    path: "/history",
    component: PicturesHistory
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
