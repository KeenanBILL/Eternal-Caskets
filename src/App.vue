<template>

  <div id="app">      
        
    <NavbarComp/>
    <router-view/>
    <FooterComp/>
    
  </div>


</template>

<script>

import NavbarComp from '../src/components/NavbarComp.vue'
import FooterComp from '../src/components/FooterComp.vue';
import { useStore } from 'vuex';

export default {

  components: {
    NavbarComp,
    FooterComp
  },
    setup() {
      const store = useStore();
      store.dispatch("fetchProducts");
      
  }
};

</script>

<style>

#app {
  font-family: 'Righteous', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #003246;
}

</style>
