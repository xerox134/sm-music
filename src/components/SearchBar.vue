<template>
<div id="body">
   






<div id="cssMain">






<div id="SearchList">
 <h1>Låtar:</h1>
  <ol>
     
      <li v-for="(find, index) in getEverything" :key="index">
        <Card :card="find" :type="'song'" />
      </li>
    </ol> 

    <div id="ArtistAlbum">
 <h1>Artister:</h1>
        <h1>Album:</h1>
        </div>
<div id="testt">
   

    <ol>
     
      <li v-for="(find, index) in getEverything" :key="index">
        <Card :card="find" :type="'artist'" />
      </li>
    </ol>
    
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

     


    components:{
        Card,
        
    },

    computed:{
      getEverything() {
        console.log("funkar??", this.$store.getters.getEverything)
         return this.$store.getters.getEverything;
    },

   

    },
  
}
</script>

<style scoped>

#ArtistAlbum{
  display: flex;
  justify-content: space-evenly;
}
#cssMain{
  display: flex;
  flex-direction: column;
  text-align: center;
}
#SearchList{
 display: flex;
 flex-direction: column;
 justify-content: center;
 
 
}


ol{
  display: flex;
  justify-content: center;
    border: 4px solid #cccccc;


}
ol>li{
list-style-type: none;
}


#testt{
  display: flex;
  justify-content: center;
  
}









/* -----------------SIDENAV-----------------  */







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