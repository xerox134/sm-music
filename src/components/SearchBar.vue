<template>
<div id="everything">
   


<div id="mySidenav" class="sidenav">
  <a href="#">Hem</a>
    <p @click="Search()">Sök</p>
      <a href="#">Spellista</a>
        <a href="#">Om oss</a>
</div>



<div id="cssMain">

<div id="Search"  v-show="toggleSearchBar">
  <div class="searchContainer">
      <input
        id="searchBar"
          v-on:keyup.enter="searchForEverything(searchPhrase)"
            type="text"
             name="everything"
              placeholder="Artist/Låt/Album"
                v-model="searchPhrase"
        />
</div> 
  <span @click="hide()">⬅</span><button @click="searchForEverything(searchPhrase)">Sök</button>
    <button @click="changeSuggestions">Byta förslag</button>
</div>




<div id="SearchList">

  <ol>
      <h1>Låtar:</h1>
      <li v-for="(find, index) in getEverything" :key="index">
        <Card :card="find" :type="'song'" />
      </li>
    </ol> 


    <ol>
      <h1>Artister:</h1>
      <li v-for="(find, index) in getEverything" :key="index">
        <Card :card="find" :type="'artist'" />
      </li>
    </ol>
    
    
    <ol>
      <h1>Album:</h1>
      <li v-for="(find, index) in getEverything" :key="index">
        <Card :card="find" :type="'album'"  />
      </li>
    </ol>
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
           toggleSearchBar:false,
          searchPhrase:this.searchPhrase
         }
     },


    components:{
        Card,
        
    },

    computed:{
      getEverything() {
        console.log("funkar??", this.$store.getters.getEverything)
         return this.$store.getters.getEverything;
    },

   

    },
    methods:{

     Search(){
      this.toggleSearchBar=true
     }, 

     hide(){
      this.toggleSearchBar=false 
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

<style scoped>
#cssMain{
  display: flex;
  flex-direction: column;
  text-align: center;
}

#Search{
}
#SearchList{
 display: flex;
 justify-content: center;
 
 
}

ol>li{
list-style-type: none;
}



.sidenav {
  height: 100%;
  width: 10vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
  
}

.sidenav a {
  padding: 6px 6px 6px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  
}
.sidenav p {
  padding: 6px 6px 6px 32px;
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




input{
  background-color: #414146;
     color: #000000;
     border-radius: 15%;

}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgb(0, 0, 0);
 
}

 button {
        display: inline-block;
        background-color: #414146;
        border-radius: 10%;
   
        border: 1px double #252424;
        color: #000000;
        text-align: center;
        font-size: 12px;
        padding: 3px;
        width: 100px;
        cursor: pointer;
        margin: 5px;
      }
   
/* ----MEDIA QUERY-------*/



/* On screens that are 992px or less, set the background color to blue */
@media screen and (max-width: 1300px) {
   .sidenav{
    padding-top: 15px;
    width: 13vw;
  
  }
}@media screen and (max-width: 1050px) {
   .sidenav{
   display: none;
  
  }
}

@media screen and (max-width: 1000px) {
  #SearchList{
 display: flex;
 justify-content: center;
 flex-direction: column;
 
 
}
}


@media screen and (max-width: 992px) {
  #everything {
    background-color: blue;
  }

 
}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 600px) {
}

@media screen and (max-height: 450px) {

  .sidenav{
    padding-top: 15px;
    width: 20vw;
  
  }
  .sidenav a {font-size: 18px;}
}

</style>