<template>
  <header class="header-with-searcher">
    <div class="header-content">
      <span class="site-logo">Re0pc's Blog</span>
      <ul class="nav-list">
        <li v-for="(nav,idx) in navList" :key="idx">
          <a class="nav" :href="nav.route">{{ nav.txt }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header-with-searcher',
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
  $light-grey: #F5F5F5;
  $dark-grey: #E0E0E0;
  $light-text-grey: #888;
  $content-width: 900px;

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
</style>
