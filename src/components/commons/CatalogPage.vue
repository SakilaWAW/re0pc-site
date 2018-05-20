<template>
  <ul class="catalog-page">
    <li class="cata-item" v-for="(cata,idx) in cataData" :key="idx"
        :style="{'padding-left': `${30+cata.step*20}px`}" @click="scrollTo(cata.text)">
      {{ cata.text }}
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
    methods: {
      scrollTo(id) {
        document.getElementById(id).scrollIntoView();
      },
    }
  };
</script>

<style lang="scss" scoped>
  @import '../../css/global';
  .catalog-page {
    list-style-type: none;
  }
  .cata-item {
    color: $high-light-text-grey;
    font-size: 14px;
    margin: 2px 0;
    text-align: left;
    text-decoration: underline;
  }
  .cata-item:hover {
    color: white;
    cursor: pointer;
  }
  .nothing-to-show {
    color: $high-light-text-grey;
    font-size: 16px;
    font-weight: bold;
  }
</style>
