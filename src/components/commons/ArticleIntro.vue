<template>
  <div class="article-intro">
    <div class="ai-title">{{ article.title }}</div>
    <div class="ai-sub-info">
      <span class="right-sap-line">发表于{{ article.createdAt }}</span>
      <span class="ais-type right-sap-line">分类于<a href="#" class="ais-type-text">{{ article.type }}</a></span>
      <span>阅读次数 {{ article.count }}</span>
    </div>
    <div class="brief-info markdown-body" v-html="markdownBrief"></div>
    <a class="read-all-link" href="#">阅读全文<i class="el-icon-d-arrow-right"></i></a>
  </div>
</template>

<script>
  import marked from 'marked';

  export default {
    name: 'article-intro',
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
  };
</script>

<style lang="scss" scoped>
  .article-intro {
    margin: 40px 0;
  }
  .ai-title {
    font-size: 26px;
  }
  .ai-sub-info {
    font-size: 12px;
    color: darkgrey;
    margin: 20px 0;
    padding-left: 2px;
  }
  .ais-type-text {
    text-decoration: underline;
    font-weight: bold;
    color: darkgrey;
  }
  .ais-type-text:hover {
    color: grey;
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
  .ai-sub-info span {
    position: relative;
    margin-right: 10px;
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
    border-bottom-color: grey;
  }
</style>
