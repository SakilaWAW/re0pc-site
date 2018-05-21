<template>
  <div class="body-content">
    <div class="content-area">
      <transition appear
                  @before-appear="beforeSlideDown"
                  @appear="slideDownDelay1500msAnimate">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import { bodyTransitionMethods} from '../mixins/index';
  export default {
    name: 'body-content',
    mixins: [
      bodyTransitionMethods,
    ],
  };
</script>

<style lang="scss" scoped>
  @media screen and (min-width: 900px) {
    .content-area {
      width: 900px;
    }
  }
  @media screen and (max-width: 899px) {
    .content-area {
      width: 100%;
    }
  }
  .content-area {
    margin: 0 auto;
    padding: 80px 5px;
    box-sizing: border-box;
  }
</style>
