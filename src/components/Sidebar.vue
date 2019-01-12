<template lang="pug">
  .sidebar
    .menus
      transition-group(tag='div' @before-enter='beforeEnter' @enter='enter' @leave='leave')
        router-link.menu(:to='item.path' v-for='(item, index) in routes' :key='item.meta.name' :data-index='index')
          span.el-icon-document.icon
          span {{item.name}}
</template>

<script>
import Velocity from 'velocity-animate'

export default {
  data() {
    return {
      // routes: routes.sidebar
    }
  },
  props: ['menus'],
  computed: {
    routes() {
      const currentType = this.$route.meta.type
      
      return this.menus.filter(item => {
        return item.meta.type === currentType && !item.meta.isParent && item.name !== '微信收款记录' && item.name !== '支付宝收款记录'
      })
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.left = '-10px'
      el.style.opacity = 0
    },
    enter(el, done) {
        const delay = el.dataset.index * 60

        setTimeout(function () {
          Velocity(
            el,
            { opacity: 1, left: 0 },
            { complete: done }
          )
        }, delay)
    },
    leave(el, done) {
      done()
    }
  }
}
</script>

<style lang="less" scoped>
.sidebar {
  width: 150px;
  height: 100%;
  background-color: #252a2f;
  flex-shrink: 0;
  // border-top: 1px solid hsla(0,0%,100%,.1);

  .menu {
    display: block;
    line-height: 38px;
    text-align: left;
    padding-left: 20px;
    font-size: 12px;
    position: relative;
  }

  .menu:hover {
    background-color: #131313;
    color: #4ba4f5;
  }
}
  
.menu-enter {
  opacity: 0;
  transform: translate3d(-10px, 0, 0);
}
.menu-enter-active {
  transition: 1s;
}
</style>

