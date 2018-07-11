import React, { Component } from 'react';
import { connect } from 'dva';
import RouterView from "../../../components/RouterView";

class Login extends Component {
    componentDidMount() {
        console.log('加载login组件');
    }
    
    render()  {
        // const { routeList } = this.props;
        const { match, routerData } = this.props;
        console.log(this.props);
        return (
            <RouterView bathPath={match.path} routerData={routerData} />
        );
    }
    
}
// export default Index;
export default connect(({ example }) => ({
    routeList: example.routeList
}))(Login);