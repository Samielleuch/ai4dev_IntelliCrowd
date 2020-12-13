import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Catalogue from "../views/Catalogue.vue";
import PostFormPage from "../views/PostFormPage.vue";
import ProjectPage from "../views/ProjectPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/DashboardClient",
    name: "DashboardClient",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DashboardClient.vue")
  },
  {
    path: "/DashboardAdmin",
    name: "DashboardAdmin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DashboardAdmin.vue")
  },
  {
    path: "/DashboardOrg",
    name: "DashboardOrg",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DashboardOrg.vue")
  },
  {
    path: "/ProjectPage",
    name: "ProjectPage",
    component: ProjectPage
  },
  {
    path: "/SignIn",
    name: "SignIn",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Sign_In_Page.vue")
  },
  {
    path: "/SignUpOrg",
    name: "SignUpOrg",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Sign_Up_Org.vue")
  },
  {
    path: "/SignUpCrowd",
    name: "SignUpSource",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Sign_Up_CrowdSourcing.vue"
      )
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Sign_Up_Page.vue")
  },
  {
    path: "/Catalogue",
    name: "Catalogue",
    component: Catalogue
  },
  {
    path: "/PostFormPage",
    name: "PostFormPage",
    component: PostFormPage
  },

  {
    path: "/AllApplicationsPage",
    name: "AllApplicationsPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AllApplicationsPage.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
