<template>
  <div id="card">
   

 
    <div class="Song" v-if="card.type == 'song'">
      <span> Type: {{ card.type }}</span ><br />
       <span> Name: {{ card.name }}</span ><br />
         <span> Artist name: {{ card.artist.name }}</span ><br />
           <span> Album name: {{ card.album.name }}</span> <br />
             <span> MusicID: {{ card.videoId }}</span ><br />
                <button @click="Play(card.videoId)">Spela</button><br/>
                  <button @click="shareSong(card.name, card.artist.name,card.videoId)">Dela låt</button><br/><br/>


                
                </div>
    
    
     
     
    <div class="Artist" v-if="card.type == 'artist'">
       <span> type: {{ card.type }}</span ><br />
        <span> Artist name: {{ card.name }}</span  ><br />
            <span> Browse ID: {{ card.browseId }}</span  ><br />
                <button @click="shareArtist(card.browseId)">Dela artist </button><br/><br/>
              </div>
      
     
      
     
  
 


    <div class="Album" v-if="card.type == 'album'">
       <span> type: {{ card.type }}</span><br />
           <span> Name: {{ card.name }}</span ><br />
           <span> BrowseId: {{ card.browseId }}</span ><br />
             <button @click="shareAlbum(card.name,card.artist,card.browseId,card.playlistId,card.thumbnails[0].url,card.year)">Dela album</button><br/><br/>
     
  
    </div> 
    
    <div class="sharedArtist" v-if="type == 'sharedArtist'">
    
           <span> {{ card.name }}</span ><br />
         

          
     
  
    </div> 


    
    


  </div>

</template>

<script>

export default {
  props: ["card", "type"],

  computed: {
  },

  methods: {
dett(vad){
console.log("detta är loggen " , vad)
},

  Play(id){
      // calling global variable
      window.player.loadVideoById(id)
      window.player.playVideo()
     
    },

  shareArtist(id){
     
      this.$router.push({
        path: "/share/"+id+"/artist",
      });


    },

     shareAlbum(albumName,artistName,browseId,playlistId,thumbnail,year){
//  this.$store.commit("setAlbumName", albumName);
//  this.$store.commit("setArtistName", artistName);
//  this.$store.commit("setPlaylistId", playlistId);
//  this.$store.commit("setYear", year);
//  this.$store.commit("setThumbnail", thumbnail);

//  console.log(  albumName)
//  console.log(  "vade är detta?" ,browseId)
//  console.log(  artistName)
//  console.log(  playlistId)
//  console.log(year)
//  console.log( thumbnail)

       this.$router.push({
     path: "/share/album/"+browseId+"/"+thumbnail+"/"+albumName+"/"+artistName+"/"+playlistId+"/"+year+"/album",
      });
    },

//        path: "/share/album/"+browseId+"/"+thumbnail+"/"+albumName+"/"+artistName+"/"+playlistId+"/"+year+"/album",



    shareSong(songName,artistName,videoId){
       this.$router.push({
        path: "/share/"+songName+"/"+artistName+"/"+videoId+"/song",
      });
    }
  },
};
</script>

<style scoped>
   button {
        display: inline-block;
        background-color: #414146;
        border-radius: 5px;
        border: 4px double #cccccc;
        color: #eeeeee;
        text-align: center;
        font-size: 12px;
        padding: 6px;
        width: 100px;
        transition: all 0.5s;
        cursor: pointer;
        margin: 5px;
      }
      button span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
      }
      button span:after {
        content: '\00bb';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
      }
      button:hover {
        background-color: #090b20;
         font-size: 13px;
      }
      button:hover span {
        padding-right: 25px;
      }
      button:hover span:after {
        opacity: 1;
        right: 0;
      }

</style>


