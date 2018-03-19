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
  @import '../assets/css/global';

  .tg-search {
    border-bottom: 1px solid $light-text-grey;

  }

  .s-input {
    padding: 3px;
    border: none;
    outline: none;
    background: $light-grey;
    font-size: 16px;
    color: $light-text-grey;
  }

  @font-face {
    font-family: 'iconfont';  /* project id 597267 */
    src: url('//at.alicdn.com/t/font_597267_wic64zp1ystw3ik9.eot');
    src: url('//at.alicdn.com/t/font_597267_wic64zp1ystw3ik9.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_597267_wic64zp1ystw3ik9.woff') format('woff'),
    url('//at.alicdn.com/t/font_597267_wic64zp1ystw3ik9.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_597267_wic64zp1ystw3ik9.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont";
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  .search-placeholder {
    font-size: 16px;
  }
</style>
