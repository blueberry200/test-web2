import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {title: '藍莓實驗室:實驗室入口'}
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {title: '藍莓實驗室:關於藍莓'}
  },
  {
    path: '/Information',
    name: 'Information',
    component: () => import('../views/InformationView.vue'),
    meta: {title: '藍莓實驗室:藍莓特產'}
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {title: '藍莓實驗室:聯絡藍莓'}
  },
  {
    path: '/productList',
    name: 'productList',
    component: () => import('../views/ProductListView.vue'),
    meta: {title: '藍莓實驗室:產品元件組'}
  },
  {
    path: '/cascade',
    name: 'cascade',
    component: () => import('../views/CascadeView.vue'),
    meta: {title: '藍莓實驗室:瀑布流'}
  },
  {
    path: '/slide1',
    name: 'slide1',
    component: () => import('../views/Slide1View.vue'),
    meta: {title: '藍莓實驗室:立體幻燈片'}
  },
  {
    path: '/slide2',
    name: 'slide2',
    component: () => import('../views/Slide2View.vue'),
    meta: {title: '藍莓實驗室:多圖組幻燈片'}
  },
  {
    path: '/penetrate',
    name: 'penetrate',
    component: () => import('../views/PenetrateView.vue'),
    meta: {title: '藍莓實驗室:穿透遮罩特效'}
  },
  {
    path: '/rotatePic',
    name: 'rotatePic',
    component: () => import('../views/RotatePicView.vue'),
    meta: {title: '藍莓實驗室:翻轉圖片特效'}
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/ProductView.vue'),
    meta: {title: '藍莓實驗室:超讚產品'},
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Notfound',
    component: () => import('../views/404View.vue'),
    meta: {title: '藍莓實驗室:找不到果園'}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  window.document.title = to.meta.title
  next()
})

export default router
