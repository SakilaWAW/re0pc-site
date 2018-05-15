<template>
  <div class="archive-area">
    <div class="ara-summary">Good！你已经完成了{{ archive.total }}篇博客,继续努力！</div>
    <div class="year-summary" v-for="(yearSummary,idx) in archive.articles" :key="idx">
      <div class="ys-year">
        <span class="prefix-point"></span>
        <transition appear
                    @before-appear="beforeSlideRight"
                    @appear="slideRight">
          <span>{{ yearSummary.year }}</span>
        </transition>
      </div>
      <transition-group appear
                        @before-appear="beforeSlideDown"
                        @appear="slideDownDelay500msStepAnimate">
        <div v-for="(article,idx) in yearSummary.articles" :key="idx"
             :data-index="idx">
          <article-item :article="article"></article-item>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
  import ArticleItem from '../commons/ArticleItem';
  import { archiveTransitionMethods } from '../../mixins/index';

  export default {
    name: 'archive-area',
    mixins: [
      archiveTransitionMethods,
    ],
    components: {
      ArticleItem,
    },
    created() {
      if(this.archive === '') this.fetchArchive();
    },
    data() {
      return {
        archive: '',
      };
    },
    methods: {
      fetchArchive() {
        this.$axios.get('http://127.0.0.1:3000/stats/article')
          .then(res=>{
            this.archive = res.data;
          }).catch(err=>{
            console.log(`fetchArchive时出现错误${err}`);
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../css/global';
  .archive-area {
    padding-bottom: 5px;
    position: relative;
  }
  .archive-area::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    height: 100%;
    width: 3px;
    background: $light-grey;
    transform: translateX(-50%);
  }
  .ara-summary, .ys-year {
    padding-left: 20px;
  }
  .ara-summary {
    font-size: 16px;
    position: relative;
  }
  .ara-summary::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-50%);
    border: 6px solid darkgrey;
    border-radius: 6px;
  }
  .ys-year {
    font-size: 22px;
    margin: 50px 0 40px 0;
    font-weight: bold;
    position: relative;
  }
  .prefix-point::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateX(-50%) translateY(-50%);
    border: 4px solid darkgrey;
    border-radius: 4px;
  }
</style>
