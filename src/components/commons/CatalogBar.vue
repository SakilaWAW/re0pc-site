<template>
  <transition name="expand">
    <div class="slide-menu" v-show="isExpand">
      <ul class="nav-head">
        <nav-menu v-for="(page,idx) in menuPageInfo" :key="idx"
                  :class="page.cls"
                  :title="page.title">
        </nav-menu>
      </ul>
    </div>
  </transition>
</template>

<script>
  import NavMenu from '../commons/NavMenu';
  import CatalogBar from '../commons/CatalogPage';
  import SelfInfoPage from '../commons/SelfInfoPage';

  export default {
    name: 'catalog-bar',
    components: {
      NavMenu,
    },
    data() {
      return {
        activeIndex: "1",
        menuPageInfo: [
          { title: '文章目录', cls: 'article-cata', pageComponent: CatalogBar },
          { title: '站点预览', cls: 'self-info', pageComponent: SelfInfoPage },
        ],
      };
    },
    computed: {
      isExpand() {
        return this.$store.state.side_menu_expand;
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(`key:${key}==keyPath:${keyPath}`);
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../css/global';
  .slide-menu {
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 320px;
    background: white;
    transition: all .5s;
  }
  .expand-enter, .expand-leave-to {
    transform: translateX(320px);
  }
</style>
