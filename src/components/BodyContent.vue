<template>
  <div class="body-content">
    <div class="content-area">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'body-content',
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
  }

  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
  }
</style>
