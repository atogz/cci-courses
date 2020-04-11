<template>
  <div id="app">
    <Header />
      <transition name="component-fade" mode="out-in">
          <router-view/>
      </transition>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header
  }
}
</script>

<style>
    button, a {
        outline: none !important;
    }


    /* transitions */
    
    .component-fade-enter-active {
        transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to
        /* .component-fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
