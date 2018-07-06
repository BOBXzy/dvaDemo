import React from 'react';
import { Route, Switch, routerRedux } from 'dva/router';
// import pathToRegexp from 'path-to-regexp';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { getRouterData } from './common/router';
// import UserLayout from './layout/UserLayout';
// import IndexPage from './routes/IndexPage';
// import Products from './routes/Products';
// import dynamic from 'dva/dynamic';
// import { getMenuData } from './common/menu';
// import MyRouter from './components/MyRouter';
const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }) {
  const RouterData = getRouterData(app);
  console.log(RouterData);
  console.log(typeof RouterData[''].component);
  const BasicLayout = RouterData[''].component;
  // console.log(RouterData['/page1'].component);
  // const Products = RouterData['/products'].component;
  const UserLayout = RouterData['/user'].component;
  // console.log(BasicLayoutMine);
  return (
    <LocaleProvider locale={zhCN}>
      <ConnectedRouter history={history}>
      {/* <Router history={history}> */}
        <Switch>
          <Route path="/user" component={UserLayout} />
          <Route path="/" component={BasicLayout} />
          {/* <MyRouter path="/" component={BasicLayout} /> */}
          {/* <Route path="/products" component={Products} /> */}
          {/* <Route path="/page1" exact component={Page1} /> */}
        </Switch>
      {/* </Router> */}
      </ConnectedRouter>
    </LocaleProvider>
  );
}
export default RouterConfig;
