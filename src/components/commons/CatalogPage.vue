<template>
  <ul class="catalog-page">
    <li v-for="(cata,idx) in cataData" :key="idx">
      <a class="cata-href" :href="`#${cata.text}`" :style="{'padding-left': `${cata.step*20}px`}">{{ cata.text }}</a>
    </li>
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
    text-align: left;
    padding-left: 30px;
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
</style>
