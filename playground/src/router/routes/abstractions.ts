export const abstractionsRoutes = [
  {
    path: '/abstractions/levioso',
    name: 'Levioso',
    component: () => import('../../pages/abstractions/LeviosoDemo.vue'),
  },
  {
    path: '/abstractions/text-3d',
    name: 'Text3D',
    component: () => import('../../pages/abstractions/Text3DDemo.vue'),
  },
  {
    path: '/abstractions/mouse-parallax',
    name: 'MouseParallax',
    component: () => import('../../pages/abstractions/MouseParallaxDemo.vue'),
  },
  {
    path: '/abstractions/lensflare',
    name: 'Lensflare',
    component: () => import('../../pages/abstractions/LensflareDemo.vue'),
  },
  {
    path: '/abstractions/reflector-mesh',
    name: 'ReflectorMeshDemo',
    component: () => import('../../pages/abstractions/ReflectorMeshDemo.vue'),
  },
]