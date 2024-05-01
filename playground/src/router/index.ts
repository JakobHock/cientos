import { createRouter, createWebHistory } from 'vue-router'
import {
  abstractionsRoutes,
  controlsRoutes,
  directivesRoutes,
  loadersRoutes,
  materialsRoutes,
  miscRoutes,
  shapesRoutes,
  stagingRoutes,
} from './routes'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/index.vue'),
  },
  ...abstractionsRoutes,
  ...controlsRoutes,
  ...stagingRoutes,
  ...loadersRoutes,
  ...materialsRoutes,
  ...miscRoutes,
  ...directivesRoutes,
  ...shapesRoutes,
  ...miscRoutes,
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
