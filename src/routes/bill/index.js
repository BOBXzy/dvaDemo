import React, { Component } from 'react';
import RouterView from "components/RouterView";

class Bill extends Component {
    componentDidMount() {
        console.log('bill 入口文件');
    }

    render() {
        const { match, routerData } = this.props;
        console.log(this.props);
        return (
            <RouterView bathPath={match.path} routerData={routerData} />
        );
    }
}
// export default Index;
// export default connect(({ example }) => ({
//     routeList: example.routeList
// }))(Bill);
export default Bill;