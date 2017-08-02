// 引用模板
import Vue from 'vue';
import Router from 'vue-router';
import homePage from './views/home.vue'
import aboutPage from './views/about.vue'
import todo from './views/todo.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/home',
            component:homePage
        },
        {
            path:'/home/:id',
            component:todo
        },
        {
            path:'/about',
            component:aboutPage
        }
    ]
})