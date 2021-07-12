import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Avatar, Dropdown } from 'antd';
import * as icon from '@ant-design/icons';
import { routers } from "@/router"
import "./layout.scss";

const { SubMenu } = Menu;
const { Header, Sider, Content, Footer } = Layout;

class layout extends Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    generateMenus = data => {
        return data.map(item => {
            if (item.hide) return null;
            if (item.children) {
                return (
                    <SubMenu
                        key={item.path}
                        title={
                            <Fragment>
                                {item.icon ? React.createElement(icon[item.icon]) : ''}
                                <span>{item.title}</span>
                            </Fragment>
                        }
                    >
                        {this.generateMenus(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={item.path}>
                    <Link to={item.path}>
                        {item.icon ? React.createElement(icon[item.icon]) : ''}
                        <span>{item.title}</span>
                    </Link>
                </Menu.Item>
            )
        })
    }

    render() {
        const { router, logout } = this.props; // permission
        const menu = (
            <Menu>
                <Menu.Item key="loginout">
                    <span onClick={() => logout()}>登出</span>
                </Menu.Item>
            </Menu>
        );
        return (
            <Layout className="layout">
                <Sider className="sider-wrapper" trigger={null} collapsible collapsed={this.state.collapsed} width='230'>
                    <div className="logo-wrapper">
                        <div className="logo"></div>
                        {this.state.collapsed ? "" : <span className="site-title"> Biu Admin</span>}
                    </div>
                    <Menu theme="light" className='sider-menu' mode="inline" defaultSelectedKeys={['1']}>
                        {this.generateMenus(routers)}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="header-wrapper" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? icon.MenuUnfoldOutlined : icon.MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                        <div className="right-tools">
                            <Dropdown overlay={menu} placement="bottomRight" arrow>
                                <Avatar size="large" icon={React.createElement(icon.UserOutlined)} />
                            </Dropdown>

                        </div>
                    </Header>
                    <Breadcrumb className="breadcrumb">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content className="site-content">
                        <Route path={router.path} component={router.component}></Route>
                    </Content>
                    <Footer className="site-footer">footer</Footer>
                </Layout>
            </Layout>
        )
    }
}


layout.propTypes = {
    permission: PropTypes.array.isRequired,
    router: PropTypes.object.isRequired,
    logout: PropTypes.func,
}
export default layout;

