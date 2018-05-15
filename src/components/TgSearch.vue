<template>
  <div class="tg-search">
    <i class="iconfont search-placeholder">&#xe623;</i>
    <input class="s-input"
           type="text"
           :autocomplete="autocomplete"
           :autofocus="autofocus">
  </div>
</template>

<script>
  export default {
    name: 'tg-search',
    props: [
      'autocomplete',
      'autofocus',
    ],
  };
</script>

<style lang="scss" scoped>
  @import '../css/global';

  .tg-search {
    border-bottom: 1px solid $light-text-grey;

  }
  .s-input {
    padding: 3px;
    border: none;
    outline: none;
    background: $light-grey;
    font-size: 12px;
    color: $light-text-grey;
  }
  .search-placeholder {
    font-size: 12px;
  }
</style>
