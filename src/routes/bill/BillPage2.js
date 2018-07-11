import React from 'react';
import { Button } from 'antd';
import { connect } from 'dva';
// const BillPage2 = (props) => (
//     <h2>Bill-Page2</h2>
// );

@connect(({ example, loading }) => ({
    routeList: example.routeList,
    // loading: loading.effects['example/getRouteList'],
}))

class BillPage2 extends React.Component {
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
                <h2>page22222222</h2>
                <Button type="primary" onClick={() => this.getRouteList()}>获取路线列表</Button>
            </div>

        )
    };
}

export default BillPage2;