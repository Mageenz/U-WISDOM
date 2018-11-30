<template lang="pug">
  .main-layout.flex
    .main-head
      .topbar.flex
        span.logo U+智慧管理后台
        .menus.flex-1.flex
          router-link.menu(v-for='(item, index) in routes' :key='index' :to='item.path') {{item.meta.name}}
        .mr15
          el-button(type='danger' @click='loginOut') 退出
    .main-body.flex.flex-1
      sidebar
      .content.flex-1
        .container
          router-view
    .main-foot
</template>

<script>
import {routes} from '../../router/router'
import Sidebar from '../../components/Sidebar.vue'

export default {
  data() {
    return {
      
    }
  },
  computed: {
    routes() {
      return routes.filter(item => item.meta.isParent)
    }
  },
  methods: {
    loginOut() {
      this.$router.push({
        name: 'login'
      })
    }
  },
  components: {
    Sidebar
  }
}
</script>

<style lang="less">
.main-layout {
  flex-direction: column;
  height: 100vh;

  .topbar {
    background-color: #252a2f;
    color: #fff;
    align-items: center;
    .logo {
      text-align: center;
      width: 150px;
      font-weight: bold;
      font-size: 14px;
    }
    
    .menus {
      .menu {
        display: block;
        height: 40px;
        line-height: 40px;
        /* padding: 0 15px; */
        width: 120px;
        text-align: center;
        transition: .2s;
      }
      .menu:hover {
        background-color: #131313;
        color: #4ba4f5;
      }
    }
  }

  .content {
    background-color: #f1f1f1;
    padding: 15px 15px 0 15px;

    .container {
      background-color: #fff;
      height: 100%;
      overflow: auto;
      padding: 15px;
    }
  }
  .menu {
    color: #fff;
    // transition: .3s;
  }
  .icon {
    margin-right: 10px;
  }
  .router-link-active {
    background-color: #131313;
    color: #4ba4f5;
  }
}

</style>


