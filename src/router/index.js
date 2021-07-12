
import Home from "@/views/home"
import Login from "@/views/login"
import Notfound from "@/views/errorPage/404"
import Simple from "@/views/tables/simple"
import Complex from "@/views/tables/complex"

export const routers = [
    {
        id: 3,
        path: "/login",
        title: "登入页面",
        icon: "TableOutlined",
        component: Login,
        hide: true,
    },
    {
        id: 1,
        path: "/",
        title: "首页",
        icon: "DashboardOutlined",
        component: Home
    },
    {
        id: 11,
        path: "/table",
        title: "表",
        icon: "TableOutlined",
        component: Home,
        children: [
            {
                id: 22,
                path: "/simple",
                title: "简单表",
                icon: "SmileOutlined",
                component: Simple,
            },
            {
                id: 22,
                path: "/complex",
                title: "复杂表",
                icon: "SmileOutlined",
                component: Complex,
            },
        ]
    },
    {
        id: 4,
        path: "/404",
        title: "404",
        icon: "TableOutlined",
        component: Notfound,
        hide: true,
    },
]

// 异步路由
export const asyncRouter = []