<template>
  <div class="article-intro">
    <div class="ai-title">{{ article.title }}</div>
    <article-sub-info :article="article"></article-sub-info>
    <div class="brief-info markdown-body" v-html="markdownBrief"></div>
    <a class="read-all-link" @click="jumpToArticle()">阅读全文<i class="el-icon-d-arrow-right"></i></a>
  </div>
</template>

<script>
  import marked from 'marked';
  import ArticleSubInfo from '../commons/ArticleSubInfo';

  export default {
    name: 'article-intro',
    components: {
      ArticleSubInfo,
    },
    props: [
      'article',
    ],
    computed: {
      markdownBrief() {
        let content = '';
        if(this.article.content.length > 500) content = `${this.article.content.slice(0, 500)}...`;
        else content = this.article.content;
        return marked(content);
      },
    },
    methods: {
      jumpToArticle() {
        this.$store.commit('setArticle', {article: this.article});
        this.$router.push(`/article/${this.article.id}`);
      },
    }
  };
</script>

<style lang="scss" scoped>
  .article-intro {
    margin-bottom: 40px;
  }
  .ai-title {
    font-size: 26px;
  }

  .brief-info {
    margin: 20px 0;
  }
  .read-all-link {
    text-decoration: none;
    display: inline-block;
    font-size: 13px;
    color: darkgrey;
    padding-bottom: 3px;
    border-bottom: 1px solid darkgrey;
  }
  .read-all-link:hover {
    color: grey;
    cursor: pointer;
    border-bottom-color: grey;
  }
</style>
