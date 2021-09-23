<template>
  <div id="card">

    
    <!-------------------------------------------------------------------->
    <!--                           ARTIST                               -->
    <!-------------------------------------------------------------------->

    <div class="objects" id="Artist" v-if="card.type == 'artist' && type == 'artist'">
      <br />
      <img v-bind:src="card.thumbnails[1].url" /> <br />
<br />
      <span> {{ card.name }}</span
      ><br />
      <br />
      <button><router-link :to="artistLink">Dela Artist</router-link></button
      ><br /><br />
    </div>
    
    
    <!-------------------------------------------------------------------->
    <!--                           Album                                -->
    <!-------------------------------------------------------------------->

    <div class="objects" id="Album" v-if="card.type == 'album'  && type == 'album' || card.type == 'ep' && type == 'album'" >
      <br />
      <img v-bind:src="card.thumbnails[1].url" /> <br />

<br />
      <span> Name: {{ card.name }}</span
      ><br />

     
      <br />
      <button><router-link :to="albumLink">Dela Album</router-link></button
      ><br /><br />
    </div>


    <!-------------------------------------------------------------------->
    <!--                            SONG                                -->
    <!-------------------------------------------------------------------->

    <div class="objects" id="Song" v-if="card.type == 'song' && type == 'song' ">
      
      <br />
      <img v-bind:src="card.thumbnails[1].url" /> <br />

      <span>  {{ card.name }}</span
      ><br />
      <span> Artist: {{ card.artist.name }}</span
      ><br />
      <span> Album: {{ card.album.name }}</span> <br />
     
      
      <div id="playButtons">
        <button @click="Play(card.videoId, card.name)">Spela</button><br />
        <button @click="queueSong(card.videoId, card.name)">Köa</button><br />
      </div>
      <button><router-link :to="songLink">Dela låt</router-link></button
      ><br /><br />
    </div>


    <!-------------------------------------------------------------------->
    <!--                        sharedArtist                            -->
    <!-------------------------------------------------------------------->

    <div class="objects" id="sharedArtist" v-if="type == 'sharedArtist'">
      <span> {{ card.name }}</span
      ><br />
    </div>


    <!-------------------------------------------------------------------->
    <!--                       sharedAlbum                              -->
    <!-------------------------------------------------------------------->

    <div class="objects" id="sharedAlbum" v-if="type == 'compare'">
      <div v-if="name == card.album.name">
        <span>{{ card.name }}</span>
        <button @click="Play(card.videoId, card.name)">Spela</button><br />
      </div>
    </div>
  </div>

  <!------------------------------END-------------------------------------->


</template>

<script>
export default {
  props: ["card", "type", "browseId", "name"],

  computed: {
    artistLink() {
      let thumbnailUrl = encodeURIComponent(this.card.thumbnails[1].url);
      return (
        "/share/" + 
        this.card.browseId + 
        "/" + 
        thumbnailUrl +
        "/artist");
    },

    albumLink() {
      let thumbnailUrl = encodeURIComponent(this.card.thumbnails[1].url);
      return (
        "/share/" +
        this.card.browseId +
        "/" +
        this.card.name +
        "/" +
        this.card.artist +
        "/" +
        this.card.playlistId +
        "/" +
        this.card.year +
        "/" +
        thumbnailUrl +
        "/album"
      );
    },

    songLink() {
      let thumbnailUrl = encodeURIComponent(this.card.thumbnails[1].url);
      return (
        "/share/" +
        this.card.name +
        "/" +
        this.card.artist.name +
        "/" +
        this.card.videoId +
        "/" +
        thumbnailUrl +
        "/song"
      );
    },
  },

  methods: {
    queueSong(id,name) {
      this.$store.commit("setPlayList", {id,name});
      console.log(this.$store.getters.getplayList);
    },

    Play(id, name) {
      
      this.$store.commit("setCurrentPlaying", name);
      window.player.loadVideoById(id);
      window.player.playVideo();
    },

  },


};
</script>

<style scoped>



img{
  width: 50%;
  border: 2px solid gold;
}
#playButtons {
  display: flex;
  justify-content: center;
}

button {
  display: inline-block;
  background-color: #414146;
  border-radius: 5px;
  border: 2px solid #cccccc;
  color: #eeeeee;
  text-align: center;
  font-size: 12px;
  padding: 6px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}


button:hover {
  background-color: #090b20;
  font-size: 13px;
}


button > a {
  text-decoration: none;
  color: white;
}





@media screen and (min-width: 850px) {
  .objects{
        margin-right:40px;  
        background: #00000077;
        min-width: 20vw;
        max-width: 20vw;
        min-height: 100%;
        
          border:  2px solid rgba(255, 217, 0, 0.356);
}
 
 
} 






</style>


