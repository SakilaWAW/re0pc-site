<template>
  <div id="app">
    <header-with-searcher></header-with-searcher>
    <body-content></body-content>
    <i class="el-icon-caret-top rtn-top-btn" @click="rtnTop"></i>
    <div class="side-menu-btn line-decorator-base"
         :class="this.$store.state.side_menu_expand?'line-decorator-selected':''"
         @click="toggleSideMenu"></div>
    <catalog-bar></catalog-bar>
  </div>
</template>

<script>
import HeaderWithSearcher from './components/HeaderWithSearcher';
import BodyContent from './components/BodyContent';
import CatalogBar from './components/commons/CatalogBar';
import SelfInfoPage from './components/commons/SelfInfoPage';

export default {
  name: 'App',
  components: {
    HeaderWithSearcher,
    BodyContent,
    CatalogBar,
  },
  created() {
    this.$store.commit('pushSideBarPage', { page: { title: '站点预览', index: 'zdyl', pageComponent: SelfInfoPage }});
  },
  methods: {
    rtnTop() {
      const intervalId = setInterval(()=>{
        let heightTop = document.documentElement.scrollTop || document.body.scrollTop;
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
    toggleSideMenu() {
      this.$store.commit('setSideMenuTo', { isExpand: !this.$store.state.side_menu_expand });
    },
  },
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  body, ul, li {
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
    z-index: 999;
  }
  .rtn-top-btn:hover {
    cursor: pointer;
  }
  .side-menu-btn {
    position: fixed;
    bottom: 70px;
    right: 40px;
    background: black;
    width: 23px;
    height: 23px;
    z-index: 999;
  }
  .side-menu-btn:hover {
    cursor: pointer;
  }
  .line-decorator-base::after,.line-decorator-base::before {
    content: "";
    position: absolute;
    background: white;
    height: 2px;
    width: 60%;
    transition: all .5s;
    left: 20%;
  }
  .line-decorator-base::before {
    top: 30%;
  }
  .line-decorator-base::after {
    bottom: 30%;
  }
  .line-decorator-selected::after {
    bottom: 50%;
    transform-origin:center 70%;
    transform: rotate(-135deg);
  }
  .line-decorator-selected::before {
    top: 50%;
    transform-origin:center 30%;
    transform: rotate(135deg);
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
