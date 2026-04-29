import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
    meta: { title: '登入' }
  },
  {
    path: '/',
    name: 'home',
    redirect: '/login'
  },
  {
    path: '/clinic',
    name: 'myClinic',
    component: () => import('@/views/MyClinicView.vue'),
    meta: { title: '我的診間' }
  },
  {
    path: '/waiting',
    name: 'waitingPool',
    component: () => import('@/views/WaitingPoolView.vue'),
    meta: { title: '待認領池' }
  },
  {
    path: '/records',
    name: 'completedRecords',
    component: () => import('@/views/CompletedRecordsView.vue'),
    meta: { title: '完診紀錄' }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 })
});

// 全域守衛：更新頁面標題
router.beforeEach((to, _from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} | 榮總急診系統`;
  }
  next();
});

export default router;
