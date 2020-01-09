import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//代表着所有组件 引入了,以为着所有的样式 都插入到style标签了
import Home from '../pages/home.vue'
import Content from '../pages/content.vue'
import List from '../pages/list.vue'
import User from '../pages/user.vue'
import Reg from '../pages/reg.vue'
import Login from '../pages/login.vue'
import News from '../pages/news.vue'
import Book from '../pages/book.vue'
import NoPage from '../pages/no-page.vue'
// import Prodetail from '../pages/detail.vue'

let routes=[
  {path:'/home',component:Home},
  {path:'/content',component:Content},
  {path:'/list',component:List},
  {path:'/user',component:User},
  {path:'/reg',component:Reg},
  {path:'/login',component:Login},
  {path:'/news_list/:_id',component:News},
  {path:'/book',component:Book},
  // {path:'/pro_detail',component:Prodetail},
  {path:'/',redirect:'/home'},
  {path:'*',component:NoPage}
];

let router = new VueRouter({
  mode:'history',
  routes
});

export default router;