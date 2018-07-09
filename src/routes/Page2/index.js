import React, { Component } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
// const Page2 = (props) => (
//     <h2>page222222</h2>
// );

@connect(({ example, loading }) => ({
    routeList:example.routeList,
    // loading: loading.effects['example/getRouteList'],
}))




class Page2 extends Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        // console.log('加载Page2组件');
        console.log(this.props);
        // console.log(routeList);
    }
    getRouteList() {
        console.log(this.props);
        this.props.dispatch({
            type: 'example/getRouteList',
        })
        // console.log(this.props.routeList);
    }
    render() {
        const { routeList } = this.props;
        console.log(routeList);
        return (
            <div>
                <h2>page222222</h2>
                <Button type="primary" onClick={() => this.getRouteList()}>获取路线列表</Button>
            </div>
            
        )
    };
}

export default Page2;