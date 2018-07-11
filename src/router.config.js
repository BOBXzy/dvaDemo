import UserRouter from './routerConfig/user';
import BillRouter from './routerConfig/bill';
import WareRouter from './routerConfig/warehouse';

/**
 * 主路由入口
 * 该文件用户生成项目的所有路由组件（Route）
 * route中 对象的属性
 * path: 路由路径
 * name: 路径对应的面包屑地址
 * component: 路由跳转的组件
 * children: 子路由的信息
 */

const mineRouter = [
  { path: 'user',
    name: '账户界面',
    component: () => import('./layout/UserLayout'),
    children: UserRouter,
    models: ['example']
  },
  { path: '',
    name: '主页',
    component: () => import('./layout/BasicLayout'),
    // component: BasicLayout,
    models: ['products'],
    children: [
        {  path: 'bill',
           name: '银单管理',
           component: () => import('./routes/bill'),
           models: ['products'],
           children: BillRouter
        },
        {  path: 'page1',
           name: '第一页',
           component: () => import('./routes/Page1'),
           models: ['example'],
        },
        {  path: 'page2',
           name: '第二页',
           component: () => import('./routes/Page2'),
           models: ['products'],
        },
        {  path: 'page3',
           name: '第三页',
           component: () => import('./routes/Page3'),
           models: ['example'],
        },
        {
          path: 'page4',
          name: '第四页',
          component: () => import('./routes/Page4'),
          models: ['example'],
        },
        {
          path: 'warehouse',
          name: '仓单管理',
          // component: () => import('./routes/warehouse/query'),
          models: ['example'],
          children: WareRouter,
        }
    ]
  }
]
export default mineRouter;