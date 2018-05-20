<template>
  <ul class="catalog-page">
    <li class="cata-item" v-for="(cata,idx) in cataData" :key="idx">
      <a class="cata-href" :href="`#${cata.text}`" :style="{'padding-left': `${cata.step*20}px`}">{{ cata.text }}</a>
    </li>
    <li class="nothing-to-show" v-if="cataData.length===0">此文章无目录</li>
  </ul>
</template>

<script>
  export default {
    name: 'catalog-page',
    data() {
      return {
        cataData: this.$store.state.catalog,
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../css/global';
  .catalog-page {
    list-style-type: none;
  }
  .cata-item {
    padding-left: 30px;
    text-align: left;
  }
  .cata-href {
    color: $high-light-text-grey;
    font-size: 14px;
    margin: 2px 0;
    display: inline-block;
  }
  .cata-href:hover {
    color: white;
  }
  .nothing-to-show {
    color: $high-light-text-grey;
    font-size: 16px;
    font-weight: bold;
  }
</style>
