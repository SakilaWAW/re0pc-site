<template>
  <div class="archive-item" :class="{'border-grey':isHover}">
    <i class="iconfont article-point time-point" :class="{'point-grey': isHover}">&#xe608;</i>
    <span class="ysa-time">{{ article.createdAt }}</span>
    <span class="ysa-title"
          @mouseenter="isHover=true"
          @mouseleave="isHover=false" :class="{'cursor-pointer': isHover}"
          @click="jumpToArticle()">{{ article.title }}</span>
  </div>
</template>

<script>
  export default {
    name: 'archive-item',
    props: [
      'article',
    ],
    data() {
      return {
        isHover: false,
      };
    },
    methods: {
      jumpToArticle() {
        this.$router.push(`/article/${this.article.id}`)
      }
    },
  };
</script>

<style lang="scss" scoped>
  .article-point {
    font-size: 16px;
    left: -11px;
    top: 25px;
  }
  .time-point {
    position: absolute;
    color: darkgrey;
  }
  .ysa-time {
    margin-right: 10px;
    font-size: 14px;
  }
  .border-grey {
    border-bottom-color: grey!important;
  }
  .point-grey {
    color: grey;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .archive-item {
    margin-bottom: 10px;
    font-size: 16px;
    border-bottom: 1px dashed darkgrey;
    padding: 20px 0 20px 20px;
    position: relative;
  }
</style>
