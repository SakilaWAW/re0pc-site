<template>
  <div class="category-area">
    <div class="ca-title">目前共计{{ categoryData.length }}个分类</div>
      <div v-for="cate in categoryData" class="type-text">
        <span class="cb-name">{{ cate.type }}</span>
        <span class="cb-count">({{ cate.count }})</span>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'category-area',
    created() {
      this.fetchCategoryData();
    },
    data() {
      return {
        categoryData: [],
      };
    },
    methods: {
      fetchCategoryData() {
        this.$axios.get('http://127.0.0.1:3000/stats/type')
          .then(res=>{
            this.categoryData = res.data;
          }).catch(err=>{
            console.log(`fetchCategoryData出问题了!${err}`);
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../assets/css/global';
  .ca-title {
    text-align: center;
    font-size: 17px;
    margin-bottom: 25px;
  }
  .type-text {
    display: inline-block;
    margin: 12px;
    font-size: 15px;
  }
  .cb-count {
    color: grey;
  }
  .cb-name {
    text-decoration: underline;
    color: $dark-text-grey;
  }
  .cb-name:hover {
    cursor: pointer;
    color: black;
  }
</style>
