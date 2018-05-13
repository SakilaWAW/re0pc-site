// 过渡动画所需的mixin
let headTransitionMethods = {
  methods: {
    beforeSlideDown(el) {
      el.style.cssText = "top: -30px;opacity: 0;position: relative;";
    },
    slideDownDelay500msAnimate(el, done) {
      this.$Velocity(el,{opacity: 1, top: 0} ,{delay: 500, duration: 500,complete: done});
    },
    slideDownDelay1000msAnimate(el, done) {
      this.$Velocity(el,{opacity: 1, top: 0} ,{delay: 1000, duration: 500,complete: done});
    },
    beforeExtend(el) {
      el.style.cssText = "width: 0";
    },
    extend(el, done) {
      this.$Velocity(el,{width: '80%'} ,{duration: 500,complete: done});
    },
  },
};

let bodyTransitionMethods = {
  methods: {
    beforeSlideDown(el) {
      el.style.cssText = "top: -30px;opacity: 0;position: relative;";
    },
    slideDownDelay1500msAnimate(el, done) {
      this.$Velocity(el,{opacity: 1, top: 0} ,{delay: 1500, duration: 500,complete: done});
    },
  },
};

let archiveTransitionMethods = {
  methods: {
    beforeSlideRight(el) {
      el.style.cssText = "left: -30px;opacity: 0;position: relative;";
    },
    slideRight(el, done) {
      this.$Velocity(el, {opacity: 1, left: 0} ,{duration: 500, complete: done});
    },
  },
};

export {
  headTransitionMethods,
  bodyTransitionMethods,
  archiveTransitionMethods,
};
