import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Avatar, Dropdown } from 'antd';
import PerfectScrollbar from 'react-perfect-scrollbar'
import * as icon from '@ant-design/icons';
import { routers } from "@/router"
import "./layout.scss";
import 'react-perfect-scrollbar/dist/css/styles.css';

const { SubMenu } = Menu;
const { Header, Sider, Content, Footer } = Layout;

class layout extends Component {
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
    generateBreadcrumb = data => {
        let normalData = data.reverse();
        return normalData.map(item => {
            return (
                <Breadcrumb.Item key={item.path}>{item.title}</Breadcrumb.Item>
            )
        })
    }

    render() {
        const { router, logout, avatar, isNotify, breadcrumb, collapsed, collapsedFunc } = this.props;
        const menu = (
            <Menu>
                <Menu.Item key="loginout">
                    <span onClick={() => logout()}>logout</span>
                </Menu.Item>
            </Menu>
        );
        return (
            <Layout className="layout">
                <Sider className="sider-wrapper" trigger={null} collapsible collapsed={collapsed} width='230'>
                    <div className="logo-wrapper">
                        <div className="logo"></div>
                        {collapsed ? "" : <span className="site-title">Biu Admin</span>}
                    </div>
                    <PerfectScrollbar>
                        <Menu theme="light" className='sider-menu' mode="inline" defaultSelectedKeys={['1']}>
                            {this.generateMenus(routers)}
                        </Menu>
                    </PerfectScrollbar>
                </Sider>
                <Layout className="site-layout">
                    <Header className="header-wrapper" style={{ padding: 0 }}>
                        {React.createElement(collapsed ? icon.MenuUnfoldOutlined : icon.MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => { collapsedFunc() },
                        })}
                        <div className="right-tools">
                            {React.createElement(icon.BellOutlined, { className: ['bell-outline', isNotify ? 'bell-count' : ''] })}
                            <Dropdown overlay={menu} placement="bottomRight" arrow>
                                <Avatar size="large" className="avatar-wrapper" icon={React.createElement(icon.UserOutlined)} src={avatar} />
                            </Dropdown>
                        </div>
                    </Header>
                    <Breadcrumb className="breadcrumb">
                        {this.generateBreadcrumb(breadcrumb)}
                    </Breadcrumb>
                    <PerfectScrollbar>
                        <Content className="site-content">
                            <Route path={router.path} component={router.component}></Route>
                        </Content>
                    </PerfectScrollbar>
                    <Footer className="site-footer">footer</Footer>
                </Layout>
            </Layout>
        )
    }
}

layout.propTypes = {
    isNotify: PropTypes.bool, // 是否有通知
    avatar: PropTypes.string, // 用户头像地址
    permission: PropTypes.array.isRequired,
    router: PropTypes.object.isRequired, // 路由
    logout: PropTypes.func, // 登出函数
    breadcrumb: PropTypes.array, // 面包屑导航
    collapsed: PropTypes.bool,
    collapsedFunc: PropTypes.func, // 左侧面板是否缩起来
}
layout.defaultProps = {
    isNotify: false,
    breadcrumb: [],
    collapsed: false,
}

export default layout;

