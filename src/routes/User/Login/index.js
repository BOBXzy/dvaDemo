import React, { Component } from 'react';
import { connect } from 'dva';
// const Index = (routeList) => (
    
    
// );

// function Index(routeList) {
//     console.log(routeList);
//     return (
//         <h2>Login Page</h2>
//     );
// }
class Login extends Component {
    state = {
        routeList: [],
    }
    componentDidMount() {
        console.log('加载login组件');
        // console.log(routeList);
    }
    
    render()  {
        const { routeList } = this.props;
        // console.log(this.props);
        // console.log('render!!');
        console.log(routeList);
        // this.props.dispatch({
        //     type: 'example/getRouteList'
        // });
        return (
            <h2>Login Page</h2>
        );
    }
    
}
// export default Index;
export default connect(({ example }) => ({
    routeList: example.routeList
}))(Login);