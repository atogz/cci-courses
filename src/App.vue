<template>
  <div id="app">
    <Header />
    <transition name="component-fade" mode="out-in">
        <router-view class="mb-12"/>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
    @font-face {
        font-family: "Rubik";
        src: url("assets/fonts/Rubik-Regular.ttf") format("ttf");
    }
    html, body {
        height: 100%;
        margin: 0;
    }
    body {
        color: #413d58;
        background-color: #f5f7fb;
        font-family: 'Rubik', 'Roboto', sans-serif;
    }
    li {
        list-style: disc;
    }
    #app {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    @media screen and (min-width: 1400px) {
        .container {
            width: 1600px;
            margin: 0 auto;
        }
    }

    button, a {
        outline: none !important;
    }
    .router-link-active {
        color: #fa5f55;
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
