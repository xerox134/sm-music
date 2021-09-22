<template>
  <div id="APP">
    
    
    


    <div id="player"><Player /></div>
    <router-view />
  </div>

</template>

<script>
import Player from "./components/Player.vue";

export default {
  name: "App",
  components: {
    Player,
  },
};


</script>

<style>



#player {
  background-color: rgba(0, 0, 0, 0.37);
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
  min-height: 100vh;
  background: linear-gradient(to bottom right, black, silver);
  color: aliceblue;
}



</style>