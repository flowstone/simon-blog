import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '仪表盘', icon: 'dashboard' }
    }]
  },
  {
    path: '/article',
    component: Layout,
    redirect: '/article/list',
    name: 'article',
    meta: { title: '文章管理', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/article/list/index'),
        meta: { title: '文章列表', icon: 'table' }
      },
      {
        path: 'add',
        name: 'add',
        component: () => import('@/views/article/add/index'),
        meta: { title: '添加文章', icon: 'tree' }
      }
    ]
  },
  {
    path: '/category',
    component: Layout,
    redirect: '/category/list',
    name: 'category',
    meta: { title: '分类管理', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/category/list/index'),
        meta: { title: '分类列表', icon: 'table' }
      },
      {
        path: 'add',
        name: 'add',
        component: () => import('@/views/category/add/index'),
        meta: { title: '添加分类', icon: 'tree' }
      }
    ]
  },
  {
    path: '/tag',
    component: Layout,
    redirect: '/tag/list',
    name: 'tag',
    meta: { title: '标签管理', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/tag/list/index'),
        meta: { title: '标签列表', icon: 'table' }
      },
      {
        path: 'add',
        name: 'add',
        component: () => import('@/views/tag/add/index'),
        meta: { title: '添加标签', icon: 'tree' }
      }
    ]
  },
  {
    path: '/comment',
    component: Layout,
    redirect: '/comment/list',
    name: 'comment',
    meta: { title: '评论管理', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/comment/list/index'),
        meta: { title: '评论列表', icon: 'table' }
      },
      {
        path: 'add',
        name: 'add',
        component: () => import('@/views/comment/add/index'),
        meta: { title: '添加评论', icon: 'tree' }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    redirect: '/user/detail',
    name: 'comment',
    meta: { title: '系统设置', icon: 'example' },
    children: [
      {
        path: '/user/detail',
        name: 'userDetail',
        component: () => import('@/views/setting/user/detail/index'),
        meta: { title: '用户详情', icon: 'user' }
      },
      {
        path: '/system/detail',
        name: 'systemDetail',
        component: () => import('@/views/setting/system/detail/index'),
        meta: { title: '系统详情', icon: 'tree' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
