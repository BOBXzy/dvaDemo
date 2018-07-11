// import { isUrl } from '../utils/utils';
import { formatter } from '../utils/utils';

const menuData = [{
    name: 'products',
    path: 'products',
    children: [{
        name: '产品页一',
        path: 'productsOne',
    }, {
        name: '产品页二',
        path: 'productsTwo',
    }]
}, {
    name: 'page1',
    path: 'page1',
}, {
    name: 'page2',
    path: 'page2',
}, {
    name: 'page3',
    path: 'page3',
}
];


// getMenuData 获取菜单栏
export const getMenuData = () => formatter(menuData);
