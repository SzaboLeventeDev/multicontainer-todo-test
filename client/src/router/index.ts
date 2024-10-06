import HomeView from '../views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/tasks',
      name: 'MyTaskList',
      component: () => import('@/views/MyListView.vue'),
    },
    {
      path: '/new-task',
      name: 'NewTask',
      component: () => import('@/views/AddTodoView.vue'),
    },
  ],
});

export default router
