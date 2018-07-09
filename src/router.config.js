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
          //  component: () => import('./routes/Products'),
           models: ['products'],
           children: [{
             path: 'ListOne',
             name: '产品管理一',
             models: ['example'],
             component: () => import('./routes/Page3'),
           }, {
             path: 'ListTwo',
             name: '产品管理二',
             models: ['example'],
             component: () => import('./routes/Page3'),
          }]
        },
        {  path: 'bill',
           name: '银单管理',
          //  component: () => import('./routes/Page1'),
          //  models: ['products'],
           children: [{
             path: 'page1',
             name: '银单第一页',
             models: ['products'],
             component: () => import('./routes/Page1'),
           }, {
               path: 'page2',
               name: '银单第二页',
               models: ['example'],
               component: () => import('./routes/Page2'),
          }]
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