<template>
  <div id="card">

    
    <!-------------------------------------------------------------------->
    <!--                           ARTIST                               -->
    <!-------------------------------------------------------------------->

    <div class="Artist" v-if="card.type == 'artist' && type == 'artist'">
      <span> type: {{ card.type }}</span
      ><br />
      <img v-bind:src="card.thumbnails[1].url" /> <br />

      <span> Artist name: {{ card.name }}</span
      ><br />
      <span> Browse ID: {{ card.browseId }}</span
      ><br />
      <button><router-link :to="artistLink">Dela Artist</router-link></button
      ><br /><br />
    </div>
    
    
    <!-------------------------------------------------------------------->
    <!--                           Album                                -->
    <!-------------------------------------------------------------------->

    <div class="Album" v-if="card.type == 'album' && type == 'album'">
      <span> type: {{ card.type }}</span
      ><br />
      <img v-bind:src="card.thumbnails[1].url" /> <br />

      <span> Name: {{ card.name }}</span
      ><br />

      <span> BrowseId: {{ card.browseId }}</span
      ><br />
      <button><router-link :to="albumLink">Dela Album</router-link></button
      ><br /><br />
    </div>


    <!-------------------------------------------------------------------->
    <!--                            SONG                                -->
    <!-------------------------------------------------------------------->

    <div class="Song" v-if="card.type == 'song' && type == 'song'">
      <span> Type: {{ card.type }}</span
      ><br />
      <img v-bind:src="card.thumbnails[1].url" /> <br />

      <span> Name: {{ card.name }}</span
      ><br />
      <span> Artist name: {{ card.artist.name }}</span
      ><br />
      <span> Album name: {{ card.album.name }}</span> <br />
      <span> MusicID: {{ card.videoId }}</span
      ><br />
      <div id="playButtons">
        <button @click="Play(card.videoId)">Spela</button><br />
        <button @click="queueSong(card.videoId)">Köa</button><br />
      </div>
      <button><router-link :to="songLink">Dela låt</router-link></button
      ><br /><br />
    </div>


    <!-------------------------------------------------------------------->
    <!--                        sharedArtist                            -->
    <!-------------------------------------------------------------------->

    <div class="sharedArtist" v-if="type == 'sharedArtist'">
      <span> {{ card.name }}</span
      ><br />
    </div>


    <!-------------------------------------------------------------------->
    <!--                       sharedAlbum                              -->
    <!-------------------------------------------------------------------->

    <div class="sharedAlbum" v-if="type == 'compare'">
      <div v-if="name == card.album.name">
        <span>{{ card.name }}</span>
        <button @click="Play(card.videoId)">Spela</button><br />
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
    queueSong(id) {
      this.$store.commit("setPlayList", id);
      console.log(this.$store.getters.getplayList);
    },

    Play(id) {
      // calling global variable
      window.player.loadVideoById(id);
      window.player.playVideo();
    },

  },


};
</script>

<style scoped>
#playButtons {
  display: flex;
  justify-content: center;
}

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
  content: "\00bb";
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
button > a {
  text-decoration: none;
  color: white;
}
</style>


