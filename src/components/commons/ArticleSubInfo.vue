<template>
  <div class="article-sub-info">
    <span class="right-sap-line">发表于{{ article.createdAt }}</span>
    <span class="ais-type right-sap-line">
      分类于<span @click="jumpToCategory(article.type)" class="ais-type-text">{{ article.type }}</span>
    </span>
    <span>阅读次数 {{ article.count }}</span>
  </div>
</template>

<script>
  export default {
    name: 'article-sub-info',
    props: [
      'article',
    ],
    methods: {
      jumpToCategory(cate) {
        this.$router.push(`/category/${cate}`);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .article-sub-info {
    font-size: 12px;
    color: darkgrey;
    margin: 20px 0;
    padding-left: 2px;
  }
  .article-sub-info span {
    position: relative;
    margin-right: 10px;
  }
  .right-sap-line::after {
    top: 1px;
    right: -7px;
    z-index: 1;
    position: absolute;
    content: "";
    height: 12px;
    width: 1px;
    background: grey;
  }
  .ais-type-text {
    text-decoration: underline;
    font-weight: bold;
    color: darkgrey;
  }
  .ais-type-text:hover {
    color: grey;
    cursor: pointer;
  }
</style>
