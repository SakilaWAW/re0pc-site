<template>
  <li class="nav-menu" @mouseenter="isHover=true" @mouseleave="isHover=false"
      :style="{ color: isHover?txtActiveColor:txtColor,
          'font-size': `${textSize}px`,
           background: isActive?activeBgColor:(isHover?hoverBgColor:bgColor),
               cursor: 'pointer'}"
      :class="{}">
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
      'background-color',//
      'active-background-color',//
      'hover-background-color',//
      'font-size',//
      'underline-color',
      'active',//
    ],
    data() {
      return {
        isHover: false,
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
        return this.textActiveColor || this.txtColor;
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
    },
  };
</script>

<style lang="scss" scoped>
</style>
