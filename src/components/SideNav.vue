<template>


<div class="sidenav">
        <img src="@/assets/img/smLogo2.png" style="width:11vw;"/>




  <a href="/">Hem</a>
  <p @click="Search()">Sök</p>

   <div id="Search"  v-show="toggleSearchBar">
   <div class="searchContainer">
      <input
        id="searchBar"
          v-on:keyup.enter="searchForEverything(searchPhrase)"
            type="text"
             name="everything"
              placeholder="Artist/Låt/Album"
                v-model="searchPhrase"/>
</div>  
  <div id="searchChangeButtons">
    <button class="button" @click="searchForEverything(searchPhrase)">Sök</button>
      <button class="button" @click="changeSuggestions">🔁</button>
        </div>
            </div>



<div id="playList">
      <p @click="openPlayList()">Spellista</p>
      <ol v-show="togglePlayList"> 
      <li v-for="(find, index) in getplayList" :key="index">
       <Card :card="find" :type="'playlist'"  />
       <span @click="ListUp(find)">⬆</span>
      </li>
    </ol>


    </div>
        <a href="#">Om oss</a>
</div>



</template>

<script>
import Card from "../components/card.vue"

export default {

 components:{
        Card,     
    },

    data(){
         return {
           toggleSearchBar:false,
           togglePlayList:false,
          searchPhrase:this.searchPhrase,
          indexSearch:0,
          indexPlaylist:0
         }
     },


 
     computed:{
       getplayList(){
       return this.$store.getters.getplayList
}
     },


      methods:{

        ListUp(indexToMove){
        
        
        let array =this.getplayList;
        console.log("Idex", indexToMove.index)
        console.log("Idex added", indexToMove.index-1)
        array.splice(indexToMove.index,1)
        array.splice(indexToMove.index-1,0,indexToMove)
        this.$store.state.playList=array
        this.getplayList()

                 




        },

     Search(){
       if(this.indexSearch==0){
         this.indexSearch++
      this.toggleSearchBar=true
      }else{
      this.toggleSearchBar=false 
        this.indexSearch--
      }
     },  
     
     openPlayList(){
       if(this.indexPlaylist==0){
         this.indexPlaylist++
      this.togglePlayList=true
      }else{
      this.togglePlayList=false 
        this.indexPlaylist--
      }
     }, 

    

     searchForEverything(searchPhrase) {
      this.$store.commit("setSearchPhrase", searchPhrase);
        this.$store.dispatch("fetchEverything"); 
    },

     changeSuggestions() { 
      let array = this.$store.getters.getRandomNames[Math.floor(Math.random()*this.$store.getters.getRandomNames.length)];
        this.$store.commit("setSearchPhrase", array);
          this.$store.dispatch("fetchEverything"); 
    },
    
      },

   beforeMount() {
    this.changeSuggestions()
        },


}
</script>

<style scope>

#searchChangeButtons{
  display: flex;
}


#spelListaOl{
  display: none;
}
.searchContainer{
padding-left: 0.5%;
}


/*------INPUT-----*/
input{
  background-color: #414146;
     color: #000000;
     border-radius: 15%;

}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgb(0, 0, 0);
 
}

/*-----BUTTON----*/

 .button {
        background-color: #414146;
        border-radius: 10%;
        color: #000000;
        text-align: center;
        font-size: 85%;
        width: 40%;
        height: 25px;
        cursor: pointer;
        margin: 2%;
      }
   



.sidenav {
  height: 100%;
  width: 11vw;
  position: fixed;
  z-index: 1;
  top: 0;
  background-color: rgb(12, 12, 12);
  overflow-x: hidden;
  border: 2px solid rgba(128, 128, 128, 0.253);
  
}

.sidenav a {
  padding: 6px 6px 6px 15px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  
}
.sidenav p {
  padding: 6px 6px 6px 15px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  margin: 0;
  cursor: pointer;
}
span{
cursor: pointer;
}

.sidenav p:hover {
  color: #f1f1f1;
}.sidenav a:hover {
  color: #f1f1f1;
}

.main {
  margin-left: 200px; /* Same as the width of the sidenav */
}




@media screen and (max-width: 1000px) {
   .sidenav{
display: none;  
  }
} 




</style>