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
    path: "/share/:id/:type",
    name: "shareArtist",
    component: Share,
  }, 
  {
    path: "/share/:songName/:artistName/:videoId/:type",
    name: "shareSong",
    component: Share,
  },  
  {
    path: "/share/:browseId/:type",
    name: "shareAlbum",
    component: Share,
  },

];

const router = new VueRouter({


  routes,
});

export default router;
