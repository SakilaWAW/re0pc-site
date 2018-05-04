<template>
  <div class="article-area">
    <h2 class="aa-title">{{ article.title }}</h2>
    <article-sub-info :article="article" class="aa-sub-info"></article-sub-info>
    <div class="aa-content markdown-body" v-html="markedTxt"></div>
  </div>
</template>

<script>
  import ArticleSubInfo from '../commons/ArticleSubInfo';
  import marked from 'marked';
  import axios from 'axios';

  export default {
    name: 'article-area',
    components: {
      ArticleSubInfo,
    },
    created() {
      if(this.$store.state.cur_article === "") this.fetchData();
      this.updateCount();
    },
    data() {
      return {
        article: this.$store.state.cur_article,
      };
    },
    methods: {
      fetchData() {
        axios.get(`http://127.0.0.1:3000/article/${this.articleId}`)
          .then(res=>{
            this.article = res.data;
            this.$store.commit('setArticle', {article: res.data});
          }).catch(err=>{
          console.log(err);
        });
      },
      updateCount() {
        axios.get(`http://127.0.0.1:3000/read/${this.articleId}`)
          .then(res=>{
            console.log(`返回code为${res.status}`);
          }).catch(err=>{
            console.log(err);
        });
      },
    },
    computed: {
      markedTxt() {
        if(this.article !== "") return marked(this.article.content);
      },
      articleId() {
        return this.$route.params.articleId;
      },
    }
  };
</script>

<style lang="scss" scoped>
  .aa-title ,.aa-sub-info {
    text-align: center;
  }
  .aa-content {
    margin-top: 40px;
  }
</style>
