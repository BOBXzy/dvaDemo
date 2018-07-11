const WareRouter = [
    {
        path: 'query',
        name: '仓单查询',
        component: () => import('../routes/warehouse/query'),
        models: ['warehouse'],
        children: [{
            path: 'list',
            name: '仓单列表',
            component: () => import('../routes/warehouse/query/List'),
            models: ['warehouse'],
        }, {
            path: 'search',
            name: '仓单查询',
            component: () => import('../routes/warehouse/query/Search'),
            models: ['warehouse'],
        }]
    },
    {
        path: 'page2',
        name: 'bill-page2',
        component: () => import('../routes/bill/BillPage2'),
        models: ['user'],
    }
]

export default WareRouter;