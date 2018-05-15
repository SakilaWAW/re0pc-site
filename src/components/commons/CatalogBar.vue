<template>
  <transition name="expand">
    <div class="catalog-bar" v-show="isShow">

    </div>
  </transition>
</template>

<script>
  export default {
    name: 'catalog-bar',
    data() {
      return {
        isShow: false,
      };
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
  }
</style>
