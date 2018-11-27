<template lang="pug">
  .main-layout.flex
    .main-head
      .topbar.flex
        span.logo U+智慧管理后台
        .menus.flex-1.flex
          router-link.menu(v-for='(item, index) in topbar' :key='index' :to='item.path') {{item.meta.name}}
    .main-body.flex.flex-1
      router-view(name='sidebar')
      .content.flex-1
        .container
          router-view(name='content')
    .main-foot
</template>

<script>
import {topbar} from '../router/router'

export default {
  data() {
    return {
      topbar
    }
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
    height: 50px;
    align-items: center;
    .logo {
      text-align: center;
      width: 150px;
      font-weight: bold;
    }
    
    .menus {
      height: 50px;

      .menu {
        display: block;
        height: 50px;
        line-height: 50px;
        /* padding: 0 15px; */
        width: 120px;
        text-align: center;
      }
      .menu:hover {
        background-color: #131313;
        color: #4ba4f5;
      }
    }
  }

  .sidebar {
    width: 150px;
    height: 100%;
    background-color: #252a2f;
    // border-top: 1px solid hsla(0,0%,100%,.1);

    .menu {
      display: block;
      line-height: 38px;
      text-align: left;
      padding-left: 20px;
      font-size: 12px;
    }

    .menu:hover {
      background-color: #131313;
      color: #4ba4f5;
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
    transition: .3s;
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


