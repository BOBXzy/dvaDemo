// 保函查询
import Page1 from '../routes/Page1';
import Page2 from '../routes/Page2';
import Page3 from '../routes/Page3';
// import QueryList from '../routers/Guarantee/Query/List';
// import Detail from '../routers/Guarantee/Query/Detail';

const productRoute = [
    {
        path: 'page1',
        name: '第一页',
        modal: ['products'],
        component: Page1
    },
    {
        path: 'page2',
        name: '第二页',
        component: Page2
    },
    {
        path: 'page3',
        name: '第三页',
        component: Page3
    }
];

export default productRoute;
