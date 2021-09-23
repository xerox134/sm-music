<template>
<div id="Home">
    
    
    
<div id="Search"><Search /></div>
    
    
</div>
</template>


<script>
import Search from "../components/SearchBar.vue";

export default {
  name: "Home",

  components: {
    Search, 
  },
};
</script>


<style>

#Search{
  margin-left: 11%;
}

@media screen and (max-width: 1000px) {
  #Search{
  margin-left: 0%
}
} 


</style>