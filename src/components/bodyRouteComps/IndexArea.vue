<template>
  <div class="index-area">
    <!-- <div class="about-area markdown-body" v-html="markdownContent"></div>-->
    <div class="index-list">
      <div>{{ articleList }}</div>
      <!--<div class="list-item" v-for="article in articleList.articles">-->
        <!--{{ article.id }}-->
      <!--</div>-->
      <el-pagination
        layout="prev, pager, next"
        :total="4">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import marked from 'marked';
  import axios from 'axios';
  import Vue from 'vue';
  import 'github-markdown-css';
  import Highlight from '../../assets/js/highlightPlugin';

  Vue.use(Highlight);

  export default {
    name: 'index-area',
    data() {
      return {
        articleList: [],
      };
    },
    created() {
      this.getArticleList();
    },
    computed: {
      markdownContent() {
        return marked(this.markdownSrc);
      },
    },
    methods: {
      getArticleList() {
        axios.get('http://127.0.0.1:3000/page/1')
          .then((res)=>{
            this.articleList = res.data;
          }).catch(err=>{
          console.log(err);
        });
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
