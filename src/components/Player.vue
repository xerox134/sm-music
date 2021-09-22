<template>
  <div id="Player">
      <button @click="previous()">⏮</button>
    <button id="jobbig" @click="play(getMusicId)">▶</button>
      <button @click="pause()">⏸</button>
      <button @click="resume()">⏯ </button>
    <button @click="next(getPlayList)">⏭</button>
    <button @click="playlist(getPlayList)">Playlist</button>
    <button @click="clear()">Clear</button>
  
    
    
  </div>
</template>

<script>
export default {



  computed:{

    getPlayList(){
      return this.$store.getters.getplayList
    },
getMusicId(){
  return this.$store.getters.getMusicId;
}
  },


  methods:{
    
    play(id){
      // calling global variable
      window.player.loadVideoById(id)
      window.player.playVideo()
     
    },
    pause(){
      window.player.pauseVideo()
      
    }, 
    previous(){
        window.player.previousVideo()
    },
    resume(){
      window.player.playVideo()
    },

    playlist(ids){
        window.player.loadPlaylist(ids)
    },

    next(){

           window.player.nextVideo()
    },
    clear(){
          console.log(this.$store.getters.getplayList)

      this.$store.state.playList=[]
    console.log(this.$store.getters.getplayList)

    }
  }
}
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
        content: '\00bb';
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