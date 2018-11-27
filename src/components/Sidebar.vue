<template lang="pug">
  .sidebar
    .menus
      router-link.menu(:to='item.path' v-for='item in routes')
        span.el-icon-document.icon
        span {{item.meta.name}}
</template>

<script>
import {routes} from '../router/router'

export default {
  data() {
    return {
      // routes: routes.sidebar
    }
  },
  computed: {
    routes() {
      const currentType = this.$route.meta.type

      return routes.filter(item => {
        return item.meta.type === currentType && !item.meta.isTopbar
      })
    }
  }
}
</script>
