import React from 'react';
import { Route } from 'dva/router';
import { Layout } from 'antd';
import { getRoutes } from '../utils/utils';

const { Content } = Layout;

class UserLayout extends React.PureComponent {
    // const { match, routerData } = this.props;
    render() {
        const { routerData, match } = this.props;
       return (
           <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                <h1>UserLayout</h1>
               {
                   getRoutes(match.path, routerData).map(item =>
                       (
                           <Route path={item.path} component={item.component} key={item.key} />
                       )
                   )
               }
           </Content>
       )
    }
}

export default UserLayout;