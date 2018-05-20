<template>
  <transition name="expand">
    <div class="slide-menu" v-show="isExpand">
      <nav-menu class="nav-head">
        <nav-menu-item v-if="menuPageInfo.length>1" v-for="(page,idx) in menuPageInfo" :key="idx" :title="page.title"
                  text-color="#888" text-active-color="Cyan" text-hover-color="white"
                  background-color="transparent" underline-color="Cyan"
                  :index="page.index" :isActive="page.index===activeIndex"
                  @select="handleSelect">
        </nav-menu-item>
      </nav-menu>
      <component :is="selectedPageComp"></component>
    </div>
  </transition>
</template>

<script>
  import NavMenuItem from './NavMenu/NavMenuItem';
  import CatalogBar from '../commons/CatalogPage';
  import SelfInfoPage from '../commons/SelfInfoPage';
  import NavMenu from './NavMenu/NavMenu'

  export default {
    name: 'catalog-bar',
    components: {
      NavMenuItem,
      NavMenu,
    },
    data() {
      return {
        activeIndex: 'wzml',
        menuPageInfo: [
          { title: '文章目录', index: 'wzml', pageComponent: CatalogBar },
          { title: '站点预览', index: 'zdyl', pageComponent: SelfInfoPage },
        ],
      };
    },
    computed: {
      isExpand() {
        return this.$store.state.side_menu_expand;
      },
      selectedPageComp() {
        for (let i = 0; i < this.menuPageInfo.length; i++) {
          if(this.menuPageInfo[i].index === this.activeIndex) return this.menuPageInfo[i].pageComponent;
        }
      },
    },
    methods: {
      handleSelect(index) {
        this.activeIndex = index;
        console.log(`已将activeIndex设置为${this.activeIndex}`);
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
    background: $sidebar-dark-grey;
    transition: all .5s;
    text-align: center;
  }
  .expand-enter, .expand-leave-to {
    transform: translateX(320px);
  }
  .nav-head {
    display: inline-block;
    margin-bottom: 20px;
  }
</style>
