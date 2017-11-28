// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import moment from 'moment'
import components from './components'
import routes from './router'
import * as filters from './filters'
// import './assets/styles/style.scss'
Vue.use(VueRouter)
Vue.use(ElementUI)
window.moment = moment
window.Vue = Vue
// Vue.config.productionTip = false
Object.keys(components).forEach(key => {
    let name = key.replace(/(\w)/, v => v.toUpperCase())
    Vue.component(`v${ name }`, components[key])
})
Object.keys(filters).forEach(k => { Vue.filter(k, filters[k]) }) // 注册过滤器

window.router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    },
    linkActiveClass: 'active'
})
// router.beforeEach((to, from, next) => {
//     document.title = to.name
//     if (!to.meta.auth) {
//         let user = JSON.parse(localStorage.getItem('userInfo'))
//         if (!user) {
//             next({ path: 'login', query: { redirect: to.fullPath } })
//         }
//     }
//     next()
// })
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
