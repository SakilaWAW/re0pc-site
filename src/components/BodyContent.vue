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
    padding: 50px 5px;
  }
</style>
