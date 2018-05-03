<template>
  <div id="app">
    <header-with-searcher></header-with-searcher>
    <body-content></body-content>
    <i class="el-icon-caret-top rtn-top-btn" @click="rtnTop"></i>
  </div>
</template>

<script>
import HeaderWithSearcher from './components/HeaderWithSearcher';
import BodyContent from './components/BodyContent';

export default {
  name: 'App',
  components: {
    HeaderWithSearcher,
    BodyContent,
  },
  methods: {
    rtnTop() {
      const intervalId = setInterval(()=>{
        var heightTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(heightTop <= 160) {
          document.documentElement.scrollTop = document.body.scrollTop = 0;
          clearInterval(intervalId)
        }
        else {
          document.documentElement.scrollTop -= 160;
          document.body.scrollTop -= 160;
        }
      },20);
    },
  },
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  body {
    margin: 0;
    padding: 0;
  }
  .rtn-top-btn {
    position: fixed;
    bottom: 40px;
    right: 40px;
    background: black;
    color: white;
    font-size: 22px;
  }
  .rtn-top-btn:hover {
    cursor: pointer;
  }
</style>
