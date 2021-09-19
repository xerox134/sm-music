<template>
  <div id="ShareCard">
   

 
  
    
    <div class="newArtist">
    
           <span> {{sharedCard.name}}</span ><br />

           
          
     
  
    </div> 









    
    













  </div>

</template>

<script>
export default {
  
  props: ["sharedCard", "type"],



  methods: {


  Play(id){
      // calling global variable
      window.player.loadVideoById(id)
      window.player.playVideo()
     
    },

   test(shared){
       console.log(shared)
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


