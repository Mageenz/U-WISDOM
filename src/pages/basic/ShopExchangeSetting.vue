<template lang="pug">
  .page
    el-collapse(v-model='names')
      el-collapse-item(title='商家用优惠金兑换现金时的比例' name='1')
        el-form
          el-form-item(label='今日兑换比例为（%）：')
            el-input-number(placeholder='比例' :min='0' :max='100' v-model='form.ratio' clearable).width300px
          el-form-item
            el-button(type='primary' @click='submit') 提交
      //- el-collapse-item(title='预先设置接下来一周兑换比例（当天0点生效）' name='2')
      //-   .page-operatebar
      //-     el-button(type='primary' icon='el-icon-plus') 新增
      //-   el-table(border stripe)
      //-     el-table-column(type='index')
      //-     el-table-column(label='日期')
      //-     el-table-column(label='兑换比例')
      //-     el-table-column(label='操作')
</template>

<script>
export default {
  data() {
    return {
      form: {
        ratio: ''
      },
      names: ['1']
    }
  },
  methods: {
    submit() {
      API.basic.submitCouponsSettings({
        ...this.form,
        ratio: this.form.ratio * 100
      }).then(res => {
        if(res.data.code === '0') {
          this.$message.success('操作成功')
        }
      })
    }
  },
  mounted() {
    API.basic.couponsSettings().then(res => {
      this.form = res.data.data

      this.form.ratio = res.data.data.ratio / 100
    })
  }
}
</script>

<style lang="less" scoped>
.width300px {
  width: 300px;
}
</style>
