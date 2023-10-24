import type { RouteModule, RouteType, RoutesType } from '~/types/router'

export const basicRoutes: RoutesType = [
  {
    name: '',
    path: '/',
    redirect: '/step2',
    children: [
      {
        name: 'step2',
        path: 'step2',
        component: () => import('@/views/step2/index.vue'),
        meta: {
          title: '步骤二',
          icon: 'mdi:home',
        },
      },
    ],
  },
]

export const NOT_FOUND_ROUTE: RouteType = {
  name: 'NotFound',
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  isHidden: true,
}

export const EMPTY_ROUTE: RouteType = {
  name: 'Empty',
  path: '/:pathMatch(.*)*',
  component: () => {},
}

const modules = import.meta.glob('../modules/**/*.ts', { eager: true }) as RouteModule
const asyncRoutes: RoutesType = []
Object.keys(modules).forEach((key) => {
  asyncRoutes.push(modules[key].default)
})

export { asyncRoutes }
