<template>
  <div id="List">

    <div id="Artist">

 <!--                 ERROR HANDLER                     -->
<!--                  ---------------                    -->
       <div v-if="artistInfo.error=='utils.fv(...).forEach is not a function'">
      <h1>THIS ARTIST IS NOT AVAILABLE </h1>
      <button @click="home()"><h2>Back to homepage</h2></button>
   </div>

 <!--                   ARTIST CODE                     -->
<!--                  ---------------                    -->
    <div id="ArtistList" v-else-if="artistInfo.error != 'Cannot read property \'hasOwnProperty\' of undefined'&&type!='song' ">
      <h1>Artist:</h1>
      <h1>{{ artistInfo.name }}</h1>

                  <img v-bind:src= artistInfo.thumbnails[0].url>

      <p>{{ artistInfo.description }}</p>
      <h2>SONGS:</h2>
      

      <ol>
        <li v-for="(sak, index) in artistInfo.products.songs.content"  :key="index">
          <Card :card="sak" :type="'sharedArtist'" />
        </li>
      </ol> 

      <h2>Total views: {{ artistInfo.views }}</h2>

      <h1>_____________________________________</h1>
    </div> 

  <!--                 ERROR HANDLER                     -->
<!--                  ---------------                    -->

   
    <div v-else-if="type!='song'">
      <h1>THIS ARTIST IS NOT AVAILABLE </h1>
      <button @click="home()"><h2>Back to homepage</h2></button>
    </div>

    </div>
 
 
 
  <div id="Album" v-if="type=='album' "> 
  <div id="AlbumList"> 
     <h1>Album:</h1>
    
    </div>
    </div>




<div id="Song" v-if="type=='song' && songInfo.id == id">
   <div id="SongList">
      <ol>
        <h1>Song:</h1>
            <img v-bind:src= songInfo.thumbnails[0].url>

     <h2>{{songInfo.name}}</h2>

    <h1>Artist</h1>
     
     <h2 v-if="songInfo.artist.name==artistName">{{songInfo.artist.name}}
   </h2>

     <h2 v-else-if="songInfo.artist[0].name==artistName">{{songInfo.artist[0].name}}</h2>
       <button @click="Play(videoId)">PLAY THIS TRACK!</button>
      </ol>
    </div> 
    </div> 

    <div v-else>
  <h1>THIS SONG IS NOT AVAILABLE AT THE MOMENT </h1>
      <button @click="home()"><h2>Back to homepage</h2></button>

    </div>

    


  
  </div>
</template>

<script>
import axios from 'axios';
import Card from "../components/card.vue"

export default {
  name: "Share",

 data(){
   return {
     id:this.$route.params.id,
     songName:this.$route.params.songName,
     artistName:this.$route.params.artistName,
     videoId:this.$route.params.videoId,
     type:this.$route.params.type,
     artistInfo:{},
     albumInfo:{},
     songInfo:{},
     
   }
 },

  components: {
    Card,
  },

  methods:{
   
Play(id){
      // calling global variable
      window.player.loadVideoById(id)
      window.player.playVideo()
     
    },
  home(){
     
      this.$router.push({
        path: "/",
      });


    }
  },




async created() {

   
   
    
   const songInfo = await axios.get("https://yt-music-api.herokuapp.com/api/yt/songs/" + this.songName +  this.artistName);
   this.songInfo = songInfo.data.content[0];


   console.log(this.songName , this.artistName , this.videoId)
   console.log(songInfo.data.content[0])

  

  // GET request using axios with async/await
 const artistInfo = await axios.get("https://yt-music-api.herokuapp.com/api/yt/artist/" + this.id);
  this.artistInfo = artistInfo.data;
  console.log("bajs:",this.artistInfo.error)
   console.log("All info about the artist",this.artistInfo)
    console.log('if this equals to the object, the artist is not found: Cannot read property \'hasOwnProperty\'of undefined',this.artistInfo.error)
   

    

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
#List {
  
  
}

ol {
  padding: 2vh 2vw;
}
</style>