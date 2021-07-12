// https://www.freesion.com/article/2728789511/
import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { routers } from "@/router"
import Layout from "@/layout"
import { userLogout } from '@/store/user/actions';

const whiteLiset = ["/login"]; // 路由白名单

class Guard extends Component {
    iterationRouter(routers, target) {
        let result = {};
        for (let key in routers) {
            let item = routers[key];
            if (item.children) {
                result = this.iterationRouter(item.children, target)
            } else if (item.path === target) return item;
        }
        return result;
    }
    render() {
        const { permission, location, loginStatus, logout } = this.props; // location当该组件放在switch内最自动注入
        const { pathname } = location;
        const permissionRouter = this.iterationRouter(routers, pathname);
        // 登入成功
        if (loginStatus) {
            // 登陆成功，想要跳转到登陆，重定向到主页
            if (pathname === "/login") return <Redirect to="/" />;
            else if (permissionRouter) {
                // 如果路由合法，就跳转到相应的路由
                return (
                    <Layout router={permissionRouter} permission={permission} logout={logout} />
                );
            }
            // 如果路由不合法，重定向到 404 页面
            return <Redirect to="/404" />;
        } else {
            // 在白名单内且路由能找到直接返回
            if (whiteLiset.includes(pathname) && permissionRouter) {
                const { component } = permissionRouter;
                return <Route exact path={pathname} component={component} />;
            } else {
                return <Redirect to="/login" />
            }
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.user.get("loginStatus"),
    permission: state.user.get("permission").toJS()
})

const mapDispatch = (dispatch) => ({
    logout() {
        dispatch(userLogout(false))
    }
})


export default connect(mapState, mapDispatch)(Guard);




