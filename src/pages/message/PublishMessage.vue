<template lang="pug">
  .page
    .page-content
      h2 发布消息：
      el-form(label-width='100px')
        el-form-item(label='发布对象：')
          el-checkbox(border) 所有用户
          el-checkbox(border) 会员
          el-checkbox(border) VIP
          el-checkbox(border) 区县代理
          el-checkbox(border) 市级代理
          el-checkbox(border) 商家
        el-form-item(label='发布区域：')
        el-form-item(label='发布标题：' style='width:600px')
          el-input
        el-form-item(label='发布内容：' style='width:600px')
          el-input(type='textarea')
        el-form-item(label='发布时间：')
          el-radio 立即发布
          el-radio 定时发布
        el-form-item
          el-button(type='primary') 提交
</template>

<script>
export default {
  
}
</script>

