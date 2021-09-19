import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Share from "../components/Share.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  }, 
  
  {
    path: "/share/artist/:id/:type",
    name: "shareArtist",
    component: Share,
  }, 
  {
    path: "/share/song/:songName/:artistName/:videoId/:type",
    name: "shareSong",
    component: Share,
  },

];

const router = new VueRouter({


  routes,
});

export default router;
