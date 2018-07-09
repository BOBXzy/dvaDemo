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
  const BasicLayout = RouterData[''].component;
  const UserLayout = RouterData['/user'].component;
  return (
    <LocaleProvider locale={zhCN}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/user" component={UserLayout} />
          <Route path="/" component={BasicLayout} />
        </Switch>
      </ConnectedRouter>
    </LocaleProvider>
  );
}
export default RouterConfig;
