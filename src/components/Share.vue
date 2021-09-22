
<template>
  <div id="List">


 <!------------------------------------------------------------>
 <!--                   ARTIST CODE                          -->
 <!------------------------------------------------------------>
   
    <div id="Artist">


 <!--                 ERROR HANDLER                          -->
      <div v-if="getArtistInfo.error=='utils.fv(...).forEach is not a function' && $route.params.type=='artist' 
      || getArtistInfo.error == 'Cannot read property \'hasOwnProperty\' of undefined'&& $route.params.type=='artist'">
      
      <h1>THIS ARTIST IS NOT AVAILABLE </h1>
      <button ><router-link :to="homeLink">Tillbaka Hem</router-link></button>
   </div>
 <!------------------------------------------------------------>


    <div id="ArtistList" v-else-if="$route.params.type=='artist' " >
      <h1>Artist:</h1>
       <h1>{{ getArtistInfo.name }}</h1>
        <img v-bind:src= thumbnailDecode>
          <p>{{ getArtistInfo.description }}</p>
      
      
      <h2>SONGS:</h2>
      <ol>
        <li v-for="(sak, index) in getArtistInfo.products.songs.content"  :key="index">
          <Card :card="sak" :type="'sharedArtist'" />
        </li>
      </ol> 

      
      <h2>Total views: {{ getArtistInfo.views }}</h2>

      <h1>_____________________________________</h1>
     </div> 
  </div>
 


 <!------------------------------------------------------------>
 <!--                   ALBUM CODE                          -->
 <!------------------------------------------------------------>
 
  <div id="Album" v-if="$route.params.type=='album' "> 
    
    <h1>Album:</h1>
      <img v-bind:src= thumbnailDecode>
        <h2>{{$route.params.albumName}}</h2>
     
     <h1>Artist</h1>
      <h2>{{$route.params.artistName}}</h2>
        <button @click="PlayP()">Play Album:</button>
          <p>id: {{$route.params.playlistId}} </p>
   

    <h1>Year</h1>
     <h2>{{$route.params.year}} </h2>
  

    <h1>Songs:</h1>
     <ol>
        <li v-for="(sak, index) in getEverything"  :key="index">
        <Card :card="sak" :type="'compare'" :browseId="$route.params.browseId" :name="$route.params.albumName" />
        </li>
    
     </ol> 
   
    
    </div>


<!------------------------------------------------------------>
 <!--                   SONG CODE                          -->
 <!-------------------------------------------------------------->

<div id="Song" v-if="$route.params.type=='song' && getSongInfo.id == $route.params.id">
      <div v-if="getSongInfo.artist.name==$route.params.artistName">
     
        <h1>Song:</h1>
         <img v-bind:src= thumbnailDecode>
            <h2>{{getSongInfo.name}}</h2>
    
        <h1>Artist</h1>
         <h2>{{getSongInfo.artist.name}}</h2>
          <button @click="Play($route.params.videoId)">PLAY THIS TRACK!</button> 
      </div>
   

    <div v-else-if="$route.params.type=='song'" >
      <h1>THIS SONG IS NOT AVAILABLE AT THE MOMENT </h1>
        <button @click="home()"><router-link :to="homeLink"><h2>Back to homepage</h2></router-link></button>
    </div>

</div> 

  
  </div>
</template>

<script>

import Card from "../components/card.vue"

export default {
  name: "Share",


 data(){
   return {
     thumbnailDecode: decodeURIComponent(this.$route.params.thumbnail)
   }
 },



  components: {
    Card,

  },


 computed:{

    getEverything() {
     console.log("funkar??", this.$store.getters.getEverything)
      return this.$store.getters.getEverything;
    },
   
    getSongInfo(){
      return this.$store.getters.getSongInfo;
    },
  
    getPlayListInfo(){
      return this.$store.getters.getPlayListInfo;
    },
   
    getArtistInfo(){
      console.log("detta är artis error" ,this.$store.getters.getArtistInfo.error)
      return this.$store.getters.getArtistInfo;
    },

    homeLink() { 
      return (
        "/"
      );
    },
   
},


  methods:{
   
  Play(id){
    window.player.loadVideoById(id)
    window.player.playVideo() 
    },
   
  PlayP(getPlayListInfo){
    console.log("metoden:", getPlayListInfo)
    },
  },


 mounted(){
 
// Send parameters so that fetches can be done.
  this.$store.commit("setSongName", this.$route.params.songName);
  this.$store.commit("setArtistName", this.$route.params.artistName);
  this.$store.commit("setRouteParamId", this.$route.params.id);
  this.$store.commit("setPlaylistParamId", this.$route.params.playlistId);

  this.$store.dispatch("fetchsongInfo");
  this.$store.dispatch("fetchArtistInfo");
  this.$store.dispatch("fetchPlayListInfo");
 
    },

};

</script>






<style scoped>

li{
  list-style-type: none;
}

</style>