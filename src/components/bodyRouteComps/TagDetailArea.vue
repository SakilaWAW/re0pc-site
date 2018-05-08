<template>
  <div class="tag-detail-area">
    <div class="tda-title">
      <h2 class="tag-title">{{ tag }}</h2>
      <small class="tag-postfix">标签</small>
    </div>
    <article-item v-for="(article,idx) in articleList" :key=idx
                  :article="article"></article-item>
    <div class="nothing-to-show" v-if="isEmpty">本标签下暂时没有文章</div>
  </div>
</template>

<script>
  import ArticleItem from '../commons/ArticleItem';

  export default {
    name: 'tag-detail-area',
    components: {
      ArticleItem,
    },
    created() {
      this.fetchTagData();
    },
    data() {
      return {
        articleList: '',
        tag: this.$route.params.tag,
      };
    },
    methods: {
      fetchTagData() {
        this.$axios.get(`http://127.0.0.1:3000/tag/${this.tag}`)
          .then(res=>{
            this.articleList = res.data;
          }).catch(err=>{
          console.log(`fetchTagData出问题了!${err}`);
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
  .tag-title {
    display: inline-block;
    position: relative;
    padding: 20px 0 20px 20px;
  }
  .tag-title::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    border: 5px solid darkgrey;
    border-radius: 5px;
  }
  .tag-postfix {
    font-weight: bold;
    color: darkgrey;
  }
  .nothing-to-show {
    font-weight: bold;
    font-size: 20px;
    color: lightgrey;
  }
</style>
