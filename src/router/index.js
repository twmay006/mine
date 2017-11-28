import section from '@/pages/common/section'

let routes = [
    {
        path: '/',
        iconClass: 'el-icon-menu',
        component: section,
        hidden: true,
        children: [
            {
                path: '/',
                name: '首页',
                // meta: {
                //     auth: true,
                //     access: ['add', 'edit', 'delete']
                // },
                // component: resolve => require(['../pages/index'], resolve),
                alias: '/index'
            }
        ]
    }
]
export default routes
