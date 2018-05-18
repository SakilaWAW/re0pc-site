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
  import 'highlight.js/styles/github-gist.css';

  export default {
    name: 'article-area',
    components: {
      ArticleSubInfo,
    },
    created() {
      if(this.$store.state.cur_article === "" || this.$store.state.cur_article.id !== this.articleId) {
        this.fetchData();
      }
      this.updateCount();
    },
    data() {
      return {
        article: this.$store.state.cur_article,
        catalog: [],
      };
    },
    methods: {
      fetchData() {
        this.$axios.get(`http://127.0.0.1:3000/article/${this.articleId}`)
          .then(res=>{
            this.article = res.data;
            this.$store.commit('setArticle', {article: res.data});
          }).catch(err=>{
          console.log(err);
        });
      },
      updateCount() {
        this.$axios.get(`http://127.0.0.1:3000/read/${this.articleId}`)
          .then(res=>{

          }).catch(err=>{
            console.log(err);
        });
      },
    },
    computed: {
      markedTxt() {
        if(this.article !== "") {
          class CataNode{
            constructor(text, level) {
              this.text = text;
              this.level = level;
            }
            get lv() {
              return this.level;
            }
            get content() {
              return this.text;
            }
          }
          let hljs = require('highlight.js');
          let diyRender = new marked.Renderer();
          diyRender.heading = (text, level) => {
            this.catalog.push(new CataNode(text, level));
            return `<h${level} id="${text}">${text}</h${level}>`;
          };
          const res = marked(
            this.article.content,
            {
              renderer: diyRender,
              gfm: true,
              tables: true,
              breaks: false,
              pedantic: false,
              sanitize: false,
              smartLists: true,
              smartypants: false,
              highlight: function (code, lang) {
                if (lang && hljs.getLanguage(lang)) {
                  return hljs.highlight(lang, code, true).value;
                } else {
                  return hljs.highlightAuto(code).value;
                }
              }
            },
          );
          this.$store.state.side_menu_expand = true;
          return res;
        }
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
