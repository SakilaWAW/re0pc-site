<template>
  <header class="header-with-searcher">
    <div class="header-content-wide">
      <div class="left-container">
        <div class="logo-container hover-pointer">
          <transition
            appear
            @appear="extend"
            @before-appear="beforeExtend">
            <div class="border-line top-border"></div>
          </transition>
          <transition
            appear
            @before-appear="beforeSlideDown"
            @appear="slideDownDelay500msAnimate">
          <span @click="jumpTo('/')" class="site-logo">Re0pc's Blog</span>
          </transition>
          <transition
            appear
            @appear="extend"
            @before-appear="beforeExtend">
          <div class="border-line bottom-border"></div>
          </transition>
        </div>
        <transition
          appear
          @before-appear="beforeSlideDown"
          @appear="slideDownDelay1000msAnimate">
          <ul class="nav-list">
            <li v-for="(nav,idx) in navList" :key="idx"
                class="nav"
                @click="jumpTo(nav.route)">
              {{ nav.txt }}
            </li>
          </ul>
        </transition>
      </div>
      <transition appear
                  @before-appear="beforeSlideDown"
                  @appear="slideDownDelay1000msAnimate">
        <tg-search></tg-search>
      </transition>
    </div>
    <div class="header-content-narrow">
      <div class="header-content-narrow-container">
        <span @click="jumpTo('/')" class="site-logo narrow-logo hover-pointer">Re0pc's Blog</span>
        <div class="three-line-btn hover-pointer"
             :style="{outline: isMenuExpand?`2px solid #0002`:'none'}"
             @click="isMenuExpand=!isMenuExpand">
          <div class="three-line"></div>
        </div>
      </div>
      <transition name="expand">
        <div class="expand-header-menu-container" v-show="isMenuExpand">
          <ul class="expand-header-menu">
            <li v-for="(nav,idx) in navList" :key="idx" class="expand-menu-item"
                @click="jumpTo(nav.route)">
              {{ nav.txt }}
            </li>
          </ul>
          <tg-search class="expand-tg-search"></tg-search>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
  import TgSearch from './TgSearch';
  import { headTransitionMethods } from '../mixins/index';

  export default {
    name: 'header-with-searcher',
    mixins: [
      headTransitionMethods,
    ],
    components: {
      TgSearch,
    },
    data() {
      return {
        navList: [
          { txt: '首页', route: '/index' },
          { txt: '归档', route: '/archive' },
          { txt: '分类', route: '/category' },
          { txt: '标签', route: '/tags' },
          { txt: '关于', route: '/about' },
        ],
        isMenuExpand: false,
      };
    },
    methods: {
      jumpTo(location) {
        this.$router.push({ path: location });
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '../css/global';

  @media screen and (min-width: 768px) {
    .header-content-wide {
      display: flex;
      width: $content-width;
    }
    .header-content-narrow {
      display: none!important;
    }
  }

  @media screen and (max-width: 767px) {
    .header-content-wide {
      display: none!important;
    }
    .header-content-narrow {
      display: block;
    }
  }
  .header-with-searcher {
    background: $light-grey;
  }

  .logo-container {
    display: inline-block;
    position: relative;
  }
  .site-logo {
    font-size: 20px;
    font-weight: bold;
  }

  .header-content-wide {
    height: 140px;
    margin: 0 auto;
    padding: 30px 10px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }

  .nav-list {
    display: inline-block;
    margin-left: 40px;
  }

  .nav-list li{
    list-style: none;
    display: inline-block;
    padding: 10px 10px;
    transition: background 0.25s ease-in-out;
  }
  .nav-list li:hover {
    background: $dark-grey;
    cursor: pointer;
  }

  .nav {
    color: $light-text-grey;
    font-size: 12px;
  }

  .tg-search {
    display: inline-block;
  }
  .border-line {
    height: 2px;
    width: 80%;
    background: black;
    position: absolute;
  }
  .top-border {
    top: -8px;
    left: 10%;
  }

  .bottom-border {
    bottom: -8px;
    right: 10%;
  }
  //narrow
  .header-content-narrow-container {
    height: 60px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .narrow-logo {
    display: inline-block;
  }
  .three-line-btn {
    height: 30px;
    width: 30px;
    padding: 7px 5px;
    box-sizing: border-box;
  }
  .three-line {
    border-top: 2px solid $dark-text-grey;
    border-bottom: 2px solid $dark-text-grey;
    position: relative;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
  .three-line::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    background: $dark-text-grey;
  }
  .expand-header-menu-container {
    border-top: 1px solid $dark-grey;
    border-bottom: 1px solid $dark-grey;
    overflow-y: hidden;
  }
  .expand-header-menu {
    margin: 5px 0;
  }
  .expand-menu-item {
    color: $light-text-grey;
    font-size: 15px;
    padding: 5px 15px;
  }
  .expand-menu-item:hover {
    background: $dark-grey;
    cursor: pointer;
  }
  .expand-enter, .expand-leave-to {
    max-height: 0;
  }
  .expand-enter-active, .expand-leave-active {
    transition: max-height ease-in-out .3s;
  }
  .expand-enter-to, .expand-leave {
    max-height: 200px;
  }
  .expand-tg-search {
    margin: 0 15px 10px 15px;
  }
</style>
