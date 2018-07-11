import React from 'react';
import { Switch } from 'dva/router';
import { Layout } from 'antd';
// import NotFound from '../routes/Exception/404';
import RouterView from '../components/RouterView';


const { Content } = Layout;

class UserLayout extends React.PureComponent {
    // const { match, routerData } = this.props;
    render() {
        const { routerData, match } = this.props;
       return (
           <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                <h1>UserLayout</h1>

                <Switch>
                   <RouterView bathPath = { match.path } routerData = { routerData } />
               </Switch>
           </Content>
       )
    }
}

export default UserLayout;