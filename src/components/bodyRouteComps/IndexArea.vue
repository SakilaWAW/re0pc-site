<template>
  <div class="index-area">
    <!-- <div class="about-area markdown-body" v-html="markdownContent"></div>-->
    <div class="index-list">
      <article-intro v-for="(article,idx) in articleList.articles" :article="article" :key="idx"></article-intro>
    </div>
    <el-pagination
      layout="prev, pager, next"
      :total="articleList.total_page*10">
    </el-pagination>
  </div>
</template>

<script>
  import marked from 'marked';
  import axios from 'axios';
  import Vue from 'vue';
  import 'github-markdown-css';
  import Highlight from '../../assets/js/highlightPlugin';
  import ArticleIntro from '../commons/ArticleIntro';

  Vue.use(Highlight);

  export default {
    name: 'index-area',
    components: {
      ArticleIntro,
    },
    data() {
      return {
        articleList: [],
      };
    },
    created() {
      this.toPage(1);
    },
    computed: {
      markdownContent() {
        return marked(this.markdownSrc);
      },
    },
    methods: {
      toPage(page) {
        axios.get(`http://127.0.0.1:3000/page/${page}`)
          .then((res)=>{
            this.articleList = res.data;
          }).catch(err=>{
          console.log(err);
        });
      },
    }
  };
</script>

<style lang="scss" scoped>

</style>
