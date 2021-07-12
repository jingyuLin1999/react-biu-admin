
import Login from "@/views/login"
import Dashboard from "@/views/dashboard"
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
        icon: "DashboardOutlined", // 仅仅支持ant design图标
        component: Dashboard
    },
    {
        id: 11,
        path: "/table",
        title: "表",
        icon: "TableOutlined",
        component: Dashboard,
        children: [
            {
                id: 22,
                path: "/simple",
                title: "简单表",
                icon: "DribbbleOutlined",
                component: Simple,
            },
            {
                id: 22,
                path: "/complex",
                title: "复杂表",
                icon: "DribbbleOutlined",
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