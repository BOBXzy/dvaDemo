import React, { Component } from 'react';
import RouterView from "components/RouterView";

class Query extends Component {
    componentDidMount() {
        console.log('warehouse query 入口文件');
    }
    render() {
        const { match, routerData } = this.props;
        console.log(this.props);
        return (
            <RouterView bathPath={match.path} routerData={routerData} />
        );
    }
}
export default Query;