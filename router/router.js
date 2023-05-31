import {createRouter, createWebHistory} from 'vue-router'
import HelloWorld from '../src/views/HomePage.vue'
import DetailPage from '../src/views/DetailPage.vue'




const routes = [
    {
        path:'/',
        component: HelloWorld,
    },
    {
        path:'/detail',
        component: DetailPage
    },
   
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router