<template lang="pug">
  .login
    el-dialog(:visible.sync='isDialogShow' title='登录' width='30%' :modal='false' :close-on-click-modal='false' :show-close='false')
      el-form(label-width='80px')
        el-form-item(label='用户名：')
          el-input(placeholder='请输入用户名')
        el-form-item(label='密码：')
          el-input(placeholder='请输入密码' type='password')
        el-form-item
          el-button(type='primary' @click='login') 登录
</template>

<script>
export default {
  data() {
    return {
      isDialogShow: true
    }
  },
  methods: {
    login() {
      this.$router.push({
        name: 'main'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  background-color: #252a2f;
  height: 100vh;
}
</style>


