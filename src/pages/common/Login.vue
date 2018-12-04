<template lang="pug">
  .login
    el-dialog(:visible.sync='isDialogShow' title='登录' width='30%' :modal='false' :close-on-click-modal='false' :show-close='false')
      el-form(label-width='80px')
        el-form-item(label='用户名：')
          el-input(placeholder='请输入用户名' v-model='form.loginName' autocomplete='off')
        el-form-item(label='密码：')
          el-input(placeholder='请输入密码' type='password' v-model='form.password' autocomplete='off')
        el-form-item
          el-button(type='primary' @click='login') 登录
</template>

<script>
const md5 = require('js-md5');

export default {
  data() {
    return {
      isDialogShow: true,
      form: {
        clientType: 'pc',
        loginName: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      API.common.login({...this.form, password: md5(this.form.password)}).then(res => {
        if(res.data.code === '0') {
          this.$router.push({
            name: 'main'
          })
        }
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


