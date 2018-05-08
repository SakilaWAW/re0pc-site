<template>
  <div class="category-detail-area">
    <div class="cda-title">
      <h2 class="cate-title">{{ category }}</h2>
      <small class="cate-postfix">类别</small>
    </div>
    <article-item v-for="(article,idx) in articleList" :key=idx
                  :article="article"></article-item>
    <div class="nothing-to-show" v-if="isEmpty">本分类暂时没有文章</div>
  </div>
</template>

<script>
  import ArticleItem from '../commons/ArticleItem';

  export default {
    name: 'category-detail-area',
    components: {
      ArticleItem,
    },
    created() {
      this.fetchCategoryData();
    },
    data() {
      return {
        articleList: '',
        category: this.$route.params.category,
      };
    },
    methods: {
      fetchCategoryData() {
        this.$axios.get(`http://127.0.0.1:3000/type/${this.category}`)
          .then(res=>{
            this.articleList = res.data;
          }).catch(err=>{
            console.log(`fetchCategoryData出问题了!${err}`);
        });
      },
    },
    computed: {
      isEmpty() {
        console.log(`this.articleList===>${this.articleList}`);
        return this.articleList.length === 0;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .cate-title {
    display: inline-block;
    position: relative;
    padding: 20px 0 20px 20px;
  }
  .cate-title::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    border: 5px solid darkgrey;
    border-radius: 5px;
  }
  .cate-postfix {
    font-weight: bold;
    color: darkgrey;
  }
  .nothing-to-show {
    font-weight: bold;
    font-size: 20px;
    color: lightgrey;
  }
</style>
