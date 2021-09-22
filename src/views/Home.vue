<template>
  <div id="Home">
<div id="SideNav"><SideNav /></div>
    <div id="Search"><Search /></div>
    
    
  </div>
</template>


<script>
import Search from "../components/SearchBar.vue";
import SideNav from "../components/SideNav.vue";

export default {
  name: "Home",

  components: {
    Search,
    SideNav
  },
};
</script>


<style>
#Search{
  width: 88vw;
  
}
#SideNav{
  width: 12vw;
}
#Home{
  display: flex;
}

</style>