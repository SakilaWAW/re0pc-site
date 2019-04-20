<template>
  <div class="category-area">
    <div class="ca-title">目前共计{{ categoryData.length }}个分类</div>
      <div v-for="cate in categoryData" class="type-text">
        <span class="cb-name" @click="jumpToDetail(cate.type)">{{ cate.type }}</span>
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
        this.$axios.get('/api/v1/stats/type')
          .then(res=>{
            this.categoryData = res.data;
          }).catch(err=>{
            console.log(`fetchCategoryData出问题了!${err}`);
        });
      },
      jumpToDetail(cate) {
        this.$router.push(`/category/${cate}`);
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../css/global';
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
