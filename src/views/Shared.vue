<template>
  <div>

<div id="Share"><Share /></div>


  </div>
</template>

<script>
import Share from "../components/Share.vue";
export default {
 name: "Shared",


 mounted: function() {
       const parameters = this.$route.parameters
        console.log(parameters)
   
       const id = this.$route.query.id
        console.log(id)
  
    },


  components: {
    Share,
   
  },
};



</script>

<style>

</style>