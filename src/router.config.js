import UserRouter from './routerConfig/user';

// import BasicLayout from './layout/BasicLayout';
// import UserLayout from './layout/UserLayout';
// import Product from './routes/Products';
// import Page1 from './routes/Page1';
// import Page2 from './routes/Page2';



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
    models: ['example'],
    children: [
        {  path: 'product',
           name: '产品管理',
           component: () => import('./routes/Products'),
           models: ['products'],
           children: [{
             path: 'productListOne',
             name: '产品管理一',
             models: ['example'],
             component: () => import('./routes/Products'),
           }, {
             path: 'productListTwo',
             name: '产品管理二',
             models: ['example'],
             component: () => import('./routes/Products'),
          }]
        },
        {  path: 'page1',
           name: '第一页',
           component: () => import('./routes/Page1'),
           models: ['products'],
        },
        {  path: 'page2',
           name: '第二页',
           component: () => import('./routes/Page2'),
           models: ['example'],
        }
    ]
  }
]
export default mineRouter;