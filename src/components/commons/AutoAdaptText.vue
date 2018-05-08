<template>
  <span class="auto-adapt-text"
        :style="{fontSize: `${textSize}px`, opacity: textOpacity}"
        @click="click">{{ text }}</span>
</template>

<script>
  export default {
    name: 'auto-adapt-text',
    props: [
      'text',
      'size',
    ],
    computed: {
      textSize() {
        return 5*Math.log(this.size)+15;
      },
      textOpacity() {
        return -(7/10)/this.size+1;
      },
    },
    methods: {
      click() {
        this.$emit('clickEvent');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .auto-adapt-text {
    text-decoration: underline;
    margin: 12px;
    display: inline-block;
  }
  .auto-adapt-text:hover {
    cursor: pointer;
  }
</style>
