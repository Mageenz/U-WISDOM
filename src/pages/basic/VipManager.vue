<template lang="pug">
  .page
    .page-searchbar
      el-row(:gutter='15')
        el-col(:span='6')
          el-input(placeholder='请输入关键词' v-model='form.keyword')
        el-col(:span='6')
          el-button(icon='el-icon-search' type='primary') 搜索
    .page-content
      .page-table
        el-table(border stripe :data='tableList')
          el-table-column(label='序号')
          el-table-column(label='ID' prop='id')
          el-table-column(label='微信openId')
          el-table-column(label='支付宝')
          el-table-column(label='手机号')
          el-table-column(label='昵称')
          el-table-column(label='实名')
          el-table-column(label='性别')
          el-table-column(label='推荐人ID')
          el-table-column(label='更多' width='280')
            template(slot-scope='scope')
              el-button(type='text') 推荐关系
              el-button(type='text' @click='dialog.isDialogShow2 = true') 支付记录
              el-button(type='text' @click='dialog.isDialogShow3 = true') 积分明细
              el-button(type='text' @click='dialog.isDialogShow4 = true') 优惠金明细
          el-table-column(label='操作' width='60')
            template(slot-scope='scope')
              el-button(type='text') 编辑
    .p-dialogs
      .p-dialog1
        el-dialog(:visible.sync='dialog.isDialogShow1' title='推荐关系')
      .p-dialog2
        el-dialog(:visible.sync='dialog.isDialogShow2' title='支付记录')
          el-table(border stripe)
            el-table-column(type='index')
            el-table-column(label='交易时间')
            el-table-column(label='数据来源')
            el-table-column(label='支付金额')
            el-table-column(label='商品')
            el-table-column(label='累计支付')
      .p-dialog3
        el-dialog(:visible.sync='dialog.isDialogShow3' title='积分明细')
          el-table(border stripe)
            el-table-column(type='index')
            el-table-column(label='发生时间')
            el-table-column(label='积分来源')
            el-table-column(label='发生事由')
            el-table-column(label='数额')
            el-table-column(label='实时余额')
      .p-dialog4
        el-dialog(:visible.sync='dialog.isDialogShow4' title='优惠金明细')
          el-table(border stripe)
            el-table-column(type='index')
            el-table-column(label='发生时间')
            el-table-column(label='优惠金来源')
            el-table-column(label='行为')
            el-table-column(label='对象')
            el-table-column(label='数据')
            el-table-column(label='实时余额')
</template>

<script>
export default {
  data() {
    return {
      form: {
        keyword: '',
      },
      tableList: [{id: 1}],
      dialog: {
        isDialogShow1: false,
        isDialogShow2: false,
        isDialogShow3: false,
        isDialogShow4: false
      }
    }
  }
}
</script>

