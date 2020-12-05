import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "@/views/LoginPage.vue";
import DropdownPage from "@/views/DropdownPage.vue";
import ModalView from "@/views/ModalView.vue";
import PageNotFoundView from "@/views/PageNotFoundView.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/login",
      component: LoginPage
    },
    {
      path: "/dropdown",
      component: DropdownPage
    },
    {
      path: "/modal",
      component: ModalView
    },
    {
      path: "*",
      component: PageNotFoundView
    }
  ]
});
