import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';
import { Link } from 'dva/router';
import RouterView from '../components/RouterView';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



class BasicLayout extends React.PureComponent {
    componentDidMount() {
        console.log('BasicLayout 加载');
    }
    render() {
        const { routerData, match } = this.props;
        console.log(this.props);
        console.log(routerData);
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Button>
                        <Link
                            to='/user/login/'
                        >
                            进入用户登陆界面
                        </Link>
                    </Button>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub2']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />仓单管理</span>}>
                                <Menu.Item key="5">
                                    <Link
                                        to='/warehouse/query/list'
                                    >仓单查询</Link>
                                </Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub1" title={<span><Icon type="user" />银单管理</span>}>
                                
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
                            <RouterView bathPath = { match.path } routerData = {routerData} />
                        </Content>
                    </Layout>
                </Layout>
            </Layout> 
        )
    }
}

export default BasicLayout;