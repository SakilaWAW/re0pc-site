<template>
  <div class="article-item" :class="{'border-grey':isHover}">
    <span class="ysa-time">{{ article.createdAt }}</span>
    <span class="ysa-title"
          @mouseenter="isHover=true"
          @mouseleave="isHover=false" :class="{'cursor-pointer': isHover}"
          @click="jumpToArticle()">{{ article.title }}</span>
  </div>
</template>

<script>
  export default {
    name: 'article-item',
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
  .ysa-time {
    margin-right: 10px;
    font-size: 14px;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .article-item {
    margin-bottom: 10px;
    font-size: 16px;
    border-bottom: 1px dashed darkgrey;
    padding: 20px 0 20px 20px;
    position: relative;
  }
  .article-item::after {
    content: " ";
    position: absolute;
    border: 3px solid darkgrey;
    border-radius: 3px;
    left: 0;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  .border-grey {
    border-bottom-color: grey!important;
  }
  .border-grey::after {
    border-color: grey;
  }
</style>
