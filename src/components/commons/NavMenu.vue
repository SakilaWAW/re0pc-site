<template>
  <li class="nav-menu" @mouseenter="isHover=true" @mouseleave="isHover=false" @click="click"
      :style="{ color: isHover?txtActiveColor:txtColor,
          'font-size': `${textSize}px`,
           background: isActive?activeBgColor:(isHover?hoverBgColor:bgColor),
               cursor: 'pointer',
      'border-bottom': isActive?`${uderlineColor} 1px solid`:'none'}">
    {{ title }}
  </li>
</template>

<script>
  export default {
    name: 'nav-menu',
    props: [
      'title',
      'text-color',
      'text-active-color',
      'background-color',
      'active-background-color',
      'hover-background-color',
      'font-size',
      'underline-color',
      'active',
      'index',
    ],
    data() {
      return {
        isHover: false,
      }
    },
    methods: {
      click() {
        this.$emit('select', this.index);
      }
    },
    computed: {
      isActive() {
        return this.active === 'active';
      },
      txtColor() {
        return this.textColor || '#595959';
      },
      txtActiveColor() {
        return this.textActiveColor || 'black';
      },
      bgColor() {
        return this.backgroundColor || 'white';
      },
      hoverBgColor() {
        return this.hoverBackgroundColor || this.bgColor;
      },
      activeBgColor() {
        return this.activeBackgroundColor || this.bgColor;
      },
      textSize() {
        return this.fontSize || 14;
      },
      uderlineColor() {
        return this.underlineColor || 'black';
      },
    },
  };
</script>

<style lang="scss" scoped>
  .nav-menu {
    list-style-type: none;
    padding: 5px 0;
    margin: 5px 10px;
    display: inline-block;
  }
</style>
