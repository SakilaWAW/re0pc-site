<template>
  <header class="header-with-searcher">
    <div class="header-content">
      <div class="left-container">
        <span class="site-logo">Re0pc's Blog</span>
        <ul class="nav-list">
          <li v-for="(nav,idx) in navList" :key="idx">
            <a class="nav" :href="nav.route">{{ nav.txt }}</a>
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
          { txt: '首页', route: '/' },
          { txt: '归档', route: '/' },
          { txt: '分类', route: '/' },
          { txt: '标签', route: '/' },
          { txt: '关于', route: '/' },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import '../assets/css/global';

  .header-with-searcher {
    background: $light-grey;
  }

  .site-logo {
    font-size: 20px;
    font-weight: bold;
  }

  .header-content {
    height: 80px;
    width: $content-width;
    margin: 0 auto;
    padding: 30px 5px;
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
    color: red;
    background: $dark-grey;
    cursor: pointer;
  }

  .nav {
    text-decoration: none;
    color: $light-text-grey;
    font-size: 12px;
  }

  .tg-search {
    display: inline-block;
  }
</style>
