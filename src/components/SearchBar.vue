<template>
<div id="body">
   
<div id="cssMain">

<!--- MEDIA QUERY -->
 <div id="Search" >

   <h4>Sök:</h4>
     <div >
      <input
        id="searchBar"
          v-on:keyup.enter="searchForEverything(searchPhrase)"
            type="text"
             name="everything"
              placeholder="Artist/Låt/Album"
                v-model="searchPhrase"
        /></div> 
<div>
  <button class="btn" @click="searchForEverything(searchPhrase)">Sök</button>
  <button class="btn" @click="changeSuggestions">Byta förslag</button>
  </div>

 </div>

   <div id="Player">
    <div>Now playing: {{ getCurrentPlaying }}</div>
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
<!----------------------------------------------------------------------->


<div id="SearchList">
  
 <h1>Låtar</h1>
  <ol>
      <li v-for="(find, index) in getEverything" :key="index">
        <Card :card="find" :type="'song'" />
      </li>
    </ol> 

    
   
<div id="Artist">
   <h1>Artister</h1>
  <ol>
      <li v-for="(find, index) in getEverything" :key="index">
        <Card :card="find" :type="'artist'" />
      </li>
    </ol>
</div>



<div id="Album">         
  <h1>Album</h1>
 <ol> 
      <li v-for="(find, index) in getEverything" :key="index">
        <Card :card="find" :type="'album'"  />
      </li>
    </ol>
</div>
  
    </div>
   
  </div>

  </div>
</template>

<script>
import Card from "../components/card.vue"
export default {
    name:"SearchBar",

       data(){
         return {
          searchPhrase:this.searchPhrase,
         }
     },


    components:{
        Card,     
    },


    /////////////////// MEDIA QUERY!!//////////////////////////////

    computed:{
      getEverything() {
        console.log("funkar??", this.$store.getters.getEverything)
           return this.$store.getters.getEverything;
    },
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

    methods:{

     searchForEverything(searchPhrase) {
      this.$store.commit("setSearchPhrase", searchPhrase);
        this.$store.dispatch("fetchEverything"); 
    },

     changeSuggestions() { 
      let array = this.$store.getters.getRandomNames[Math.floor(Math.random()*this.$store.getters.getRandomNames.length)];
        this.$store.commit("setSearchPhrase", array);
          this.$store.dispatch("fetchEverything"); 
    },

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
  //--------------------------------------------------------------
  
}
</script>

<style scoped>


#cssMain{
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
  
}
#SearchList{
 display: flex;
 flex-direction: column;
 justify-content: center;
  margin-bottom: 50px;

}

h1{
  margin: 0;
}

ol>li{
list-style-type: none;
}




@media screen and (min-width: 1000px) {
   #Search{
display: none;  
  } 
}
  
@media screen and (max-width: 1000px) {
   #Search{
     width: 100%;
  } 

  .btn{
    margin: 1vh 1vw;
    background-color: #414146;
    border-radius: 10%;
    color: #000000;
    cursor: pointer;
  }

  h4{
    margin: 0;
  }
  
} 

@media screen and (min-width: 850px) {
  #Player{
    display: none;
  }
  
  ol{
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 100%;
  overflow: hidden;
  margin-left: 20px;

}
 
} 


</style>