import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },
  {
    path: "/",
    name: "layout",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/layout/layout.vue"),
      children: [
        {
          path: "/home",
          name: "home",
          meta: {
            title: "首页"
          },
          component: () => import(/* webpackChunkName: "about" */ '@/views/home/index.vue'),
          
        },
        {
          path: "/goods",
          name: "goods",
          meta: {
            title: "商品"
          },
          component: () => import(/* webpackChunkName: "about" */ '@/views/goods/index.vue'),
        },
        {
          path: "/the",
          name: "the",
          meta: {
            title: "订单"
          },
          component: () => import(/* webpackChunkName: "about" */ '@/views/the/index.vue')
        },
        {
          path: "/members",
          name: "members",
          meta: {
            title: "会员"
          },
          component: () => import(/* webpackChunkName: "about" */ '@/views/members/index.vue')
        },
        {
          path: "/setupthe",
          name: "setupthe",
          meta: {
            title: "设置"
          },
          component: () => import(/* webpackChunkName: "about" */ '@/views/setupthe/index.vue')
        },
      ]
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
