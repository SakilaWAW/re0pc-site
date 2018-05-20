<template>
  <li class="nav-menu-item" @mouseenter="isHover=true" @mouseleave="isHover=false" @click="click"
      :style="{ color: isActive?txtActiveColor:isHover?txtHoverColor:txtColor,
          'font-size': `${textSize}px`,
           background: isActive?activeBgColor:isHover?hoverBgColor:bgColor,
               cursor: 'pointer',
      'border-bottom': isActive?`${uderlineColor} 1px solid`:'none'}">
    {{ title }}
  </li>
</template>

<script>
  export default {
    name: 'nav-menu-item',
    props: [
      'title',
      'text-color',
      'text-active-color',
      'text-hover-color',
      'background-color',
      'active-background-color',
      'hover-background-color',
      'font-size',
      'underline-color',
      'isActive',
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
      txtColor() {
        return this.textColor || '#595959';
      },
      txtActiveColor() {
        return this.textActiveColor || this.txtColor;
      },
      txtHoverColor() {
        return this.textHoverColor || this.txtColor;
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
  .nav-menu-item {
    list-style-type: none;
    padding: 5px 0;
    margin: 5px 10px;
    display: inline-block;
  }
</style>
