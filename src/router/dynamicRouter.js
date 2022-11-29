import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import RoleList from '../views/role/RoleList.vue'
import Index from '../views/role/Index.vue'

const routes = [
  //   {
  //     path: '/',
  //     name: 'home',
  //     redirect: '/home'
  //   },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: '/welcome'
      },
      {
        path: '/welcome',
        name: 'welcome',
        component: Welcome
      },
      {
        path: '/permission',
        name: 'permission',
        component: Index,
        // component: () => import('../views/role/Index.vue'),
        meta: {
          name: '权限管理'
          // icon: 'el-icon-user'
        },
        children: [
          {
            path: '/list',
            name: 'home/permission/list',
            component: RoleList,
            meta: {
              name: '角色列表'
              // icon: 'el-icon-unlock'
            }
          },
          {
            path: '/role-detail',
            name: 'role-detail',
            component: () => import('../views/role/RoleDetail.vue'),
            meta: {
              name: '添加新角色',
              icon: 'el-icon-folder-add'
            }
          },
          {
            path: '/account-management',
            name: 'account-management',
            component: () => import('../views/role/AccountManagement.vue'),
            meta: {
              name: '账户管理',
              icon: ''
            }
          }
        ]
      }
    ]
  }
]

export default routes
