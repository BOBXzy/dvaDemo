import { createElement } from 'react';
import dynamic from 'dva/dynamic';
import pathToRegexp from 'path-to-regexp';
import { getMenuData } from './menu';
import mineRouter from '../router.config';
import { formatter } from '../utils/utils';


let routerDataCache;

const modelNotExisted = (app, model) => (
    // eslint-disable-next-line
    !app._models.some(({ namespace }) => {
        return namespace === model.substring(model.lastIndexOf('/') + 1);
    })
);


// wrapper of dynamic
const dynamicWrapper = (app, models, component) => {
    // () => require('module')
    // transformed by babel-plugin-dynamic-import-node-sync
    // console.log(component.toString());
    // console.log(component.toString().indexOf('.then(') < 0);
    if (component.toString().indexOf('.then(') < 0) {
        models.forEach((model) => {
            if (modelNotExisted(app, model)) {
                // eslint-disable-next-line
                app.model(require(`../models/${model}`).default);
            }
        });
        return (props) => {
            if (!routerDataCache) {
                routerDataCache = getRouterData(app);
            }
            return createElement(component().default, {
                ...props,
                routerData: routerDataCache,
            });
        };
    }
    // () => import('module')
    // console.log('this is dynamicWrapper()');
    return dynamic({
        app,
        models: () => models.filter(
            model => modelNotExisted(app, model)).map(m => import(`../models/${m}.js`)
            ),
        // add routerData prop
        component: () => {
            if (!routerDataCache) {
                routerDataCache = getRouterData(app);
            }
            return component().then((raw) => {
                const Component = raw.default || raw;
                return props => createElement(Component, {
                    ...props,
                    routerData: routerDataCache,
                });
            });
        },
    });
};

function getFlatMenuData(menus) {
    let keys = {};
    menus.forEach((item) => {
        if (item.children) {
            keys[item.path] = { ...item };
            keys = { ...keys, ...getFlatMenuData(item.children) };
        } else {
            keys[item.path] = { ...item };
        }
    });
    return keys;
}

export const getRouterData = (app) => {
    const routerConfig = {
        // '/': {
        //     component: dynamicWrapper(app, ['example'], () => import('../layout/BasicLayout')),
        //     name: '首页',
        // },
        // '/page1': {
        //     component: dynamicWrapper(app, ['products'], () => import('../routes/Page1')),
        //     name: '第一页',
        // },
        // '/page2': {
        //     component: dynamicWrapper(app, ['products'], () => import('../routes/Page2')),
        //     name: '第二页',
        // },
        // '/page3': {
        //     component: dynamicWrapper(app, ['products'], () => import('../routes/Page3')),
        //     name: '第三页',
        // },
        // '/products': {
        //     component: dynamicWrapper(app, ['products'], () => import('../routes/Products')),
        //     name: '产品页',
        // },
        // '/user': {
        //     component: dynamicWrapper(app, ['example'], () => import('../layout/UserLayout')),
        //     name:'用户界面'
        // }
    };

    console.log('进入getRouterData()');
    console.log(dynamicWrapper(app, ['example'], () => import('../layout/UserLayout')));
    
    const menuData = getFlatMenuData(getMenuData());

    // console.log(menuData);

    // console.log(mineRouter);

    const mineMenuData = getFlatMenuData(formatter(mineRouter));
    
    // console.log(mineMenuData);

    console.log(routerConfig);

    const routerData = {};

    Object.keys(mineMenuData).forEach((path) => {
        const tempPath = mineMenuData[path];
        console.log('目前是第xxxxxx次');
        const pathRegexp = pathToRegexp(path);
        const menuKey = Object.keys(menuData).find(key => pathRegexp.test(`${key}`));
        let menuItem = {};
        if (menuKey) {
            menuItem = menuData[menuKey];
        }
        // console.log(dynamicWrapper(app, tempPath.models, tempPath.component));
        // Object.assign(mineMenuData[path].component, dynamicWrapper(app, tempPath.models, tempPath.component);
        mineMenuData[path].component = dynamicWrapper(app, tempPath.models, tempPath.component);
        // console.log(mineMenuData[path].component);
        let router = tempPath;

        router = {
            ...router,
            name: router.name || menuItem.name,
            authority: router.authority || menuItem.authority,
            hideInBreadcrumb: router.hideInBreadcrumb || menuItem.hideInBreadcrumb,
        };

        routerData[path] = router;

    });
    console.log(mineMenuData);
    // mineMenuData.map((item) => {
    //     console.log(item);
    // })

    

    // Object.keys(routerConfig).forEach((path) => {
    //     // Regular match item name
    //     // eg.  router /user/:id === /user/chen
    //     const pathRegexp = pathToRegexp(path);
    //     const menuKey = Object.keys(menuData).find(key => pathRegexp.test(`${key}`));
    //     let menuItem = {};
    //     // If menuKey is not empty
    //     if (menuKey) {
    //         menuItem = menuData[menuKey];
    //     }
    //     let router = routerConfig[path];
    //     // If you need to configure complex parameter routing,
    //     // https://github.com/ant-design/ant-design-pro-site/blob/master/docs/router-and-nav.md#%E5%B8%A6%E5%8F%82%E6%95%B0%E7%9A%84%E8%B7%AF%E7%94%B1%E8%8F%9C%E5%8D%95
    //     // eg . /list/:type/user/info/:id
    //     router = {
    //         ...router,
    //         name: router.name || menuItem.name,
    //         authority: router.authority || menuItem.authority,
    //         hideInBreadcrumb: router.hideInBreadcrumb || menuItem.hideInBreadcrumb,
    //     };
    //     routerData[path] = router;
    // });
    console.log(routerData['/user'].component);
    console.log(routerData);

    return routerData;

}