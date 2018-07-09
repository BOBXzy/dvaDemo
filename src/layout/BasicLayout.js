import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';
import { Link, Route, Switch } from 'dva/router';
import { getRoutes } from '../utils/utils';
import NotFound from '../routes/Exception/404';
// import NotFoundMine from '../routes/Exception/mine';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class BasicLayout extends React.PureComponent {
    componentDidMount() {
    }
    render() {
        // const { history } = this.props;
        // const path1 = '/page1';
        const { routerData, match } = this.props;
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user" />bill</span>}>
                                
                                <Menu.Item key="1">
                                    <Link
                                        to='/bill/page1'
                                    >page1</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link
                                        to='/bill/page2'
                                    >page2</Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link
                                        to='/page3'
                                    >page3</Link>
                                </Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            {/* <Switch> */}
                            {
                                getRoutes(match.path, routerData).map(item =>
                                    (
                                        // <Button key={item.key}>aaaa</Button>
                                        <Route path={item.path} component={item.component} key={item.key} />
                                    )
                                )
                            }
                                {/* <Route render={NotFound} /> */}
                            {/* </Switch> */}
                        </Content>
                    </Layout>
                </Layout>
            </Layout> 
        )
    }
}

export default BasicLayout;