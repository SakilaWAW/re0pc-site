<template>
  <header class="header-with-searcher">
    <div class="header-content">
      <div class="left-container">
        <div class="logo-container hover-pointer">
          <div class="border-line top-border"></div>
          <span class="site-logo">Re0pc's Blog</span>
          <div class="border-line bottom-border"></div>
        </div>
        <ul class="nav-list">
          <li v-for="(nav,idx) in navList" :key="idx"
              class="nav"
              @click="jumpTo(nav.route)">
            {{ nav.txt }}
          </li>
        </ul>
      </div>
      <tg-search></tg-search>
    </div>
  </header>
</template>

<script>
  import TgSearch from './TgSearch';

  export default {
    name: 'header-with-searcher',
    components: {
      TgSearch,
    },
    data() {
      return {
        navList: [
          { txt: '首页', route: '/index' },
          { txt: '归档', route: '/archive' },
          { txt: '分类', route: '/classification' },
          { txt: '标签', route: '/tags' },
          { txt: '关于', route: '/about' },
        ],
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
  @import '../assets/css/global';

  @media screen and (min-width: $content-width) {
    .header-content {
      width: $content-width;
    }
  }

  @media screen and (max-width: 899px) {
    .header-content {
      width: 100%;
    }
  }
  .header-with-searcher {
    background: $light-grey;
  }

  .logo-container {
    font-size: 20px;
    font-weight: bold;
    display: inline-block;
    position: relative;
  }

  .header-content {
    height: 80px;
    margin: 0 auto;
    padding: 30px 0;
    justify-content: space-between;
    display: flex;
    align-items: center;
  }

  .nav-list {
    display: inline-block;
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
</style>
