<template>
<div id="APP">
 
 <header>
 <h1>SM MUSIC</h1>
 <h2>The only music place you need!</h2>
</header>


    <div id="player"><Player /></div>


<router-view/>





  </div>



</template>

<script>
import Player from "./components/Player.vue";



export default {
  name: "App",
  components:{
    Player
 
  
  }

}
</script>

<style>


body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background:linear-gradient(to bottom right,black,silver);

  color: aliceblue;
}

header{
  text-align: center;
   text-shadow: 3px 3px 3px rgba(255, 255, 255, 0.185);

}



</style>