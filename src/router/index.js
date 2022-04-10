
import {createRouter,createWebHashHistory} from 'vue-router'
const routes = [
    {
        path:"/",
        component:()=>import("../views/Home.vue")
    },
    {
        path:"/bio",
        component:()=>import("../views/Bio.vue")
    },
    {
        path:"/cv",
        component:()=>import("../views/CV.vue")
    },
    {
        path:"/contact",
        component:()=>import("../views/Contact")
    },
    {
        path:"/press",
        component:()=>import("../views/Press.vue")
    }
]

const router = createRouter(
    {
        history:createWebHashHistory(),
        scrollBehavior(){
            return{top:0}
        },
        routes
    }
)
export default router