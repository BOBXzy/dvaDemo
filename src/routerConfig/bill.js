const BillRouter = [
    {
        path: 'page1',
        name: 'bill-page1',
        component: () => import('../routes/bill/BillPage1'),
        // component: BasicLayout,
        models: ['user'],
    },
    {
        path: 'page2',
        name: 'bill-page2',
        component: () => import('../routes/bill/BillPage2'),
        models: ['user'],
    }
]

export default BillRouter;