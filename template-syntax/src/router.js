import Vue from "vue";
import VueRouter from "vue-router";
import ComputedView from "@/views/ComputedView.vue";
import WatchView from "@/views/WatchView.vue";
import FormView from "@/views/FormView.vue";
import PageNotFoundView from "@/views/PageNotFoundView.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/computed",
      component: ComputedView
    },
    {
      path: "/watch",
      component: WatchView
    },
    {
      path: "/form",
      component: FormView
    },
    {
      path: "*",
      component: PageNotFoundView
    }
  ]
});
