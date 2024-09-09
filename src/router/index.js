import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path:'/',
        component:()=>import('@/components/Web/TrangChu.vue')
      },
      {
        path:'/dangnhap',
        component:()=>import('@/components/Web/DangNhap.vue')
      },
      {
        path:'/dangky',
        component:()=>import('@/components/Web/DangKy.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/admin',
    component:()=>import('@/views/Admin.vue'),
    children:[
      {
        path:'hang',
        component:()=>import('@/views/Admin/Hang/Hang.vue')
      },
      {
        path:'latop',
        component:()=>import('@/views/Admin/LapTop/Laptop.vue')
      },
      {
        path: 'donhang',
        component: () => import('@/views/Admin/HoaDon.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
