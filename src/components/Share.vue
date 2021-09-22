
<template>
  <div id="List">


 <!------------------------------------------------------------>
 <!--                   ARTIST CODE                          -->
 <!------------------------------------------------------------>
    <div id="Artist">



 <!--                 ERROR HANDLER                          -->
       <div v-if="getArtistInfo.error=='utils.fv(...).forEach is not a function' && $route.params.type=='artist'">
      <h1>THIS ARTIST IS NOT AVAILABLE </h1>
      <button @click="home()"><h2>Back to homepage</h2></button>
   </div>
 <!------------------------------------------------------------>




    <div id="ArtistList" v-else-if="getArtistInfo.error != 'Cannot read property \'hasOwnProperty\' of undefined'&& $route.params.type=='artist' " >
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


 <!------------------------------------------------------------>
 <!--                 ERROR HANDLER                         -->
     
      <div v-else-if="$route.params.type=='artist'">
      <h1>THIS ARTIST IS NOT AVAILABLE </h1>
      <button @click="home()"><h2>Back to homepage</h2></button>
    </div>

    </div>
 



 <!------------------------------------------------------------>
 <!--                   ALBUM CODE                          -->
 <!------------------------------------------------------------>
 
  <div id="Album" v-if="$route.params.type=='album' "> 
  <div id="AlbumList"> 
     <h1>Album:</h1>
      <img v-bind:src= thumbnailDecode>  

     <h2>   {{$route.params.albumName}}</h2>
     <h1>Artist</h1>
  <h2>  {{$route.params.artistName}}</h2>
     
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
    </div>


<!------------------------------------------------------------>
 <!--                   SONG CODE                          -->
 <!-------------------------------------------------------------->

<div id="Song" v-if="$route.params.type=='song' && getSongInfo.id == $route.params.id">
   <div id="SongList">
      <ol>
        <h1>Song:</h1>
            <img v-bind:src= thumbnailDecode>

     <h2>{{getSongInfo.name}}</h2>

    <h1>Artist</h1>
     
   

     <h2 v-if="getSongInfo.artist.name==getArtistName">{{getSongInfo.artist.name}}</h2>
       <button @click="Play($route.params.videoId)">PLAY THIS TRACK!</button>
      </ol>
    </div> 
    </div> 

    <div v-else-if="$route.params.type=='song'" >
  <h1>THIS SONG IS NOT AVAILABLE AT THE MOMENT </h1>
      <button @click="home()"><h2>Back to homepage</h2></button>

    </div>

   


  
  </div>
</template>

<script>
// import axios from 'axios';

import Card from "../components/card.vue"

export default {
  name: "Share",

 data(){
   return {


    //  id:this.$route.params.id,
    //  songName:this.$route.params.songName,
    //  artistName:this.$route.params.artistName,
    //  videoId:this.$route.params.videoId,
    //  type:this.$route.params.type,
    //  browseId:this.$route.params.browseId,
    //  albumName:this.$route.params.albumName,
    //  playlistId:this.$route.params.playlistId,
    //  year:this.$route.params.year,
    //  albumInfo:{},

    //   artistInfo:{},
    //  songInfo:{},
    //  playList:{},
     thumbnailDecode: decodeURIComponent(this.$route.params.thumbnail)
     
     
   }
 },

  components: {
    Card,
  },


 computed:{

   getSongInfo(){
      return this.$store.getters.getSongInfo;
    },

  getRouteParamId(){
      return this.$store.getters.getRouteParamId;
    },
    getPlaylistParamId(){
      return this.$store.getters.getPlaylistParamId;
    },
    getPlayListInfo(){
      return this.$store.getters.getPlayListInfo;
    },
    getArtistInfo(){
      return this.$store.getters.getArtistInfo;
    },








  getSongName(){
      return this.$store.getters.getSongName;
    }, 
    
    getArtistName(){
      return this.$store.getters.getArtistName;
    },
    
   


     getEverything() {
            console.log("funkar??", this.$store.getters.getEverything)
      return this.$store.getters.getEverything;
    },
},





  methods:{
   
Play(id){
      // calling global variable
      window.player.loadVideoById(id)
      window.player.playVideo()
     
    },
    PlayP(getPlayListInfo){
console.log("metoden:", getPlayListInfo)
    },
  home(){
     
      this.$router.push({
        path: "/",
      });


    }
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


async created() {
 
  //  playlistId,id,videoId,songName,artistName
 

    
  //  const songInfo = await axios.get("https://yt-music-api.herokuapp.com/api/yt/songs/" + this.$route.params.songName +  this.$route.params.artistName);
  //  this.songInfo = songInfo.data.content[0];

  //  console.log(this.$route.params.songName , this.$route.params.artistName , this.$route.params.videoId)
  //  console.log(songInfo.data.content[0])

  

 // GET request using axios with async/await
//  const artistInfo = await axios.get("https://yt-music-api.herokuapp.com/api/yt/artist/" + this.$route.params.id);
//   this.artistInfo = artistInfo.data;
//   console.log("bajs:",this.artistInfo.error)
//    console.log("All info about the artist",this.artistInfo)
//     console.log('if this equals to the object, the artist is not found: Cannot read property \'hasOwnProperty\'of undefined',this.artistInfo.error)
   

  //   const playList = await axios.get("https://yt-music-api.herokuapp.com/api/yt/playlist/" + this.$route.params.playlistId);
  // this.playList = playList;
  // console.log("detta är playlist jaopo" , playList)

 }




  

  
};



</script>

<style scoped>

#ArtistList {
  width: 100%;
}
#SongList {
  width: 100%;
}
#AlbumList {
  width: 100%;
}

li{
  list-style-type: none;

}
ol {
}
</style>