<template>
  <div id="Player">
    <div>Now playing:{{ getCurrentPlaying }}</div>
    <div>
      <button @click="previous(getPlayList)">⏮</button>
      <button @click="playlist(getPlayList)">▶</button>
      <button @click="pause()">⏸</button>
      <button @click="resume()">⏯</button>
      <button @click="next(getPlayList)">⏭</button>
      <button @click="playlist(getPlayList)">Playlist</button>
      <button @click="clear()">Clear</button>
    </div>
  </div>
</template>

<script>
export default {
  // data(){
  //   return{
  //     index:0
  //   }
  // },

  computed: {
    getCurrentPlaying() {
      return this.$store.getters.getCurrentPlaying;
    },

    getIndex() {
      return this.$store.getters.getIndex;
    },

    getPlayList() {
      return this.$store.getters.getplayList;
    },
    getMusicId() {
      return this.$store.getters.getMusicId;
    },
  },

  methods: {
    play(array) {
      this.$store.commit("setCurrentPlaying", array[this.getIndex].name);
      window.player.loadVideoById(array[this.getIndex].id);
      window.player.playVideo();
    },
    pause() {
      window.player.pauseVideo();
    },

    resume() {
      window.player.playVideo();
    },

    playlist(array) {
      this.$store.commit("setCurrentPlaying", array[this.getIndex].name);
      window.player.loadVideoById(array[this.getIndex].id);
      this.$store.commit("setCurrentPlaying", array[this.getIndex].name);
    },

    previous(array) {
      if (this.getIndex == 0) {
        console.log("first song");
      } else {
        this.$store.commit("setMinusIndex", 1);
        this.$store.commit("setCurrentPlaying", array[this.getIndex].name);
        window.player.loadVideoById(array[this.getIndex].id);
      }
    },

    next(array) {
      if (this.getIndex < array.length - 1) {
        this.$store.commit("setPlusIndex", 1);
        this.$store.commit("setCurrentPlaying", array[this.getIndex].name);
        window.player.loadVideoById(array[this.getIndex].id);
      } else {
        console.log("last song");
      }
    },

    clear() {
      console.log(this.$store.getters.getplayList);

      this.$store.state.playList = [];
      console.log(this.$store.getters.getplayList);
    },
  },
};
</script>

<style scoped>
button {
  display: inline-block;
  background-color: #414146;
  border-radius: 5px;
  border: 1px double #949191;
  color: #070101;
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
}
button:hover span {
  padding-right: 25px;
}
button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>