<template>
  <div id="APP">

<div id="SideNav"><SideNav /></div>
<div id="player"><Player /></div>

<router-view />
  
  
  </div>
</template>

<script>
import Player from "./components/Player.vue";
import SideNav from "./components/SideNav.vue";

export default {
  name: "App",
  components: {
    Player,
    SideNav
  },
};


</script>

<style>



#player {
  background-color: rgba(0, 0, 0, 0.712);
  position: fixed;
  bottom: 0;
  width: 90%;
  margin-left:10% ;
  text-align: center;
  
}

body,html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
  background: linear-gradient(to bottom right, black, silver);
  color: aliceblue;
}

@media screen and (max-width: 1000px) {
   .sidenav{
  max-width:0vw;

  }
  body,html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
  background: linear-gradient(to bottom right, black, silver);
  color: aliceblue;
}

  #player{
    width: 100%;
    margin-left: 0;
  }
}

@media screen and (max-width: 850px) {
  
  #player{
    display: none;
  }
} 



</style>