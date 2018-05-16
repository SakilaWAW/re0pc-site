<template>
  <transition name="expand">
    <div class="catalog-bar" v-show="isExpand">

    </div>
  </transition>
</template>

<script>
  export default {
    name: 'catalog-bar',
    computed: {
      isExpand() {
        return this.$store.state.side_menu_expand;
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../css/global';
  .catalog-bar {
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 320px;
    background: $sidebar-dark-grey;
    transition: all .5s;
  }
  .expand-enter, .expand-leave-to {
    transform: translateX(320px);
  }
</style>
