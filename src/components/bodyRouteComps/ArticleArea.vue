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
  import CatalogPage from '../commons/CatalogPage';

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
      this.$store.commit('unshiftSideBarPage', { page: { title: '文章目录', index: 'wzml', pageComponent: CatalogPage }});
    },
    beforeDestroy() {
      this.$store.commit('setSideMenuTo', {isExpand: false});
      this.$store.commit('shiftSideBarPage');
    },
    data() {
      return {
        article: this.$store.state.cur_article,
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
      addCataStep(cata) {
        let s = 0;
        for(let i = 0; i < cata.length; i++ ) {
          let catalog = cata[i];
          if ( i > 0) {
            if(cata[i].level > cata[i-1].level) s += 1;
            else if(cata[i].level < cata[i-1].level) s -= 1;
          }
          catalog.step = s;
        }
        return cata;
      }
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
          let catalog = [];
          let hljs = require('highlight.js');
          let diyRender = new marked.Renderer();
          diyRender.heading = (text, level) => {
            catalog.push(new CataNode(text, level));
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
          this.$store.commit('setCatalog', { catalog: this.addCataStep(catalog) });
          this.$store.commit('setSideMenuTo', {isExpand: true});
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
