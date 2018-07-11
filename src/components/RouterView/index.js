import React, { Component } from 'react';
import { Switch, Route } from 'dva/router';
import { getRoutes } from '../../utils/utils';
import NotFound from '../../routes/Exception/404';

/**
 * 获取目标路径的子路由
 * @param {*} routerData 路由数组 包括components,path等
 * @param {*} bathPath 当前匹配的路由索引
 */

export default class RouterView extends Component {
  render() {
    const { routerData, bathPath } = this.props;
    const routerList = getRoutes(bathPath, routerData);
    return (
      <Switch>
        {
          routerList.map(item =>
            (
              <Route path={item.path} component={item.component} key={item.key} exact={item.exact} />
            )
          )
        }
        <Route render={NotFound} />
      </Switch>
    );
  }
}

