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
    Search
  },
};
</script>


<style >
#player {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>