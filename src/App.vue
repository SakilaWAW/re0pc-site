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
  @font-face {
    font-family: 'iconfont';  /* project id 597267 */
    src: url('//at.alicdn.com/t/font_597267_236q8nzvcqt49529.eot');
    src: url('//at.alicdn.com/t/font_597267_236q8nzvcqt49529.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_597267_236q8nzvcqt49529.woff') format('woff'),
    url('//at.alicdn.com/t/font_597267_236q8nzvcqt49529.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_597267_236q8nzvcqt49529.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont";
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
