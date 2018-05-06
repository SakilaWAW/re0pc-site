<template>
  <div class="classification-area">
    <div class="ca-title">目前共计{{ categoryData.length }}个分类</div>
    <div class="category-bar">
      <div v-for="type in categoryData" class="type-text">
        <span class="cb-name">{{ type.name }}</span>
        <span class="cb-count">({{ type.total }})</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'classification-area',
    data() {
      return {
        categoryData: [
          { total: 31, name: '分类1'},
          { total: 29, name: '分类奇'},
          { total: 20, name: '分类怪'},
          { total: 10, name: '分类贪'},
          { total: 13, name: '分类嗔'},
          { total: 2, name: '分类痴'},
          { total: 4, name: '分类恨'},
          { total: 31, name: '分类爱别离'},
          { total: 1, name: '分类求不得'},
          { total: 2, name: '分类欲'},
          { total: 30, name: '分类Mi'},
          { total: 40, name: '分类'},
          { total: 19, name: '分类奇'},
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../assets/css/global';
  .ca-title {
    text-align: center;
    font-size: 17px;
  }
  .type-text {
    display: inline-block;
    margin: 12px;
    font-size: 15px;
  }
  .category-bar {
    margin-top: 25px;
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
